import { useState, type MouseEvent } from 'react';
import { ArrowUp, Check, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PROFILE_DATA } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE_DATA.email}`;
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-canvas py-10 px-4 sm:px-6 lg:px-8 border-t border-primary/25">
      {/* Subtle Top Gradient Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"
      />

      {/* Ultra-Subtle Coder Watermarks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none font-mono font-bold"
      >
        <span className="absolute top-5 left-[5%] text-3xl text-lavender opacity-[0.045] -rotate-6">
          &lt;/&gt;
        </span>
        <span className="absolute bottom-5 right-[5%] text-3xl text-lavender opacity-[0.045] rotate-6">
          &#123; &#125;
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto space-y-7">
        {/* Top Row: Brand Identity & Social Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Left: Crisp Logo Badge, Name & Tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-canvas p-1 shadow-2xs">
                <img
                  src="/logo.svg"
                  alt="Jiya Sukhija Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-display font-extrabold tracking-wider text-base text-canvas">
                JIYA SUKHIJA
              </span>
            </div>
            <p className="text-xs text-soft-violet text-center sm:text-left">
              Full-Stack Developer &bull; Building reliable, modern web applications.
            </p>
          </div>

          {/* Right: Crisp Circular Social & Back-to-Top Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-9 h-9 rounded-full bg-white/5 border border-soft-violet/25 flex items-center justify-center text-lavender hover:text-white hover:bg-primary/25 hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 border border-soft-violet/25 flex items-center justify-center text-lavender hover:text-white hover:bg-primary/25 hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE_DATA.email}`}
              onClick={handleCopyEmail}
              aria-label="Copy Email"
              title={`Copy ${PROFILE_DATA.email}`}
              className="relative w-9 h-9 rounded-full bg-white/5 border border-soft-violet/25 flex items-center justify-center text-lavender hover:text-white hover:bg-primary/25 hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-lavender" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              {copiedEmail && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-canvas text-ink text-[10px] font-mono font-semibold whitespace-nowrap shadow-sm">
                  Copied!
                </span>
              )}
            </a>

            {isHomePage ? (
              <a
                href="#home"
                aria-label="Back to top"
                title="Back to top"
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to="/"
                aria-label="Back to home"
                title="Back to home"
                className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
              >
                <ArrowUp className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Divider & Minimal Copyright */}
        <div className="pt-5 border-t border-soft-violet/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-soft-violet">
          <p>&copy; {new Date().getFullYear()} Jiya Sukhija. All rights reserved.</p>
          <p className="font-mono text-[11px] text-lavender/75">
            &lt;Built with React &amp; TypeScript /&gt;
          </p>
        </div>
      </div>
    </footer>
  );
}