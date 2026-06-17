import type { Metadata } from 'next';
import Chapter from '@/components/Chapter';
import DualCta from '@/components/DualCta';
import PartnershipCta from '@/components/PartnershipCta';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Partnership',
  description:
    'Two ways to work with Artify Madison: build a local AI photo business as a distributor, or add an AI photo experience to your venue. We provide the technology and backend; you grow.',
};

export default function PartnershipPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="grain relative overflow-hidden">
        <div className="glow-blue absolute -top-44 left-[-160px] h-[520px] w-[720px] rounded-full" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">
              Partnership
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
              We run the tech.
              <br />
              <span className="text-electric">You run the show.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
              Artify Madison doesn’t sell machines, we power people. Choose the path that fits
              you: build a local AI photo business as a distributor, or bring the experience to
              your own venue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CHOOSE YOUR PATH ============ */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Chapter no="01" label="Two ways in" title="Find the right way to work with ARTIFY." />
        <div className="h-14" />
      </section>
      <DualCta />

      <PartnershipCta />
    </>
  );
}
