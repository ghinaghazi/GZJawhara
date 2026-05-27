const products = [
  // Bracelets
  {
    id: 1,
    name: "Tennis Bracelet",
    category: "Bracelets",
    price: 189,
    image: "/images/tennis-bracelet.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Blue Diamond Bracelet",
    category: "Bracelets",
    price: 229,
    image: "/images/blue-bracelet.jpg",
  },
  {
    id: 3,
    name: "Diamond Bangle",
    category: "Bracelets",
    price: 169,
    image: "/images/diamond-bangle.jpg",
  },
  {
    id: 4,
    name: "Teardrop Bracelet",
    category: "Bracelets",
    price: 300,
    image: "/images/teardrop-bracelet.jpg",
  },

  // Necklaces
  {
    id: 5,
    name: "Luxury Necklace",
    category: "Necklaces",
    price: 229,
    image: "/images/necklace-1.jpg",
  },
  {
    id: 6,
    name: "Crystal Necklace",
    category: "Necklaces",
    price: 300,
    image: "/images/necklace-2.jpg",
  },
  {
    id: 7,
    name: "Classic Necklace",
    category: "Necklaces",
    price: 129,
    image: "/images/necklace-3.jpg",
  },
  {
    id: 8,
    name: "Diamond Necklace",
    category: "Necklaces",
    price: 480,
    image: "/images/diamond-necklace.jpg",
    featured: true,
  },

  // Earrings
  {
    id: 9,
    name: "Earring Set 1",
    category: "Earrings",
    price: 119,
    image: "/images/earring-1.jpg",
  },
  {
    id: 10,
    name: "Earring Set 2",
    category: "Earrings",
    price: 149,
    image: "/images/earring-2.jpg",
    featured: true,
  },
  {
    id: 11,
    name: "Earring Set 3",
    category: "Earrings",
    price: 99,
    image: "/images/earring-3.jpg",
  },
  {
    id: 12,
    name: "Earring Set 4",
    category: "Earrings",
    price: 129,
    image: "/images/earring-4.jpg",
  },

  // Rings
  {
    id: 13,
    name: "Ring 1",
    category: "Rings",
    price: 149,
    image: "/images/ring-1.jpg",
  },
  {
    id: 14,
    name: "Ring 2",
    category: "Rings",
    price: 184,
    image: "/images/ring-2.jpg",
  },
  {
    id: 15,
    name: "Ring 3",
    category: "Rings",
    price: 199,
    image: "/images/ring-3.jpg",
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export default products;
