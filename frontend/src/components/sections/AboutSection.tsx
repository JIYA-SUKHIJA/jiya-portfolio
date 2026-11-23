import { motion } from 'framer-motion';
import { Code2, Database, Layers } from 'lucide-react';
import { ABOUT_DATA } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';

const pillars = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'React.js, TypeScript, Next.js, Tailwind CSS & Framer Motion',
  },
  {
    icon: Layers,
    title: 'Backend & Security',
    desc: 'Node.js, Express, REST APIs, JWT, Google OAuth & RBAC',
  },
  {
    icon: Database,
    title: 'Databases & Core CS',
    desc: 'MongoDB Atlas, MySQL, DSA, OOP, DBMS & OS',
  },
];

export function AboutSection() {
  return (
    <SectionContainer
      id="about"
      eyebrow="About Me"
      title="Who I"
      titleHighlight="Am"
      subtitle="MCA student and Full-Stack Developer focused on building reliable, database-driven web applications."
      alternate
      className="scroll-mt-20"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="space-y-4 p-7 sm:p-8">
            {ABOUT_DATA.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <Card className="p-5 h-full flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/12 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                    <p className="text-xs text-ink-muted mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}