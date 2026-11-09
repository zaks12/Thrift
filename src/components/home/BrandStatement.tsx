export function BrandStatement() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream)]">
            <img
              src="https://images.pexels.com/photos/7450781/pexels-photo-7450781.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800"
              alt="Elegant woman in fashionable clothing with minimalist style"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:pl-4">
            <p className="section-eyebrow">Our Philosophy</p>
            <h2 className="font-serif text-3xl lg:text-[2.5rem] xl:text-[3rem] text-[var(--color-charcoal)] leading-[1.15] mb-7 font-light">
              Good style is about the pieces you discover.
            </h2>
            <div className="editorial-divider !mx-0 mb-7" />
            <p className="text-[15px] lg:text-base text-[var(--color-charcoal)]/80 leading-[1.75] mb-5 font-light">
              There is a particular pleasure in finding a piece that feels like it was waiting for you. Something distinctive, something with character, something that becomes part of your story.
            </p>
            <p className="text-[15px] lg:text-base text-[var(--color-charcoal)]/80 leading-[1.75] font-light">
              We believe in giving carefully selected clothing another opportunity to be loved. Every piece in our collection is chosen with intention, so that what you wear feels considered, personal, and entirely yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
