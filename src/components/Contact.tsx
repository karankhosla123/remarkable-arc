import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { Send, ArrowRight } from 'lucide-react';

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      {/* Glow effect - smaller on mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-accent/5 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">Contact</p>
            <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight mb-4 sm:mb-6">
              Let's create something{' '}
              <span className="italic text-gradient">remarkable</span>
            </h2>
            <p className="text-base sm:text-lg text-dark-400 font-light max-w-lg mx-auto">
              Get in touch to discuss your event.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-xl mx-auto">
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-dark-500 text-sm font-light focus:outline-none transition-all duration-300 ${
                      focused === 'name'
                        ? 'border-accent/40 bg-white/[0.05]'
                        : 'border-white/[0.06] hover:border-white/10'
                    }`}
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-dark-500 text-sm font-light focus:outline-none transition-all duration-300 ${
                      focused === 'email'
                        ? 'border-accent/40 bg-white/[0.05]'
                        : 'border-white/[0.06] hover:border-white/10'
                    }`}
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Company"
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-dark-500 text-sm font-light focus:outline-none transition-all duration-300 ${
                    focused === 'company'
                      ? 'border-accent/40 bg-white/[0.05]'
                      : 'border-white/[0.06] hover:border-white/10'
                  }`}
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Tell us about your event..."
                  rows={4}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder:text-dark-500 text-sm font-light focus:outline-none transition-all duration-300 resize-none ${
                    focused === 'message'
                      ? 'border-accent/40 bg-white/[0.05]'
                      : 'border-white/[0.06] hover:border-white/10'
                  }`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-dark-950 font-medium rounded-xl hover:bg-dark-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 text-sm sm:text-base"
              >
                <Send size={15} className="sm:hidden" />
                <Send size={16} className="hidden sm:block" />
                Send message
                <ArrowRight size={15} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 sm:hidden" />
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 hidden sm:block" />
              </motion.button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
