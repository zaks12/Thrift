const steps = [
  { num: '01', title: 'Discover a piece you love', text: 'Browse our curated collection and find something that speaks to you.' },
  { num: '02', title: 'Review the details', text: 'Check the size, condition, and availability before adding it to your selection.' },
  { num: '03', title: 'Add to your selection', text: 'Select your size and quantity, then add the piece to your enquiry list.' },
  { num: '04', title: 'Send your enquiry', text: 'Continue to the enquiry page and send your selection through WhatsApp.' },
  { num: '05', title: 'Confirm with MAISON THRIFT', text: 'We confirm availability, delivery, and payment arrangements directly with you.' },
];

export function HowOrderingWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="section-eyebrow">Simple & Personal</p>
          <h2 className="section-title">How ordering works</h2>
          <div className="editorial-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
          {steps.map((step, index) => (
            <div key={step.num} className="relative">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-[1.75rem] text-[var(--color-champagne)] font-light">{step.num}</span>
                {index < steps.length - 1 && (
                  <span className="hidden lg:block flex-1 h-px bg-[var(--color-stone)]" aria-hidden="true" />
                )}
              </div>
              <h3 className="font-serif text-[1.1rem] text-[var(--color-charcoal)] mb-2.5 leading-snug font-medium">
                {step.title}
              </h3>
              <p className="text-[13px] text-[var(--color-taupe)] leading-[1.7] font-light">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[11px] text-[var(--color-taupe)] max-w-lg mx-auto leading-relaxed tracking-wide">
            Final confirmation is required for all enquiries. Availability, delivery charges and payment details are confirmed directly with MAISON THRIFT.
          </p>
        </div>
      </div>
    </section>
  );
}
