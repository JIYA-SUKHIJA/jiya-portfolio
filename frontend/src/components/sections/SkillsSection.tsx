import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';

export function SkillsSection() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Technical Stack"
      title="Skills & Technologies"
      subtitle="Languages, frameworks, databases, and core computer science foundations."
      alternate
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-5 space-y-4 h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-ink">{category.title}</h3>
                <span className="text-[11px] font-mono text-ink-muted">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-lavender/75 text-ink border border-border-subtle hover:border-primary/45 hover:bg-lavender transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}