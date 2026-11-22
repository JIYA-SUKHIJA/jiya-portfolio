import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'lavender';
  className?: string;
}

const badgeVariants = {
  default: 'bg-white/80 text-ink-secondary border-ink/12',
  accent: 'bg-primary/12 text-primary border-primary/28',
  lavender: 'bg-lavender text-ink border-soft-violet/50',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}