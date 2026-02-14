import { motion } from 'framer-motion';
import { Cpu, Rocket, Cloud, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const audiences = [
  { icon: Cpu, label: 'Technology companies' },
  { icon: Rocket, label: 'Product-driven startups' },
  { icon: Cloud, label: 'SaaS companies' },
  { icon: Zap, label: 'Modern brands hosting events, launches, or conferences' },
];

export function WhoFor() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start">
          <div>
            <AnimatedSection>
              <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">For</p>
              <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] sm:leading-[1.05]">
                Who this is <span className="italic text-gradient">for</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="mt-2 lg:mt-0">
            <AnimatedSection delay={0.2}>
              <div className="space-y-3 sm:space-y-4">
                {audiences.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="group flex items-center gap-3 sm:gap-5 glass rounded-xl p-4 sm:p-5 glass-hover transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <item.icon size={16} className="text-dark-400 group-hover:text-accent transition-colors duration-300 sm:hidden" />
                      <item.icon size={18} className="text-dark-400 group-hover:text-accent transition-colors duration-300 hidden sm:block" />
                    </div>
                    <span className="text-dark-200 font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
