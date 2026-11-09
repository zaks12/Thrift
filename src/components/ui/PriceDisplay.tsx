import { formatPrice } from '@/lib/format';

export function PriceDisplay({
  price,
  originalPrice,
  size = 'md',
}: {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass =
    size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-base';

  if (originalPrice && originalPrice > price) {
    return (
      <div className="flex items-baseline gap-2">
        <span className={`${sizeClass} font-medium text-[var(--color-charcoal)]`}>
          {formatPrice(price)}
        </span>
        <span className="text-sm text-[var(--color-taupe)] line-through">
          {formatPrice(originalPrice)}
        </span>
      </div>
    );
  }

  return (
    <span className={`${sizeClass} font-medium text-[var(--color-charcoal)]`}>
      {formatPrice(price)}
    </span>
  );
}
