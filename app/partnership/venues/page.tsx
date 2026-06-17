import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Chapter from '@/components/Chapter';
import Faq, { type FaqItem } from '@/components/Faq';
import PartnershipModel from '@/components/PartnershipModel';
import PartnershipPath, { type PathStep } from '@/components/PartnershipPath';
import PartnershipCta from '@/components/PartnershipCta';
import Reveal from '@/components/Reveal';

const pathSteps: PathStep[] = [
  {
    step: 'Step 1',
    title: 'Deposit',
    text: 'The venue places a deposit equal to the full price of the equipment. It comes back to you in full, as long as the machine and related equipment are returned undamaged.',
  },
  {
    step: 'Step 2',
    title: 'Setup & install',
    text: 'We install the kiosk, set up payment and printing, and train your team.',
  },
  {
    step: 'Step 3',
    title: 'Two month trial',
    text: 'Track photo sales, guest usage, and machine performance, a clear and data driven evaluation.',
  },
  {
    step: 'After the trial',
    title: 'Continue or walk away',
    text: 'Hit the benchmark: move to a 50/50 photo revenue split with full feature access and monthly reports. Miss it: return the machine at no cost, and the deposit comes back in full as long as the equipment is undamaged.',
  },
];

export const metadata: Metadata = {
  title: 'For Venues',
  description:
    'Add an AI photo experience to your venue with no hardware to buy and no software to build. Artify runs the technology; you share the revenue from every branded guest print.',
};

const weDo = [
  'Touchscreen kiosk, printer, and the initial roll of 700 prints',
  'AI software, GPU processing, and cloud services',
  'Backend operations and troubleshooting',
  'AI styles and branded template updates',
  'Installation, testing, and staff training support',
];

const venueDoes = [
  'Provide attendant staff support for the device',
  'Accept and confirm guest payments',
  'Guide guests on how to use the kiosk',
  'Keep the hardware clean and operational',
  'Provide space, signage, power, and reliable Wi-Fi',
];

const faqs: FaqItem[] = [
  {
    q: 'Who owns and pays for the hardware?',
    a: 'Artify provides the kiosk, the printer, and the first media roll of 700 prints. The venue places a security deposit equal to the full price of the equipment. It is a deposit, not a purchase: ownership stays with Artify, and the full amount is returned to you as long as the machine and related equipment come back undamaged.',
  },
  {
    q: 'Is the deposit refundable?',
    a: 'Yes, in full, on one condition: the ARTIFY machine and related equipment must be returned undamaged. The deposit is security against loss or damage while the kit is at your venue. Once it is returned and passes inspection with no damage, the full deposit comes back to you. Damage or missing parts may reduce the refund.',
  },
  {
    q: 'What happens if the trial doesn’t work out?',
    a: 'Nothing bad. The machine is returned at no cost to the venue, and the deposit is refunded in full after inspection as long as the equipment is undamaged. There are no further obligations or hidden fees, and you’re welcome to retry at a later date.',
  },
  {
    q: 'What does our staff actually have to do?',
    a: 'Light touch support: confirm QR code payments before printing, help guests get started, keep the hardware clean, and coordinate roll refills after the initial supply. All technology, processing, and troubleshooting is handled by Artify Madison.',
  },
  {
    q: 'How does the revenue split work?',
    a: 'Photo revenue is split 50/50 under the standard venue agreement, with monthly performance reports so everyone sees the same numbers. Payout cadence and terms are finalized in the pilot agreement.',
  },
  {
    q: 'Can the prints match our brand?',
    a: 'Yes, that’s a core feature. Custom borders, logos, and styles are built to match your business, and seasonal templates can be rotated in for events, promotions, or holidays.',
  },
  {
    q: 'How do we get started?',
    a: 'Reach out through the contact page to schedule a demo. We’ll assess fit and location, set up the kiosk, train your team, and start the two month trial, with no long term commitment up front.',
  },
];

export default function VenuePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="grain relative overflow-hidden">
        <div className="glow-blue absolute -top-44 left-[-160px] h-[520px] w-[720px] rounded-full" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">
              For venues
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
              A new guest experience.
              <br />
              <span className="text-electric">A new revenue stream.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
              Add an AI photo experience to your venue with no hardware to buy and no software
              to build. Artify sets up the system and runs the technology; your guests walk away
              with a personalized, branded keepsake, and you share the revenue from every print.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 01 MODEL ============ */}
      <PartnershipModel highlight="venue" />

      {/* ============ 02 FOR VENUES ============ */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Chapter
            no="02"
            label="For venues"
            title="A new revenue stream, without a new headache."
            kicker="The split of responsibilities is deliberately lopsided: we carry the technology, your team carries a clipboard."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-electric">
                  Artify handles
                </p>
                <ul className="mt-5 space-y-3">
                  {weDo.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-dim md:text-[15px]">
                      <Check size={16} className="mt-0.5 shrink-0 text-electric" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Your venue handles
                </p>
                <ul className="mt-5 space-y-3">
                  {venueDoes.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-dim md:text-[15px]">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-2xl border border-electric/30 bg-electric/5 p-6 md:p-7">
              <p className="text-sm leading-relaxed text-dim md:text-[15px]">
                <span className="font-medium text-electric">Your deposit, explained.</span>{' '}
                The deposit equals the full price of the equipment. It is a security deposit,
                not a purchase: ownership stays with Artify. You get the full amount back only
                if the ARTIFY machine and related equipment are returned undamaged, so keeping
                the kit safe is what keeps your deposit whole.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 03 PATH ============ */}
      <PartnershipPath title="Try it for two months, then decide." steps={pathSteps} />

      {/* ============ 04 QUESTIONS ============ */}
      <section className="mx-auto max-w-4xl px-5 pb-16 md:px-8 md:pb-24">
        <Chapter no="04" label="Questions" title="The fine print, in plain English." />
        <div className="mt-12">
          <Faq items={faqs} />
        </div>
      </section>

      <PartnershipCta />
    </>
  );
}
