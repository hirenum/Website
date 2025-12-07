'use client';

import React, { memo } from 'react';
import { Zap } from 'lucide-react';

interface FloatingCTAProps {
  scrollToSection: (id: string) => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = memo(({ scrollToSection }) => (
  <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-40 animate-bounce-slow">
    <button 
      onClick={() => scrollToSection('linkedin-audit')}
      className="bg-gradient-to-r from-[#A9318A] to-[#DC0078] dark:from-[#A9318A] dark:to-[#DC0078] text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 lg:py-3 lg:px-6 rounded-full shadow-lg shadow-[#A9318A]/40 dark:shadow-[#DC0078]/30 hover:shadow-[0_0_30px_rgba(169,49,138,0.6)] dark:hover:shadow-[0_0_30px_rgba(220,0,120,0.6)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 flex items-center gap-1 sm:gap-1.5 md:gap-2 group relative overflow-hidden font-btn text-[10px] sm:text-xs md:text-sm lg:text-base"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      <Zap size={12} fill="currentColor" className="relative z-10 group-hover:rotate-12 transition-transform duration-300 sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]" /> 
      <span className="relative z-10 whitespace-nowrap">Free LinkedIn Audit</span>
    </button>
  </div>
));

FloatingCTA.displayName = 'FloatingCTA';

export default FloatingCTA;
