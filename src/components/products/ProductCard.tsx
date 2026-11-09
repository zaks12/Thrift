import { Link } from 'react-router-dom';
import type { Product } from '@/types';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { StockBadge, NewArrivalBadge } from '@/components/ui/Badges';
import { getCategoryById } from '@/config/brand';

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryById(product.category);
  const available = product.stock > 0;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group flex flex-col"
      aria-label={`${product.name}, ${formatPriceAlt(product.price)}`}
    >
      <div className="relative overflow-hidden bg-[var(--color-cream)] aspect-[3/4] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
            available ? '' : 'opacity-50'
          }`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        <div className="absolute top-3.5 left-3.5 flex gap-2">
          {product.isNewArrival && available && <NewArrivalBadge />}
        </div>
        {!available && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-[var(--color-charcoal)]/90 text-[var(--color-ivory)] px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-light">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        {category && (
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-taupe)] font-medium">
            {category.shortName}
          </span>
        )}
        <h3 className="font-serif text-[1.15rem] text-[var(--color-charcoal)] leading-[1.3] group-hover:text-[var(--color-champagne)] transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-0.5">
          <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="sm" />
        </div>
        <div className="flex items-center gap-2.5 mt-1">
          <StockBadge stock={product.stock} />
          {product.sizes.length > 0 && (
            <span className="text-[11px] text-[var(--color-taupe)] tracking-wide">
              {product.sizes.length === 1
                ? `Size ${product.sizes[0]}`
                : `${product.sizes[0]}\u2013${product.sizes[product.sizes.length - 1]}`}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function formatPriceAlt(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
