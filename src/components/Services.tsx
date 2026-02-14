import { motion } from 'framer-motion';
import { Palette, Play, Target } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    icon: Palette,
    title: 'Event Visual Identity',
    description: 'A distinctive and cohesive visual system built specifically for your event.',
    items: [
      'Event branding and identity',
      'Presentation deck design',
      'Flyers and print collateral',
      'Banners and environmental graphics',
      'Digital and screen assets',
    ],
    gradient: 'from-violet-500/20 to-purple-600/20',
    iconBg: 'from-violet-500 to-purple-600',
  },
  {
    icon: Play,
    title: 'Motion Graphics for Event Screens',
    description: 'Motion graphics designed to elevate the perceived quality of your event and brand.',
    items: [
      'Opening screen visuals',
      'Loop animations',
      'Session transitions',
      'Background visuals',
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Event Marketing Strategy',
    description: 'A defined strategy for how your event is positioned, communicated, and promoted.',
    items: [
      'Event positioning and messaging',
      'Audience targeting strategy',
      'Pre-event promotion direction',
      'Content and visual communication strategy',
    ],
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconBg: 'from-amber-500 to-orange-500',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">Services</p>
            <h2 className="font-canela text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              What we do
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`group relative h-full rounded-2xl glass glow-border glass-hover transition-all duration-500 p-6 sm:p-8 ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.iconBg} mb-4 sm:mb-6`}>
                    <service.icon size={20} className="text-white sm:hidden" />
                    <service.icon size={22} className="text-white hidden sm:block" />
                  </div>

                  {/* Title */}
                  <h3 className="font-geist text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-400 text-sm leading-relaxed mb-6 sm:mb-8">
                    {service.description}
                  </p>

                  {/* Items */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <p className="text-xs font-medium text-dark-500 uppercase tracking-widest mb-3 sm:mb-4">Includes</p>
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="mt-1.5 sm:mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-sm text-dark-300 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
