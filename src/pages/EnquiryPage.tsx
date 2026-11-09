import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { MessageCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { formatPrice, isWhatsappConfigured, buildWhatsAppUrl } from '@/lib/format';
import type { EnquiryForm } from '@/types';

export function EnquiryPage() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState<EnquiryForm>({ name: '', phone: '', note: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappConfigured = isWhatsappConfigured();

  if (items.length === 0 && !submitted) {
    return <Navigate to="/selection" replace />;
  }

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (form.phone.trim() && !/^[0-9+\-\s()]{7,}$/.test(form.phone))
      e.phone = 'Please enter a valid phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!whatsappConfigured) {
      setSubmitted(true);
      return;
    }

    const lines: string[] = [];
    lines.push('Hello MAISON THRIFT, I would like to enquire about the following items:');
    lines.push('');
    if (form.name.trim()) lines.push(`Name: ${form.name}`);
    if (form.phone.trim()) lines.push(`Contact: ${form.phone}`);
    lines.push('');
    lines.push('Items:');
    items.forEach((item, i) => {
      lines.push(`${i + 1}. ${item.name}`);
      lines.push(`   Size: ${item.size}`);
      lines.push(`   Qty: ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}`);
    });
    lines.push('');
    lines.push(`Estimated subtotal: ${formatPrice(subtotal)}`);
    if (form.note.trim()) {
      lines.push('');
      lines.push(`Message: ${form.note}`);
    }
    lines.push('');
    lines.push('Please confirm product availability and advise me on the next steps for placing my order. Thank you.');

    const url = buildWhatsAppUrl(lines.join('\n'));
    window.open(url, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEO title="Enquiry Ready" />
        <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-[var(--color-stone)] mb-6">
            <MessageCircle size={28} strokeWidth={1.25} className="text-[var(--color-charcoal)]" />
          </div>
          <p className="section-eyebrow mb-4">Enquiry Prepared</p>
          <h1 className="font-serif text-3xl text-[var(--color-charcoal)] mb-4 font-light leading-tight">
            {whatsappConfigured ? 'Your enquiry is ready to send' : 'Enquiry prepared'}
          </h1>
          {whatsappConfigured ? (
            <p className="text-sm text-[var(--color-taupe)] mb-2 max-w-md mx-auto">
              WhatsApp has opened with your enquiry details pre-filled. Please press send to complete
              your enquiry. MAISON THRIFT will confirm availability, delivery, and payment with you.
            </p>
          ) : (
            <p className="text-sm text-[var(--color-taupe)] mb-6 max-w-md mx-auto">
              WhatsApp enquiries are not yet available. A business number must be configured before
              launch to enable sending enquiries.
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/shop" className="btn-secondary">Continue Browsing</Link>
            <Button
              variant="primary"
              onClick={() => {
                clearCart();
                setSubmitted(false);
                setForm({ name: '', phone: '', note: '' });
              }}
            >
              Clear Selection
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Send Enquiry" description="Review your selection and send an enquiry through WhatsApp." />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Send Enquiry' }]} />
        <Link
          to="/selection"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-taupe)] hover:text-[var(--color-charcoal)] transition-colors mb-6"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          Back to selection
        </Link>
        <p className="section-eyebrow">Review &amp; Send</p>
        <h1 className="section-title mb-8">Send Enquiry</h1>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-6">
              Your details
            </h2>

            <div className="mb-5 p-4 border border-[var(--color-stone)] bg-[var(--color-cream)]">
              <p className="text-xs text-[var(--color-charcoal)]/80 leading-relaxed">
                Your name and contact number (if provided) will be included in the enquiry sent to
                MAISON THRIFT via WhatsApp. Availability, delivery, and payment arrangements are
                confirmed directly with you — no payment is taken on this website.
              </p>
            </div>

            {!whatsappConfigured && (
              <div className="mb-5 flex items-start gap-2.5 p-4 border border-[var(--color-champagne)] bg-[var(--color-cream)]">
                <AlertCircle size={18} strokeWidth={1.5} className="text-[var(--color-champagne)] shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-charcoal)]/80">
                  WhatsApp is not yet configured. You can review your selection, but enquiries cannot
                  be sent until a business number is added in the brand configuration.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="enquiry-name"
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2 block"
                >
                  Name <span className="text-red-700">*</span>
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'eq-name-error' : undefined}
                />
                {errors.name && (
                  <p id="eq-name-error" className="text-xs text-red-700 mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="enquiry-phone"
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2 block"
                >
                  Contact number <span className="text-[var(--color-taupe)] normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-field"
                  placeholder="e.g. 0803 123 4567"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'eq-phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="eq-phone-error" className="text-xs text-red-700 mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="enquiry-note"
                  className="text-xs tracking-[0.15em] uppercase text-[var(--color-charcoal)]/70 mb-2 block"
                >
                  Message <span className="text-[var(--color-taupe)] normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  id="enquiry-note"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  rows={3}
                  className="input-field resize-none"
                  placeholder="Any questions or preferences for MAISON THRIFT"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                disabled={!whatsappConfigured}
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                {whatsappConfigured ? 'Send Enquiry on WhatsApp' : 'WhatsApp Not Configured'}
              </Button>
            </form>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-6">
              Your selection
            </h2>
            <div className="border border-[var(--color-stone)] divide-y divide-[var(--color-stone)]">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex gap-3 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover bg-[var(--color-cream)] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base text-[var(--color-charcoal)] leading-snug">
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--color-taupe)] mt-0.5">
                      Size {item.size} &middot; Qty {item.quantity}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-charcoal)] mt-1">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="p-4 bg-[var(--color-cream)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-[var(--color-charcoal)]/70">Estimated subtotal</span>
                  <span className="font-serif text-xl text-[var(--color-charcoal)]">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-taupe)] leading-relaxed">
                  Prices shown are for reference. Availability, delivery charges and final order
                  details will be confirmed directly by MAISON THRIFT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
