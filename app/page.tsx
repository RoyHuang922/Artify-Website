import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Camera,
  CreditCard,
  Eye,
  Gift,
  Heart,
  Palette,
  Printer,
  Sparkles,
  Stamp,
} from 'lucide-react';
import Chapter from '@/components/Chapter';
import DualCta from '@/components/DualCta';
import Reveal from '@/components/Reveal';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

export const metadata: Metadata = {
  title: 'Artify Madison: AI Photo Experiences for Venues',
};

const steps = [
  { icon: Camera, title: 'Strike a pose', text: 'Guests take a photo at the kiosk or upload one from their phone.' },
  { icon: Palette, title: 'Pick a world', text: 'Over 100 art styles and themes, including anime, sci-fi, watercolor, and more.' },
  { icon: Eye, title: 'Watch the magic', text: 'AI reimagines the photo in seconds while keeping every face true to life.' },
  { icon: CreditCard, title: 'Scan to pay', text: 'A quick QR-code payment, confirmed by venue staff on the spot.' },
  { icon: Printer, title: 'Print in 12 seconds', text: 'A professional grade 4×6 print plus a digital copy saved to their phone.' },
  { icon: Gift, title: 'Keep it forever', text: 'A personalized keepsake stamped with the venue’s own branding.' },
];

const sellingPoints = [
  {
    icon: Heart,
    title: 'Core memory capturing',
    text: 'Guests leave most visits with nothing but a ticket stub. Artify turns the visit itself into a keepsake: a one of a kind portrait made in the moment, at the place it happened.',
  },
  {
    icon: Sparkles,
    title: 'AI that adapts to every guest',
    text: 'Our algorithm reads each guest’s look, clothing, and accessories, so every transformation is personal. No two prints are ever the same.',
  },
  {
    icon: Stamp,
    title: 'Your brand on every print',
    text: 'Custom borders, logos, and seasonal templates make every photo a branded product, marketing that guests pay for, then pin to their fridge.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      {/* clip-path keeps the viewport-fixed skyline backdrop from painting outside this section */}
      <section className="relative [clip-path:inset(0)]">
        <div className="hero-skyline-bg" aria-hidden="true" />
        <div className="grain relative z-10 flex min-h-dvh flex-col">
          <div className="mx-auto w-full max-w-7xl px-5 pt-32 md:px-8 md:pt-44">
            <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">
                AI photo experiences for venues
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight md:text-7xl">
                Turn visits into{' '}
                <span className="text-electric">core memories.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink md:text-lg">
                An AI photo kiosk that reimagines your guests in a hundred art styles,
                printed, branded, and in their hands before they leave.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/partnership"
                  className="rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-electric"
                >
                  Partner with us
                </Link>
                <Link
                  href="/product"
                  className="rounded-full border border-electric bg-raised px-7 py-3.5 text-sm font-medium text-ink shadow-lg shadow-black/30 transition-colors duration-200 hover:bg-surface hover:text-electric"
                >
                  See how it works
                </Link>
              </div>
            </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STYLE GALLERY ============ */}
      <section className="pt-16 md:pt-20">
        <Reveal>
          <p className="mx-auto max-w-7xl px-5 pb-3 text-center text-xs font-medium uppercase tracking-[0.24em] text-faint md:px-8">
            One photo · A hundred worlds
          </p>
        </Reveal>
        <ZoomParallax
          images={[
            { src: '/images/gallery/g1.webp', alt: 'Guest reimagined as a Chinese opera performer in red and gold', position: '50% 25%' },
            { src: '/images/gallery/g6.webp', alt: 'Two friends in a soft pastel photo style', position: '50% 25%' },
            { src: '/images/gallery/g3.webp', alt: 'Guest reimagined in futuristic sci-fi armor', position: '50% 20%' },
            { src: '/images/gallery/g4.webp', alt: 'Guest reimagined in a Van Gogh painting style', position: '50% 25%' },
            { src: '/images/gallery/g5.webp', alt: 'Guest portrait in traditional dress with a folding fan', position: '50% 25%' },
            { src: '/images/gallery/g2.webp', alt: 'Guest reimagined as an astronaut in space', position: '50% 25%' },
            { src: '/images/gallery/g7.webp', alt: 'Guest portrait as a hand drawn illustration', position: '50% 30%' },
          ]}
        />
      </section>

      {/* ============ 01 EXPERIENCE ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Chapter
          no="01"
          label="The experience"
          title="AI photo experiences, ready in minutes."
          kicker="ARTIFY brings AI photo transformation systems powered by AI-generated content software to venues and events. Guests can turn a simple photo into personalized artwork, then print it instantly or save it digitally as a keepsake."
        />
        <Reveal>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-dim md:text-lg">
            The process is simple: take or upload a photo, choose a style, generate the
            artwork, preview the result, pay, and receive a finished print or digital copy.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-electric/40">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-raised text-electric">
                    <s.icon size={20} aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm tabular-nums text-faint">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 02 WHY ============ */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Chapter
            no="02"
            label="Why it works"
            title="Three reasons guests line up."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {sellingPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div>
                  <p.icon className="text-gold" size={26} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim md:text-[15px]">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 PATHS ============ */}
      <section className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
        <Chapter
          no="03"
          label="Two ways in"
          title="Find the right way to work with ARTIFY."
        />
        <div className="h-14" />
      </section>
      <DualCta />
    </>
  );
}
