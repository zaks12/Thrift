import { Sparkles, Tag, Info, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Curated Fashion Finds',
    description: 'Every piece is individually selected for quality, style, and character.',
  },
  {
    icon: Tag,
    title: 'Styles for Every Occasion',
    description: 'From everyday essentials to statement pieces for special moments.',
  },
  {
    icon: Info,
    title: 'Clear Product Information',
    description: 'Transparent details on condition, size, and availability for each item.',
  },
  {
    icon: MessageCircle,
    title: 'Personal WhatsApp Enquiries',
    description: 'Send your enquiry directly through WhatsApp for a personal touch.',
  },
];

export function WhyShopWithUs() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-white)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Why Shop With Us</p>
          <h2 className="section-title">Thoughtfully chosen, honestly presented</h2>
          <div className="editorial-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-stone)]/40">
          {features.map((feature) => (
            <div key={feature.title} className="text-center px-6 py-10 bg-[var(--color-white)]">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 border border-[var(--color-stone)]">
                <feature.icon size={20} strokeWidth={1.25} className="text-[var(--color-charcoal)]" />
              </div>
              <h3 className="font-serif text-[1.25rem] text-[var(--color-charcoal)] mb-3 font-medium leading-snug">
                {feature.title}
              </h3>
              <p className="text-[13px] text-[var(--color-taupe)] leading-[1.7] font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
