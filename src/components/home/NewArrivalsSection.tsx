import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getNewArrivals } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';

export function NewArrivalsSection() {
  const arrivals = getNewArrivals().slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-5">
          <div>
            <p className="section-eyebrow">Just Arrived</p>
            <h2 className="font-serif text-3xl lg:text-[2.75rem] text-[var(--color-charcoal)] font-light leading-tight">
              New arrivals
            </h2>
            <p className="text-sm text-[var(--color-taupe)] mt-3 max-w-md font-light leading-relaxed">
              Fresh finds added to our collection, ready to be discovered.
            </p>
          </div>
          <Link
            to="/new-arrivals"
            className="inline-flex items-center gap-2 text-[13px] text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors group tracking-wide"
          >
            Browse all new arrivals
            <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
