'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/styles/utils';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setScrollingDown(currentScrollPos > prevScrollPos && currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'navbar',
        scrollingDown ? 'slide-out' : 'slide-in',
        'w-full'
      )}
    >
      <div className="relative flex items-center justify-between p-4">
        <div className="flex-shrink-0">
          {/* Replace with your logo */}
          <Link href="/">
            <img src="/logo.png" alt="GymDAO Logo" className="h-8" />
          </Link>
        </div>

        <NavigationMenu className="flex-1 justify-center">
          <NavigationMenuList className="space-x-8">
            {['About us', 'Mission', 'Services', 'Partners', 'FAQ'].map(
              (text) => (
                <NavigationMenuItem key={text}>
                  <Link
                    href={`#${text.replace(/\s+/g, '-').toLowerCase()}`}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), 'nav-link')}
                    >
                      {text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div>
          <Link href="https://app.gymdao.xyz" passHref>
            <Button>Launch App</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
