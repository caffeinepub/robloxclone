export interface Game {
  id: string;
  title: string;
  genre: string;
  playerCount: string;
  likes: string;
  thumbnail: string;
  description: string;
  gradient: string;
}

export interface AvatarItem {
  id: string;
  name: string;
  category: "Hat" | "Shirt" | "Pants" | "Accessory" | "Face" | "Gear";
  price: number;
  gradient: string;
  emoji: string;
}

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  status?: string;
}

export interface FeedCard {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  rating: number;
  gradient: string;
}

export const heroGames: Game[] = [
  {
    id: "1",
    title: "Adopt Me!",
    genre: "Roleplay",
    playerCount: "124K playing",
    likes: "4.2M",
    thumbnail: "/assets/generated/game-adopt-me.dim_400x225.jpg",
    description: "Raise and trade adorable pets in a colorful world!",
    gradient: "from-pink-400 to-orange-300",
  },
  {
    id: "2",
    title: "Brookhaven",
    genre: "Roleplay",
    playerCount: "98K playing",
    likes: "3.8M",
    thumbnail: "/assets/generated/game-brookhaven.dim_400x225.jpg",
    description: "Live your suburban dream life in Brookhaven!",
    gradient: "from-sky-400 to-emerald-300",
  },
  {
    id: "3",
    title: "Blox Fruits",
    genre: "Adventure",
    playerCount: "86K playing",
    likes: "3.1M",
    thumbnail: "/assets/generated/game-blox-fruits.dim_400x225.jpg",
    description: "Hunt for powerful fruits and battle enemies!",
    gradient: "from-orange-500 to-red-400",
  },
  {
    id: "4",
    title: "Tower of Hell",
    genre: "Obby",
    playerCount: "52K playing",
    likes: "2.4M",
    thumbnail: "/assets/generated/game-tower-of-hell.dim_400x225.jpg",
    description: "Climb to the top without any checkpoints!",
    gradient: "from-purple-500 to-blue-400",
  },
  {
    id: "5",
    title: "Murder Mystery 2",
    genre: "Mystery",
    playerCount: "41K playing",
    likes: "1.9M",
    thumbnail: "/assets/generated/game-murder-mystery.dim_400x225.jpg",
    description: "Find the murderer before they get everyone!",
    gradient: "from-gray-700 to-purple-600",
  },
];

export const recentGames: Game[] = [
  {
    id: "6",
    title: "Dragon Simulator",
    genre: "RPG",
    playerCount: "33K playing",
    likes: "1.2M",
    thumbnail: "/assets/generated/game-dragon-sim.dim_400x225.jpg",
    description: "Become the ultimate dragon and rule the skies!",
    gradient: "from-red-500 to-orange-400",
  },
  {
    id: "7",
    title: "Natural Disaster",
    genre: "Survival",
    playerCount: "28K playing",
    likes: "980K",
    thumbnail: "/assets/generated/game-natural-disaster.dim_400x225.jpg",
    description: "Survive earthquakes, floods, and tornadoes!",
    gradient: "from-yellow-500 to-green-400",
  },
  {
    id: "8",
    title: "Speed Run 4",
    genre: "Obby",
    playerCount: "19K playing",
    likes: "760K",
    thumbnail: "",
    description: "Race through 30 insane levels at top speed!",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "9",
    title: "Jailbreak",
    genre: "Action",
    playerCount: "47K playing",
    likes: "2.1M",
    thumbnail: "",
    description: "Rob banks and escape the law in open world!",
    gradient: "from-slate-600 to-blue-600",
  },
  {
    id: "10",
    title: "Pet Simulator X",
    genre: "Simulator",
    playerCount: "61K playing",
    likes: "2.7M",
    thumbnail: "",
    description: "Hatch eggs and collect legendary pets!",
    gradient: "from-violet-500 to-pink-400",
  },
  {
    id: "11",
    title: "Royale High",
    genre: "Roleplay",
    playerCount: "44K playing",
    likes: "1.8M",
    thumbnail: "",
    description: "Attend a magical princess academy!",
    gradient: "from-pink-500 to-rose-400",
  },
];

export const featuredGames: Game[] = [
  ...heroGames,
  ...recentGames.slice(0, 3),
  {
    id: "12",
    title: "Tycoon Magnate",
    genre: "Simulator",
    playerCount: "22K playing",
    likes: "830K",
    thumbnail: "",
    description: "Build your empire and become a billionaire!",
    gradient: "from-amber-500 to-yellow-400",
  },
];

export const allGames: Game[] = [
  ...heroGames,
  ...recentGames,
  {
    id: "12",
    title: "Tycoon Magnate",
    genre: "Simulator",
    playerCount: "22K playing",
    likes: "830K",
    thumbnail: "",
    description: "Build your empire and become a billionaire!",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    id: "13",
    title: "Dungeon Quest",
    genre: "RPG",
    playerCount: "37K playing",
    likes: "1.4M",
    thumbnail: "",
    description: "Defeat bosses and collect epic loot!",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "14",
    title: "Welcome to Bloxburg",
    genre: "Roleplay",
    playerCount: "55K playing",
    likes: "2.3M",
    thumbnail: "",
    description: "Build your dream home and live your life!",
    gradient: "from-lime-500 to-green-500",
  },
  {
    id: "15",
    title: "Arsenal",
    genre: "FPS",
    playerCount: "31K playing",
    likes: "1.1M",
    thumbnail: "",
    description: "Fast-paced gun game with 100+ weapons!",
    gradient: "from-red-600 to-orange-500",
  },
];

export const avatarItems: AvatarItem[] = [
  {
    id: "a1",
    name: "Neon Cowboy Hat",
    category: "Hat",
    price: 150,
    gradient: "from-orange-400 to-red-500",
    emoji: "🤠",
  },
  {
    id: "a2",
    name: "Galaxy Shirt",
    category: "Shirt",
    price: 75,
    gradient: "from-violet-500 to-blue-500",
    emoji: "👕",
  },
  {
    id: "a3",
    name: "Dragon Wings",
    category: "Accessory",
    price: 450,
    gradient: "from-red-500 to-orange-400",
    emoji: "🐉",
  },
  {
    id: "a4",
    name: "Camo Cargo Pants",
    category: "Pants",
    price: 60,
    gradient: "from-green-600 to-lime-400",
    emoji: "👖",
  },
  {
    id: "a5",
    name: "Laser Sword",
    category: "Gear",
    price: 320,
    gradient: "from-cyan-400 to-blue-500",
    emoji: "⚔️",
  },
  {
    id: "a6",
    name: "Crown of Glory",
    category: "Hat",
    price: 500,
    gradient: "from-yellow-400 to-amber-500",
    emoji: "👑",
  },
  {
    id: "a7",
    name: "Rainbow Face",
    category: "Face",
    price: 50,
    gradient: "from-pink-400 to-violet-400",
    emoji: "🌈",
  },
  {
    id: "a8",
    name: "Jetpack Elite",
    category: "Accessory",
    price: 280,
    gradient: "from-slate-500 to-blue-600",
    emoji: "🚀",
  },
];

export const friends: Friend[] = [
  {
    id: "f1",
    username: "StarBlaster99",
    avatar: "SB",
    isOnline: true,
    status: "Playing Blox Fruits",
  },
  {
    id: "f2",
    username: "NinjaXpert",
    avatar: "NX",
    isOnline: true,
    status: "Playing Jailbreak",
  },
  { id: "f3", username: "CoolKid2026", avatar: "CK", isOnline: false },
  {
    id: "f4",
    username: "ProGamer_Z",
    avatar: "PG",
    isOnline: true,
    status: "Playing Adopt Me!",
  },
];

export const recentActivities = [
  {
    id: "act1",
    user: "StarBlaster99",
    avatar: "SB",
    action: "joined Blox Fruits",
    time: "2 min ago",
    color: "bg-orange-500",
  },
  {
    id: "act2",
    user: "NinjaXpert",
    avatar: "NX",
    action: "earned 500 Robux",
    time: "15 min ago",
    color: "bg-purple-500",
  },
  {
    id: "act3",
    user: "ProGamer_Z",
    avatar: "PG",
    action: "unlocked Dragon Wings",
    time: "1 hr ago",
    color: "bg-red-500",
  },
];

export const feedCards: FeedCard[] = [
  {
    id: "fc1",
    title: "New Dragon Simulator Update: Mythic Dragons!",
    excerpt:
      "The latest update brings 5 new mythic dragons with unique abilities. Check out the Fire Phoenix and Frost Leviathan!",
    image: "/assets/generated/game-dragon-sim.dim_400x225.jpg",
    author: "BloxNews",
    rating: 4.8,
    gradient: "from-red-500 to-orange-400",
  },
  {
    id: "fc2",
    title: "Blox Fruits Season 3: New Islands Discovered",
    excerpt:
      "Explorers have found 3 new islands packed with rare fruits and powerful bosses. The Sea King awaits!",
    image: "/assets/generated/game-blox-fruits.dim_400x225.jpg",
    author: "GamingWeekly",
    rating: 4.6,
    gradient: "from-orange-500 to-red-400",
  },
];

export const userProfile = {
  username: "AlexJ_99",
  avatar: "AJ",
  robux: 4320,
  friends: 47,
  joinDate: "March 2021",
  level: 42,
  badges: ["Veteran", "Creator", "Collector"],
  createdGames: [
    {
      id: "cg1",
      title: "AlexJ's Adventure",
      visits: "12.4K",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      id: "cg2",
      title: "Puzzle World",
      visits: "5.7K",
      gradient: "from-purple-500 to-pink-400",
    },
  ],
};
