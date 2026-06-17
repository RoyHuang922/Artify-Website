import Link from 'next/link';
import { Users } from 'lucide-react';
import Reveal from './Reveal';

/* Shared get-in-touch block, identical on both partnership pages and the hub. */
export default function PartnershipCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-16 text-center md:py-20">
          <div className="glow-blue absolute -top-32 left-1/2 h-96 w-[640px] -translate-x-1/2 rounded-full" />
          <Users className="relative mx-auto text-electric" size={30} aria-hidden="true" />
          <h2 className="relative mx-auto mt-6 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Ready to bring Artify to your city?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-sm leading-relaxed text-dim md:text-base">
            Whether you run a venue or want to build a business on our platform, the
            conversation starts with a demo.
          </p>
          <div className="relative mt-9">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-blue px-8 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-electric"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
