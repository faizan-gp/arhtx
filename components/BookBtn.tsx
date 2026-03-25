'use client';

import { BOOKING_URL } from '@/lib/navData';

interface BookGameButtonProps {
  label?: string;
  source?: string;
  className?: string;
}

export default function BookGameButton({ label = 'Book Now', source, className }: BookGameButtonProps) {
  const url = source ? `${BOOKING_URL}?utm_source=arcadehouston&utm_medium=cta&utm_campaign=${source}` : BOOKING_URL;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? 'inline-block font-orbitron font-black text-sm px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors duration-200 tracking-wide'}
    >
      {label}
    </a>
  );
}
