import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/data/portfolio';
import { BackgroundGlow } from '@/components/ui/BackgroundGlow';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/SocialIcons';

const CASE_STUDY_DETAILS: Record<
  string,
  {
    subtitle: string;
    role: string;
    architecture: string;
    overview: string;
    keyChallenge: string;
    solution: string;
  }
> = {
  showx: {
    subtitle: 'End-to-End MERN Cinema & Seat-Reservation Platform',
    role: 'Full-Stack Developer (Frontend, REST APIs, Auth & Payments)',
    architecture: 'React + Vite + Tailwind CSS • Node.js + Express • MongoDB Atlas • Razorpay',
    overview:
      'ShowX CinemaHub is engineered to handle the complete movie-booking lifecycle—from browsing active releases and theatre showtimes to real-time seat selection, conflict-free seat locking, HMAC-SHA256 verified Razorpay checkout, and downloadable PDF tickets.',
    keyChallenge:
      'Preventing concurrent users from double-booking the exact same auditorium seats during peak showtime checkout while maintaining role-based separation for theatre admins and customers.',
    solution:
      'Implemented transactional seat-locking states on the Express/MongoDB backend paired with JWT authentication, Role-Based Access Control (RBAC), and cryptographic Razorpay signature verification before confirming tickets.',
  },
  taskflow: {
    subtitle: 'Interactive Productivity & Task Workflow Workspace',
    role: 'Frontend Developer (UI Architecture & State Persistence)',
    architecture: 'React.js • JavaScript (ES6+) • Tailwind CSS • HTML5 LocalStorage',
    overview:
      'To-Do Dashboard provides a fast, clutter-free workspace to organize daily engineering and academic tasks with instant filtering, status transitions, and zero-latency browser persistence.',
    keyChallenge:
      'Keeping task creation, inline updates, status filtering, and persistent storage responsive without page reloads or state desynchronization.',
    solution:
      'Built modular React state hooks synchronized directly with browser LocalStorage so user workflows survive page refreshes cleanly.',
  },
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const project = projectIndex !== -1 ? PROJECTS_DATA[projectIndex] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <BackgroundGlow />
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <Card className="max-w-md w-full p-8 text-center space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
              Project Not Found
            </p>
            <h1 className="text-2xl font-extrabold text-ink">
              Case study does not exist
            </h1>
            <p className="text-sm text-ink-muted">
              The requested project link may have moved or is unavailable.
            </p>
            <div className="pt-2">
              <Link to="/#projects">
                <Button variant="primary" size="md">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const details = CASE_STUDY_DETAILS[project.slug] ?? {
    subtitle: 'Full-Stack Web Application Case Study',
    role: 'Full-Stack Developer',
    architecture: project.modalTechStack.join(' • '),
    overview: project.fullDescription,
    keyChallenge: 'Designing scalable architecture and responsive user workflows.',
    solution: 'Engineered modular components and clean API integrations.',
  };

  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundGlow />
      <Navbar />

      <main className="flex-1 pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Top Breadcrumb / Back Navigation */}
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-ink-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Featured Projects
            </Link>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-lavender/80 text-primary border border-primary/20">
              Case Study #{String(projectIndex + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              {details.subtitle}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-ink leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base text-ink-muted max-w-3xl leading-relaxed">
              {details.overview}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Demo
                </Button>
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="bg-white">
                  <GithubIcon className="w-4 h-4" />
                  View Source Code
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Full Browser Showcase Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-border-subtle bg-white shadow-[var(--shadow-elevated)]"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-ink text-canvas">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-soft-violet/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-soft-violet/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="ml-2 text-xs font-mono text-lavender/90 truncate">
                  {project.liveUrl.replace('https://', '')}
                </span>
              </div>
              <span className="text-[11px] font-mono text-soft-violet hidden sm:inline">
                Production Preview
              </span>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[480px] object-cover object-top"
            />
          </motion.div>

          {/* Role & Architecture Meta Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card accent="blue" className="p-6 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[#2563EB]">
                <Code2 className="w-4 h-4" />
                Engineering Role
              </div>
              <p className="text-sm sm:text-base font-bold text-ink">{details.role}</p>
            </Card>

            <Card accent="cyan" className="p-6 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase text-[#0891B2]">
                <Layers className="w-4 h-4" />
                System Architecture
              </div>
              <p className="text-sm sm:text-base font-bold text-ink">{details.architecture}</p>
            </Card>
          </div>

          {/* Challenge & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card accent="amber" className="p-6 space-y-3">
              <h2 className="text-lg font-extrabold text-ink">Core Engineering Challenge</h2>
              <p className="text-sm text-ink-secondary leading-relaxed">{details.keyChallenge}</p>
            </Card>

            <Card accent="emerald" className="p-6 space-y-3">
              <h2 className="text-lg font-extrabold text-ink">Implemented Solution</h2>
              <p className="text-sm text-ink-secondary leading-relaxed">{details.solution}</p>
            </Card>
          </div>

          {/* Key Features & Tech Stack */}
          <Card accent="violet" className="p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl font-extrabold text-ink">Key Features & Deliverables</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border-subtle space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.modalTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-lavender/80 text-ink border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Next Project Navigation Banner */}
          {nextProject && nextProject.slug !== project.slug && (
            <div className="rounded-2xl bg-ink text-canvas p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[var(--shadow-elevated)]">
              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase tracking-widest text-soft-violet">
                  Next Case Study
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-canvas">
                  {nextProject.title}
                </h3>
              </div>
              <Link to={`/projects/${nextProject.slug}`}>
                <Button variant="primary" size="md" className="shrink-0">
                  Read Next Case Study
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}