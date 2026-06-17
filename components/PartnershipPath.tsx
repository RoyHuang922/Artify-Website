import Chapter from './Chapter';
import Reveal from './Reveal';

export type PathStep = { step: string; title: string; text: string };

/* N°03. The path. Steps and title differ per audience (distributors vs venues);
   the surrounding layout and the reassuring kicker stay shared. */
export default function PartnershipPath({
  title,
  steps,
}: {
  title: string;
  steps: PathStep[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <Chapter
        no="03"
        label="The path"
        title={title}
        kicker="No leap of faith required. The trial is built so you can say no easily, because we’re confident the numbers will say yes."
      />
      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <li className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric">
                {s.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dim">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
