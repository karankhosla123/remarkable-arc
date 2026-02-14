import { AnimatedSection, AnimatedText } from './AnimatedSection';

export function Intro() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] sm:leading-[1.05] tracking-tight mb-8 sm:mb-12">
            We design events that{' '}
            <span className="text-gradient italic">attract</span>,{' '}
            <span className="text-gradient italic">engage</span>, and{' '}
            <span className="text-gradient italic">convert</span>.
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl">
          <AnimatedText delay={0.15}>
            <p className="text-base sm:text-lg md:text-xl text-dark-300 font-light leading-relaxed mb-4 sm:mb-6">
              We help product-driven and technology companies design the complete visual and strategic foundation of their events.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.25}>
            <p className="text-base sm:text-lg md:text-xl text-dark-400 font-light leading-relaxed mb-6 sm:mb-10">
              From identity and motion graphics to messaging and marketing strategy, every element is designed to create clarity, credibility, and impact.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.35}>
            <div className="flex flex-col gap-1 text-dark-500">
              <p className="text-sm sm:text-base">Not just design.</p>
              <p className="text-sm sm:text-base">Not just marketing.</p>
              <p className="text-sm sm:text-base text-white font-medium mt-2">A complete, intentional experience.</p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
