import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/images/logo-mark-white.png" alt="" width={30} height={28} className="h-auto w-[30px]" />
              <span className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                Artify <span className="text-electric">Madison</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-dim">
              AI photo experiences that turn venue visits into core memories, created,
              printed, and taken home in minutes.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">Explore</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/product', label: 'Product' },
                { href: '/partnership', label: 'Partnership' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-dim transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-faint">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-dim">
              <li>
                <a href="mailto:artifymadison@gmail.com" className="transition-colors hover:text-ink">
                  artifymadison@gmail.com
                </a>
              </li>
              <li>Madison, Wisconsin</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Artify Madison. All rights reserved.</p>
          <p>Artify every guest experience.</p>
        </div>
      </div>
    </footer>
  );
}
