'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import DecorativeCircles from './DecorativeCircles';
import { CALENDLY_URL } from '@/lib/constants';

const WhoWeWorkWith: React.FC = memo(() => {
  const cards = [
    {
      title: "Founders & Entrepreneurs",
      desc: "Building or scaling a business and need a personal brand that drives trust, warm leads, and high-value opportunities.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 14L32 22H16L24 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M16 22V38H32V22" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 38V30H28V38" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="24" cy="8" r="3" className="fill-[#DC0078]/50 group-hover:fill-[#1BB8BD]/50 transition-colors duration-300"/>
          <path d="M10 40H38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      hoverColor: 'DC0078'
    },
    {
      title: "C-Suite & Corporate Leaders",
      desc: " Leading teams but lacking external visibility, and want to shape industry conversations, attract talent, and build a public leadership reputation.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M24 18V24" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 36V32C12 28.6863 14.6863 26 18 26H30C33.3137 26 36 28.6863 36 32V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="24" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="36" cy="24" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 40V38C8 36.3431 9.34315 35 11 35H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M40 40V38C40 36.3431 38.6569 35 37 35H35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="24" cy="12" r="2" className="fill-[#DC0078]/50 group-hover:fill-[#1BB8BD]/50 transition-colors duration-300"/>
        </svg>
      ),
      hoverColor: 'DC0078'
    },
    {
      title: "Ambitious Professionals",
      desc: "Skilled in your field and ready for better roles, bigger opportunities, and a stronger professional identity.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M24 16V20" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 20H32L34 42H14L16 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M24 20V28" className="stroke-[#DC0078] group-hover:stroke-[#1BB8BD] transition-colors duration-300" strokeWidth="1.5"/>
          <path d="M21 20L24 26L27 20" className="stroke-[#DC0078] group-hover:stroke-[#1BB8BD] transition-colors duration-300" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M20 32H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M19 36H29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      hoverColor: 'DC0078'
    },
    {
      title: "Creators & Coaches",
      desc: "Creating or wanting to create content, and need clarity, strategy, and a consistent, professional LinkedIn presence that converts.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="10" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M18 22L26 18V26L18 22Z" fill="#DC0078"/>
          <path d="M6 38H42" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="14" cy="38" r="2" fill="currentColor"/>
          <circle cx="24" cy="38" r="2" fill="currentColor"/>
          <circle cx="34" cy="38" r="2" fill="currentColor"/>
        </svg>
      ),
      hoverColor: '1BB8BD'
    },
    {
      title: "Traditional Industry Experts",
      desc: "Impactful in non-digital industries and want to move beyond word-of-mouth to reach new markets and become known for your expertise.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 40H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 40V24H18V40" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M22 40V18H28V40" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M32 40V12H38V40" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 20V16L24 10L33 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <circle cx="24" cy="10" r="3" fill="#DC0078" fillOpacity="0.5"/>
          <path d="M6 44H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      hoverColor: '1BB8BD'
    },
    {
      title: "And You",
      desc: "Want to be more visible, build a name in your industry, and develop content and a profile that genuinely work for you.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 40C12 32.268 17.268 26 24 26C30.732 26 36 32.268 36 40" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M24 12V20" stroke="#DC0078" strokeWidth="1.5"/>
          <path d="M20 16H28" stroke="#DC0078" strokeWidth="1.5"/>
          <path d="M18 38L24 32L30 38" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      highlight: true,
      hoverColor: '1BB8BD'
    }
  ];

  return (
    <section id="who-we-work-with" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
      <div className="absolute inset-0 opacity-70 dark:opacity-80">
        <DecorativeCircles />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Who we work with
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[1000px] mx-auto">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03, ease: "easeOut" }}
              viewport={{ once: true, margin: "-30px" }}
              className="group"
            >
              <div className={`w-full h-[240px] p-6 rounded-none border bg-[linear-gradient(135deg,rgba(245,245,245,0.95)_0%,rgba(250,250,250,0.9)_50%,rgba(255,255,255,0.85)_100%)] dark:bg-[linear-gradient(135deg,var(--bg-primary)_0%,var(--bg-primary)_80%,rgba(63,63,70,0.1)_100%)] transition-colors duration-300 hover:shadow-md flex flex-col items-center text-center relative overflow-hidden shadow-none dark:shadow-none ${item.highlight ? 'border-[#1BB8BD]/20 hover:shadow-[#1BB8BD]/5' : 'border-gray-200/50 dark:border-zinc-800/30'} ${item.hoverColor === 'DC0078' ? 'hover:border-[#DC0078]/30 hover:shadow-[#DC0078]/5' : 'hover:border-[#1BB8BD]/30 hover:shadow-[#1BB8BD]/5'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/30 dark:from-zinc-700/5 via-transparent to-gray-50/20 dark:to-zinc-800/5"></div>
                
                <div className={`relative z-10 text-gray-600 dark:text-gray-300 transition-colors duration-300 mb-4 mt-2 ${item.hoverColor === 'DC0078' ? 'group-hover:text-[#DC0078]' : 'group-hover:text-[#17A8AD] dark:group-hover:text-[#1BB8BD]'}`}>
                  {item.icon}
                </div>
                <h3 className="relative z-10 font-bold text-lg mb-3 text-center text-gray-900 dark:text-white">{item.title}</h3>
                <p className="relative z-10 text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-30px" }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">Yes, this is for you<span className="text-[#DC0078]">.</span></p>
          <button 
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            className="bg-[#1BB8BD] text-white text-lg px-8 py-4 rounded-full font-bold transition-all duration-500 inline-flex items-center gap-2 group relative overflow-hidden hover:shadow-[0_10px_30px_rgba(27,184,189,0.25)] hover:scale-105 active:scale-95 font-btn"
          >
            <span className="relative z-10">Let{"'"}s Talk</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#DC0078] to-[#1BB8BD] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
});

WhoWeWorkWith.displayName = 'WhoWeWorkWith';

export default WhoWeWorkWith;
