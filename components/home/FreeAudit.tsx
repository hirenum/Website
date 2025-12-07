'use client';

import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const FreeAudit: React.FC = memo(() => {
  return (
    <section id="linkedin-audit" className="py-24 bg-gradient-brand relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none">GET A FREE <br/>LINKEDIN AUDIT</h2>
          <p className="text-lg font-medium mb-8 opacity-90">
            No spam. No obligation. Just honest, useful feedback on your headline, about section, and positioning.
          </p>
          <ul className="space-y-2 font-bold opacity-80">
            <li className="flex items-center gap-2"><ArrowRight size={18} /> First Impression Score</li>
            <li className="flex items-center gap-2"><ArrowRight size={18} /> Headline Strength</li>
            <li className="flex items-center gap-2"><ArrowRight size={18} /> Quick Wins & Fixes</li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full">
          <div className="p-8 rounded-2xl shadow-2xl border bg-white/95 border-white/40 dark:bg-black/95 dark:border-white/20">
            <form className="space-y-4">
              <div className="group">
                <label className="block text-xs font-bold uppercase mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-focus-within:text-[#17A8AD] dark:group-focus-within:text-[#1BB8BD]">Full Name</label>
                <input type="text" className="w-full border rounded-lg p-3 focus:outline-none focus:border-[#1BB8BD] focus:ring-2 focus:ring-[#1BB8BD]/20 bg-white border-gray-300 text-black dark:bg-white/10 dark:border-white/20 dark:text-white transition-all duration-300 hover:border-[#1BB8BD]/50" placeholder="John Doe" />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-focus-within:text-[#17A8AD] dark:group-focus-within:text-[#1BB8BD]">Email Address</label>
                <input type="email" className="w-full border rounded-lg p-3 focus:outline-none focus:border-[#1BB8BD] focus:ring-2 focus:ring-[#1BB8BD]/20 bg-white border-gray-300 text-black dark:bg-white/10 dark:border-white/20 dark:text-white transition-all duration-300 hover:border-[#1BB8BD]/50" placeholder="john@company.com" />
              </div>
              <div className="group">
                <label className="block text-xs font-bold uppercase mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-focus-within:text-[#17A8AD] dark:group-focus-within:text-[#1BB8BD]">LinkedIn URL</label>
                <input type="text" className="w-full border rounded-lg p-3 focus:outline-none focus:border-[#1BB8BD] focus:ring-2 focus:ring-[#1BB8BD]/20 bg-white border-gray-300 text-black dark:bg-white/10 dark:border-white/20 dark:text-white transition-all duration-300 hover:border-[#1BB8BD]/50" placeholder="linkedin.com/in/johndoe" />
              </div>
              <button type="button" className="w-full bg-[#DC0078] text-white font-bold py-4 rounded-lg mt-4 transition-all duration-300 hover:bg-[#e6007f] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(220,0,120,0.5)] active:scale-95 relative overflow-hidden group font-btn">
                <span className="relative z-10">Send Me My Audit Report</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DC0078] to-[#1BB8BD] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

FreeAudit.displayName = 'FreeAudit';

export default FreeAudit;
