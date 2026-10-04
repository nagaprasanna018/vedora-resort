export type Room = {
  slug: string;
  name: string;
  short: string;
  description: string;
  tag: string;
  price: number;
  size: string;
  guests: number;
  bed: string;
  image: string;
  gallery: string[];
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "dusk-garden-villa",
    name: "Dusk Garden Villa",
    short: "A private garden sanctuary for two.",
    description: "A slow, sun-washed hideaway opening onto a private garden. Designed for late breakfasts, barefoot afternoons and evenings spent listening to the palms move in the breeze.",
    tag: "MOST INTIMATE",
    price: 18500,
    size: "720 sq ft",
    guests: 2,
    bed: "King bed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85"
    ],
    amenities: ["Private garden", "Outdoor rain shower", "King bed", "Breakfast for two", "Wi-Fi", "Turn-down service"]
  },
  {
    slug: "moonlit-pool-suite",
    name: "Moonlit Pool Suite",
    short: "A poolside suite made for long nights.",
    description: "An expansive suite where the bedroom opens to a private plunge pool. Soft stone, linen and warm wood create a calm retreat after a day in the sun.",
    tag: "PRIVATE POOL",
    price: 24500,
    size: "980 sq ft",
    guests: 3,
    bed: "King bed + daybed",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85"
    ],
    amenities: ["Private plunge pool", "Terrace", "King bed + daybed", "Breakfast for two", "Mini bar", "Wi-Fi"]
  },
  {
    slug: "vedora-signature-villa",
    name: "Vedora Signature Villa",
    short: "Our most generous expression of Vedora.",
    description: "The signature villa pairs generous indoor space with a secluded outdoor lounge and private pool. Made for slow mornings, celebratory dinners and staying a little longer.",
    tag: "THE SIGNATURE STAY",
    price: 32500,
    size: "1,420 sq ft",
    guests: 4,
    bed: "King bed + twin daybeds",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
    ],
    amenities: ["Private pool", "Outdoor lounge", "King bed", "Butler-style host", "Daily breakfast", "In-room dining"]
  }
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}