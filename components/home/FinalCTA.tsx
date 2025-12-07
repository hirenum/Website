'use client';

import React, { memo } from 'react';

const FinalCTA: React.FC = memo(() => {
  return (
    <section className="py-32 relative flex items-center justify-center text-center overflow-hidden theme-transition bg-[var(--bg-primary)]">
      <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-3xl"></div>
      <div className="relative z-10 px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">Your work is too good <br/> to stay hidden.</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="text-xl font-bold px-10 py-5 rounded-full transition-all duration-500 shadow-xl bg-black text-white shadow-black/20 dark:bg-white dark:text-black dark:shadow-white/10 hover:scale-110 hover:shadow-[0_0_40px_rgba(27,184,189,0.5)] hover:bg-gradient-to-r hover:from-[#1BB8BD] hover:to-[#DC0078] active:scale-95 relative overflow-hidden group font-btn">
            <span className="relative z-10">Book a Discovery Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
});

FinalCTA.displayName = 'FinalCTA';

export default FinalCTA;
