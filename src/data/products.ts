import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'p01',
    slug: 'elegant-occasion-gown',
    name: 'Elegant Occasion Gown',
    category: 'dresses-gowns',
    shortDescription: 'A shimmering sequin gown perfect for special occasions.',
    fullDescription:
      'This elegant occasion gown features a subtle shimmer that catches the light beautifully. A thoughtfully curated find in excellent condition, ideal for weddings, formal dinners, and celebratory evenings. The silhouette is timeless and flattering, with a fit that moves gracefully.',
    price: 18500,
    originalPrice: 28000,
    images: [
      'https://images.pexels.com/photos/15092133/pexels-photo-15092133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/24740604/pexels-photo-24740604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M', 'L'],
    stock: 1,
    condition: 'Excellent',
    color: 'Champagne',
    featured: true,
    isNewArrival: true,
    dateAdded: '2026-10-25',
  },
  {
    id: 'p02',
    slug: 'floral-midi-dress',
    name: 'Floral Midi Dress',
    category: 'dresses-gowns',
    shortDescription: 'A delicate floral midi dress with a feminine silhouette.',
    fullDescription:
      'A charming floral midi dress that pairs beautifully with both heels and flats. The fabric drapes softly and the print is subtle enough for both casual outings and dressier daytime events. Curated in very good condition with minimal signs of wear.',
    price: 12000,
    images: [
      'https://images.pexels.com/photos/1537497/pexels-photo-1537497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17901631/pexels-photo-17901631.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['XS', 'S', 'M'],
    stock: 2,
    condition: 'Very Good',
    color: 'Ivory Floral',
    featured: false,
    isNewArrival: true,
    dateAdded: '2026-10-22',
  },
  {
    id: 'p03',
    slug: 'classic-denim-jeans',
    name: 'Classic Denim Jeans',
    category: 'jeans-denim',
    shortDescription: 'Well-fitted classic denim jeans in a versatile wash.',
    fullDescription:
      'A pair of classic denim jeans with a clean, versatile wash that works with almost anything in your wardrobe. The fit is tailored yet comfortable. In very good condition with no visible wear marks. A reliable everyday staple.',
    price: 8500,
    images: [
      'https://images.pexels.com/photos/22223037/pexels-photo-22223037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17083404/pexels-photo-17083404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['26', '28', '30', '32'],
    stock: 3,
    condition: 'Very Good',
    color: 'Mid-wash Blue',
    featured: false,
    isNewArrival: false,
    dateAdded: '2026-10-10',
  },
  {
    id: 'p04',
    slug: 'wide-leg-denim-jeans',
    name: 'Wide-Leg Denim Jeans',
    category: 'jeans-denim',
    shortDescription: 'Contemporary wide-leg denim with a relaxed silhouette.',
    fullDescription:
      'A modern take on denim, these wide-leg jeans offer a relaxed yet polished silhouette. Pairs effortlessly with fitted tops and structured blouses. In excellent condition, this piece brings a contemporary edge to a classic wardrobe staple.',
    price: 9500,
    images: [
      'https://images.pexels.com/photos/9722371/pexels-photo-9722371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34977382/pexels-photo-34977382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M', 'L'],
    stock: 2,
    condition: 'Excellent',
    color: 'Light Blue',
    featured: true,
    isNewArrival: true,
    dateAdded: '2026-10-24',
  },
  {
    id: 'p05',
    slug: 'everyday-ribbed-top',
    name: 'Everyday Ribbed Top',
    category: 'tops-blouses',
    shortDescription: 'A soft ribbed top that layers beautifully year-round.',
    fullDescription:
      'An everyday ribbed top with a figure-skimming fit and soft texture. This versatile piece works on its own or as a layering foundation. In good condition with light wear consistent with gentle use. A practical and stylish basic.',
    price: 5500,
    images: [
      'https://images.pexels.com/photos/7945547/pexels-photo-7945547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7945542/pexels-photo-7945542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 4,
    condition: 'Good',
    color: 'White',
    featured: false,
    isNewArrival: false,
    dateAdded: '2026-10-05',
  },
  {
    id: 'p06',
    slug: 'satin-finish-blouse',
    name: 'Satin-Finish Blouse',
    category: 'tops-blouses',
    shortDescription: 'A lustrous satin-finish blouse for refined styling.',
    fullDescription:
      'A satin-finish blouse with a subtle sheen that elevates any outfit. The fabric flows beautifully and the cut is both professional and feminine. In excellent condition, this piece transitions seamlessly from day to evening.',
    price: 7800,
    images: [
      'https://images.pexels.com/photos/15764810/pexels-photo-15764810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11044912/pexels-photo-11044912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M'],
    stock: 1,
    condition: 'Excellent',
    color: 'Cream',
    featured: true,
    isNewArrival: true,
    dateAdded: '2026-10-20',
  },
  {
    id: 'p07',
    slug: 'pleated-midi-skirt',
    name: 'Pleated Midi Skirt',
    category: 'skirts',
    shortDescription: 'A flowing pleated midi skirt with elegant movement.',
    fullDescription:
      'A pleated midi skirt that moves beautifully with every step. The fabric is lightweight and the pleats hold their shape well. In very good condition, this skirt pairs equally well with a tucked-in blouse or a simple knit top.',
    price: 6800,
    images: [
      'https://images.pexels.com/photos/39457731/pexels-photo-39457731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4690501/pexels-photo-4690501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M', 'L'],
    stock: 2,
    condition: 'Very Good',
    color: 'Blue Floral',
    featured: false,
    isNewArrival: true,
    dateAdded: '2026-10-18',
  },
  {
    id: 'p08',
    slug: 'classic-a-line-skirt',
    name: 'Classic A-Line Skirt',
    category: 'skirts',
    shortDescription: 'A timeless A-line skirt that flatters every figure.',
    fullDescription:
      'A classic A-line skirt with a clean silhouette that never goes out of style. The structured fabric holds its shape and the length is versatile for both casual and more dressed-up occasions. In excellent condition.',
    price: 6200,
    images: [
      'https://images.pexels.com/photos/37508237/pexels-photo-37508237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/39457516/pexels-photo-39457516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['XS', 'S', 'M'],
    stock: 0,
    condition: 'Excellent',
    color: 'Black',
    featured: false,
    isNewArrival: false,
    dateAdded: '2026-09-28',
  },
  {
    id: 'p09',
    slug: 'minimalist-black-abaya',
    name: 'Minimalist Black Abaya',
    category: 'abayas-modest-wear',
    shortDescription: 'A clean, minimalist black abaya for understated elegance.',
    fullDescription:
      'A minimalist black abaya with a flowing silhouette and clean lines. The fabric is lightweight and comfortable, making it suitable for everyday wear. In excellent condition, this piece embodies quiet, confident style.',
    price: 14000,
    images: [
      'https://images.pexels.com/photos/32279501/pexels-photo-32279501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13838838/pexels-photo-13838838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 2,
    condition: 'Excellent',
    color: 'Black',
    featured: true,
    isNewArrival: true,
    dateAdded: '2026-10-23',
  },
  {
    id: 'p10',
    slug: 'open-front-modest-abaya',
    name: 'Open-Front Modest Abaya',
    category: 'abayas-modest-wear',
    shortDescription: 'An elegant open-front abaya with intricate detailing.',
    fullDescription:
      'An open-front abaya with delicate embroidery and a graceful drape. This piece layers beautifully over both simple and dressy outfits. In very good condition, it offers a refined modest-wear option with subtle visual interest.',
    price: 16000,
    originalPrice: 22000,
    images: [
      'https://images.pexels.com/photos/32178223/pexels-photo-32178223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35150034/pexels-photo-35150034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['M', 'L', 'XL'],
    stock: 1,
    condition: 'Very Good',
    color: 'Black Embroidered',
    featured: false,
    isNewArrival: true,
    dateAdded: '2026-10-21',
  },
  {
    id: 'p11',
    slug: 'statement-evening-dress',
    name: 'Statement Evening Dress',
    category: 'dresses-gowns',
    shortDescription: 'A bold one-shoulder evening dress for memorable nights.',
    fullDescription:
      'A statement evening dress with a one-shoulder silhouette that commands attention. The fabric has a beautiful drape and the cut is sophisticated. In excellent condition, this piece is perfect for galas, formal dinners, and special celebrations.',
    price: 22000,
    images: [
      'https://images.pexels.com/photos/38962066/pexels-photo-38962066.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/40019903/pexels-photo-40019903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M'],
    stock: 1,
    condition: 'Excellent',
    color: 'Black',
    featured: true,
    isNewArrival: false,
    dateAdded: '2026-10-12',
  },
  {
    id: 'p12',
    slug: 'casual-denim-skirt',
    name: 'Casual Denim Skirt',
    category: 'skirts',
    shortDescription: 'A relaxed denim skirt for effortless everyday style.',
    fullDescription:
      'A casual denim skirt with a comfortable fit and versatile length. This piece works well with trainers and a simple tee or can be dressed up with a blouse. In good condition with light wear. A practical addition to a casual wardrobe.',
    price: 5800,
    images: [
      'https://images.pexels.com/photos/25052992/pexels-photo-25052992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14577053/pexels-photo-14577053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    sizes: ['S', 'M', 'L'],
    stock: 3,
    condition: 'Good',
    color: 'Denim Blue',
    featured: false,
    isNewArrival: false,
    dateAdded: '2026-10-02',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getNewArrivals(): Product[] {
  return products
    .filter((p) => p.isNewArrival)
    .sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}

export function getAllSizes(): string[] {
  const sizeSet = new Set<string>();
  products.forEach((p) => p.sizes.forEach((s) => sizeSet.add(s)));
  return Array.from(sizeSet).sort();
}
