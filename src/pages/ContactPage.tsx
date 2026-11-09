import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { brand } from '@/config/brand';
import { isWhatsappConfigured, buildWhatsAppUrl } from '@/lib/format';
import { useToast } from '@/context/ToastContext';

export function ContactPage() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const whatsappConfigured = isWhatsappConfigured();

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (whatsappConfigured) {
      const msg = `Hello, my name is ${form.name}.\n\n${form.message}\n\nEmail: ${form.email}`;
      window.open(buildWhatsAppUrl(msg), '_blank');
      setForm({ name: '', email: '', message: '' });
    } else {
      showToast('Demo mode: the contact form is not yet connected. Please configure WhatsApp or an email service.');
    }
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch with us." />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />
        <div className="mb-10 pt-2">
          <p className="section-eyebrow">We're Here to Help</p>
          <h1 className="section-title">Get in touch</h1>
          <div className="editorial-divider mt-5" />
          <p className="text-sm text-[var(--color-taupe)] mt-5 max-w-md leading-relaxed">
            Have a question about a piece or your order? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-6">
              Contact information
            </h2>
            <div className="space-y-4">
              {brand.contactEmail ? (
                <div className="flex items-center gap-3">
                  <Mail size={20} strokeWidth={1.5} className="text-[var(--color-taupe)]" />
                  <a href={`mailto:${brand.contactEmail}`} className="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors">
                    {brand.contactEmail}
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Mail size={20} strokeWidth={1.5} className="text-[var(--color-taupe)]" />
                  <span className="text-sm text-[var(--color-taupe)] italic">Email to be confirmed</span>
                </div>
              )}

              {brand.businessPhone ? (
                <div className="flex items-center gap-3">
                  <Phone size={20} strokeWidth={1.5} className="text-[var(--color-taupe)]" />
                  <span className="text-sm text-[var(--color-charcoal)]">{brand.businessPhone}</span>
                </div>
              ) : null}

              {brand.businessAddress ? (
                <div className="flex items-center gap-3">
                  <MapPin size={20} strokeWidth={1.5} className="text-[var(--color-taupe)]" />
                  <span className="text-sm text-[var(--color-charcoal)]">{brand.businessAddress}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <MapPin size={20} strokeWidth={1.5} className="text-[var(--color-taupe)]" />
                  <span className="text-sm text-[var(--color-taupe)] italic">Address to be confirmed</span>
                </div>
              )}
            </div>

            {whatsappConfigured ? (
              <a
                href={buildWhatsAppUrl('Hello, I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                Chat on WhatsApp
              </a>
            ) : (
              <div className="mt-8 p-4 border border-[var(--color-stone)] bg-[var(--color-cream)]">
                <p className="text-xs text-[var(--color-taupe)]">
                  WhatsApp contact will be available once a business number is configured.
                </p>
              </div>
            )}

            {(brand.instagramUrl || brand.facebookUrl) && (
              <div className="mt-8">
                <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-3">Follow us</h3>
                <div className="flex items-center gap-4">
                  {brand.instagramUrl && (
                    <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors" aria-label="Instagram">
                      <Instagram size={22} strokeWidth={1.5} />
                    </a>
                  )}
                  {brand.facebookUrl && (
                    <a href={brand.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors" aria-label="Facebook">
                      <Facebook size={22} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-6">
              Send a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2 block">
                  Name <span className="text-red-700">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="text-xs text-red-700 mt-1" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2 block">
                  Email <span className="text-red-700">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-field"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="text-xs text-red-700 mt-1" role="alert">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2 block">
                  Message <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="input-field resize-none"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-700 mt-1" role="alert">{errors.message}</p>}
              </div>
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Send Message
              </Button>
              {!whatsappConfigured && (
                <p className="text-xs text-[var(--color-taupe)]">
                  Demo mode: this form is not yet connected. WhatsApp or an email service must be configured before launch.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
