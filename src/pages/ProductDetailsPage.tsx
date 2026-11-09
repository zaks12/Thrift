import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { MessageCircle, Sparkles } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGallery } from '@/components/products/ProductGallery';
import { PriceDisplay } from '@/components/ui/PriceDisplay';
import { StockBadge, ConditionBadge } from '@/components/ui/Badges';
import { SizeSelector, QuantitySelector } from '@/components/ui/Selectors';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { getCategoryById } from '@/config/brand';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { isWhatsappConfigured, buildWhatsAppUrl, formatPrice } from '@/lib/format';

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const { addItem } = useCart();
  const { showToast } = useToast();

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const category = getCategoryById(product.category);
  const related = getRelatedProducts(product, 4);
  const available = product.stock > 0;

  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    ...(category ? [{ label: category.shortName, path: `/shop?category=${category.id}` }] : []),
    { label: product.name },
  ];

  const handleAddToSelection = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      setSizeError(true);
      return;
    }
    const size = selectedSize || product.sizes[0] || 'One Size';
    addItem(product, size, quantity);
    showToast(`${product.name} added to your selection`);
  };

  const handleWhatsAppEnquiry = () => {
    if (!isWhatsappConfigured()) {
      showToast('WhatsApp enquiries are not yet available.');
      return;
    }
    const size = selectedSize || product.sizes[0] || 'One Size';
    const msg = `Hello MAISON THRIFT, I'm interested in this item:\n\nProduct: ${product.name}\nPrice: ${formatPrice(product.price)}\nSize: ${size}\n\nPlease let me know if it is available and how I can place an order.`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <>
      <SEO title={product.name} description={product.shortDescription} ogImage={product.images[0]} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Breadcrumbs items={crumbs} />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <ProductGallery images={product.images} alt={product.name} />

          <div className="flex flex-col">
            {category && (
              <Link
                to={`/shop?category=${category.id}`}
                className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-taupe)] hover:text-[var(--color-charcoal)] transition-colors mb-3 block"
              >
                {category.name}
              </Link>
            )}
            <h1 className="font-serif text-3xl lg:text-[2.5rem] text-[var(--color-charcoal)] mb-4 leading-[1.15] font-light">
              {product.name}
            </h1>
            <div className="mb-6">
              <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="lg" />
            </div>

            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="editorial-divider !mx-0 !w-8 mb-2" />
              <StockBadge stock={product.stock} />
              <ConditionBadge condition={product.condition} />
              {product.color && (
                <span className="text-xs text-[var(--color-taupe)]">Colour: {product.color}</span>
              )}
            </div>

            <p className="text-[15px] text-[var(--color-charcoal)]/80 leading-[1.7] mb-8">
              {product.fullDescription}
            </p>

            <div className="space-y-5 mb-8">
              {product.sizes.length > 0 && (
                <>
                  <SizeSelector
                    sizes={product.sizes}
                    selected={selectedSize}
                    onSelect={(s) => {
                      setSelectedSize(s);
                      setSizeError(false);
                    }}
                    disabled={!available}
                  />
                  {sizeError && (
                    <p className="text-xs text-red-700" role="alert">
                      Please select a size before adding to your selection.
                    </p>
                  )}
                  {product.sizes.length === 1 && (
                    <p className="text-xs text-[var(--color-taupe)]">
                      This is a one-off thrift piece available in size {product.sizes[0]} only.
                    </p>
                  )}
                </>
              )}

              <QuantitySelector
                quantity={quantity}
                onChange={setQuantity}
                max={product.stock}
                disabled={!available}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                variant="primary"
                className="flex-1"
                onClick={handleAddToSelection}
                disabled={!available}
              >
                <Sparkles size={18} strokeWidth={1.5} />
                {available ? 'Add to Selection' : 'Sold Out'}
              </Button>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={handleWhatsAppEnquiry}
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                WhatsApp Enquiry
              </Button>
            </div>

            <div className="border-t border-[var(--color-stone)] pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-taupe)] tracking-wide">Condition</span>
                <span className="text-[var(--color-charcoal)] font-medium">{product.condition}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-taupe)] tracking-wide">Availability</span>
                <span className="text-[var(--color-charcoal)] font-medium">
                  {available ? `${product.stock} in stock` : 'Sold out'}
                </span>
              </div>
              {product.sizes.length > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-taupe)] tracking-wide">Available sizes</span>
                  <span className="text-[var(--color-charcoal)] font-medium">{product.sizes.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 lg:mt-28">
            <p className="section-eyebrow text-center">Continue exploring</p>
            <h2 className="section-title text-center mb-10">
              You may also like
            </h2>
            <div className="editorial-divider !mx-auto mb-10" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
