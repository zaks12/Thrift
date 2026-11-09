import { Search, X } from 'lucide-react';
import type { ChangeEvent } from 'react';

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search products',
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative flex-1 min-w-[180px]">
      <Search
        size={16}
        strokeWidth={1.5}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-taupe)] pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-9 py-2.5 bg-[var(--color-white)] border border-[var(--color-stone)] text-sm text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-charcoal)] placeholder:text-[var(--color-taupe)]"
        aria-label={placeholder}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-taupe)] hover:text-[var(--color-charcoal)] transition-colors"
          aria-label="Clear search"
        >
          <X size={16} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}
