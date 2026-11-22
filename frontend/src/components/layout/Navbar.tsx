import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/70'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          onClick={(e) =>
            handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, 'home')
          }
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.svg"
            alt="Jiya Sukhija Logo"
            className="h-9 w-9 rounded-lg object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-lg md:text-xl font-bold tracking-wider text-[#1E1B39]">
            JIYA SUKHIJA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive =
              location.pathname === '/' && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`rounded-xl px-4 py-2 text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E2E4F3] text-[#1E1B39] font-semibold'
                    : 'text-[#5A5D7A] hover:bg-slate-100/80 hover:text-[#1E1B39]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA — Exact Original Color (#6356E5) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="rounded-2xl bg-[#6356E5] px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#5246D4] hover:shadow-md active:scale-95"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-[#1E1B39] hover:bg-slate-100 md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 pt-3 shadow-lg md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                location.pathname === '/' && activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E2E4F3] text-[#1E1B39] font-semibold'
                      : 'text-[#5A5D7A] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 rounded-2xl bg-[#6356E5] px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-[#5246D4]"
            >
              Let's Connect
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;