import Reveal from './Reveal';

type Props = {
  no: string;
  label: string;
  title: string;
  kicker?: string;
};

export default function Chapter({ no, label, title, kicker }: Props) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="font-display text-sm font-medium tabular-nums text-gold">N°{no}</span>
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-faint">{label}</span>
        <span className="hairline flex-1 self-center" />
      </div>
      <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
        {title}
      </h2>
      {kicker && <p className="mt-5 max-w-2xl text-base leading-relaxed text-dim md:text-lg">{kicker}</p>}
    </Reveal>
  );
}
