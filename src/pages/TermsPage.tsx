import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { brand } from '@/config/brand';

export function TermsPage() {
  return (
    <>
      <SEO title="Terms (Draft)" description="Draft terms and conditions for review before launch." />
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Terms' }]} />
        <p className="section-eyebrow">Legal</p>
        <h1 className="section-title">Terms &amp; Conditions</h1>
        <p className="text-xs text-[var(--color-champagne)] tracking-[0.15em] uppercase mt-4 mb-8">
          Draft &mdash; Requires review before launch
        </p>

        <div className="space-y-8 text-[var(--color-charcoal)]/80">
          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Overview</h2>
            <p className="text-sm leading-[1.7]">
              These terms and conditions are a draft template prepared for {brand.name}. They must be reviewed and finalized by the business owner before the website is launched.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Products</h2>
            <p className="text-sm leading-[1.7]">
              All products listed on this website are curated secondhand or thrift clothing items. Each item's condition, size, and availability are described on its product page. Product images and descriptions are intended to be accurate representations of the physical item.
            </p>
            <p className="text-sm leading-[1.7] mt-2">
              All product names, descriptions, prices, sizes, and inventory shown on this website are sample data pending confirmation by {brand.name} and should not be treated as final listings until the website is launched.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Enquiries</h2>
            <p className="text-sm leading-[1.7]">
              Placing an enquiry through this website does not constitute a confirmed purchase. All enquiries require confirmation by {brand.name}, who will verify stock availability, delivery arrangements, and payment details directly with you.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Pricing</h2>
            <p className="text-sm leading-[1.7]">
              Prices are listed in Nigerian naira (NGN) and are sample values pending confirmation. {brand.name} reserves the right to update pricing before an enquiry is confirmed. Delivery charges, if any, are not included in the listed price and will be confirmed directly with you.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Delivery</h2>
            <p className="text-sm leading-[1.7]">
              Delivery arrangements, charges, and timeframes are confirmed directly between you and {brand.name}. This website does not manage fulfillment. {brand.deliveryDetails || 'Delivery details will be confirmed here once finalized.'}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Returns and exchanges</h2>
            <p className="text-sm leading-[1.7]">
              The returns and exchange policy must be defined by {brand.name}. Until a policy is confirmed, any returns or exchanges are handled at {brand.name}'s discretion on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Payments</h2>
            <p className="text-sm leading-[1.7]">
              This website does not process payments online. All payment arrangements are made directly between you and {brand.name}. No payment gateway or online payment system is integrated into this website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Limitation</h2>
            <p className="text-sm leading-[1.7]">
              This website is a concept prototype developed by Zarkode Digital Solutions. It is a WhatsApp-driven online boutique and is not a full online payment platform.
            </p>
          </div>

          <p className="text-xs text-[var(--color-taupe)] italic pt-6 border-t border-[var(--color-stone)] leading-relaxed">
            This document is a draft and does not constitute legal advice. It must be reviewed and approved by the business owner and, where appropriate, a qualified legal professional before publication.
          </p>
        </div>
      </div>
      <div className="pb-16" />
    </>
  );
}
