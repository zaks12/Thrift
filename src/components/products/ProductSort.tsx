import type { ChangeEvent } from 'react';

export type SortOption = 'newest' | 'price-asc' | 'price-desc';

export function ProductSort({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (v: SortOption) => void;
}) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value as SortOption)
        }
        className="appearance-none pl-4 pr-10 py-2.5 bg-[var(--color-white)] border border-[var(--color-stone)] text-sm text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-charcoal)] cursor-pointer"
        aria-label="Sort products"
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      <span
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-taupe)] pointer-events-none"
        aria-hidden="true"
      >
        &#9662;
      </span>
    </div>
  );
}
