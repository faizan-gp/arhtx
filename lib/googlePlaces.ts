export const STATIC_TOTAL = 424;

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

export interface GooglePlacesResult {
  reviews: GoogleReview[];
  rating: number;
  totalRatings: number;
}

const STATIC_REVIEWS: GoogleReview[] = [
  { author_name: "Sarah M.", rating: 5, text: "Absolutely incredible experience! The zombie survival game had us screaming and laughing the entire time. The Game Masters were amazing — explained everything clearly and kept us safe. Will definitely be back!", relative_time_description: "2 weeks ago" },
  { author_name: "Marcus T.", rating: 5, text: "Brought my whole team for corporate team building. Best decision ever. Everyone from the VR skeptics to the gaming enthusiasts was completely blown away. The technology is next level.", relative_time_description: "1 month ago" },
  { author_name: "Jennifer L.", rating: 5, text: "We did Sol Raiders for my husband's birthday — the competitive PvP format created the perfect rivalry between friend groups. We're already planning our return visit.", relative_time_description: "3 weeks ago" },
  { author_name: "David K.", rating: 5, text: "Space Marine VR was beyond anything I expected. The scale of the environments, the audio, the actual physical movement — nothing else comes close. Highly recommend for any group.", relative_time_description: "1 week ago" },
  { author_name: "Amanda R.", rating: 5, text: "Took my kids (12 and 14) and we did Engineerium first, then Outbreak. Engineerium was beautiful and peaceful, Outbreak had us working as a team under real pressure. Perfect combo.", relative_time_description: "1 month ago" },
  { author_name: "Carlos V.", rating: 5, text: "Did the bachelor party here. Sol Raiders vs Outbreak back to back — the memories from this alone will last longer than anything else we did that weekend. Book it.", relative_time_description: "2 months ago" },
];

export async function fetchGoogleReviews(): Promise<GooglePlacesResult | null> {
  // In production, this would call the Google Places API
  // Returning static data for build/development
  return {
    reviews: STATIC_REVIEWS,
    rating: 5.0,
    totalRatings: STATIC_TOTAL,
  };
}
