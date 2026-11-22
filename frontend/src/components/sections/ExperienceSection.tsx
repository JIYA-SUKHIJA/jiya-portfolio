import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';

export function ExperienceSection() {
  return (
    <SectionContainer
      id="experience"
      eyebrow="Work History"
      title="Experience"
      subtitle="Hands-on full-stack software development and industry internship experience."
      alternate
      className="scroll-mt-20"
    >
      <div className="relative border-l-2 border-soft-violet/70 ml-3 pl-8 space-y-6">
        {EXPERIENCE_DATA.map((exp) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="absolute -left-[42px] top-7 w-4 h-4 rounded-full bg-primary ring-4 ring-lavender" />

            <Card className="p-7 sm:p-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-primary/12 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-ink">{exp.role}</h3>
                  <p className="text-xs sm:text-sm font-mono text-primary">{exp.companyLine}</p>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}