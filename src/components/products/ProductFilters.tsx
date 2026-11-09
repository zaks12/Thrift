import { Filter, X } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/config/brand';
import { getAllSizes } from '@/data/products';
import { Button } from '@/components/ui/Button';

export interface FilterState {
  category: string;
  size: string;
  availability: string;
  minPrice: string;
  maxPrice: string;
}

export const defaultFilters: FilterState = {
  category: '',
  size: '',
  availability: '',
  minPrice: '',
  maxPrice: '',
};

export function ProductFilters({
  filters,
  onChange,
  onClear,
}: {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const allSizes = getAllSizes();

  const hasActiveFilters =
    filters.category || filters.size || filters.availability || filters.minPrice || filters.maxPrice;

  const update = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-3 font-medium">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="category"
              value=""
              checked={filters.category === ''}
              onChange={() => update('category', '')}
              className="accent-[var(--color-charcoal)]"
            />
            All Categories
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={filters.category === cat.id}
                onChange={() => update('category', cat.id)}
                className="accent-[var(--color-charcoal)]"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-3 font-medium">
          Size
        </h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="size"
              value=""
              checked={filters.size === ''}
              onChange={() => update('size', '')}
              className="accent-[var(--color-charcoal)]"
            />
            All Sizes
          </label>
          {allSizes.map((size) => (
            <label key={size} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="size"
                value={size}
                checked={filters.size === size}
                onChange={() => update('size', size)}
                className="accent-[var(--color-charcoal)]"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-3 font-medium">
          Availability
        </h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="availability"
              value=""
              checked={filters.availability === ''}
              onChange={() => update('availability', '')}
              className="accent-[var(--color-charcoal)]"
            />
            All
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="availability"
              value="in-stock"
              checked={filters.availability === 'in-stock'}
              onChange={() => update('availability', 'in-stock')}
              className="accent-[var(--color-charcoal)]"
            />
            In Stock
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="availability"
              value="sold-out"
              checked={filters.availability === 'sold-out'}
              onChange={() => update('availability', 'sold-out')}
              className="accent-[var(--color-charcoal)]"
            />
            Sold Out
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-3 font-medium">
          Price Range (NGN)
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => update('minPrice', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-[var(--color-stone)] bg-[var(--color-white)] focus:outline-none focus:border-[var(--color-charcoal)]"
            aria-label="Minimum price"
            min={0}
          />
          <span className="text-[var(--color-taupe)]">&mdash;</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => update('maxPrice', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-[var(--color-stone)] bg-[var(--color-white)] focus:outline-none focus:border-[var(--color-charcoal)]"
            aria-label="Maximum price"
            min={0}
          />
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={() => {
            onClear();
            setMobileOpen(false);
          }}
          className="text-sm text-[var(--color-charcoal)] underline underline-offset-2 hover:text-[var(--color-champagne)] transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <>
      <div className="hidden lg:block">
        <FilterContent />
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 border border-[var(--color-stone)] text-sm text-[var(--color-charcoal)] bg-[var(--color-white)]"
        >
          <Filter size={16} strokeWidth={1.5} />
          Filters
          {hasActiveFilters && (
            <span className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-[10px] px-1.5 rounded-full">
              &bull;
            </span>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-[var(--color-ivory)] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
          >
            <div className="flex items-center justify-between h-16 px-5 border-b border-[var(--color-stone)]">
              <span className="font-serif text-lg">Filters</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-[var(--color-charcoal)] hover:opacity-60"
                aria-label="Close filters"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <FilterContent />
            </div>
            <div className="px-5 py-4 border-t border-[var(--color-stone)]">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Show Results
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
