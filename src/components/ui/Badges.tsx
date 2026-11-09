import type { Condition } from '@/types';

export function StockBadge({ stock }: { stock: number }) {
  if (stock === 0) {
    return (
      <span className="inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase border border-[var(--color-taupe)] text-[var(--color-taupe)]">
        Sold Out
      </span>
    );
  }
  if (stock === 1) {
    return (
      <span className="inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase border border-[var(--color-champagne)] text-[var(--color-champagne)] bg-[var(--color-cream)]">
        Last One
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase border border-[var(--color-stone)] text-[var(--color-charcoal)]/60">
      In Stock
    </span>
  );
}

export function ConditionBadge({ condition }: { condition: Condition }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase border border-[var(--color-stone)] text-[var(--color-charcoal)]/70">
      {condition}
    </span>
  );
}

export function NewArrivalBadge() {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
      New In
    </span>
  );
}
