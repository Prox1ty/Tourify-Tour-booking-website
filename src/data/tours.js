const tours = [
  {
    id: 1,
    slug: "swiss-alps-adventure",
    title: "Swiss Alps Adventure",
    subtitle: "7-Day Hiking Experience",

    country: "Switzerland",
    city: "Interlaken",
    continent: "Europe",

    coverImage: "/images/tours/swiss-alps/cover.jpg",
    gallery: [
      "/images/tours/swiss-alps/1.jpg",
      "/images/tours/swiss-alps/2.jpg",
      "/images/tours/swiss-alps/3.jpg",
    ],

    category: "Adventure",
    duration: 7,
    groupSize: 12,
    difficulty: "Moderate",

    price: 1499,
    discount: 15,

    rating: 4.9,
    reviews: 284,

    featured: true,

    description:
      "Explore breathtaking alpine landscapes, crystal-clear lakes, and charming Swiss villages on this unforgettable hiking adventure.",

    highlights: [
      "Mountain hiking",
      "Cable car ride",
      "Lake cruise",
      "Luxury chalet stay",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Transportation",
      "Professional guide",
    ],

    excluded: [
      "Flights",
      "Travel insurance",
      "Lunch & dinner",
    ],

    guide: {
      name: "John Carter",
      image: "/images/guides/john.jpg",
      experience: 8,
    },
  },

  {
    id: 2,
    slug: "bali-beach-escape",
    title: "Bali Beach Escape",
    subtitle: "Relax in Tropical Paradise",

    country: "Indonesia",
    city: "Bali",
    continent: "Asia",

    coverImage: "/images/tours/bali/cover.jpg",
    gallery: [
      "/images/tours/bali/1.jpg",
      "/images/tours/bali/2.jpg",
      "/images/tours/bali/3.jpg",
    ],

    category: "Beach",
    duration: 6,
    groupSize: 18,
    difficulty: "Easy",

    price: 999,
    discount: 10,

    rating: 4.8,
    reviews: 421,

    featured: true,

    description:
      "Discover white sandy beaches, luxurious resorts, and unforgettable sunsets in beautiful Bali.",

    highlights: [
      "Beach resorts",
      "Snorkeling",
      "Temple tour",
      "Sunset dinner",
    ],

    included: [
      "Resort",
      "Breakfast",
      "Airport transfers",
      "Guide",
    ],

    excluded: [
      "Flights",
      "Personal expenses",
    ],

    guide: {
      name: "Maya Putri",
      image: "/images/guides/maya.jpg",
      experience: 6,
    },
  },

  {
    id: 3,
    slug: "tokyo-cultural-discovery",
    title: "Tokyo Cultural Discovery",
    subtitle: "Tradition Meets Technology",

    country: "Japan",
    city: "Tokyo",
    continent: "Asia",

    coverImage: "/images/tours/tokyo/cover.jpg",
    gallery: [
      "/images/tours/tokyo/1.jpg",
      "/images/tours/tokyo/2.jpg",
      "/images/tours/tokyo/3.jpg",
    ],

    category: "City",
    duration: 5,
    groupSize: 15,
    difficulty: "Easy",

    price: 1799,
    discount: 5,

    rating: 4.9,
    reviews: 536,

    featured: true,

    description:
      "Experience Japan's vibrant capital through ancient temples, bustling markets, and futuristic districts.",

    highlights: [
      "Shibuya Crossing",
      "Senso-ji Temple",
      "Mt. Fuji day trip",
      "Sushi workshop",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Metro pass",
      "Guide",
    ],

    excluded: [
      "Flights",
      "Travel insurance",
    ],

    guide: {
      name: "Kenji Sato",
      image: "/images/guides/kenji.jpg",
      experience: 12,
    },
  },

  {
    id: 4,
    slug: "paris-city-lights",
    title: "Paris City Lights",
    subtitle: "Romantic European Getaway",

    country: "France",
    city: "Paris",
    continent: "Europe",

    coverImage: "/images/tours/paris/cover.jpg",
    gallery: [
      "/images/tours/paris/1.jpg",
      "/images/tours/paris/2.jpg",
      "/images/tours/paris/3.jpg",
    ],

    category: "City",
    duration: 4,
    groupSize: 20,
    difficulty: "Easy",

    price: 1199,
    discount: 0,

    rating: 4.7,
    reviews: 378,

    featured: false,

    description:
      "Visit iconic landmarks including the Eiffel Tower, Louvre Museum, and charming Parisian cafés.",

    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "French cuisine",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Museum tickets",
    ],

    excluded: [
      "Flights",
      "Lunch & dinner",
    ],

    guide: {
      name: "Claire Martin",
      image: "/images/guides/claire.jpg",
      experience: 10,
    },
  },

  {
    id: 5,
    slug: "amazon-rainforest-expedition",
    title: "Amazon Rainforest Expedition",
    subtitle: "Into the Wild",

    country: "Brazil",
    city: "Manaus",
    continent: "South America",

    coverImage: "/images/tours/amazon/cover.jpg",
    gallery: [
      "/images/tours/amazon/1.jpg",
      "/images/tours/amazon/2.jpg",
      "/images/tours/amazon/3.jpg",
    ],

    category: "Wildlife",
    duration: 8,
    groupSize: 10,
    difficulty: "Challenging",

    price: 1899,
    discount: 20,

    rating: 4.8,
    reviews: 192,

    featured: false,

    description:
      "Journey deep into the Amazon rainforest and discover exotic wildlife, rivers, and indigenous culture.",

    highlights: [
      "Jungle trekking",
      "Boat safari",
      "Wildlife spotting",
      "Local villages",
    ],

    included: [
      "Eco lodge",
      "Meals",
      "Transportation",
      "Guide",
    ],

    excluded: [
      "Flights",
      "Travel insurance",
    ],

    guide: {
      name: "Lucas Silva",
      image: "/images/guides/lucas.jpg",
      experience: 11,
    },
  },

  {
    id: 6,
    slug: "santorini-sunsets",
    title: "Santorini Sunsets",
    subtitle: "Aegean Island Escape",

    country: "Greece",
    city: "Santorini",
    continent: "Europe",

    coverImage: "/images/tours/santorini/cover.jpg",
    gallery: [
      "/images/tours/santorini/1.jpg",
      "/images/tours/santorini/2.jpg",
      "/images/tours/santorini/3.jpg",
    ],

    category: "Luxury",
    duration: 5,
    groupSize: 14,
    difficulty: "Easy",

    price: 1599,
    discount: 8,

    rating: 4.9,
    reviews: 341,

    featured: true,

    description:
      "Enjoy luxurious accommodations, stunning sunsets, and crystal-clear waters in beautiful Santorini.",

    highlights: [
      "Sunset cruise",
      "Wine tasting",
      "Beach day",
      "Luxury hotel",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Cruise",
      "Guide",
    ],

    excluded: [
      "Flights",
      "Lunch & dinner",
    ],

    guide: {
      name: "Elena Papadopoulos",
      image: "/images/guides/elena.jpg",
      experience: 9,
    },
  },

  {
    id: 7,
    slug: "egypt-pyramids-discovery",
    title: "Egypt Pyramids Discovery",
    subtitle: "Walk Through Ancient History",

    country: "Egypt",
    city: "Cairo",
    continent: "Africa",

    coverImage: "/images/tours/egypt/cover.jpg",
    gallery: [
      "/images/tours/egypt/1.jpg",
      "/images/tours/egypt/2.jpg",
      "/images/tours/egypt/3.jpg",
    ],

    category: "Cultural",
    duration: 6,
    groupSize: 16,
    difficulty: "Easy",

    price: 1299,
    discount: 12,

    rating: 4.8,
    reviews: 267,

    featured: false,

    description:
      "Discover the Great Pyramids, cruise the Nile, and uncover thousands of years of history.",

    highlights: [
      "Great Pyramids",
      "Sphinx",
      "Nile Cruise",
      "Egyptian Museum",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Transportation",
      "Guide",
    ],

    excluded: [
      "Flights",
      "Visa fees",
    ],

    guide: {
      name: "Ahmed Hassan",
      image: "/images/guides/ahmed.jpg",
      experience: 13,
    },
  },

  {
    id: 8,
    slug: "new-zealand-adventure",
    title: "New Zealand Adventure",
    subtitle: "Mountains, Lakes & Thrills",

    country: "New Zealand",
    city: "Queenstown",
    continent: "Oceania",

    coverImage: "/images/tours/new-zealand/cover.jpg",
    gallery: [
      "/images/tours/new-zealand/1.jpg",
      "/images/tours/new-zealand/2.jpg",
      "/images/tours/new-zealand/3.jpg",
    ],

    category: "Adventure",
    duration: 9,
    groupSize: 10,
    difficulty: "Challenging",

    price: 2499,
    discount: 18,

    rating: 5.0,
    reviews: 164,

    featured: true,

    description:
      "Perfect for thrill-seekers, featuring bungee jumping, hiking, and breathtaking landscapes.",

    highlights: [
      "Bungee jumping",
      "Milford Sound",
      "Helicopter tour",
      "Mountain hiking",
    ],

    included: [
      "Hotel",
      "Breakfast",
      "Adventure activities",
      "Guide",
    ],

    excluded: [
      "Flights",
      "Insurance",
    ],

    guide: {
      name: "Olivia Wilson",
      image: "/images/guides/olivia.jpg",
      experience: 7,
    },
  },
];

export default tours;