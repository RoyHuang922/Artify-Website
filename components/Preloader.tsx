'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

export default function Preloader() {
  // Rendered visible from the very first paint (it's in the static HTML), so the
  // hero is never shown before it. A blocking script in layout.tsx adds
  // `preloader-skip` to <html> before paint for repeat/reduced/bot visits, and
  // CSS hides this element instantly in those cases, so it only ever animates
  // for a genuine first visit.
  const [done, setDone] = useState(false); // counter finished → slide away
  const [removed, setRemoved] = useState(false); // fully gone → unmount
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    const skip =
      pathname !== '/' ||
      reduced ||
      (typeof navigator !== 'undefined' && navigator.webdriver) ||
      document.documentElement.classList.contains('preloader-skip');
    if (skip) {
      setRemoved(true);
      return;
    }
    sessionStorage.setItem('artify-loaded', '1');
    const start = performance.now();
    const duration = 1100;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDone(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, pathname]);

  if (removed) return null;

  return (
    <motion.div
      id="preloader"
      initial={false}
      animate={{ y: done ? '-100%' : 0 }}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (done) setRemoved(true);
      }}
      className="fixed inset-0 z-[300] flex items-end justify-between bg-bg p-6 md:p-10"
      aria-hidden="true"
    >
      <span className="font-display text-xs uppercase tracking-[0.3em] text-dim">
        Artify Madison
      </span>
      <span className="font-display text-6xl font-bold tabular-nums text-ink md:text-8xl">
        {String(count).padStart(3, '0')}
      </span>
    </motion.div>
  );
}
