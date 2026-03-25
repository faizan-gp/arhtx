import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Arcade Houston | Location, Hours & Booking Help",
  description: "Get in touch with Arcade Houston. Find our VR arena location, hours, phone number, and email. Serving Houston, Clear Lake, League City, and Pearland in Webster TX.",
  alternates: { canonical: "https://arcadehouston.com/contact-us" },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white">Get in <span className="text-stroke-cyan">Touch</span></h1>
          <p className="mt-4 text-[#7DD3FC] max-w-xl mx-auto">Have a question about booking, private events, or what to expect? We'd love to help.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Location", value: "BayWay Village Shopping Center\n20801 Gulf Fwy Suite 5\nHouston Area, TX 77598" },
              { icon: Phone, label: "Phone", value: "(469) 404-9149" },
              { icon: Mail, label: "Email", value: "zero@zlwebster.com" },
              { icon: Clock, label: "Hours", value: "Mon–Tue: 3pm–11pm\nWed–Thu: 2pm–11pm\nFri–Sun: 11am–11pm" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-6 flex items-start gap-4">
                <Icon size={22} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-orbitron text-xs font-bold text-white/60 uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-sm text-[#ECFEFF] whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass rounded-2xl p-8 flex flex-col justify-center text-center">
            <h2 className="font-orbitron text-xl font-black text-white mb-4">Ready to Book Your Session?</h2>
            <p className="text-[#7DD3FC] text-sm mb-6">The fastest way to secure your spot at Zero Latency Webster, Houston is to book directly through our online booking system.</p>
            <BookGameButton label="Book Online Now" source="contact" />
            <p className="mt-6 text-xs text-[#7DD3FC]/50">Walk-ins welcome when slots are available.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
