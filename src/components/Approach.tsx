import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const steps = [
  {
    num: '01',
    title: 'Positioning',
    description: 'Starting with positioning — defining how your event is perceived.',
  },
  {
    num: '02',
    title: 'Visual System',
    description: 'Building the visual and communication system around it.',
  },
  {
    num: '03',
    title: 'Every Detail',
    description: 'Every asset. Every detail. Every touchpoint.',
  },
  {
    num: '04',
    title: 'Complete Experience',
    description: 'Working together to create a complete experience.',
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">Process</p>
            <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4 sm:mb-6">
              Our approach
            </h2>
            <p className="text-base sm:text-lg text-dark-400 font-light max-w-xl mx-auto">
              Every event is designed intentionally.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <AnimatedSection key={step.num} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full rounded-xl sm:rounded-2xl glass glass-hover transition-all duration-500 p-6 sm:p-8"
              >
                <div className="mb-4 sm:mb-6">
                  <span className="font-canela text-3xl sm:text-4xl font-light text-accent/30 group-hover:text-accent/60 transition-colors duration-500">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-geist text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-400 font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line - only on large screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-dark-700 to-transparent" />
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
