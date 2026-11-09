import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[520px] sm:h-[85vh] lg:h-[92vh] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/40090733/pexels-photo-40090733.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2000"
        alt="Elegant woman in fashionable clothing in warm natural light"
        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 w-full">
          <div className="max-w-xl text-[var(--color-ivory)]">
            <p className="eyebrow text-[var(--color-ivory)]/80 mb-6 text-[11px] tracking-[0.3em]">
              The Art of Finding Something Special
            </p>
            <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.75rem] xl:text-6xl leading-[1.05] mb-6 font-light tracking-tight">
              Style worth<br className="hidden sm:block" /> discovering.
            </h1>
            <p className="text-sm sm:text-[15px] leading-[1.7] max-w-md mb-9 text-[var(--color-ivory)]/85 font-light">
              Explore thoughtfully curated fashion finds, from statement dresses to everyday essentials and timeless modest wear.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-none">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-ivory)] text-[var(--color-charcoal)] text-[13px] font-medium tracking-[0.05em] hover:bg-white hover:tracking-[0.08em] transition-all duration-300"
              >
                Shop the Collection
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
              <Link
                to="/new-arrivals"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[var(--color-ivory)] text-[13px] font-medium tracking-[0.05em] border border-[var(--color-ivory)]/40 hover:bg-[var(--color-ivory)]/10 hover:border-[var(--color-ivory)]/70 transition-all duration-300"
              >
                Explore New Arrivals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
