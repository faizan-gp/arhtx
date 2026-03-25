import { Star } from 'lucide-react';
import type { GoogleReview } from '@/lib/googlePlaces';

interface ReviewsProps {
  liveReviews?: GoogleReview[];
  totalRatings: number;
  rating: number;
}

export default function Reviews({ liveReviews, totalRatings, rating }: ReviewsProps) {
  const reviews = liveReviews ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      {/* Rating summary */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="flex items-center gap-1">
          {[1,2,3,4,5].map((n) => (
            <Star key={n} size={20} className="fill-cyan-400 text-cyan-400" />
          ))}
        </div>
        <span className="font-orbitron font-black text-2xl text-white">{rating.toFixed(1)}</span>
        <span className="text-[#7DD3FC]/60 text-sm">{totalRatings.toLocaleString()}+ reviews</span>
        <a
          href="https://g.page/r/zerolatencyhoustongoogle"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#7DD3FC]/60 hover:text-white transition-colors"
        >
          <img src="/Google.svg" alt="Google" className="w-4 h-4" />
          Google
        </a>
      </div>

      {/* Review cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-cyan-900/40 flex items-center justify-center text-cyan-400 font-orbitron font-black text-sm shrink-0">
                {review.author_name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{review.author_name}</p>
                <p className="text-xs text-[#7DD3FC]/40">{review.relative_time_description}</p>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} size={12} className="fill-cyan-400 text-cyan-400" />
              ))}
            </div>
            <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
