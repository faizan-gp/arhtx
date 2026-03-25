'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_ITEMS, BOOKING_URL } from '@/lib/navData';
import MobileNav from './MobileNav';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#000C1A]/80 border-b border-cyan-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/ZL-W.png" alt="Arcade Houston" width={120} height={32} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className="px-3 py-2 text-sm text-[#7DD3FC]/80 hover:text-white transition-colors font-medium flex items-center gap-1"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-full h-2" />
                    )}

                    <div
                      className={`absolute top-[calc(100%+6px)] left-0 w-52 bg-[#000C1A]/95 backdrop-blur-md border border-cyan-900/40 rounded-xl p-2 shadow-2xl shadow-black/60 transition-all duration-150 ${
                        openDropdown === item.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-3 py-2 text-sm text-[#7DD3FC]/80 hover:text-white hover:bg-cyan-900/30 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="px-3 py-2 text-sm text-[#7DD3FC]/80 hover:text-white transition-colors font-medium">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop Book Now */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex font-orbitron font-black text-xs px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors duration-200 shrink-0"
            >
              Book Now
            </a>

            {/* Mobile: Book Now pill + hamburger */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden inline-flex items-center font-bold text-xs px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors shrink-0"
            >
              Book Now
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile drawer */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
