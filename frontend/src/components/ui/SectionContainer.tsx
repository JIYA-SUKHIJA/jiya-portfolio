import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  eyebrow?: string;
  alternate?: boolean;
  centered?: boolean;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  title,
  titleHighlight,
  subtitle,
  eyebrow,
  alternate = false,
  centered = true,
  children,
  className = '',
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${
        alternate ? 'surface-lavender-alt' : ''
      } ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-12 space-y-3 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}
          >
            {eyebrow && (
              <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                {title}{' '}
                {titleHighlight && (
                  <span className="text-gradient">{titleHighlight}</span>
                )}
              </h2>
            )}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`h-1 w-16 rounded-full bg-gradient-to-r from-primary via-[#2563EB] to-[#0891B2] ${
                centered ? 'mx-auto' : ''
              }`}
            />
            {subtitle && (
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed pt-1">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}