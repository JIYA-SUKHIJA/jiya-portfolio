import { useRef, useState, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react';

export type CardAccent = 'violet' | 'blue' | 'emerald' | 'amber' | 'rose' | 'cyan';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glass?: boolean;
  topAccent?: boolean;
  accent?: CardAccent;
  tilt3D?: boolean;
  className?: string;
}

const ACCENT_STYLES: Record<
  CardAccent,
  {
    bar: string;
    borderHover: string;
    glowRgba: string;
  }
> = {
  violet: {
    bar: 'from-[#635BCA] to-[#A5A9D8]',
    borderHover: 'hover:border-[#635BCA]/45 hover:shadow-[0_20px_40px_-15px_rgba(99,91,202,0.22)]',
    glowRgba: 'rgba(99, 91, 202, 0.11)',
  },
  blue: {
    bar: 'from-[#2563EB] to-[#60A5FA]',
    borderHover: 'hover:border-[#2563EB]/45 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.20)]',
    glowRgba: 'rgba(37, 99, 235, 0.10)',
  },
  emerald: {
    bar: 'from-[#059669] to-[#34D399]',
    borderHover: 'hover:border-[#059669]/45 hover:shadow-[0_20px_40px_-15px_rgba(5,150,105,0.20)]',
    glowRgba: 'rgba(5, 150, 105, 0.10)',
  },
  amber: {
    bar: 'from-[#D97706] to-[#FBBF24]',
    borderHover: 'hover:border-[#D97706]/45 hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.20)]',
    glowRgba: 'rgba(217, 119, 6, 0.10)',
  },
  rose: {
    bar: 'from-[#E11D48] to-[#FB7185]',
    borderHover: 'hover:border-[#E11D48]/45 hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.20)]',
    glowRgba: 'rgba(225, 29, 72, 0.10)',
  },
  cyan: {
    bar: 'from-[#0891B2] to-[#22D3EE]',
    borderHover: 'hover:border-[#0891B2]/45 hover:shadow-[0_20px_40px_-15px_rgba(8,145,178,0.20)]',
    glowRgba: 'rgba(8, 145, 178, 0.10)',
  },
};

export function Card({
  children,
  glass = true,
  topAccent = true,
  accent = 'violet',
  tilt3D = true,
  className = '',
  onMouseMove,
  onMouseLeave,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50, active: false });

  const accentTheme = ACCENT_STYLES[accent];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(e);
    if (!tilt3D || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glowX, glowY, active: true });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e);
    setTilt((prev) => ({ ...prev, rotateX: 0, rotateY: 0, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tilt3D
          ? {
              transform: `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateY(${tilt.active ? '-4px' : '0px'})`,
              transition: tilt.active
                ? 'transform 120ms ease-out, box-shadow 250ms ease, border-color 250ms ease'
                : 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 300ms ease, border-color 300ms ease',
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl p-6 ${
        glass
          ? `bg-white/95 border border-border-subtle shadow-[var(--shadow-soft)] ${accentTheme.borderHover}`
          : 'bg-lavender/75 border border-border-subtle shadow-[var(--shadow-soft)]'
      } ${className}`}
      {...props}
    >
      {/* Persistent Coloured Top Accent Bar (matching reference cards) */}
      {topAccent && (
        <div
          aria-hidden="true"
          className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accentTheme.bar} opacity-85 group-hover:opacity-100 transition-opacity`}
        />
      )}

      {/* Dynamic 3D Cursor Sheen */}
      {tilt3D && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: tilt.active ? 1 : 0,
            background: `radial-gradient(280px circle at ${tilt.glowX}% ${tilt.glowY}%, ${accentTheme.glowRgba}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}