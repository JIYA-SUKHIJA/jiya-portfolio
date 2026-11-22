import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-canvas hover:bg-primary-hover active:bg-primary-active shadow-[var(--shadow-violet-glow)] border border-primary/40',
  secondary:
    'bg-lavender text-ink hover:bg-soft-violet/35 active:bg-soft-violet/45 border border-ink/12',
  outline:
    'bg-white/70 text-ink hover:bg-lavender/70 border border-ink/18 hover:border-primary/50',
  ghost:
    'bg-transparent text-ink-secondary hover:text-primary hover:bg-lavender/60 border border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}