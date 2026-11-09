import { SEO } from '@/components/ui/SEO';
import { NotFoundState } from '@/components/ui/EmptyState';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" />
      <NotFoundState message="The page you are looking for does not exist or may have been moved." />
    </>
  );
}
