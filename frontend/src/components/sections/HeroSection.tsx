import { useState, useEffect, useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Check, Code2, Download, Mail, Server } from 'lucide-react';
import { HERO_TECH_STRIP, PROFILE_DATA } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { TechLogo } from '@/components/ui/TechIcons';

/* Subtle Magnetic Pull Wrapper for Primary CTAs */
function MagneticWrap({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* Smooth Count-Up Stat Number */
function AnimatedStat({
  target,
  decimals = 0,
  suffix = '',
}: {
  target: number;
  decimals?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId: number;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const currentRole = PROFILE_DATA.roles[roleIndex];
    const typingSpeed = isDeleting ? 42 : 80;
    let pauseTimer: number | undefined;

    const timer = window.setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        pauseTimer = window.setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PROFILE_DATA.roles.length);
      }
    }, typingSpeed);

    return () => {
      window.clearTimeout(timer);
      if (pauseTimer !== undefined) {
        window.clearTimeout(pauseTimer);
      }
    };
  }, [displayedText, isDeleting, roleIndex]);

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
    <section
      id="home"
      className="hero-ambient-bg pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      {/* Floating Ultra-Light Background Developer Watermark Symbols */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none font-mono font-bold"
      >
        <motion.span
          animate={{ y: [0, -10, 0], rotate: [-8, -3, -8] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 left-[5%] text-4xl sm:text-5xl text-primary opacity-[0.065]"
        >
          &lt;/&gt;
        </motion.span>

        <motion.span
          animate={{ y: [0, 9, 0], rotate: [4, 9, 4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="hidden sm:inline-block absolute top-14 left-[46%] text-3xl text-ink opacity-[0.055]"
        >
          =&gt;
        </motion.span>

        <motion.span
          animate={{ y: [0, -8, 0], rotate: [-5, -1, -5] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
          className="hidden lg:inline-block absolute top-1/2 left-[47%] text-3xl text-primary opacity-[0.06]"
        >
          &amp;&amp;
        </motion.span>

        <motion.span
          animate={{ y: [0, -9, 0], rotate: [8, 3, 8] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          className="absolute bottom-28 left-[7%] text-4xl sm:text-5xl text-ink opacity-[0.06]"
        >
          &#123; &#125;
        </motion.span>

        <motion.span
          animate={{ y: [0, 8, 0], rotate: [-4, 2, -4] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
          className="hidden md:inline-block absolute bottom-36 left-[43%] text-2xl text-ink opacity-[0.05]"
        >
          /** */
        </motion.span>

        <motion.span
          animate={{ y: [0, 10, 0], rotate: [-8, -3, -8] }}
          transition={{ duration: 9.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="hidden md:inline-block absolute top-20 right-[6%] text-4xl text-primary opacity-[0.065]"
        >
          //
        </motion.span>

        <motion.span
          animate={{ y: [0, -9, 0], rotate: [5, 10, 5] }}
          transition={{ duration: 8.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-24 right-[6%] text-3xl sm:text-4xl text-primary opacity-[0.06]"
        >
          []
        </motion.span>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Welcome + Live Availability Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-lavender/80 border border-primary/25 text-xs font-mono font-semibold text-primary">
                WELCOME TO MY PORTFOLIO
              </div> */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-border-subtle text-xs font-medium text-ink-secondary shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
                </span>
                Open to Full-Stack Roles
              </div>
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

            {/* Buttons with Magnetic Hover Interaction */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticWrap>
                <a href="#projects">
                  <Button variant="primary" size="md" className="group">
                    View My Projects
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </a>
              </MagneticWrap>

              <MagneticWrap>
                <a href="#contact">
                  <Button variant="outline" size="md" className="bg-white">
                    <Mail className="w-4 h-4 text-primary" />
                    Contact Me
                  </Button>
                </a>
              </MagneticWrap>

              <a href={PROFILE_DATA.resumePath} download>
                <Button variant="ghost" size="md">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Profile Card + Depth Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Depth Badge — Top Left */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-primary/25 shadow-[var(--shadow-soft)] text-[11px] font-mono font-semibold text-ink absolute -top-3.5 -left-3 z-20 pointer-events-none"
            >
              <Code2 className="w-3.5 h-3.5 text-primary" />
              Frontend UI/UX
            </motion.div>

            {/* Floating Depth Badge — Bottom Right */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-border-subtle shadow-[var(--shadow-soft)] text-[11px] font-mono font-semibold text-ink-secondary absolute -bottom-3 -right-2 z-20 pointer-events-none"
            >
              <Server className="w-3.5 h-3.5 text-primary" />
              Backend &amp; APIs
            </motion.div>

            <Card className="p-7 text-center relative">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-canvas border border-border-subtle text-ink-secondary shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Full-Stack Developer
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

              <div className="flex items-center justify-center gap-3 mt-5 relative">
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
                  onClick={handleCopyEmail}
                  aria-label="Email"
                  title={`Copy ${PROFILE_DATA.email}`}
                  className="relative w-9 h-9 rounded-full bg-canvas border border-border-subtle flex items-center justify-center text-ink-secondary hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#059669]" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                  {copiedEmail && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-ink text-canvas text-[10px] font-mono whitespace-nowrap shadow-sm">
                      Copied!
                    </span>
                  )}
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-border-subtle grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-sm font-extrabold text-primary">
                    <AnimatedStat target={8.9} decimals={1} />
                  </p>
                  <p className="text-[10px] text-ink-muted">MCA CGPA</p>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-ink">
                    <AnimatedStat target={15} suffix="+" />
                  </p>
                  <p className="text-[10px] text-ink-muted">Technologies</p>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-primary">
                    <AnimatedStat target={25} suffix="+" />
                  </p>
                  <p className="text-[10px] text-ink-muted">REST APIs</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Single Clean Row of 8 Unique Circular Medallions (Gentle Float + Hover Lift + Tooltip) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 pt-2"
        >
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-7">
            {HERO_TECH_STRIP.map((tech, index) => (
              <motion.div
                key={tech.name}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.25,
                }}
                whileHover={{ y: -10, scale: 1.14 }}
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