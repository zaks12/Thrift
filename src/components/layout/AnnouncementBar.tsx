import { brand } from '@/config/brand';

export function AnnouncementBar() {
  return (
    <div className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-center py-2.5 px-4">
      <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-light">
        {brand.tagline}
      </p>
    </div>
  );
}
