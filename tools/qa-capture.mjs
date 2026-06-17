// Minimal CDP screenshot tool: navigate, scroll to an exact offset, wait, capture.
// Usage: node tools/qa-capture.mjs <url> <outfile> [width] [height] [scrollY] [settleMs]
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const [url, outfile, w = '1440', h = '900', scrollY = '0', settleMs = '1200'] = process.argv.slice(2);
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const chrome = spawn(CHROME, [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--remote-debugging-port=0',
  '--no-first-run',
  'about:blank',
]);

const port = await new Promise((resolve, reject) => {
  let buf = '';
  chrome.stderr.on('data', (d) => {
    buf += d.toString();
    const m = buf.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/);
    if (m) resolve(m[1]);
  });
  setTimeout(() => reject(new Error('chrome did not start\n' + buf)), 15000);
});

const tab = await (await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })).json();
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const mid = ++id;
    pending.set(mid, resolve);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

await send('Emulation.setDeviceMetricsOverride', {
  width: +w, height: +h, deviceScaleFactor: 1, mobile: +w < 600,
});
await send('Page.enable');
// Optional: make the page look like a real (non-automated) visitor so scripts
// gated on navigator.webdriver run. Enable with SPOOF_HUMAN=1.
if (process.env.SPOOF_HUMAN) {
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: "Object.defineProperty(navigator,'webdriver',{get:()=>false});",
  });
  await send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }],
  });
}
await send('Page.navigate', { url });
await new Promise((r) => setTimeout(r, +(process.env.NAV_WAIT || 4000))); // load + hydrate
await send('Runtime.evaluate', {
  expression: `document.documentElement.style.scrollBehavior='auto'; window.scrollTo(0, ${+scrollY});`,
});
await new Promise((r) => setTimeout(r, +settleMs)); // let scroll-linked animation settle
const shot = await send('Page.captureScreenshot', { format: 'png' });
writeFileSync(outfile, Buffer.from(shot.result.data, 'base64'));
console.log(`saved ${outfile} (${w}x${h} @ scrollY=${scrollY})`);
chrome.kill();
process.exit(0);
