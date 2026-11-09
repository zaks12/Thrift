import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { brand } from '@/config/brand';

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy (Draft)" description="Draft privacy policy for review before launch." />
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]} />
        <p className="section-eyebrow">Legal</p>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="text-xs text-[var(--color-champagne)] tracking-[0.15em] uppercase mt-4 mb-8">
          Draft &mdash; Requires review before launch
        </p>

        <div className="prose prose-sm max-w-none text-[var(--color-charcoal)]/80 space-y-8">
          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Overview</h2>
            <p className="text-sm leading-[1.7]">
              This privacy policy is a draft template prepared for {brand.name}. It must be reviewed and finalized by the business owner before the website is launched. Actual privacy practices depend on how the website is configured and operated.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Information you provide</h2>
            <p className="text-sm leading-[1.7]">
              When you send an enquiry or contact us, you may provide your name, phone number, and an optional message. This information is used solely to process your enquiry and is sent directly to {brand.name} via WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Information stored on your device</h2>
            <p className="text-sm leading-[1.7]">
              Your selection contents are stored in your browser's local storage so they persist across page refreshes. No personal or payment data is stored on a server by this website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Payment information</h2>
            <p className="text-sm leading-[1.7]">
              This website does not process payments. All payment arrangements are made directly between you and {brand.name}. No payment card details or financial credentials are collected through this website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Third-party services</h2>
            <p className="text-sm leading-[1.7]">
              Order enquiries are sent through WhatsApp. WhatsApp's own privacy policy applies to any information transmitted through its platform. Please review their policy if you have concerns.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Cookies and analytics</h2>
            <p className="text-sm leading-[1.7]">
              This website does not use analytics or tracking cookies unless explicitly configured. Any future analytics integration must be disclosed here and comply with applicable regulations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Your rights</h2>
            <p className="text-sm leading-[1.7]">
              You may request that any information you have provided be corrected or deleted by contacting {brand.name} directly. Since this website does not maintain a server-side database of customer information, most data resides only in your WhatsApp conversation with {brand.name}.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-2 font-light">Contact</h2>
            <p className="text-sm leading-[1.7]">
              For privacy-related questions, please contact {brand.name} directly{brand.contactEmail ? ` at ${brand.contactEmail}` : ' using the contact information that will be provided here once confirmed'}.
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
