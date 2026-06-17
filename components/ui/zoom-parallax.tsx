'use client';

import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface ZoomImage {
  src: string;
  alt?: string;
  /** CSS object-position anchoring the crop, e.g. '50% 25%' to keep a face in frame */
  position?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect, max 7 images */
  images: ZoomImage[];
}

/* Per-slot frame geometry. All frames lean portrait to suit people photography;
   widths widen below md so frames don't become slivers on phones. */
const slotClasses = [
  '',
  '[&>div]:!-top-[32vh] [&>div]:!left-[5vw] [&>div]:!h-[32vh] [&>div]:!w-[40vw] md:[&>div]:!w-[26vw]',
  '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw] md:[&>div]:!w-[16vw]',
  '[&>div]:!left-[27.5vw] [&>div]:!h-[30vh] [&>div]:!w-[24vw] md:[&>div]:!w-[18vw]',
  '[&>div]:!top-[29vh] [&>div]:!left-[5vw] [&>div]:!h-[28vh] [&>div]:!w-[22vw] md:[&>div]:!w-[15vw]',
  '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[28vh] [&>div]:!w-[30vw] md:[&>div]:!w-[22vw]',
  '[&>div]:!top-[24vh] [&>div]:!left-[25vw] [&>div]:!h-[16vh] [&>div]:!w-[16vw] md:[&>div]:!w-[11vw]',
];

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className={`relative ${reduced ? 'h-screen' : 'h-[300vh]'}`}>
      <div className={`${reduced ? 'relative' : 'sticky top-0'} h-screen overflow-hidden`}>
        {images.map(({ src, alt, position }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={reduced ? undefined : { scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${slotClasses[index % slotClasses.length]}`}
            >
              <div className="relative h-[28vh] w-[28vw] overflow-hidden rounded-xl border border-line md:w-[20vw]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  style={{ objectPosition: position ?? '50% 50%' }}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
