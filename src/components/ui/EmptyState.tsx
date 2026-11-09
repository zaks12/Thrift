import type { ReactNode } from 'react';
import { LinkButton } from './Button';

export function EmptyState({
  title,
  message,
  actionLabel,
  actionTo,
}: {
  title: string;
  message: string;
  actionLabel?: string;
  actionTo?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 text-center">
      <p className="section-eyebrow mb-3">Nothing Yet</p>
      <h3 className="font-serif text-2xl text-[var(--color-charcoal)] mb-3 font-light">
        {title}
      </h3>
      <div className="editorial-divider mb-5" />
      <p className="text-sm text-[var(--color-taupe)] max-w-md mb-7 leading-relaxed">
        {message}
      </p>
      {actionLabel && actionTo && (
        <LinkButton to={actionTo} variant="secondary">
          {actionLabel}
        </LinkButton>
      )}
    </div>
  );
}

export function NotFoundState({ message }: { message?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-5 text-center">
      <p className="font-serif text-6xl text-[var(--color-charcoal)] mb-4 font-light">404</p>
      <div className="editorial-divider mb-5" />
      <p className="text-sm text-[var(--color-taupe)] max-w-md mb-7 leading-relaxed">
        {message || 'The page you are looking for does not exist or has been moved.'}
      </p>
      <LinkButton to="/" variant="secondary">
        Back to Home
      </LinkButton>
    </div>
  );
}
