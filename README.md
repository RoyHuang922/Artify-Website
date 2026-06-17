# Artify Madison — Website

Marketing website for Artify Madison: AI photo experiences for venues.
Built with **Next.js + Tailwind CSS + Framer Motion**, exported as a fully static site.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, guest journey, selling points, results, dual CTA |
| `/product` | Software features, hardware specs, guest flow, pricing context |
| `/partnership` | The B2B2C model in plain words, operator & venue tracks, trial timeline, FAQ |
| `/about` | Story, Madison roots, values |
| `/contact` | Contact form + email |

## Running it locally

You need Node.js (already installed on this machine).

```bash
npm install        # once, after cloning/copying the project
npm run dev        # development server at http://localhost:3000
npm run build      # production build — outputs a static site into /out
```

The `/out` folder after `npm run build` is the complete website: plain HTML/CSS/JS
you can host anywhere.

## Deploying (easiest path: Vercel, free)

1. Push this folder to a GitHub repository.
2. Sign up at [vercel.com](https://vercel.com) with that GitHub account.
3. "Add New Project" → import the repo → Deploy. Done — Vercel detects Next.js
   automatically and gives you a live URL. Every `git push` redeploys.

Alternative: drag the `/out` folder into [netlify.com/drop](https://app.netlify.com/drop).

## ⚠️ One thing you must do: the contact form key

The contact form sends submissions via [Web3Forms](https://web3forms.com) (free).
Until you add your key, the form shows visitors a fallback asking them to email directly.

1. Go to https://web3forms.com and enter the inbox email (your Artify Gmail) — you get
   an **Access Key** instantly.
2. Open `components/ContactForm.tsx` and replace
   `REPLACE-WITH-YOUR-WEB3FORMS-ACCESS-KEY` with that key.

The contact email used across the site is `artifymadison@gmail.com`. It appears in
`components/Footer.tsx`, `components/ContactForm.tsx`, and `app/contact/page.tsx`
if you ever need to change it.

## Editing content

- **Copy/text** lives directly in each page: `app/<page>/page.tsx`.
- **Images** are in `public/images/` (WebP, already optimized).
  The 24 AI style tiles for the scrolling strips are `public/images/styles/`.
- **Colors & fonts** are design tokens at the top of `app/globals.css` (`@theme` block).
- **Raw source material** (original deck images, video frames) is kept in
  `asset-sources/` — not shipped with the site.

## Design system (for future edits)

- Background `#05080F`, surfaces `#0B1120`/`#101A30`, brand royal blue `#205CE9`,
  electric hover `#4E7FFF`, gold accent `#F0B23E` (chapter numbers, partner accents).
- Headings: Space Grotesk. Body: Inter (self-hosted via `next/font`).
- Visual motif: numbered chapters (`N°01 …`) with hairlines, dark cinematic sections,
  marquee strips of AI style tiles.
- Animations respect `prefers-reduced-motion`, and skip entirely for automated
  browsers (`lib/automation.ts`) so SEO/link-preview screenshots always see content.

## Notes

- `github-recovery-codes.txt` is ignored by git, but it should not live in this
  folder at all — move it somewhere private.
- The China case-study numbers are framed as "operating venues in China" per the
  pitch deck footnote; the site intentionally does not mention any parent company.
