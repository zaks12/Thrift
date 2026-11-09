import type { Category } from '@/types';

export const brand = {
  name: 'Maison Thrift',
  shortName: 'Maison Thrift',
  tagline: 'Curated style. Beautifully yours.',
  description:
    'A curated women\u2019s thrift fashion boutique offering thoughtfully selected clothing finds \u2014 from statement dresses to everyday essentials and timeless modest wear.',

  contactEmail: '',
  whatsappNumber: '',
  businessPhone: '',
  businessAddress: '',

  instagramUrl: '',
  facebookUrl: '',
  tiktokUrl: '',

  canonicalUrl: '',
  socialImage: '/og-image.png',
  currency: 'NGN',
  currencyLocale: 'en-NG',

  mode: 'demo' as 'demo' | 'live',

  shippingPolicy: '',
  deliveryDetails: '',

  developerCredit: {
    text: 'Website concept by Zarkode Digital Solutions',
    url: 'https://zarkode.com.ng/',
  },
} as const;

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'New Arrivals', path: '/new-arrivals' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const selectionLink = { label: 'My Selection', path: '/selection' };

export const categories: Category[] = [
  {
    id: 'dresses-gowns',
    name: 'Dresses & Gowns',
    shortName: 'Dresses',
    description: 'Statement dresses and elegant gowns for every occasion.',
    image:
      'https://images.pexels.com/photos/32628116/pexels-photo-32628116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Woman in a stylish pink gown under natural light',
  },
  {
    id: 'jeans-denim',
    name: 'Jeans & Denim',
    shortName: 'Denim',
    description: 'Classic and contemporary denim for everyday wear.',
    image:
      'https://images.pexels.com/photos/16297727/pexels-photo-16297727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Woman in a denim jacket posing against a dark background',
  },
  {
    id: 'tops-blouses',
    name: 'Tops & Blouses',
    shortName: 'Tops',
    description: 'Refined blouses and versatile tops for effortless styling.',
    image:
      'https://images.pexels.com/photos/13633075/pexels-photo-13633075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Woman in a yellow blouse and brown hat in a rustic setting',
  },
  {
    id: 'skirts',
    name: 'Skirts',
    shortName: 'Skirts',
    description: 'Midi, A-line, and casual skirts with elegant movement.',
    image:
      'https://images.pexels.com/photos/4690501/pexels-photo-4690501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Woman in a pleated white skirt and printed blouse',
  },
  {
    id: 'abayas-modest-wear',
    name: 'Abayas & Modest Wear',
    shortName: 'Abayas',
    description: 'Timeless modest wear with understated elegance.',
    image:
      'https://images.pexels.com/photos/33539326/pexels-photo-33539326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Woman in a striped abaya and hijab exuding grace',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
