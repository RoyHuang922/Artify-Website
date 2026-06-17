'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function Counter({ to, prefix = '', suffix = '', duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced || (typeof navigator !== 'undefined' && navigator.webdriver)) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
