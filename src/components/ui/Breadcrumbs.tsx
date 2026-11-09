import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  label: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-1 text-xs tracking-wide text-[var(--color-taupe)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className="hover:text-[var(--color-charcoal)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-[var(--color-charcoal)]' : ''}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight size={14} strokeWidth={1.5} className="text-[var(--color-stone)]" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
