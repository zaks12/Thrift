import { SEO } from '@/components/ui/SEO';
import { HeroSection } from '@/components/home/HeroSection';
import { CategoryDiscovery } from '@/components/home/CategoryDiscovery';
import { NewArrivalsSection } from '@/components/home/NewArrivalsSection';
import { BrandStatement } from '@/components/home/BrandStatement';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { WhyShopWithUs } from '@/components/home/WhyShopWithUs';
import { HowOrderingWorks } from '@/components/home/HowOrderingWorks';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { FinalCTA } from '@/components/home/FinalCTA';

export function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <CategoryDiscovery />
      <NewArrivalsSection />
      <BrandStatement />
      <FeaturedCollection />
      <WhyShopWithUs />
      <HowOrderingWorks />
      <NewsletterSection />
      <FinalCTA />
    </>
  );
}
