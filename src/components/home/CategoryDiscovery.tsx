import { Link } from 'react-router-dom';
import { categories } from '@/config/brand';

export function CategoryDiscovery() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Browse by Category</p>
          <h2 className="section-title">Find your next favourite</h2>
          <div className="editorial-divider mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {categories.map((cat, index) => {
            const isLarge = index === 0;
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className={`group relative overflow-hidden bg-[var(--color-cream)] ${
                  isLarge ? 'col-span-2 lg:row-span-2 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/5]' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7 text-[var(--color-ivory)]">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] leading-tight font-light">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs lg:text-sm opacity-75 mt-1.5 hidden sm:block font-light tracking-wide">
                    {cat.description}
                  </p>
                  <span className="inline-block mt-3 text-[11px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                    Shop Now
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
