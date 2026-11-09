import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { brand, navLinks } from '@/config/brand';
import { useCart } from '@/context/CartContext';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--color-ivory)] border-b border-[var(--color-stone)]/60'
            : 'bg-[var(--color-ivory)]/97 border-b border-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[60px] lg:h-[76px]">
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                className="p-1.5 -ml-1.5 text-[var(--color-charcoal)] hover:opacity-50 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>

            <Link
              to="/"
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <span className="font-serif text-xl lg:text-[1.5rem] tracking-[0.08em] text-[var(--color-charcoal)] leading-none font-medium">
                {brand.name.toUpperCase()}
              </span>
              <span className="hidden lg:block text-[9px] tracking-[0.25em] uppercase text-[var(--color-taupe)] mt-1.5 font-light">
                {brand.tagline}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10" aria-label="Main">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[13px] tracking-[0.04em] transition-colors duration-300 group ${
                    isActive(link.path)
                      ? 'text-[var(--color-charcoal)] font-medium'
                      : 'text-[var(--color-charcoal)]/60 hover:text-[var(--color-charcoal)]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 right-0 h-px bg-[var(--color-charcoal)] transition-all duration-300 ${
                      isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center">
              <button
                onClick={openCart}
                className="relative p-1.5 text-[var(--color-charcoal)] hover:opacity-50 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={`My selection with ${itemCount} item${itemCount === 1 ? '' : 's'}`}
              >
                <Sparkles size={22} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-[10px] font-medium min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1"
                    aria-hidden="true"
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-[var(--color-ivory)] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between h-[60px] px-6 border-b border-[var(--color-stone)]/60">
              <span className="font-serif text-lg tracking-[0.08em] text-[var(--color-charcoal)] font-medium">
                {brand.shortName.toUpperCase()}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-[var(--color-charcoal)] hover:opacity-50 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-4 text-[15px] tracking-[0.03em] border-b border-[var(--color-beige)]/60 transition-colors ${
                    isActive(link.path)
                      ? 'text-[var(--color-charcoal)] font-medium'
                      : 'text-[var(--color-charcoal)]/65'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
