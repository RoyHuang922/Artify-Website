/* Infinite image strip. Pure CSS animation (globals.css), disabled under reduced motion. */

type Props = {
  images: string[];
  direction?: 'left' | 'right';
  duration?: number;
  size?: number;
  /** tile height as a multiple of width (e.g. 1.333 for 3:4 portraits) */
  ratio?: number;
};

export default function Marquee({ images, direction = 'left', duration = 48, size = 200, ratio = 1.12 }: Props) {
  const height = Math.round(size * ratio);
  const doubled = [...images, ...images];
  return (
    <div
      className={`overflow-hidden ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}
      style={{ ['--marquee-duration' as string]: `${duration}s` }}
      aria-hidden="true"
    >
      <div className="marquee-track gap-4 pr-4">
        {doubled.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            width={size}
            height={height}
            className="rounded-xl border border-line object-cover"
            style={{ width: size, height }}
          />
        ))}
      </div>
    </div>
  );
}
