'use client';

import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/constants';

const Hero: React.FC = memo(() => {
  return (
    <section id="start-here" className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">

      <div className="glow-orb top-0 right-[-200px] animate-pulse hidden sm:block"></div>
      <div className="glow-orb bottom-[-200px] left-[-200px] opacity-50 hidden sm:block"></div>

      <div className="container mx-auto flex justify-center items-center relative z-10">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 max-w-2xl mx-auto text-center">
          
          <h1 className="text-[2rem] min-[360px]:text-[2.25rem] min-[400px]:text-[2.5rem] min-[480px]:text-[2.85rem] sm:text-[3.15rem] md:text-[3.65rem] lg:text-[3.25rem] xl:text-[4rem] 2xl:text-[4.75rem] font-bold leading-[1.08] tracking-tight">
            <span className="block">BECOME YOUR</span>
            <span className="block">INDUSTRY&apos;S GO-TO</span>
            <span className="relative inline-block">
              THOUGHT LEADER
              <svg
                className="absolute bottom-0 min-[480px]:-bottom-0.5 sm:-bottom-1 md:-bottom-1.5 lg:-bottom-1 xl:-bottom-2 left-0 w-full h-2 sm:h-3 md:h-4"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C20 4 60 2 100 5C140 8 180 6 198 4"
                  stroke="#DC0078"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[#1BB8BD]">.</span>
            </span>
          </h1>

          <p className="text-[0.9rem] min-[400px]:text-[0.95rem] min-[480px]:text-base sm:text-[1.05rem] md:text-lg lg:text-base xl:text-lg 2xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-600 dark:text-gray-400">
            We help founders, entrepreneurs, C-suites and professionals build powerful <span className="text-[#17A8AD] dark:text-[#1BB8BD] font-medium">LinkedIn personal brands</span> that turn visibility into authority, and authority into inbound opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4 justify-center ">
            <button onClick={() => window.open(CALENDLY_URL, '_blank')} className="bg-[#1BB8BD] justify-centertext-white text-sm sm:text-base lg:text-base xl:text-lg font-bold px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full transition-all duration-500 flex items-center justify-center gap-2 group relative overflow-hidden hover:shadow-[0_10px_40px_rgba(27,184,189,0.4)] hover:scale-105 active:scale-95 font-btn w-full sm:w-auto">
              <span className="relative z-10 whitespace-nowrap ">BOOK A DISCOVERY CALL</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#DC0078] to-[#1BB8BD] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
