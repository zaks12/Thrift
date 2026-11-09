import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { LinkButton } from '@/components/ui/Button';

export function AboutPage() {
  return (
    <>
      <SEO title="About" description="The concept behind our curated women's thrift fashion boutique." />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
      </div>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream)]">
            <img
              src="https://images.pexels.com/photos/3765538/pexels-photo-3765538.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
              alt="Young woman wearing a checkered coat in soft indoor lighting"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[var(--color-charcoal)] leading-[1.15] mb-6 font-light">
              Fashion is personal. Finding your style should be too.
            </h1>
            <div className="editorial-divider !mx-0 mb-6" />
            <p className="text-[15px] text-[var(--color-charcoal)]/80 leading-[1.7] mb-4">
              We believe that great style is not about how much you spend, but about the pieces you discover and how they become part of your everyday life.
            </p>
            <p className="text-[15px] text-[var(--color-charcoal)]/80 leading-[1.7] mb-4">
              Our boutique is built around the idea of curated fashion: thoughtfully selected clothing that feels considered, distinctive, and personal. From statement dresses to everyday essentials and timeless modest wear, every piece is chosen with intention.
            </p>
            <p className="text-[15px] text-[var(--color-charcoal)]/80 leading-[1.7]">
              We want to make stylish clothing more accessible, giving carefully chosen pieces another opportunity to be loved and worn with confidence.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16 py-14 border-y border-[var(--color-stone)]">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2 font-light">Curated</h3>
            <p className="text-sm text-[var(--color-taupe)] leading-relaxed">Every piece is individually selected for quality and character.</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2 font-light">Accessible</h3>
            <p className="text-sm text-[var(--color-taupe)] leading-relaxed">Style that feels premium without being out of reach.</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-2 font-light">Honest</h3>
            <p className="text-sm text-[var(--color-taupe)] leading-relaxed">Transparent information about condition and availability.</p>
          </div>
        </div>

        <div className="text-center">
          <LinkButton to="/shop" variant="primary">
            Explore the Collection
            <ArrowRight size={16} strokeWidth={1.5} />
          </LinkButton>
        </div>
      </section>
    </>
  );
}
