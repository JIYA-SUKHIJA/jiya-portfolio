// src/components/sections/EducationSection.tsx
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';

export function EducationSection() {
  return (
    <SectionContainer
      id="education"
      eyebrow="Academic Background"
      title="Education"
      subtitle="Postgraduate and undergraduate degrees in computer applications."
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
          >
            <Card className="p-6 h-full flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-lavender border border-soft-violet/50 flex items-center justify-center text-ink shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-ink">{edu.institution}</h3>
                <p className="text-xs sm:text-sm font-medium text-ink-secondary">{edu.degree}</p>
                <p className="text-xs font-mono font-semibold text-primary pt-1">{edu.scoreAndYear}</p>
                <p className="text-xs text-ink-muted">{edu.location}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}