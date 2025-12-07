'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import DecorativeCircles from './DecorativeCircles';

const WhyItWorks: React.FC = memo(() => {
  const topRowItems = [
    {
      title: "Earn trust faster",
      desc: "When people can see your thinking, experience and consistency, trust doesn't start at zero.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L6 8V14C6 20.63 10.28 26.79 16 28C21.72 26.79 26 20.63 26 14V8L16 4Z" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 16L14 19L21 12" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Create demand, don't chase it",
      desc: "Your content and presence gently educate your audience on who you are and why you're the right choice.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="10" stroke="#DC0078" strokeWidth="1.5"/>
          <path d="M16 11V21" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 16H21" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Build investor confidence",
      desc: "with a professional brand, a sharp site, and a story that gets taken seriously",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="18" width="6" height="10" stroke="#DC0078" strokeWidth="1.5"/>
          <rect x="13" y="12" width="6" height="16" stroke="#DC0078" strokeWidth="1.5"/>
          <rect x="20" y="6" width="6" height="22" stroke="#DC0078" strokeWidth="1.5"/>
          <path d="M9 4L16 8L23 4" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const bottomRowItems = [
    {
      title: "Attract aligned opportunities",
      desc: "Roles, clients, partnerships and speaking invites that match your values, skills and direction.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#DC0078" strokeWidth="1.5"/>
          <circle cx="16" cy="16" r="8" stroke="#DC0078" strokeWidth="1.5"/>
          <circle cx="16" cy="16" r="4" stroke="#DC0078" strokeWidth="1.5"/>
          <circle cx="16" cy="16" r="1.5" fill="#DC0078"/>
        </svg>
      )
    },
    {
      title: "Stand out in a crowded space",
      desc: "Instead of competing on price or title, you stand out on perspective, clarity and authority.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L18.5 11H26L20 15.5L22.5 23L16 18.5L9.5 23L12 15.5L6 11H13.5L16 4Z" stroke="#DC0078" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M8 26H24" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 28H22" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="why-it-works" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
      <div className="absolute inset-0 opacity-70 dark:opacity-80">
        <DecorativeCircles />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Why Thought Leadership Works?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            People don{"'"}t just buy products, services or roles.
            They buy into people,<br></br> their judgment, their track record, their ideas.
            <br />
            <span className="text-[#17A8AD] dark:text-[#1BB8BD]">A strong personal brand on LinkedIn helps you:</span>
          </motion.p>
        </div>

        {/* Top Row */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-x-0 gap-y-0">
            {topRowItems.map((item, i, arr) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
                className="text-center group py-8 px-6 relative"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                {i < arr.length - 1 && (
                  <div className="md:hidden absolute -bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1BB8BD]/70 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#1BB8BD]/70 to-transparent"></div>
          <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#1BB8BD]/70 to-transparent"></div>
        </div>

        {/* Horizontal Divider */}
        <div className="relative max-w-5xl mx-auto my-2">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#1BB8BD]/70 to-transparent"></div>
        </div>

        {/* Bottom Row */}
        <div className="relative max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-0 gap-y-0">
            {bottomRowItems.map((item, i, arr) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-30px" }}
                className="text-center group py-8 px-6 relative"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                {i < arr.length - 1 && (
                  <div className="md:hidden absolute -bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1BB8BD]/70 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#1BB8BD]/70 to-transparent"></div>
        </div>
      </div>
    </section>
  );
});

WhyItWorks.displayName = 'WhyItWorks';

export default WhyItWorks;
