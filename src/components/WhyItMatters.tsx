import { AnimatedSection, AnimatedText } from './AnimatedSection';

export function WhyItMatters() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      {/* Accent line - hidden on small screens */}
      <div className="absolute left-1/2 top-0 w-px h-20 sm:h-32 bg-gradient-to-b from-transparent to-accent/20 hidden sm:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
          <div>
            <AnimatedSection>
              <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">Why it matters</p>
              <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8">
                Design shapes{' '}
                <span className="italic text-gradient">perception</span>
              </h2>
            </AnimatedSection>

            <AnimatedText delay={0.15}>
              <p className="text-base sm:text-lg text-dark-300 font-light leading-relaxed mb-3 sm:mb-4">
                Most events fail not because of the idea.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.25}>
              <p className="text-base sm:text-lg text-dark-400 font-light leading-relaxed">
                They fail because they look ordinary.
              </p>
            </AnimatedText>
          </div>

          <div className="mt-2 lg:mt-0">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6 sm:space-y-8">
                <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <p className="text-white text-base sm:text-lg font-light leading-relaxed mb-4 sm:mb-6">
                    When your event looks intentional, premium, and clear, people trust you more.
                  </p>
                  <div className="space-y-1.5 sm:space-y-2">
                    <p className="text-dark-400 font-light text-sm sm:text-base">They engage more.</p>
                    <p className="text-dark-400 font-light text-sm sm:text-base">They remember you.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2 pl-6 sm:pl-8 border-l border-accent/30">
                  <p className="text-white font-medium text-sm sm:text-base">Design shapes perception.</p>
                  <p className="text-accent font-medium text-sm sm:text-base">Perception shapes outcomes.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
