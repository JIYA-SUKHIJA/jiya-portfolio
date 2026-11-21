import type { ReactNode } from 'react';

export function TechLogo({ name, className = 'w-6 h-6' }: { name: string; className?: string }) {
  const icons: Record<string, ReactNode> = {
    React: (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.4">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M10.2 17.5c0 1.4-.8 2.1-2.1 2.1-.9 0-1.6-.4-2-1.1l1.2-.7c.2.4.5.6.9.6.5 0 .8-.2.8-.9v-4.8h1.2v4.8zm3.7 2.1c-1.3 0-2.2-.6-2.7-1.4l1.2-.7c.3.5.8.9 1.5.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.8-1.1-1.8-2.3 0-1.1.9-2 2.2-2 1 0 1.7.3 2.2 1.2l-1.2.7c-.3-.5-.6-.7-1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1 .9l.4.2c1.3.6 2 1.1 2 2.4 0 1.3-1.1 2-2.5 2z"
          fill="#1E1E1E"
        />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M13.5 11.4H11v7.8H9.3v-7.8H6.8V10h6.7v1.4zm4.8 6.4c.7 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.2-1l-.5-.2c-1.3-.5-2-1.2-2-2.4 0-1.3 1-2.2 2.6-2.2 1.1 0 1.9.4 2.4 1.2l-1.3.8c-.3-.5-.7-.7-1.2-.7-.6 0-.9.3-.9.7 0 .5.3.7 1.1 1l.5.2c1.5.6 2.2 1.2 2.2 2.5 0 1.5-1.2 2.3-2.8 2.3-1.5 0-2.4-.6-2.9-1.5l1.3-.8c.3.6.8.9 1.6.9z"
          fill="#FFFFFF"
        />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2z"
          fill="#5FA04E"
        />
        <text
          x="12"
          y="14.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
        >
          JS
        </text>
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10.5" fill="#25234C" />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fill="#F6F7FB"
          fontSize="8.5"
          fontWeight="600"
          fontFamily="sans-serif"
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
        <rect width="24" height="24" rx="5" fill="#00758F" />
        <path
          d="M6 15.5c1.5-2.5 3.6-4.5 6.4-5.2 1.7-.4 3.4-.1 4.8.8-.8-.1-1.6 0-2.3.4 1.1.4 2 1.2 2.5 2.3-1-.5-2-.7-3.1-.5-1.9.3-3.4 1.5-4.4 3.1"
          stroke="#F29111"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="15.2" cy="9.2" r="1" fill="#FFFFFF" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <path
          d="M21.4 11.1L12.9 2.6c-.5-.5-1.3-.5-1.8 0L9.3 4.4l2.2 2.2c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.1 2.1c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.6l-2-2v5.2c.2.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9.7c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1-.3-1.6L8.2 5.5 2.6 11.1c-.5.5-.5 1.3 0 1.8l8.5 8.5c.5.5 1.3.5 1.8 0l8.5-8.5c.5-.5.5-1.3 0-1.8z"
          fill="#F05032"
        />
      </svg>
    ),
  };

  return icons[name] ?? <span className="font-mono text-xs font-bold text-ink">{name.slice(0, 2)}</span>;
}