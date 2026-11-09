import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/config/brand';

export function FeaturedCollection() {
  const featured = categories.slice(0, 3);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Curated Edits</p>
          <h2 className="section-title">Featured collections</h2>
          <div className="editorial-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] bg-[var(--color-beige)]"
            >
              <img
                src={cat.image}
                alt={cat.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-[var(--color-ivory)]">
                <h3 className="font-serif text-2xl lg:text-[1.75rem] mb-1.5 font-light leading-tight">{cat.name}</h3>
                <p className="text-[13px] opacity-75 mb-4 font-light leading-relaxed">{cat.description}</p>
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium">
                  Explore
                  <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/collections"
            className="btn-secondary"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
