import { useState } from 'react';
import { brand } from '@/config/brand';
import { useToast } from '@/context/ToastContext';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail('');
    showToast('Thank you for your interest. Newsletter signup is coming soon.');
  };

  return (
    <section className="py-20 lg:py-24 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
        <p className="section-eyebrow">Stay Connected</p>
        <h2 className="font-serif text-3xl lg:text-[2.5rem] text-[var(--color-charcoal)] mb-4 font-light leading-tight">
          Stay in the loop
        </h2>
        <p className="text-sm text-[var(--color-taupe)] mb-8 max-w-md mx-auto font-light leading-relaxed">
          Be the first to know when new pieces arrive. Sign up for updates from {brand.name}.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="input-field flex-1"
            aria-label="Email address"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
        {brand.mode === 'demo' && (
          <p className="text-[11px] text-[var(--color-taupe)] mt-5 tracking-wide">
            Demo mode: newsletter signup is not yet connected to an email service.
          </p>
        )}
      </div>
    </section>
  );
}
