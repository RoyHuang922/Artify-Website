'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/partnership', label: 'Partnership' },
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Artify Madison home">
          <Image src="/images/logo-mark-white.png" alt="" width={34} height={32} priority className="h-auto w-[34px]" />
          <span className="font-display text-[15px] font-bold uppercase tracking-[0.18em]">
            Artify <span className="text-electric">Madison</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active =
              pathname === l.href || (l.href !== '/' && pathname.startsWith(`${l.href}/`));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm transition-colors duration-200 ${
                  active ? 'text-ink' : 'text-dim hover:text-ink'
                }`}
              >
                {l.label}
                {active && <span className="mt-0.5 block h-px bg-electric" />}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-electric"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-[99] bg-bg/97 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pt-6">
              {[...links, { href: '/contact', label: 'Contact' }].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.3, ease: 'easeOut' }}
                >
                  <Link
                    href={l.href}
                    className={`block py-4 font-display text-3xl font-medium ${
                      pathname === l.href ? 'text-electric' : 'text-ink'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
