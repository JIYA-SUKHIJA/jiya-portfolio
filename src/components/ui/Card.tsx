import { useRef, useState, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glass?: boolean;
  topAccent?: boolean;
  tilt3D?: boolean;
  className?: string;
}

export function Card({
  children,
  glass = true,
  topAccent = true,
  tilt3D = true,
  className = '',
  onMouseMove,
  onMouseLeave,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50, active: false });

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
          ? 'bg-white/95 border border-border-subtle shadow-[var(--shadow-soft)] hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(99,91,202,0.22)]'
          : 'bg-lavender/75 border border-border-subtle shadow-[var(--shadow-soft)]'
      } ${
        topAccent
          ? 'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-primary before:to-soft-violet before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100'
          : ''
      } ${className}`}
      {...props}
    >
      {/* Dynamic 3D Cursor Sheen */}
      {tilt3D && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: tilt.active ? 1 : 0,
            background: `radial-gradient(280px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(99, 91, 202, 0.10), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}