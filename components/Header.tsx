'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_ITEMS, BOOKING_URL } from '@/lib/navData';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#000C1A]/80 border-b border-cyan-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/ZL-W.png" alt="Arcade Houston" width={120} height={32} className="h-8 w-auto" priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <button
                  className="px-3 py-2 text-sm text-[#7DD3FC]/80 hover:text-white transition-colors font-medium flex items-center gap-1"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 glass rounded-xl p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-3 py-1.5 text-sm text-[#7DD3FC]/80 hover:text-white hover:bg-cyan-900/20 rounded-lg transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </button>
              ) : (
                <Link href={item.href} className="px-3 py-2 text-sm text-[#7DD3FC]/80 hover:text-white transition-colors font-medium">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex font-orbitron font-black text-xs px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors duration-200 shrink-0"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
