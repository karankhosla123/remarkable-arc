import { AnimatedSection } from './AnimatedSection';
import { Check } from 'lucide-react';

export function Deliverables() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-dot-grid opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">Deliverables</p>
          <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-5 sm:mb-8">
            Production-ready
          </h2>
          <p className="text-base sm:text-lg text-dark-400 font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
            All assets are delivered as production-ready digital files, optimized for print, presentation, and display.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-stretch sm:items-center justify-center">
            <div className="flex items-center gap-3 glass rounded-xl px-5 sm:px-6 py-3.5 sm:py-4">
              <Check size={16} className="text-accent flex-shrink-0 sm:hidden" />
              <Check size={18} className="text-accent flex-shrink-0 hidden sm:block" />
              <span className="text-dark-200 font-light text-sm sm:text-base">Ready to use immediately</span>
            </div>
            <div className="flex items-center gap-3 glass rounded-xl px-5 sm:px-6 py-3.5 sm:py-4">
              <Check size={16} className="text-accent flex-shrink-0 sm:hidden" />
              <Check size={18} className="text-accent flex-shrink-0 hidden sm:block" />
              <span className="text-dark-200 font-light text-sm sm:text-base">Ready to scale</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
