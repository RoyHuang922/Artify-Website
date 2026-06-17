import type { Metadata } from 'next';
import { Clock, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a demo or start a partnership conversation with Artify Madison, AI photo experiences for venues.',
};

export default function ContactPage() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="glow-blue absolute -top-44 right-[-160px] h-[480px] w-[680px] rounded-full" />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-44">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">Contact</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
                Let’s put on a <span className="text-electric">show.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-dim">
                The best way to understand Artify is to see a transformation happen. Tell us
                about your venue or your ambitions, and we’ll set up a demo.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-10 space-y-5 text-sm">
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-raised text-electric">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <a
                    href="mailto:artifymadison@gmail.com"
                    className="text-dim transition-colors hover:text-ink"
                  >
                    artifymadison@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-raised text-electric">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <span className="text-dim">Madison, Wisconsin</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-raised text-electric">
                    <Clock size={18} aria-hidden="true" />
                  </span>
                  <span className="text-dim">We typically reply within two business days</span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-line bg-surface/60 p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
