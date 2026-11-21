// src/components/sections/CertificationsSection.tsx
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';

export function CertificationsSection() {
  return (
    <SectionContainer
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Verified courses and technical workshops."
      alternate
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <motion.div
            key={`${cert.title}-${cert.issuer}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
          >
            <Card className="p-5 h-full flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-primary/12 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-ink leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-primary mt-0.5">{cert.issuer}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}