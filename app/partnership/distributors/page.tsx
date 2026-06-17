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
    title: 'Sign on and place your deposit',
    text: 'A refundable $1,800 deposit secures your kit: the Apolosign screen, the DNP photo printer, and an initial 700 print supply. It is a security deposit, not a purchase. The equipment stays Artify’s, and the deposit comes back to you at the end.',
  },
  {
    step: 'Step 2',
    title: 'Get equipped and trained',
    text: 'Your equipment ships within about 15 business days, and we train you on operation, software, payments, and printing, everything you need to run on site.',
  },
  {
    step: 'Step 3',
    title: 'Run your three month trial',
    text: 'Sign venues and start earning. Over three months you build toward the sales target: a set number of long term venues, or cumulative sales above three times your deposit.',
  },
  {
    step: 'After the trial',
    title: 'Continue or get your deposit back',
    text: 'Hit the target and keep going. Or finish the trial, return the equipment, and get your deposit back after inspection, minus a small usage fee charged only for the months the kit was actually placed at venues.',
  },
];

export const metadata: Metadata = {
  title: 'For Distributors',
  description:
    'Build a local AI photo business on the Artify platform with a light, deposit-based startup model. A refundable equipment deposit gets you the kit; we provide the technology, training, and playbook; you sign venues and earn a revenue share.',
};

const faqs: FaqItem[] = [
  {
    q: 'What does an Artify distributor actually do?',
    a: 'You operate as an independent entrepreneur: find and sign venues in your area, place the kiosks, and run the day to day. We hand you a proven product and the full technology stack, and you bring the local relationships and the drive to grow.',
  },
  {
    q: 'Do I need technical skills, my own hardware, or a big upfront investment?',
    a: 'No technical skills and no software to build, and you don’t manufacture anything. The upfront commitment is a refundable $1,800 equipment deposit that secures your Apolosign screen, DNP photo printer, and an initial 700 print supply. It is security, not a purchase: ownership stays with Artify, and the deposit is returned when you finish and hand the equipment back in good condition.',
  },
  {
    q: 'Is the deposit refundable?',
    a: 'Yes. The $1,800 is a refundable security deposit. Complete the three month trial, choose not to continue, return the equipment, and we refund the deposit once it passes inspection. A depreciation fee of 5% per month may be deducted, but only for the months your kit was actually placed and used at venues; if it was never placed and comes back undamaged, nothing is deducted. Exiting before the three months caps the refund at half the deposit.',
  },
  {
    q: 'How do I make money?',
    a: 'You earn a share of the photo revenue from every paid order at the venues and events you run. Payouts are reconciled and sent to your account on a regular cycle, and the exact revenue share is set out in your distributor agreement.',
  },
  {
    q: 'Who handles the technology and support?',
    a: 'We do. GPU processing, cloud services, monitoring, troubleshooting, plus continuous AI style and branded template updates are all run by Artify Madison, so you can focus on signing and serving venues.',
  },
  {
    q: 'How many venues or events can I run?',
    a: 'As many as you can build. The platform scales across locations: run permanent installs at venues or popups at events, fairs, and seasonal activations.',
  },
  {
    q: 'How do I become a distributor?',
    a: 'Reach out through the contact page. We’ll walk you through the platform, the economics, and the onboarding steps, then get you set up with training and your first kiosk.',
  },
];

export default function DistributorPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="grain relative overflow-hidden">
        <div className="glow-blue absolute -top-44 left-[-160px] h-[520px] w-[720px] rounded-full" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">
              For distributors
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
              We run the tech.
              <br />
              <span className="text-electric">You build the business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
              Artify Madison doesn’t sell machines, we power people. As a distributor you run
              your own local AI photo business on a light, deposit-based startup model,
              bringing the Artify experience to venues and events in your city, backed by our
              technology, training, and playbook.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 01 MODEL ============ */}
      <PartnershipModel highlight="distributor" />

      {/* ============ 02 FOR DISTRIBUTORS ============ */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Chapter
            no="02"
            label="For distributors"
            title="A business in a box, minus the grunt work."
            kicker="Everything hard about launching an AI product is already done. What’s left is the part only you can do: relationships, presence, and growth on the ground."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  What you get from day one
                </h3>
                <ul className="mt-5 space-y-3">
                  {[
                    'A proven product with live venues and real revenue behind it',
                    'Full technology stack (AI, cloud, payments) run by our team',
                    'Hardware sourcing, installation support, and staff training',
                    'Branded templates and fresh styles shipped continuously',
                    'A playbook for pitching venues, pricing, and operations',
                  ].map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-dim md:text-[15px]">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">What you bring</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    'A refundable equipment deposit to get your kit on the ground',
                    'Local knowledge of the venues, events, and crowds in your area',
                    'The drive to pitch, sign, and launch new locations',
                    'Day to day ownership of your venues’ success',
                  ].map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-dim md:text-[15px]">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-6">
                  <p className="text-sm leading-relaxed text-dim">
                    <span className="font-medium text-gold">A light, deposit-based model.</span>{' '}
                    Your refundable $1,800 deposit secures the equipment and your initial 700
                    print supply. It is security, not a purchase, and it comes back to you when
                    you return the kit at the end of the cooperation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 03 PATH ============ */}
      <PartnershipPath title="Try it for three months, then decide." steps={pathSteps} />

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
