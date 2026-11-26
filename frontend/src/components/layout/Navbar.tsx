import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
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

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

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
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_24px_-12px_rgba(37,35,76,0.12)] border-b border-[#E0E3F2]'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#E0E3F2]/70'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Brand Logo & Bold Name */}
        <Link
          to="/"
          onClick={(e) =>
            handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, 'home')
          }
          className="flex items-center gap-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F7FB] border border-[#E0E3F2] p-1 shadow-2xs transition-transform duration-200 group-hover:scale-105 group-hover:border-[#635BCA]/40">
            <img
              src="/logo.svg"
              alt="Jiya Sukhija Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-lg md:text-xl font-extrabold tracking-wide text-[#25234C]">
            JIYA SUKHIJA
          </span>
        </Link>

        {/* Desktop Navigation Links with Sliding Active Pill */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              location.pathname === '/' && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative rounded-xl px-4 py-2 text-[15px] transition-colors duration-200 ${
                  isActive
                    ? 'font-bold text-[#25234C]'
                    : 'font-semibold text-[#25234C]/75 hover:text-[#25234C]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-xl bg-[#E0E3F2] border border-[#A5A9D8]/35"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="rounded-2xl bg-[#635BCA] px-6 py-2.5 text-[15px] font-bold text-white shadow-[0_6px_18px_-6px_rgba(99,91,202,0.5)] transition-all duration-200 hover:bg-[#534BB8] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-6px_rgba(99,91,202,0.6)] active:scale-95"
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-xl p-2.5 text-[#25234C] hover:bg-[#F6F7FB] transition-colors md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Subtle Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: smoothProgress }}
        className="h-[2px] w-full origin-left bg-gradient-to-r from-[#A5A9D8] via-[#635BCA] to-[#25234C]"
      />

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#E0E3F2] bg-white/98 backdrop-blur-md shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 pb-6 pt-3">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  location.pathname === '/' && activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`rounded-xl px-4 py-3 text-base transition-colors ${
                      isActive
                        ? 'bg-[#E0E3F2] text-[#25234C] font-bold'
                        : 'font-semibold text-[#25234C]/75 hover:bg-[#F6F7FB] hover:text-[#25234C]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="mt-2 rounded-2xl bg-[#635BCA] px-6 py-3 text-center text-base font-bold text-white shadow-sm hover:bg-[#534BB8]"
              >
                Let's Connect
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;