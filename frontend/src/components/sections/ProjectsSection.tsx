import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/SocialIcons';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <SectionContainer
      id="projects"
      eyebrow="Portfolio Showcase"
      title="Featured"
      titleHighlight="Projects"
      subtitle="Full-stack web applications engineered with clean architecture and responsive interfaces."
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card
              accent={index === 0 ? 'violet' : 'blue'}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="cursor-pointer p-0 overflow-hidden h-full flex flex-col justify-between"
            >
              <div>
                {/* Top Preview Banner with Real Screenshot + Hover Zoom */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-lavender via-canvas to-soft-violet/45 border-b border-border-subtle">
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-ink/90 text-canvas text-[11px] font-mono font-medium">
                    Full-Stack App
                  </div>
                  <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-white/90 text-ink text-[11px] font-mono font-bold border border-border-subtle">
                    #{String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="w-full h-full flex items-end justify-center px-5 pt-11">
                    <div className="w-full h-full rounded-t-xl bg-white border border-b-0 border-border-subtle shadow-[var(--shadow-soft)] overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-ink text-canvas">
                        <span className="w-2 h-2 rounded-full bg-soft-violet/60" />
                        <span className="w-2 h-2 rounded-full bg-soft-violet/80" />
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="ml-2 text-[10px] font-mono text-lavender/90 truncate">
                          {project.liveUrl.replace('https://', '')}
                        </span>
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[calc(100%-24px)] object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.cardTechStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-lavender/75 text-ink border border-border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 border-t border-border-subtle/80 flex items-center justify-between text-xs font-semibold text-primary">
                <span className="inline-flex items-center gap-1.5">
                  Explore Project Details
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
                <Link
                  to={`/projects/${project.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[11px] text-ink-secondary hover:text-primary underline underline-offset-2"
                >
                  Case Study &rarr;
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Animated Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/45 backdrop-blur-xs p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-3xl bg-white border border-border-subtle p-6 sm:p-8 shadow-[var(--shadow-elevated)] space-y-5 max-h-[90vh] overflow-y-auto"
            >
              <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-ink">
                {selectedProject.title}
              </h3>

              <div className="rounded-2xl overflow-hidden border border-border-subtle bg-canvas shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-1.5 px-3.5 py-2 bg-ink text-canvas">
                  <span className="w-2.5 h-2.5 rounded-full bg-soft-violet/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-soft-violet/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="ml-2 text-[11px] font-mono text-lavender/90 truncate">
                    {selectedProject.liveUrl.replace('https://', '')}
                  </span>
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-60 object-cover object-top"
                />
              </div>

              <p className="text-sm text-ink-secondary leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-ink-secondary">
                {selectedProject.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {selectedProject.modalTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-lavender/80 text-ink border border-border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={`/projects/${selectedProject.slug}`}
                  onClick={() => setSelectedProject(null)}
                >
                  <Button variant="primary" size="sm">
                    <BookOpen className="w-3.5 h-3.5" />
                    Full Case Study
                  </Button>
                </Link>
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-white">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </Button>
                </a>
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="bg-white">
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </Button>
                </a>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}