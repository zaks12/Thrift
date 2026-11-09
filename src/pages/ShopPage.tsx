import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/products/ProductGrid';
import {
  ProductFilters,
  defaultFilters,
  type FilterState,
} from '@/components/products/ProductFilters';
import { ProductSort, type SortOption } from '@/components/products/ProductSort';
import { SearchInput } from '@/components/products/SearchInput';
import { EmptyState } from '@/components/ui/EmptyState';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import { getCategoryById } from '@/config/brand';

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || '';

  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    category: categoryParam,
  });
  const [sort, setSort] = useState<SortOption>('newest');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: categoryParam }));
  }, [categoryParam]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (newFilters.category !== categoryParam) {
      if (newFilters.category) {
        setSearchParams({ category: newFilters.category });
      } else {
        setSearchParams({});
      }
    }
  };

  const handleClear = () => {
    setFilters(defaultFilters);
    setSearch('');
    setSearchParams({});
  };

  const results = useFilteredProducts(filters, sort, search);

  const activeCategory = categoryParam ? getCategoryById(categoryParam) : null;
  const heading = activeCategory ? activeCategory.name : 'Shop All';
  const intro = activeCategory
    ? activeCategory.description
    : 'Browse our complete collection of curated fashion finds.';

  const crumbs = useMemo(
    () => [
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
      ...(activeCategory ? [{ label: activeCategory.name }] : []),
    ],
    [activeCategory]
  );

  return (
    <>
      <SEO title={heading} description={intro} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={crumbs} />
        <div className="mb-10 pt-2">
          <p className="section-eyebrow">{activeCategory ? 'Collection' : 'Boutique'}</p>
          <h1 className="section-title">{heading}</h1>
          <div className="editorial-divider mt-5" />
          <p className="text-sm text-[var(--color-taupe)] mt-5 max-w-lg leading-relaxed">{intro}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 lg:shrink-0">
            <ProductFilters
              filters={filters}
              onChange={handleFilterChange}
              onClear={handleClear}
            />
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--color-stone)]">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)]">
                {results.length} {results.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <SearchInput value={search} onChange={setSearch} placeholder="Search by name" />
                <ProductSort value={sort} onChange={setSort} />
              </div>
            </div>

            {results.length > 0 ? (
              <ProductGrid products={results} />
            ) : (
              <EmptyState
                title="No pieces found"
                message="Try adjusting your filters or search to find what you're looking for."
                actionLabel="Clear all filters"
                actionTo="/shop"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
