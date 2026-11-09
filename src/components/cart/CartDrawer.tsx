import { Link } from 'react-router-dom';
import { X, Minus, Plus, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/format';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-[400px] max-w-[90vw] bg-[var(--color-ivory)] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="My Selection"
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-[var(--color-stone)] shrink-0">
          <span className="font-serif text-lg font-light tracking-wide">
            My Selection ({itemCount})
          </span>
          <button
            onClick={closeCart}
            className="p-1.5 text-[var(--color-charcoal)] hover:opacity-60 transition-opacity"
            aria-label="Close selection"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <Sparkles size={40} strokeWidth={1} className="text-[var(--color-taupe)] mb-4" />
            <p className="font-serif text-xl text-[var(--color-charcoal)] mb-2">
              Your selection is empty
            </p>
            <p className="text-sm text-[var(--color-taupe)] mb-6">
              Discover something you love.
            </p>
            <Button variant="secondary" onClick={closeCart}>
              Continue Browsing
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-3"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-[var(--color-cream)]"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-base text-[var(--color-charcoal)] hover:text-[var(--color-champagne)] transition-colors block leading-snug"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-[var(--color-taupe)] mt-0.5">
                      Size {item.size}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-charcoal)] mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[var(--color-stone)]">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.size, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.maxStock}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-cream)] transition-colors disabled:opacity-40"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.size)}
                        className="text-xs text-[var(--color-taupe)] hover:text-[var(--color-charcoal)] underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--color-stone)] px-5 py-4 space-y-4 shrink-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--color-charcoal)]/70">Estimated subtotal</span>
                <span className="font-serif text-xl text-[var(--color-charcoal)]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-[var(--color-taupe)] leading-relaxed">
                Prices are for reference only. Final details confirmed by MAISON THRIFT.
              </p>
              <div className="flex gap-3">
                <Button variant="subtle" className="flex-1" onClick={closeCart}>
                  Continue
                </Button>
                <Link
                  to="/enquiry"
                  onClick={closeCart}
                  className="btn-primary flex-1"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
