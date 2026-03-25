export interface Game {
  slug: string;
  title: string;
  type: string;
  thumbnail: string;
  description: string;
  players: string;
  duration: string;
  intensity: string;
  minAge: string;
  category: "zombie" | "scifi" | "pvp" | "family" | "tropical" | "horror";
}

export const allGames: Game[] = [
  {
    slug: "outbreak",
    title: "Outbreak",
    type: "Zombie Survival",
    thumbnail: "/game-outbreak.webp",
    description: "Fight through post-apocalyptic streets and sewers alongside your team. Coordinated zombie hordes, limited ammo, and survival on the line.",
    players: "2–8",
    duration: "30 min",
    intensity: "High",
    minAge: "13+",
    category: "zombie",
  },
  {
    slug: "outbreak-2-mall-mayhem",
    title: "Outbreak 2: Mall Mayhem",
    type: "Zombie Survival",
    thumbnail: "/mm_banner.webp",
    description: "The undead have overrun a shopping mall. Fight floor by floor with your squad through hordes of increasingly dangerous zombies.",
    players: "2–8",
    duration: "30 min",
    intensity: "High",
    minAge: "13+",
    category: "zombie",
  },
  {
    slug: "undead-arena",
    title: "Undead Arena",
    type: "Zombie Survival",
    thumbnail: "/game-undead-arena.webp",
    description: "Wave-based zombie combat with competitive scoring. Your team competes for the highest kill count while surviving increasingly difficult waves.",
    players: "2–8",
    duration: "30 min",
    intensity: "High",
    minAge: "13+",
    category: "zombie",
  },
  {
    slug: "space-marine-vr",
    title: "Space Marine VR",
    type: "Sci-Fi Mission",
    thumbnail: "/game-space-marine.webp",
    description: "Based on Warhammer 40,000. Breach alien space stations, fight xenos threats, and complete military objectives alongside your squad.",
    players: "2–8",
    duration: "45 min",
    intensity: "High",
    minAge: "13+",
    category: "scifi",
  },
  {
    slug: "singularity",
    title: "Singularity",
    type: "Sci-Fi Mission",
    thumbnail: "/game-singularity.webp",
    description: "Navigate a space station overrun by rogue AI. Puzzle-solving and environmental storytelling in a non-violent sci-fi experience.",
    players: "2–8",
    duration: "30 min",
    intensity: "Medium",
    minAge: "13+",
    category: "scifi",
  },
  {
    slug: "sol-raiders",
    title: "Sol Raiders",
    type: "PvP Esports",
    thumbnail: "/game-sol-raiders.webp",
    description: "4–8 players split into two rival squads for objective-based VR combat. No AI enemies — pure human vs human competition in real time.",
    players: "4–8",
    duration: "15 min",
    intensity: "High",
    minAge: "13+",
    category: "pvp",
  },
  {
    slug: "engineerium",
    title: "Engineerium",
    type: "Family Adventure",
    thumbnail: "/game-engineerium.webp",
    description: "Explore impossible geometric structures in a breathtaking non-combat VR world. Perfect for first-timers, families, and all ages from 6 up.",
    players: "2–8",
    duration: "30 min",
    intensity: "Low",
    minAge: "6+",
    category: "family",
  },
  {
    slug: "far-cry-vr",
    title: "Far Cry VR",
    type: "Tropical Action",
    thumbnail: "/game-far-cry-vr.webp",
    description: "Fight pirate crews on a tropical island in the Far Cry universe. Co-op action across jungle, caves, and coastal combat zones.",
    players: "2–8",
    duration: "30 min",
    intensity: "High",
    minAge: "16+",
    category: "tropical",
  },
  {
    slug: "haunted",
    title: "Haunted",
    type: "VR Horror",
    thumbnail: "/haunted-main-gameplay.webp",
    description: "A pitch-black horror VR experience. Navigate terrifying environments where the unknown is around every corner. Not for the faint-hearted.",
    players: "2–8",
    duration: "30 min",
    intensity: "Extreme",
    minAge: "15+",
    category: "horror",
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return allGames.find((g) => g.slug === slug);
}

export function getGamesByCategory(category: Game["category"]): Game[] {
  return allGames.filter((g) => g.category === category);
}

export function getRelatedGames(slug: string, limit = 3): Game[] {
  const game = getGameBySlug(slug);
  if (!game) return allGames.slice(0, limit);
  return allGames
    .filter((g) => g.slug !== slug && g.category === game.category)
    .slice(0, limit);
}
