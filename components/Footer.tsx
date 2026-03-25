import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_LINKS, BOOKING_URL } from '@/lib/navData';

export default function Footer() {
  return (
    <footer className="border-t border-cyan-900/30 bg-[#000C1A] mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <Image src="/ZL-W.png" alt="Arcade Houston" width={120} height={32} className="h-8 w-auto mb-4" />
            <p className="text-sm text-[#7DD3FC]/60 leading-relaxed max-w-xs">
              Houston&apos;s comprehensive arcade guide. We operate Zero Latency Webster, Houston — the city&apos;s only free-roam VR arena.
            </p>
          </div>
          <div>
            <h3 className="font-orbitron text-sm font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#7DD3FC]/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-orbitron text-sm font-bold text-white mb-4">Visit Us</h3>
            <address className="not-italic text-sm text-[#7DD3FC]/60 space-y-1">
              <p>20801 Gulf Fwy Suite 5</p>
              <p>BayWay Village Shopping Center</p>
              <p>Webster, TX 77598</p>
            </address>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-orbitron font-black text-xs px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="border-t border-cyan-900/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7DD3FC]/40">
          <p>&copy; {new Date().getFullYear()} Arcade Houston. All rights reserved.</p>
          <p>20801 Gulf Fwy Suite 5, Webster TX 77598</p>
        </div>
      </div>
    </footer>
  );
}
