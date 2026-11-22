import type { ReactNode } from 'react';

export function TechLogo({ name, className = 'w-7 h-7' }: { name: string; className?: string }) {
  const icons: Record<string, ReactNode> = {
    React: (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.45">
          <ellipse cx="12" cy="12" rx="10" ry="4.1" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#F7DF1E" />
        <path
          d="M10.4 16.9c0 1.3-.7 2-1.9 2-.8 0-1.5-.4-1.8-1l1.1-.7c.2.4.5.6.8.6.4 0 .7-.2.7-.8v-4.4h1.1v4.3zm3.4 2c-1.2 0-2-.6-2.5-1.3l1.1-.6c.3.5.7.8 1.4.8.6 0 .9-.3.9-.7 0-.5-.4-.6-1-.9l-.4-.2c-1-.4-1.7-1-1.7-2.1 0-1 .8-1.8 2-1.8.9 0 1.6.3 2 1.1l-1.1.7c-.2-.4-.5-.6-.9-.6-.5 0-.7.3-.7.6 0 .4.3.6.9.9l.4.2c1.2.5 1.9 1 1.9 2.2 0 1.2-1 1.8-2.3 1.8z"
          fill="#1E1E1E"
        />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#3178C6" />
        <path
          d="M13.3 11.4H11v7H9.4v-7H7.1V10h6.2v1.4zm4.4 5.9c.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-.9l-.4-.2c-1.2-.5-1.9-1.1-1.9-2.2 0-1.2.9-2 2.4-2 1 0 1.8.4 2.2 1.1l-1.2.7c-.3-.4-.6-.6-1.1-.6-.5 0-.8.3-.8.6 0 .4.3.6 1 .9l.4.2c1.4.5 2 1.1 2 2.3 0 1.4-1.1 2.1-2.6 2.1-1.4 0-2.2-.6-2.7-1.4l1.2-.7c.3.5.8.8 1.5.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 2.2L3.8 6.9v9.5L12 21.1l8.2-4.7V6.9L12 2.2z" fill="#5FA04E" />
        <text
          x="12"
          y="14.2"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6.6"
          fontWeight="bold"
          fontFamily="monospace"
        >
          JS
        </text>
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="#25234C"
          fontSize="13.5"
          fontWeight="400"
          fontFamily="Plus Jakarta Sans, sans-serif"
          letterSpacing="-0.5"
        >
          ex
        </text>
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 2.5C9.2 6.2 7.5 9.3 7.5 13c0 3.2 2 5.7 4.1 6.7l.4 2.3h.6l.4-2.3c2.1-1 4.1-3.5 4.1-6.7 0-3.7-1.7-6.8-4.5-10.5H12z"
          fill="#47A248"
        />
        <path
          d="M12 2.5v17.2c2.1-1 4.1-3.5 4.1-6.7 0-3.7-1.7-6.8-4.1-10.5z"
          fill="#58AA50"
        />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M4.5 16.2c2-3.3 4.8-6 8.6-6.9 2.2-.5 4.4-.1 6.2 1.1-1-.2-2.1 0-3 .5 1.5.5 2.6 1.6 3.2 3-1.3-.6-2.6-.9-4-.6-2.5.4-4.5 2-5.8 4.1"
          stroke="#00758F"
          strokeWidth="2.1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M7.5 17.5c1.8-2.2 4-3.7 6.8-4.1"
          stroke="#F29111"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="16.2" cy="8.4" r="1.1" fill="#00758F" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M21.2 11.1L12.9 2.8c-.5-.5-1.3-.5-1.8 0L9.4 4.5l2.1 2.1c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2 2c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5l-1.9-1.9v5c.2.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9.7c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1-.3-1.5L8.3 5.6 2.8 11.1c-.5.5-.5 1.3 0 1.8l8.3 8.3c.5.5 1.3.5 1.8 0l8.3-8.3c.5-.5.5-1.3 0-1.8z"
          fill="#F05032"
        />
      </svg>
    ),
    'Next.js': (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="#18181B" />
        <path
          d="M8.8 15.8V8.4l7.6 9.6M15.2 8.4v4.8"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.6 7.2 14.5 6 12 6zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C10.6 13.2 9.5 12 7 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
    Redux: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M15.8 14.8c.8-.1 1.4-.7 1.4-1.5 0-.8-.7-1.5-1.5-1.5-.8 0-1.4.6-1.5 1.4-1.4.3-2.8.1-4.1-.5-.4-1.2-.5-2.6-.1-3.9.6-.3 1-.9 1-1.6 0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7 0 .6.4 1.2.9 1.5-.6 1.8-.5 3.8.2 5.5-.8.8-1.3 1.9-1.3 3.1 0 2.4 2 4.3 4.4 4.3 2.1 0 3.9-1.5 4.3-3.5"
          stroke="#764ABC"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="15.7" cy="13.3" r="1.4" fill="#764ABC" />
        <circle cx="9.3" cy="7.2" r="1.4" fill="#764ABC" />
      </svg>
    ),
    'Socket.io': (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.2" stroke="#25234C" strokeWidth="1.8" fill="none" />
        <path d="M13.2 6.8L8.8 12.4h3.4l-1.4 4.8 4.4-5.6h-3.4l1.4-4.8z" fill="#25234C" />
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M8.5 15.5c2.2.6 5.2.5 7-.2M7.5 17.8c2.8.8 6.8.7 9-.3M11.2 4.5c1.5 1.6-1.2 2.8-.2 4.5M14 5.5c1.2 1.3-.9 2.3-.1 3.7"
          stroke="#E76F00"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M7 12.2h8.5c1.4 0 2.3.7 2.3 1.7s-.9 1.7-2.3 1.7"
          stroke="#5382A1"
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    'C++': (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 2.4L3.8 7.1v9.8L12 21.6l8.2-4.7V7.1L12 2.4z" fill="#00599C" />
        <text
          x="12"
          y="14.3"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="6.8"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          C++
        </text>
      </svg>
    ),
    Postman: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="#FF6C37" />
        <path
          d="M9.5 14.5l5-5m0 0h-3.5m3.5 0V13"
          stroke="#FFFFFF"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    Vercel: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path d="M12 4.2L20.5 19H3.5L12 4.2z" fill="#18181B" />
      </svg>
    ),
  };

  return icons[name] ?? <span className="font-mono text-xs font-bold text-ink">{name.slice(0, 2)}</span>;
}