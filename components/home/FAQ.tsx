'use client';

import React, { memo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/lib/types';

const FAQ: React.FC = memo(() => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    { q: "What exactly is personal branding on LinkedIn?", a: "Personal branding on LinkedIn is the intentional way you present your expertise, experience and perspective so that the right people can easily understand who you are, what you do, and why it matters. It's not about pretending to be someone else — it's about clearly communicating the value you already bring." },
    { q: "Do I really need a personal brand if my business is already doing fine?", a: "Many of our clients are already doing well when they come to us. A strong personal brand helps you open new doors: better clients, better talent, better partnerships and better opportunities. It also protects you long-term — your name continues to carry weight, even if your role or company changes." },
    { q: "I don't have time to post every day. Can this still work for me?", a: "Yes. We design a strategy that fits your schedule and energy. You don't need to post daily to see results. You need consistent, intentional content that speaks to the right people. We'll help you find the rhythm that works for you." },
    { q: "I've been posting on LinkedIn, but it's not leading to anything. Can you help?", a: "Absolutely. We'll review your profile, your content and your positioning to identify what's missing. Often, it's not effort that's missing — it's strategy, clarity and alignment with your goals. That's exactly what we fix." },
    { q: "Do I have to be on video to build a personal brand?", a: "No. Video can help, but it's not mandatory. There are many ways to show up: text posts, carousels, articles, commenting, interviews and more. We'll build a plan that matches your strengths and comfort level." },
    { q: "Can you run everything for me so I don't have to worry about it?", a: "That's what the Authority Package is for. We handle most of the heavy lifting — from optimization to content and outreach — while staying closely aligned with your voice and vision." }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 theme-transition bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4 border-[var(--border-color)] group">
              <button 
                className="w-full flex justify-between items-center text-left py-4 hover:text-[#1BB8BD] transition-all duration-300 hover:pl-2"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium">{item.q}</span>
                <span className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="group-hover:text-[#1BB8BD] transition-colors duration-300" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-4 pr-8 text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-[#1BB8BD]/30">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;
