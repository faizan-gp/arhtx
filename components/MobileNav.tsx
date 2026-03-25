'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, BOOKING_URL } from '@/lib/navData';
import { Menu, X } from 'lucide-react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-cyan-500 text-[#000C1A] flex items-center justify-center shadow-lg shadow-cyan-900/30"
        aria-label="Toggle navigation"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-[#000C1A]/95 backdrop-blur-sm flex flex-col p-6 pt-20">
          <nav className="flex-1 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-[#7DD3FC] hover:text-white transition-colors border-b border-cyan-900/20"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-[#7DD3FC]/60 hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 font-orbitron font-black text-sm px-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors text-center"
          >
            Book Your Session
          </a>
        </div>
      )}
    </div>
  );
}
