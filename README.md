# Maison Thrift — Women's Thrift Fashion Boutique

A premium, multi-page fashion boutique prototype for a women's thrift clothing business. Built as a client demonstration by **Zarkode Digital Solutions**. All brand information, product data, and contact details are replaceable placeholders pending client confirmation.

## Project Overview

Maison Thrift is a curated women's thrift fashion boutique concept featuring an editorial, quiet-luxury aesthetic. The website provides a product browsing and enquiry journey — filtering, product details, an enquiry list, and WhatsApp enquiry submission — without any online payment processing.

**Important:** "MAISON THRIFT" is a temporary working name. All product names, descriptions, prices, sizes, and inventory are sample data pending client approval. No real client contact details, social accounts, testimonials, or business history have been invented.

## Technology Stack

- **React 18** with TypeScript
- **Vite 7** as the build tool
- **React Router 7** for multi-page navigation
- **Tailwind CSS 3** for styling
- **Lucide React** for icons
- React Context + hooks for state management (selection list, toasts)
- localStorage for selection list persistence

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Production build
npm run typecheck  # TypeScript type checking
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── cart/          # Selection drawer (enquiry list)
│   ├── home/          # Home page sections (Hero, Categories, etc.)
│   ├── layout/        # SiteHeader, SiteFooter, AnnouncementBar
│   ├── products/      # ProductCard, ProductGrid, ProductGallery, Filters, Sort, Search
│   └── ui/            # Button, Breadcrumbs, Badges, Selectors, SEO, Toast, EmptyState
├── config/
│   └── brand.ts       # Centralized brand configuration (ALL business settings)
├── context/
│   ├── CartContext.tsx    # Selection list state with localStorage persistence
│   └── ToastContext.tsx   # Toast notifications
├── data/
│   └── products.ts    # Central product catalogue (12+ sample products)
├── hooks/
│   └── useFilteredProducts.ts  # Filtering, sorting, search logic
├── lib/
│   └── format.ts      # Price formatting, WhatsApp helpers
├── pages/             # All route pages
├── types/
│   └── index.ts       # TypeScript types
└── App.tsx            # Routing and provider shell
```

## How to Replace the Placeholder Brand

All business settings are centralized in **`src/config/brand.ts`**. Update these fields when the client confirms:

| Field | Description |
|-------|-------------|
| `name` | Full brand name |
| `shortName` | Short brand name (for mobile header) |
| `tagline` | Brand tagline |
| `description` | Site description for SEO |
| `contactEmail` | Contact email address |
| `whatsappNumber` | WhatsApp business number (international format, digits only) |
| `businessPhone` | Business phone number |
| `businessAddress` | Business address |
| `instagramUrl` | Instagram profile URL |
| `facebookUrl` | Facebook page URL |
| `tiktokUrl` | TikTok profile URL |
| `canonicalUrl` | Production domain URL |
| `currency` | Currency code (default: NGN) |
| `currencyLocale` | Locale for price formatting (default: en-NG) |
| `mode` | `'demo'` or `'live'` |
| `shippingPolicy` | Shipping policy text |
| `deliveryDetails` | Delivery details text |

Leave unconfirmed values as empty strings (`""`). The UI gracefully handles missing values.

## How to Add or Edit Products

All products are defined in **`src/data/products.ts`**. Each product follows the `Product` type from `src/types/index.ts`:

```typescript
{
  id: 'p01',                          // Unique ID
  slug: 'elegant-occasion-gown',      // URL-friendly slug
  name: 'Elegant Occasion Gown',
  category: 'dresses-gowns',          // Must match a CategoryId
  shortDescription: '...',
  fullDescription: '...',
  price: 18500,                       // NGN integer
  originalPrice: 28000,               // Optional, for sale items
  images: ['https://...'],            // Image URLs (first is primary)
  sizes: ['S', 'M', 'L'],
  stock: 1,                           // 0 = sold out
  condition: 'Excellent',             // 'Excellent' | 'Very Good' | 'Good'
  color: 'Champagne',                 // Optional
  featured: true,                     // Shows on featured sections
  isNewArrival: true,                 // Shows on new arrivals page
  dateAdded: '2026-10-25',            // YYYY-MM-DD for sorting
}
```

Category IDs must match those defined in `brand.ts`: `dresses-gowns`, `jeans-denim`, `tops-blouses`, `skirts`, `abayas-modest-wear`.

## How to Configure WhatsApp Enquiries

1. Open `src/config/brand.ts`
2. Set `whatsappNumber` to the client's business number in international format (digits only, e.g. `2348012345678` for Nigeria)
3. When configured, the enquiry page and product enquiry buttons will open `wa.me` links with pre-filled messages
4. When left as `""`, the UI displays clear notices that WhatsApp must be configured before launch

The enquiry page generates a URL-encoded WhatsApp message containing the customer's name and contact (if provided), product names, selected sizes, quantities, individual prices, estimated subtotal, and any optional message. No enquiry is submitted until the customer presses send in WhatsApp. No payment is processed on this website.

## How to Configure Contact and Social Links

All contact and social links are in `src/config/brand.ts`. Set the relevant URL/string fields. Empty values are handled gracefully — the UI hides missing social icons and shows "to be confirmed" placeholders for missing contact details.

## How to Replace Sample Images and Product Information

Product images are loaded from Pexels (stock photography URLs) defined in `src/data/products.ts`. To replace:

1. Replace image URLs in product objects with the client's product photos
2. Update product names, descriptions, prices, sizes, stock, and condition
3. Update category images in `src/config/brand.ts`
4. Update hero and editorial section images in `src/components/home/` components

## Current Demo Limitations

- **No backend or database:** All data is client-side. The selection list persists via localStorage only.
- **No payment processing:** Enquiries are sent via WhatsApp click-to-chat. No payment gateway is integrated.
- **No newsletter service:** The signup form shows a demo-mode notice.
- **No contact form backend:** The contact form either opens WhatsApp (if configured) or shows a demo notice.
- **Sample product data:** All products, prices, and inventory are placeholders.
- **Unconfigured WhatsApp:** The business number is blank. Enquiry pages show appropriate warnings.
- **No analytics:** No tracking or analytics is configured.

## Deployment Considerations

- Build with `npm run build` and deploy the `dist/` folder to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.)
- Configure a custom domain and update `canonicalUrl` in `src/config/brand.ts`
- Update `og:image` and `twitter:image` in `index.html` and `src/config/brand.ts` (`socialImage`) to use an absolute URL with the production domain (e.g. `https://www.maisonthrift.com/og-image.png`)
- Replace the placeholder favicon at `public/favicon.svg`
- Finalize `public/robots.txt` with the production sitemap URL
- Review and finalize the Privacy Policy and Terms pages before launch
- Confirm all brand details, product data, and images before going live

## Footer Credit

The footer includes a discreet developer credit: "Website concept by Zarkode Digital Solutions" linking to https://zarkode.com.ng/. This credit should remain as part of the developer agreement.

---

*This is a concept prototype. It is a WhatsApp-driven online boutique and is not a full online payment platform.*
