'use client';

import Link from 'next/link';
import { cn } from '@/styles/utils';
import { useEffect, useState } from 'react';
import { Button } from '@/components/atoms/Button';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setScrollingDown(currentScrollPos > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'w-full fixed top-0 left-0 right-0 z-50 transition-all-attract-m',
        scrollingDown && 'nav-background'
      )}
    >
      <nav className="relative flex items-center justify-between py-4 px-10">
        <div className="flex items-center justify-center gap-10">
          <Link
            href="/"
            className="flex items-center justify-center gap-1 hover:opacity-90 outline-none"
          >
            <img src="/gymdao.webp" alt="GymDAO Logo" className="h-8" />
            <span className="font-semibold text-2xl">GymDAO</span>
          </Link>
          {['About us', 'Mission', 'Services', 'Partners', 'FAQ'].map(
            (text) => (
              <Link
                href={`#${text.replace(/\s+/g, '-').toLowerCase()}`}
                key={text}
                className="outline-none focus:underline underline-offset-4"
              >
                <span className="hover:opacity-80  focus:opacity-80 active:opacity-90">
                  {text}
                </span>
              </Link>
            )
          )}
        </div>

        <Link href="https://app.gymdao.xyz">
          <Button variant="primary">Launch App</Button>
        </Link>
      </nav>
    </header>
  );
};
