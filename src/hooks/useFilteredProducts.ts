import { useMemo } from 'react';
import type { Product } from '@/types';
import { products } from '@/data/products';
import type { FilterState } from '@/components/products/ProductFilters';
import type { SortOption } from '@/components/products/ProductSort';

export function useFilteredProducts(
  filters: FilterState,
  sort: SortOption,
  search: string
) {
  return useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.size) {
      result = result.filter((p) => p.sizes.includes(filters.size));
    }
    if (filters.availability === 'in-stock') {
      result = result.filter((p) => p.stock > 0);
    } else if (filters.availability === 'sold-out') {
      result = result.filter((p) => p.stock === 0);
    }
    if (filters.minPrice) {
      const min = parseInt(filters.minPrice, 10);
      if (!isNaN(min)) result = result.filter((p) => p.price >= min);
    }
    if (filters.maxPrice) {
      const max = parseInt(filters.maxPrice, 10);
      if (!isNaN(max)) result = result.filter((p) => p.price <= max);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
        break;
    }

    return result;
  }, [filters, sort, search]);
}

export function filterProductsForCategory(
  categoryId: string
): Product[] {
  return products.filter((p) => p.category === categoryId);
}
