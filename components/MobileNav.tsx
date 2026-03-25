'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS, BOOKING_URL } from '@/lib/navData';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedItem(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer — slides in from the right */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[min(320px,90vw)] bg-[#000C1A] border-l border-cyan-900/40 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-cyan-900/30 shrink-0">
          <Link href="/" onClick={onClose}>
            <Image src="/ZL-W.png" alt="Arcade Houston" width={100} height={28} className="h-7 w-auto" />
          </Link>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3">
          {NAV_ITEMS.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  {/* Expandable parent */}
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-[#7DD3FC]/80 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedItem === item.label ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Children */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      expandedItem === item.label ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-white/3 border-y border-white/5 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="flex items-center gap-2 pl-8 pr-5 py-2.5 text-sm text-[#7DD3FC]/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-cyan-700 shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center px-5 py-3 text-sm font-medium text-[#7DD3FC]/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-cyan-900/30 shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block w-full font-orbitron font-black text-sm px-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors text-center"
          >
            Book Your Session
          </a>
          <p className="text-center text-xs text-gray-500 mt-3">20801 Gulf Fwy Suite 5, Webster TX</p>
        </div>
      </div>
    </>
  );
}
