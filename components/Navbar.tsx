'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

type SubLink = { href: string; label: string; desc: string };
type NavLink = { href: string; label: string; menu?: SubLink[] };

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/partnership',
    label: 'Partnership',
    menu: [
      {
        href: '/partnership/distributors',
        label: 'For Distributors / Entrepreneurs',
        desc: 'Build a local AI photo business',
      },
      {
        href: '/partnership/venues',
        label: 'For Venues',
        desc: 'Add the experience to your venue',
      },
    ],
  },
  { href: '/product', label: 'Product' },
  { href: '/about', label: 'About' },
];

function NavDropdown({ label, href, items, pathname }: NavLink & { items: SubLink[]; pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = pathname === href || pathname.startsWith(`${href}/`);

  const open = () => {
    if (timer.current) clearTimeout(timer.current);
    setMenuOpen(true);
  };
  const close = () => {
    timer.current = setTimeout(() => setMenuOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
      onFocusCapture={open}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenuOpen(false);
      }}
    >
      <Link
        href={href}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        aria-current={active ? 'page' : undefined}
        className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
          active ? 'text-ink' : 'text-dim hover:text-ink'
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
        />
      </Link>
      {active && <span className="mt-0.5 block h-px bg-electric" />}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-[110] -translate-x-1/2 pt-3"
          >
            <div className="min-w-[260px] overflow-hidden rounded-2xl border border-line bg-surface/95 p-1.5 shadow-xl shadow-black/40 backdrop-blur-md">
              {items.map((it) => {
                const itActive = pathname === it.href;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    aria-current={itActive ? 'page' : undefined}
                    className={`block rounded-xl px-4 py-3 transition-colors duration-150 ${
                      itActive ? 'bg-raised' : 'hover:bg-raised'
                    }`}
                  >
                    <span
                      className={`block text-sm font-medium ${itActive ? 'text-electric' : 'text-ink'}`}
                    >
                      {it.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-faint">{it.desc}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
        open
          ? 'border-b border-line bg-bg'
          : scrolled
            ? 'border-b border-line bg-bg/85 backdrop-blur-md'
            : 'bg-transparent'
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
            if (l.menu) {
              return (
                <NavDropdown key={l.href} label={l.label} href={l.href} items={l.menu} pathname={pathname} />
              );
            }
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
            className="fixed inset-x-0 top-16 bottom-0 z-[99] overflow-y-auto bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pt-6">
              {[...links, { href: '/contact', label: 'Contact' } as NavLink].map((l, i) => (
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
                  {l.menu && (
                    <div className="mb-3 ml-4 flex flex-col border-l border-line pl-5">
                      {l.menu.map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          className={`block py-2.5 text-base ${
                            pathname === it.href ? 'text-electric' : 'text-dim'
                          }`}
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
