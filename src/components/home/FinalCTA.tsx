import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-charcoal)] text-[var(--color-ivory)] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src="https://images.pexels.com/photos/8581033/pexels-photo-8581033.jpeg?auto=compress&cs=tinysrgb&h=400&w=1600"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <p className="eyebrow text-[var(--color-champagne)] mb-6 text-[11px] tracking-[0.3em]">
          Maison Thrift
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] mb-5 leading-[1.15] font-light">
          Your next favourite piece<br className="hidden sm:block" /> is waiting.
        </h2>
        <p className="text-sm lg:text-[15px] text-[var(--color-ivory)]/60 mb-10 max-w-md mx-auto font-light leading-relaxed">
          Browse the full collection and discover something beautifully yours.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-9 py-4 bg-[var(--color-ivory)] text-[var(--color-charcoal)] text-[13px] font-medium tracking-[0.05em] hover:bg-white hover:tracking-[0.08em] transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
