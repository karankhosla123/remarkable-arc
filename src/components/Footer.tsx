export function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="sm:hidden">
                <path d="M2 4L8 1L14 4V12L8 15L2 12V4Z" fill="white" fillOpacity="0.9" />
              </svg>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="hidden sm:block">
                <path d="M2 4L8 1L14 4V12L8 15L2 12V4Z" fill="white" fillOpacity="0.9" />
              </svg>
            </div>
            <span className="text-dark-400 text-xs sm:text-sm font-light text-center sm:text-left">
              [Your Company] — Event Design & Marketing Strategy
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#services" className="text-dark-500 text-xs sm:text-sm hover:text-dark-300 transition-colors duration-300">
              Services
            </a>
            <a href="#approach" className="text-dark-500 text-xs sm:text-sm hover:text-dark-300 transition-colors duration-300">
              Approach
            </a>
            <a href="#contact" className="text-dark-500 text-xs sm:text-sm hover:text-dark-300 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
