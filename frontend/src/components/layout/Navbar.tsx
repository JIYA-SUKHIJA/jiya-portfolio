import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setActiveHref('#projects');
      return;
    }

    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveHref(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-canvas/85 backdrop-blur-md border-b border-border-subtle">
      <nav
        aria-label="Primary Navigation"
        className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Left Brand with Logo */}
        {isHomePage ? (
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className="inline-flex items-center gap-2.5 font-display font-extrabold text-xs sm:text-sm tracking-widest text-ink hover:text-primary transition-colors"
          >
            <img
              src="/logo.svg"
              alt="Jiya Sukhija Logo"
              className="w-7 h-7 rounded-lg object-contain"
            />
            <span>JIYA SUKHIJA</span>
          </a>
        ) : (
          <Link
            to="/"
            onClick={() => handleLinkClick('#home')}
            className="inline-flex items-center gap-2.5 font-display font-extrabold text-xs sm:text-sm tracking-widest text-ink hover:text-primary transition-colors"
          >
            <img
              src="/logo.svg"
              alt="Jiya Sukhija Logo"
              className="w-7 h-7 rounded-lg object-contain"
            />
            <span>JIYA SUKHIJA</span>
          </Link>
        )}

        {/* Center Navigation Links with Active Pill */}
        <ul className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            const linkClass = `px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              isActive
                ? 'bg-lavender text-ink font-semibold'
                : 'text-ink-muted hover:text-ink hover:bg-lavender/50'
            }`;

            return (
              <li key={item.href}>
                {isHomePage ? (
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={linkClass}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={`/${item.href}`}
                    onClick={() => handleLinkClick(item.href)}
                    className={linkClass}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right CTA */}
        <div className="hidden md:block">
          {isHomePage ? (
            <a href="#contact" onClick={() => handleLinkClick('#contact')}>
              <Button size="sm" variant="primary" className="rounded-xl px-4 py-2 text-xs">
                Let&apos;s Connect
              </Button>
            </a>
          ) : (
            <Link to="/#contact" onClick={() => handleLinkClick('#contact')}>
              <Button size="sm" variant="primary" className="rounded-xl px-4 py-2 text-xs">
                Let&apos;s Connect
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-xl text-ink hover:text-primary hover:bg-lavender/70 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-canvas/95 backdrop-blur-md px-5 py-4 space-y-3">
          <ul className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHref === item.href;
              const mobileLinkClass = `block py-2 px-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-lavender text-ink font-semibold'
                  : 'text-ink-secondary hover:text-primary hover:bg-lavender/50'
              }`;

              return (
                <li key={item.href}>
                  {isHomePage ? (
                    <a
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className={mobileLinkClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={`/${item.href}`}
                      onClick={() => handleLinkClick(item.href)}
                      className={mobileLinkClass}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="pt-2">
            {isHomePage ? (
              <a href="#contact" onClick={() => handleLinkClick('#contact')} className="block">
                <Button size="md" variant="primary" className="w-full">
                  Let&apos;s Connect
                </Button>
              </a>
            ) : (
              <Link to="/#contact" onClick={() => handleLinkClick('#contact')} className="block">
                <Button size="md" variant="primary" className="w-full">
                  Let&apos;s Connect
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}