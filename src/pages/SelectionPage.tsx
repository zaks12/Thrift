import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { EmptyState } from '@/components/ui/EmptyState';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/format';

export function SelectionPage() {
  const { items, subtotal, updateQuantity, removeItem, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <>
        <SEO title="My Selection" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'My Selection' }]} />
        </div>
        <EmptyState
          title="Your selection is empty"
          message="Discover something you love and add it to your enquiry list."
          actionLabel="Shop the Collection"
          actionTo="/shop"
        />
      </>
    );
  }

  return (
    <>
      <SEO title="My Selection" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'My Selection' }]} />
        <div className="mb-10 pt-2">
          <p className="section-eyebrow">Curated For You</p>
          <h1 className="section-title">My Selection</h1>
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-taupe)] mt-4">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} ready to enquire
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex gap-4 border border-[var(--color-stone)] p-4"
              >
                <Link to={`/product/${item.slug}`} className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-32 sm:w-28 sm:h-36 object-cover bg-[var(--color-cream)]"
                  />
                </Link>
                <div className="flex-1 min-w-0 flex flex-col">
                  <Link
                    to={`/product/${item.slug}`}
                    className="font-serif text-lg text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors leading-snug"
                  >
                    {item.name}
                  </Link>
                  <p className="text-xs text-[var(--color-taupe)] mt-1">Size {item.size}</p>
                  <p className="text-sm font-medium text-[var(--color-charcoal)] mt-1">
                    {formatPrice(item.price)}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-[var(--color-stone)]">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.5} />
                      </button>
                      <span className="w-10 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        disabled={item.quantity >= item.maxStock}
                        className="w-9 h-9 flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors disabled:opacity-40"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.productId, item.size)}
                      className="flex items-center gap-1.5 text-xs text-[var(--color-taupe)] hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={14} strokeWidth={1.5} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors pt-2"
            >
              <Sparkles size={16} strokeWidth={1.5} />
              Continue browsing
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-[var(--color-stone)] p-6 lg:p-8 sticky top-24">
              <h2 className="font-serif text-xl text-[var(--color-charcoal)] mb-6 font-light">
                Estimated total
              </h2>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-[var(--color-charcoal)]/70 truncate pr-2">
                      {item.name} ({item.size}) x{item.quantity}
                    </span>
                    <span className="text-[var(--color-charcoal)] shrink-0">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[var(--color-stone)] pt-4 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-charcoal)]/70">Estimated subtotal</span>
                  <span className="font-serif text-2xl text-[var(--color-charcoal)]">{formatPrice(subtotal)}</span>
                </div>
              </div>
              <p className="text-xs text-[var(--color-taupe)] mb-5 leading-relaxed">
                Prices shown are for reference. Availability, delivery charges and final order details
                will be confirmed directly by MAISON THRIFT.
              </p>
              <Link to="/enquiry" className="btn-primary w-full">
                Continue to Enquiry
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
