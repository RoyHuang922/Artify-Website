import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });

export const metadata: Metadata = {
  title: {
    default: 'Artify Madison: AI Photo Experiences for Venues',
    template: '%s | Artify Madison',
  },
  description:
    'Artify Madison turns venue visits into core memories: AI transformed photos, printed in seconds, branded to your business. We run the technology. You run the show.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        {/* Runs before first paint: decide whether to skip the intro overlay
            (repeat visits, reduced motion, automated browsers) so it never flashes. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=location.pathname;var isHome=(p==='/'||p==='/index.html'||p==='');var skip=!isHome||sessionStorage.getItem('artify-loaded')||(navigator.webdriver)||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);if(skip){document.documentElement.classList.add('preloader-skip');}}catch(e){document.documentElement.classList.add('preloader-skip');}})();",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-blue focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Preloader />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
