import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { categories } from '@/config/brand';
import { getProductsByCategory } from '@/data/products';

export function CollectionsPage() {
  return (
    <>
      <SEO title="Collections" description="Explore our curated fashion collections by category." />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Collections' }]} />
        <div className="mb-10 pt-2">
          <p className="section-eyebrow">Curated Edits</p>
          <h1 className="section-title">Collections</h1>
          <div className="editorial-divider mt-5" />
          <p className="text-sm text-[var(--color-taupe)] mt-5 max-w-lg leading-relaxed">
            Explore our curated edits, each thoughtfully assembled to help you find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="space-y-8">
          {categories.map((cat) => {
            const catProducts = getProductsByCategory(cat.id);
            const availableCount = catProducts.filter((p) => p.stock > 0).length;
            return (
              <div
                key={cat.id}
                className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center"
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="group relative overflow-hidden aspect-[16/10] bg-[var(--color-cream)]"
                >
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="lg:pl-6">
                  <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-taupe)] mb-2">
                    {catProducts.length} pieces
                  </p>
                  <h2 className="font-serif text-2xl lg:text-3xl text-[var(--color-charcoal)] mb-3 font-light leading-tight">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-[var(--color-charcoal)]/80 leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <p className="text-xs text-[var(--color-taupe)] mb-5">
                    {availableCount} currently available
                  </p>
                  <Link
                    to={`/shop?category=${cat.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors group"
                  >
                    Shop {cat.shortName}
                    <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
