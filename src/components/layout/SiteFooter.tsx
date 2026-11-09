import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { brand, navLinks } from '@/config/brand';
import { categories } from '@/config/brand';
import { isWhatsappConfigured, buildWhatsAppUrl } from '@/lib/format';

export function SiteFooter() {
  const whatsappConfigured = isWhatsappConfigured();

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] mt-auto">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[1.5rem] tracking-[0.08em] mb-4 font-medium">
              {brand.name.toUpperCase()}
            </h3>
            <p className="text-[13px] text-[var(--color-ivory)]/60 leading-[1.7] max-w-xs font-light">
              {brand.description}
            </p>
            <div className="flex items-center gap-5 mt-7">
              {brand.instagramUrl && (
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ivory)]/50 hover:text-[var(--color-champagne)] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={19} strokeWidth={1.5} />
                </a>
              )}
              {brand.facebookUrl && (
                <a
                  href={brand.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ivory)]/50 hover:text-[var(--color-champagne)] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={19} strokeWidth={1.5} />
                </a>
              )}
              {whatsappConfigured ? (
                <a
                  href={buildWhatsAppUrl('Hello, I would like to enquire about your products.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ivory)]/50 hover:text-[var(--color-champagne)] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={19} strokeWidth={1.5} />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-ivory)]/40 mb-5 font-medium">
              Shop
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/shop?category=${cat.id}`}
                    className="text-[13px] text-[var(--color-ivory)]/65 hover:text-[var(--color-champagne)] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-ivory)]/40 mb-5 font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-[var(--color-ivory)]/65 hover:text-[var(--color-champagne)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-[13px] text-[var(--color-ivory)]/65 hover:text-[var(--color-champagne)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[13px] text-[var(--color-ivory)]/65 hover:text-[var(--color-champagne)] transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-[var(--color-ivory)]/40 mb-5 font-medium">
              Contact
            </h4>
            <ul className="space-y-3">
              {brand.contactEmail && (
                <li>
                  <a
                    href={`mailto:${brand.contactEmail}`}
                    className="text-[13px] text-[var(--color-ivory)]/65 hover:text-[var(--color-champagne)] transition-colors"
                  >
                    {brand.contactEmail}
                  </a>
                </li>
              )}
              {brand.businessPhone && (
                <li className="text-[13px] text-[var(--color-ivory)]/65">
                  {brand.businessPhone}
                </li>
              )}
              {brand.businessAddress && (
                <li className="text-[13px] text-[var(--color-ivory)]/65">
                  {brand.businessAddress}
                </li>
              )}
              {!brand.contactEmail && !brand.businessPhone && !brand.businessAddress && (
                <li className="text-[13px] text-[var(--color-ivory)]/45 italic font-light">
                  Contact details to be confirmed.
                </li>
              )}
            </ul>
            {whatsappConfigured ? (
              <a
                href={buildWhatsAppUrl('Hello, I would like to enquire about your products.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-subtle mt-5 !border-[var(--color-ivory)]/25 !text-[var(--color-ivory)] hover:!bg-[var(--color-ivory)] hover:!text-[var(--color-charcoal)]"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp Us
              </a>
            ) : null}
          </div>
        </div>

        <div className="border-t border-[var(--color-ivory)]/10 mt-14 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[var(--color-ivory)]/40 tracking-wide">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
            {brand.mode === 'demo' && ' Demo prototype.'}
          </p>
          <a
            href={brand.developerCredit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[var(--color-ivory)]/40 hover:text-[var(--color-champagne)] transition-colors tracking-wide"
          >
            {brand.developerCredit.text}
          </a>
        </div>
      </div>
    </footer>
  );
}
