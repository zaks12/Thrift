import { brand } from '@/config/brand';

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(brand.currencyLocale, {
    style: 'currency',
    currency: brand.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function isWhatsappConfigured(): boolean {
  const num = brand.whatsappNumber.replace(/\D/g, '');
  return num.length >= 10 && num.length <= 15;
}

export function buildWhatsAppUrl(message: string): string {
  const num = brand.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
