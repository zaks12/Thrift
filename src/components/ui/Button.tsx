import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'subtle';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const variantClass = `btn-${variant}`;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = 'primary',
  className = '',
  to,
}: LinkButtonProps) {
  const variantClass = `btn-${variant}`;
  return (
    <Link to={to} className={`${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
