'use client';

import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import type { Step } from '@/lib/types';
import { throttle } from '@/lib/throttle';

const HowItWorks: React.FC = memo(() => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [lineProgress, setLineProgress] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    { 
      title: "Discover", 
      desc: "We start with a discovery call to understand your goals (business, career, influence), audit your current presence, and clarify what success looks like.",
      details: ["Audit current presence", "Define success metrics", "Assess fit"]
    },
    { 
      title: "Uncover", 
      desc: "Deep-dive Brand Uncovery sessions. We explore your story, key experiences, and the value you bring to extract your core positioning.",
      details: ["Story & Background", "Core Value Proposition", "Voice & Boundaries"]
    },
    { 
      title: "Optimise", 
      desc: "We rebuild your LinkedIn profile to match your positioning. Your profile becomes a clear, strong representation of who you are.",
      details: ["Photo & Banner Direction", "Custom Headline", "About Section rewriting"]
    },
    { 
      title: "Strategise", 
      desc: "With foundations ready, we design your content and visibility playbook. No guessing, just a clear plan.",
      details: ["Content Pillars", "Posting Rhythm", "Engagement Strategy"]
    },
    { 
      title: "Execute", 
      desc: "We start the work. Depending on your package, we either guide you, co-create with you, or handle the heavy lifting.",
      details: ["Content Creation", "Weekly Actions", "Ongoing Support"]
    },
    { 
      title: "Grow", 
      desc: "We don't set and forget. We track analytics, learn what works, and adjust your strategy for compound growth over time.",
      details: ["Track Analytics", "Refine Hooks & Topics", "Evolve Strategy"]
    }
  ];

  const updateActiveStep = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let closestStep: number | null = null;
    let closestDistance = Infinity;

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestStep = index;
          }
        }
      }
    });

    setActiveStep(closestStep);

    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const startOffset = windowHeight * 0.6;
      const progress = Math.max(0, Math.min(1, (startOffset - sectionTop) / sectionHeight));
      setLineProgress(progress);
    }
  }, []);

  useEffect(() => {
    const throttledUpdate = throttle(updateActiveStep, 50);
    window.addEventListener('scroll', throttledUpdate);
    const timeoutId = setTimeout(updateActiveStep, 100);
    return () => {
      window.removeEventListener('scroll', throttledUpdate);
      clearTimeout(timeoutId);
    };
  }, [updateActiveStep]);

  return (
    <section id="how-it-works" className="py-24 relative theme-transition bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Hirenum Method</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We follow a structured, hands-on process to take you from &quot;present on LinkedIn&quot; to &quot;positioned as a thought leader&quot;.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-zinc-700 md:-translate-x-1/2"></div>
          <div 
            className="absolute left-8 md:left-1/2 top-0 w-px md:-translate-x-1/2 transition-all duration-300"
            style={{ 
              height: `${lineProgress * 100}%`, 
              opacity: lineProgress > 0 ? 0.65 : 0,
              background: 'linear-gradient(to bottom, #1BB8BD 0%, #1BB8BD 40%, #DC0078 100%)'
            }}
          ></div>
          
          <div className="space-y-12">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <div 
                  key={i} 
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#1BB8BD] z-10 bg-[var(--bg-primary)] transition-all duration-500 ${isActive ? 'shadow-[0_0_8px_rgba(27,184,189,0.4)] scale-125' : ''}`}>
                  </div>

                  <div className="ml-20 md:ml-0 md:w-1/2 md:px-10 w-full">
                    <div className={`p-8 rounded-xl border border-white/40 dark:border-zinc-800/50 transition-all duration-500 relative overflow-hidden backdrop-blur-sm bg-[linear-gradient(135deg,rgba(240,240,240,0.9)_0%,rgba(245,245,245,0.7)_70%,rgba(250,250,250,0.4)_100%)] dark:bg-[linear-gradient(135deg,var(--bg-primary)_0%,var(--bg-primary)_70%,rgba(63,63,70,0.5)_100%)] shadow-[0_2px_15px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.05)] ${isActive ? 'shadow-md shadow-[#1BB8BD]/5 -translate-y-2' : ''}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 dark:from-zinc-700/10 via-transparent to-gray-100/10 dark:to-zinc-800/10"></div>
                      <div className={`absolute inset-0 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] transition-opacity duration-500 ${isActive ? 'opacity-5' : 'opacity-0'}`}></div>
                      <div className={`absolute -top-4 -right-4 text-8xl font-black z-0 transition-colors duration-500 ${isActive ? 'text-[#DC0078]/15 dark:text-[#DC0078]/15' : 'text-black/5 dark:text-zinc-600/30'}`}>0{i+1}</div>
                      
                      <div className="relative z-10">
                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-[#17A8AD] dark:text-[#1BB8BD]' : 'text-zinc-900 dark:text-white'}`}>{step.title}</h3>
                        <p className="text-sm mb-4 leading-relaxed text-gray-600 dark:text-gray-400">{step.desc}</p>
                        <ul className="space-y-2 border-t pt-4 border-black/5 dark:border-white/5">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wide">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#DC0078]"></div> {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = 'HowItWorks';

export default HowItWorks;
