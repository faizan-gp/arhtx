import type { Metadata } from "next";
import Review from "@/components/Reviews";
import BookGameButton from "@/components/BookBtn";
import { fetchGoogleReviews, STATIC_TOTAL } from "@/lib/googlePlaces";

export const revalidate = 3600; // ISR: re-fetch Google data every hour

export async function generateMetadata(): Promise<Metadata> {
  const live = await fetchGoogleReviews();
  const total = live?.totalRatings ?? STATIC_TOTAL;

  return {
    title: "Arcade Houston Reviews | Google Reviews & Customer Ratings",
    description: `Read real customer reviews of Arcade Houston's VR arena. Rated 5.0 stars from ${total}+ Google reviews. See what Houston arcade fans are saying about our free-roam VR experience.`,
    alternates: { canonical: "https://arcadehouston.com/reviews" },
  };
}

export default async function ReviewsPage() {
  const live = await fetchGoogleReviews();
  const total = live?.totalRatings ?? STATIC_TOTAL;
  const rating = live?.rating ?? 5.0;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center mb-4">
        <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white">
          What <span className="text-stroke-cyan">Houston Says</span> About Us
        </h1>
        <p className="mt-4 text-[#7DD3FC] max-w-xl mx-auto">
          {rating.toFixed(1)} stars from {total.toLocaleString()}+ reviews. Real experiences from real players at Zero Latency Webster, Houston.
        </p>
      </div>
      <Review
        liveReviews={live?.reviews}
        totalRatings={total}
        rating={rating}
      />
      <div className="text-center py-12">
        <BookGameButton label="Join Thousands of Happy Players" source="reviews" />
      </div>
    </section>
  );
}
