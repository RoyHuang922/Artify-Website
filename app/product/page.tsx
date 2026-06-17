import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Cloud,
  Gauge,
  Globe,
  Images,
  MonitorSmartphone,
  Printer,
  RefreshCw,
  SlidersHorizontal,
  Stamp,
  Wand2,
} from 'lucide-react';
import Chapter from '@/components/Chapter';
import BackendGallery, { type Shot } from '@/components/BackendGallery';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';

const galleryImages = Array.from({ length: 12 }, (_, i) =>
  `/images/marquee/p${String(i + 1).padStart(2, '0')}.webp`
);

export const metadata: Metadata = {
  title: 'Product',
  description:
    'The Artify platform: AI photo software with 100+ styles and venue branding, running on proven plug and play hardware: a 32 inch touchscreen kiosk and a DNP photo printer.',
};

const softwareFeatures = [
  {
    icon: Images,
    title: 'Customizable style library',
    text: 'Choose your kiosk’s lineup from a deep pool of looks: anime, sci-fi, watercolor, vintage, holiday specials, and push new styles live to your guests in a click.',
  },
  {
    icon: Wand2,
    title: 'Personal to every guest',
    text: 'The AI adapts to each guest’s look, clothing, and accessories while keeping faces recognizably theirs.',
  },
  {
    icon: Stamp,
    title: 'Venue branded templates',
    text: 'Your logo, your borders, your seasonal campaigns: every print doubles as a branded product for your business.',
  },
  {
    icon: Globe,
    title: 'English and Spanish',
    text: 'A bilingual interface out of the box, designed for high traffic public venues.',
  },
  {
    icon: Cloud,
    title: 'Backend service covered by ARTIFY',
    text: 'GPU processing, cloud services, monitoring, and troubleshooting are handled by Artify Madison, not by your staff.',
  },
  {
    icon: RefreshCw,
    title: 'Always getting better',
    text: 'New styles and template updates ship continuously for events, promotions, and holidays.',
  },
];

const screenSpecs = [
  '32" UHD 4K touchscreen, 300 nit brightness',
  '8 MP 4K camera built in',
  'Full swivel portable stand you can move anywhere',
  '15,000 mAh battery for flexible placement',
];

const printerSpecs = [
  'Professional grade dye sublimation prints',
  '12.4 second printing for standard 4×6',
  'Supports 4×6, 5×7, 6×6, and 6×8 formats',
  'Up to 700 prints per media roll',
];

const backendShots: Shot[] = [
  {
    thumb: '/images/backend/dashboard.webp',
    full: '/images/backend/dashboard-full.webp',
    label: 'Dashboard',
    caption:
      'Live generation and payment counts, your top styles, and the status of every machine, all in one view.',
  },
  {
    thumb: '/images/backend/styles.webp',
    full: '/images/backend/styles-full.webp',
    label: 'AI style library',
    caption:
      'Browse 175+ AI styles, filter by category, and choose exactly which ones go live on each machine.',
  },
];

const backendFeatures = [
  {
    icon: Gauge,
    title: 'Manage every machine',
    text: 'Add devices and track generation counts, payments, and status across all your locations from one screen.',
  },
  {
    icon: Images,
    title: 'Curate the style library',
    text: 'Browse 175+ AI styles, switch them on or off, and feature the ones that fit the moment.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Tune each event or venue',
    text: 'Adjust categories, layouts, and the options guests see, so a wedding, a museum, or a festival each gets the right lineup.',
  },
];

const pricing = [
  { product: 'Traditional photo booth (no AI)', price: '$5 to $7', note: 'per photo print' },
  { product: 'Theme park ride photo', price: '$14 to $20', note: 'per photo print' },
  {
    product: 'Artify AI photo: print + digital save',
    price: '$9.99',
    note: 'suggested; subject to negotiation and market testing',
    highlight: true,
  },
];

export default function ProductPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="grain relative overflow-hidden">
        <div className="glow-blue absolute -top-44 right-[-200px] h-[520px] w-[720px] rounded-full" />
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-electric">Product</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl">
              Software that performs.
              <br />
              Hardware that just works.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
              Artify is a fully plug and play AI photo experience: screen, software, printer,
              and payment in one package. No development, no integration project. Launch a
              customer facing AI product at a venue today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 01 HARDWARE ============ */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div>
          <Chapter
            no="01"
            label="The hardware"
            title="Two proven devices. Zero engineering."
            kicker="We standardize on commodity hardware that any venue can power and any partner can maintain."
          />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div className="relative">
                <div className="glow-blue absolute inset-0 scale-110 rounded-full" />
                <Image
                  src="/images/kiosk-render.webp"
                  alt="Artify hardware set: 32-inch touchscreen kiosk on a stand and DNP photo printer on a cabinet"
                  width={620}
                  height={620}
                  className="relative mx-auto rounded-2xl"
                />
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal>
                <div className="rounded-2xl border border-line bg-surface p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-raised text-electric">
                      <MonitorSmartphone size={20} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold">Portable touchscreen kiosk</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {screenSpecs.map((s) => (
                      <li key={s} className="flex gap-3 text-sm leading-relaxed text-dim">
                        <Check size={16} className="mt-0.5 shrink-0 text-electric" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-line bg-surface p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-raised text-electric">
                      <Printer size={20} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold">DNP DS-RX1HS photo printer</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {printerSpecs.map((s) => (
                      <li key={s} className="flex gap-3 text-sm leading-relaxed text-dim">
                        <Check size={16} className="mt-0.5 shrink-0 text-electric" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </section>

      {/* ============ 02 SOFTWARE ============ */}
      <section className="border-y border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Chapter
            no="02"
            label="The software"
            title="An AI artist that knows the crowd."
            kicker="The intelligence is the product: a style engine tuned for venues, managed end-to-end from our backend."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {softwareFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-electric/40">
                  <f.icon className="text-electric" size={22} aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Marquee images={galleryImages} direction="left" duration={64} size={180} ratio={1.333} />
          </div>
        </div>
      </section>

      {/* ============ 03 BACKEND ============ */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Chapter
          no="03"
          label="The backend"
          title="One dashboard runs the whole show."
          kicker="Operators control everything from a single backend: devices, the AI style library, and the exact options guests can choose, all tuned for the event or venue."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {backendFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-electric/40">
                <f.icon className="text-electric" size={22} aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14">
          <BackendGallery shots={backendShots} />
        </div>
      </section>

      {/* ============ 04 PRICING ============ */}
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <Chapter
          no="04"
          label="Pricing context"
          title="Premium product. Familiar price."
          kicker="Guests already pay for venue photos. Artify sits comfortably between a photo booth and a ride photo, and delivers something personal."
        />
        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-surface text-xs uppercase tracking-[0.16em] text-faint">
                  <th scope="col" className="px-6 py-4 font-medium">Product</th>
                  <th scope="col" className="px-6 py-4 font-medium">Typical price</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row) => (
                  <tr
                    key={row.product}
                    className={`border-b border-line last:border-0 ${
                      row.highlight ? 'bg-blue/10' : ''
                    }`}
                  >
                    <td className="px-6 py-5">
                      <span className={row.highlight ? 'font-medium text-ink' : 'text-dim'}>
                        {row.product}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`font-display text-lg font-bold ${
                          row.highlight ? 'text-electric' : 'text-ink'
                        }`}
                      >
                        {row.price}
                      </span>
                      <span className="ml-2 text-xs text-faint">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Link
              href="/partnership"
              className="rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-electric"
            >
              See the partnership model
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-electric hover:text-electric"
            >
              Book a demo
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
