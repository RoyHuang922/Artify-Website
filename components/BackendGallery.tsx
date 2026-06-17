'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export type Shot = {
  thumb: string;
  full: string;
  label: string;
  caption: string;
};

/* Horizontal "peeking" gallery: cards overflow the row so the next one is partly
   visible, signalling more. Each card shows a cropped preview; clicking opens a
   lightbox with the complete, full-resolution screenshot. */
export default function BackendGallery({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, go]);

  const scrollByCards = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
          Tap a screen to view in detail
        </p>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll gallery left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-dim transition-colors hover:border-electric hover:text-ink"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll gallery right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-dim transition-colors hover:border-electric hover:text-ink"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0"
      >
        {shots.map((s, i) => (
          <button
            key={s.thumb}
            type="button"
            onClick={() => setOpen(i)}
            className="group shrink-0 basis-[86%] snap-start text-left sm:basis-[64%] lg:basis-[56%]"
          >
            <figure className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 group-hover:border-electric/50">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-faint/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-faint/30" />
                <span className="ml-2 font-display text-xs tracking-wide text-faint">
                  artify backend · {s.label}
                </span>
                <span className="ml-auto inline-flex items-center gap-1 text-xs text-electric opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <Maximize2 size={13} aria-hidden="true" /> view
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.thumb}
                  alt={s.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </figure>
            <figcaption className="mt-4 text-sm leading-relaxed text-dim">{s.caption}</figcaption>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-bg/92 p-4 backdrop-blur-md md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={shots[open].caption}
          >
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-electric md:right-8 md:top-8"
            >
              <X size={20} aria-hidden="true" />
            </button>
            {shots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Previous screen"
                  className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-electric md:left-6"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  aria-label="Next screen"
                  className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-electric md:right-6"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
              </>
            )}
            <motion.figure
              key={open}
              initial={reduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-6xl flex-col items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shots[open].full}
                alt={shots[open].caption}
                className="max-h-[78vh] w-auto max-w-full rounded-xl border border-line object-contain"
              />
              <figcaption className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-dim">
                <span className="font-medium text-ink">{shots[open].label}.</span>{' '}
                {shots[open].caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
