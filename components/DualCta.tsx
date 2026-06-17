import Link from 'next/link';
import { ArrowUpRight, Building2, Rocket } from 'lucide-react';
import Reveal from './Reveal';

export default function DualCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <Link
            href="/partnership/distributors"
            className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-gold/50 md:p-12"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(240,178,62,0.22)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Rocket className="text-gold" size={28} aria-hidden="true" />
            <h3 className="mt-6 font-display text-2xl font-bold md:text-3xl">
              For entrepreneurs ready to build locally
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-dim md:text-base">
              Start your own local ARTIFY business. We provide the AI platform, hardware,
              training, and support. You sign venues, operate the experience, and earn from
              each event or location.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold">
              For partners
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <Link
            href="/partnership/venues"
            className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-electric/50 md:p-12"
          >
            <div className="glow-blue absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <Building2 className="text-electric" size={28} aria-hidden="true" />
            <h3 className="mt-6 font-display text-2xl font-bold md:text-3xl">
              For venues that want a new guest experience
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-dim md:text-base">
              Add an AI photo experience to your venue without buying hardware or building
              software. We set up the system, help run the experience, and share the revenue
              from every guest print.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-electric">
              For venues
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
