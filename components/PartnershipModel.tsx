import { ArrowRight, Building2, Check, Cpu, Handshake } from 'lucide-react';
import Chapter from './Chapter';
import Reveal from './Reveal';

type Audience = 'distributor' | 'venue';

/* N°01. The model. Same three player loop on both pages; the block that matches
   the page's audience is highlighted and named in the second person. */
export default function PartnershipModel({ highlight }: { highlight: Audience }) {
  const nodes = [
    {
      icon: Cpu,
      name: 'Artify Madison',
      role: 'The technology',
      points: ['AI software & style library', 'GPU and cloud backend', 'Training, templates, support'],
      active: false,
    },
    {
      icon: Handshake,
      name: highlight === 'distributor' ? 'You, the operator' : 'Your local operator',
      role: 'The business',
      points: ['Find and sign venues', 'Operate and grow locations', 'Earn a revenue share on every order'],
      active: highlight === 'distributor',
    },
    {
      icon: Building2,
      name: highlight === 'venue' ? 'You, the venue' : 'Venues & guests',
      role: 'The experience',
      points: ['Host the kiosk', 'Share photo revenue', 'Guests take home core memories'],
      active: highlight === 'venue',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <Chapter
        no="01"
        label="The model"
        title="Three players. One simple loop."
        kicker="Technology flows one way, revenue flows back, and every player does what they’re best at."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {nodes.map((node, i) => (
          <Reveal key={node.name} delay={i * 0.08}>
            <div
              className={`relative h-full rounded-2xl border p-8 transition-colors ${
                node.active
                  ? 'border-electric/60 bg-electric/[0.07] shadow-lg shadow-electric/10'
                  : 'border-line bg-surface'
              }`}
            >
              {node.active && (
                <span className="absolute right-5 top-5 rounded-full bg-electric/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-electric">
                  Where you come in
                </span>
              )}
              {i < 2 && (
                <ArrowRight
                  size={22}
                  aria-hidden="true"
                  className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 text-faint lg:block"
                />
              )}
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  node.active ? 'bg-electric text-white' : 'bg-raised text-electric'
                }`}
              >
                <node.icon size={22} aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-faint">
                {node.role}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold">{node.name}</h3>
              <ul className="mt-4 space-y-2">
                {node.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-dim">
                    <Check size={15} className="mt-1 shrink-0 text-electric" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
