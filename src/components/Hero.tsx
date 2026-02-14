import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Gradient orbs - smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-accent/5 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-accent-dark/8 rounded-full blur-[60px] sm:blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 hidden sm:block">
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(167,139,250,1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass mb-6 sm:mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] sm:text-xs font-medium text-dark-300 tracking-wide uppercase">
            Event Design & Marketing Strategy
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-canela text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-5 sm:mb-8"
        >
          <span className="text-white">Your event is not</span>
          <br />
          <span className="text-white">just an </span>
          <span className="text-gradient italic">event</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-dark-400 font-light leading-relaxed mb-4 sm:mb-6 px-2"
        >
          It is a moment where your brand is judged, remembered, and trusted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-xl mx-auto space-y-1.5 sm:space-y-2 mb-6 sm:mb-10 px-2"
        >
          <p className="text-dark-500 text-sm sm:text-base font-light">
            Every visual. Every message. Every touchpoint.
          </p>
          <p className="text-dark-500 text-sm sm:text-base font-light">
            Together, they decide whether people see you as ordinary or remarkable.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-white font-medium text-base sm:text-lg md:text-xl mb-8 sm:mb-12"
        >
          We make sure they see you as <span className="text-accent">remarkable</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-dark-950 font-medium rounded-xl hover:bg-dark-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 text-sm sm:text-base"
          >
            Start your project
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-dark-300 font-medium rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm sm:text-base"
          >
            See what we do
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - hide on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-dark-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
