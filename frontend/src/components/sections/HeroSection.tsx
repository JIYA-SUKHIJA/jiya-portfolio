import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { HERO_TECH_STRIP, PROFILE_DATA } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { TechLogo } from '@/components/ui/TechIcons';

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PROFILE_DATA.roles[roleIndex];
    const typingSpeed = isDeleting ? 42 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PROFILE_DATA.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="hero-ambient-bg pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-lavender/80 border border-primary/25 text-xs font-mono font-semibold text-primary">
              WELCOME TO MY PORTFOLIO
            </div>

            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-ink leading-[1.08]">
                {PROFILE_DATA.heroHeading}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-ink-secondary min-h-[2.4rem]">
                I am a{' '}
                <span className="text-primary">{displayedText}</span>
                <span className="inline-block w-[2.5px] h-7 bg-primary ml-0.5 align-middle animate-pulse" />
              </p>
            </div>

            <p className="text-sm sm:text-base text-ink-muted max-w-xl leading-relaxed">
              {PROFILE_DATA.heroSummary}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects">
                <Button variant="primary" size="md" className="group">
                  View My Projects
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" size="md" className="bg-white">
                  <Mail className="w-4 h-4 text-primary" />
                  Contact Me
                </Button>
              </a>

              <a href={PROFILE_DATA.resumePath} download>
                <Button variant="ghost" size="md">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Card className="p-7 text-center relative">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-canvas border border-border-subtle text-ink-secondary shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  MERN Stack Engineer
                </span>
              </div>

              <div className="relative w-44 h-44 mx-auto my-2 flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute inset-1.5 rounded-full bg-gradient-to-tr from-primary/25 to-soft-violet/40 blur-md"
                />
                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-primary/45"
                />
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-lavender via-white to-soft-violet/40 border-2 border-white shadow-[var(--shadow-elevated)] flex items-center justify-center overflow-hidden">
                  <img
                    src={PROFILE_DATA.profileImage}
                    alt={PROFILE_DATA.name}
                    width={144}
                    height={144}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <h2 className="text-xl font-extrabold text-ink">{PROFILE_DATA.name}</h2>
                <p className="text-xs font-medium text-ink-muted">Full-Stack Developer &bull; MCA</p>
              </div>

              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase bg-primary/10 text-primary">
                  Frontend
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase bg-lavender text-ink">
                  Backend APIs
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 mt-5">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full bg-canvas border border-border-subtle flex items-center justify-center text-ink-secondary hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-canvas border border-border-subtle flex items-center justify-center text-ink-secondary hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  aria-label="Email"
                  className="w-9 h-9 rounded-full bg-canvas border border-border-subtle flex items-center justify-center text-ink-secondary hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-border-subtle grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-sm font-extrabold text-primary">8.9</p>
                  <p className="text-[10px] text-ink-muted">MCA CGPA</p>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-ink">15+</p>
                  <p className="text-[10px] text-ink-muted">Technologies</p>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-primary">25+</p>
                  <p className="text-[10px] text-ink-muted">REST APIs</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Single Clean Row of 8 Unique Circular Medallions (No Duplicates, Hover Lift + Tooltip) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 pt-2"
        >
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-7">
            {HERO_TECH_STRIP.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -8, scale: 1.14 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group relative flex items-center justify-center cursor-pointer shrink-0"
              >
                {/* Dark Pill Tooltip on Hover */}
                <span className="pointer-events-none absolute -top-9 z-20 px-2.5 py-1 rounded-lg bg-ink text-canvas text-[11px] font-mono font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-[var(--shadow-soft)]">
                  {tech.name}
                </span>

                {/* Soft Circular Medallion */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 border border-border-subtle/80 shadow-[0_8px_24px_-8px_rgba(37,35,76,0.14)] group-hover:border-primary/45 group-hover:shadow-[var(--shadow-violet-glow)] flex items-center justify-center transition-all duration-200">
                  <TechLogo name={tech.name} className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}