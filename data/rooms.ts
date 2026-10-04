export type RoomTour = {
  label: string;
  title: string;
  description: string;
  image: string;
};

export type Review = {
  name: string;
  stay: string;
  rating: number;
  quote: string;
  date: string;
};

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
  tour: RoomTour[];
  reviews: Review[];
};

const commonReviews: Review[] = [
  { name: "Ananya R.", stay: "Weekend escape", rating: 5, quote: "The kind of stay where every hour feels intentionally unhurried. Beautiful room, thoughtful team, unforgettable sunset.", date: "September 2026" },
  { name: "Arjun & Meera", stay: "Anniversary stay", rating: 5, quote: "From the first welcome drink to breakfast in the garden, Vedora felt incredibly personal without ever feeling formal.", date: "August 2026" },
  { name: "Rahul S.", stay: "Solo recharge", rating: 5, quote: "Quiet, tasteful and beautifully designed. I came for two nights and immediately wished I had booked four.", date: "July 2026" }
];

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
    amenities: ["Private garden", "Outdoor rain shower", "King bed", "Breakfast for two", "Wi-Fi", "Turn-down service"],
    tour: [
      { label: "01", title: "The bedroom", description: "A quiet king room wrapped in linen, timber and warm evening light.", image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85" },
      { label: "02", title: "Garden lounge", description: "Your private outdoor corner for coffee, reading and late conversations.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85" },
      { label: "03", title: "Rain shower", description: "An open-air bathing ritual tucked behind the garden wall.", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85" }
    ],
    reviews: commonReviews
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
    amenities: ["Private plunge pool", "Terrace", "King bed + daybed", "Breakfast for two", "Mini bar", "Wi-Fi"],
    tour: [
      { label: "01", title: "Pool terrace", description: "Step straight from the suite into your own quiet blue hour.", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=85" },
      { label: "02", title: "The bedroom", description: "Cool stone, soft linen and a view that keeps the morning slow.", image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85" },
      { label: "03", title: "Evening bath", description: "A deep soaking tub for the part of the day that has no schedule.", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85" }
    ],
    reviews: [
      { name: "Ishita K.", stay: "Mini moon", rating: 5, quote: "The pool is exactly what we hoped for. Sunrise swims, coffee on the terrace and the most comfortable bed.", date: "September 2026" },
      { name: "Vikram P.", stay: "Family break", rating: 5, quote: "Beautifully private but never isolated. The suite had everything our family needed.", date: "August 2026" },
      commonReviews[0]
    ]
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
    amenities: ["Private pool", "Outdoor lounge", "King bed", "Butler-style host", "Daily breakfast", "In-room dining"],
    tour: [
      { label: "01", title: "Villa lounge", description: "Our largest indoor living space, designed for long lunches and late check-ins.", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=85" },
      { label: "02", title: "Private pool", description: "A secluded pool and sun deck reserved entirely for your villa.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85" },
      { label: "03", title: "Night ritual", description: "A quiet master bath with deep soaking tub and soft ambient light.", image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1600&q=85" }
    ],
    reviews: [
      { name: "Dev & Sara", stay: "Celebration weekend", rating: 5, quote: "It felt like having a private resort for the weekend. The villa is spectacular, especially at dusk.", date: "September 2026" },
      { name: "Karan M.", stay: "Family holiday", rating: 5, quote: "Huge, peaceful and incredibly thoughtful. The service felt warm without being intrusive.", date: "June 2026" },
      commonReviews[1]
    ]
  }
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}