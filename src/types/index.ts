export type CategoryId =
  | 'dresses-gowns'
  | 'jeans-denim'
  | 'tops-blouses'
  | 'skirts'
  | 'abayas-modest-wear';

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  image: string;
  imageAlt: string;
}

export type Condition = 'Excellent' | 'Very Good' | 'Good';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: string[];
  stock: number;
  condition: Condition;
  color?: string;
  featured: boolean;
  isNewArrival: boolean;
  dateAdded: string;
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
  maxStock: number;
}

export interface EnquiryForm {
  name: string;
  phone: string;
  note: string;
}
