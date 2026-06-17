import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, HeartHandshake, Lightbulb } from 'lucide-react';
import Chapter from '@/components/Chapter';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Artify Madison is a startup founded by students in Madison, Wisconsin, building AI photo experiences that turn venue visits into core memories.',
};

const values = [
  {
    icon: HeartHandshake,
    title: 'Memories over merchandise',
    text: 'Generic souvenirs sit in bins. We believe the best thing a guest can take home is a moment that actually happened to them, made personal and made physical.',
  },
  {
    icon: Lightbulb,
    title: 'AI that creates connection',
    text: 'We use AI not to replace people, but to give them something to gather around: a screen that makes strangers laugh, families pose, and friends print the evidence.',
  },
  {
    icon: GraduationCap,
    title: 'Built for builders',
    text: 'Our model exists so that one determined person can run a real business. We carry the technology so our partners can carry their ambition.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="grain relative overflow-hidden">
        <div className="glow-blue absolute -top-44 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">About us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
              Born in <span className="text-electric">Madison.</span>
              <br />
              Built for everywhere.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
              Artify Madison is a startup founded by students at the University of
              Wisconsin in Madison, bringing AI powered photo experiences to the venues where
              people already make their best memories.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 01 STORY ============ */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Chapter
              no="01"
              label="Our story"
              title="We started with a simple observation."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-dim">
                <p>
                  People love their visits to the zoo, the museum, the game, or the festival,
                  but they leave with almost nothing that holds the feeling. Merchandise is
                  generic and impersonal. Phone photos disappear into camera rolls.
                </p>
                <p>
                  At the same time, venues everywhere want to offer guests something with AI,
                  and have no practical way to do it. Building customer facing AI is hard.
                  Running it day to day is harder.
                </p>
                <p>
                  Artify Madison closes both gaps with one product: an AI photo experience
                  that guests adore and venues can launch without writing a single line of
                  code. And we deliver it through partners: independent entrepreneurs who
                  build real businesses on our platform, one venue at a time.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <figure className="overflow-hidden rounded-2xl border border-line">
              <Image
                src="/images/team-still.webp"
                alt="An Artify Madison team member presenting the company outdoors in Madison"
                width={900}
                height={1600}
                className="h-[420px] w-full object-cover object-[50%_35%] md:h-[520px]"
              />
              <figcaption className="bg-surface px-5 py-3 text-xs text-faint">
                From our team, filmed in Madison, Wisconsin
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ============ 02 VALUES ============ */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Chapter no="02" label="What we believe" title="Three ideas we won’t compromise on." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div>
                  <v.icon className="text-gold" size={26} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim md:text-[15px]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
              The next chapter is written with partners.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-dim md:text-base">
              We’re looking for venues that want to delight their guests, and builders who
              want a business of their own.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/partnership"
                className="rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-electric"
              >
                Explore the partnership
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-electric hover:text-electric"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
