import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductSort, type SortOption } from '@/components/products/ProductSort';
import { getNewArrivals } from '@/data/products';
import { useMemo, useState } from 'react';

export function NewArrivalsPage() {
  const [sort, setSort] = useState<SortOption>('newest');

  const products = useMemo(() => {
    const arrivals = getNewArrivals();
    if (sort === 'price-asc') return [...arrivals].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return [...arrivals].sort((a, b) => b.price - a.price);
    return [...arrivals].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
  }, [sort]);

  return (
    <>
      <SEO title="New Arrivals" description="Browse the latest pieces added to our curated collection." />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'New Arrivals' }]} />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-eyebrow">Just In</p>
            <h1 className="section-title">New Arrivals</h1>
          </div>
          <ProductSort value={sort} onChange={setSort} />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
