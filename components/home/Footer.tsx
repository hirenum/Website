'use client';

import React, { memo } from 'react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = memo(({ scrollToSection }) => {
  return (
    <footer className="bg-[var(--bg-primary)] pt-16 sm:pt-20 pb-6 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Divider Line */}
        <div className="h-[1px] mb-12 sm:mb-16 bg-gradient-to-r from-transparent via-[#1BB8BD]/40 to-transparent dark:via-[#1BB8BD]/60"></div>
        
        {/* Grid Links */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
            <div>
              <p className="font-bold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">Services</p>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <li><button onClick={() => scrollToSection('what-we-do')} className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">What We Do</button></li>
                <li><button onClick={() => scrollToSection('who-we-work-with')} className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">Who We Work With</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">How It Works</button></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">Resources</p>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <li><button onClick={() => scrollToSection('packages')} className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">Packages</button></li>
                <li><button onClick={() => scrollToSection('learn-for-free')} className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">Learn for Free</button></li>
                <li><button onClick={() => scrollToSection('faqs')} className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">FAQs</button></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 sm:mb-6 uppercase tracking-wider text-xs sm:text-sm">Socials</p>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <li><a href="https://www.linkedin.com/company/hirenum/" target="_blank" rel="noopener noreferrer" className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">LinkedIn</a></li>
                <li><a href="mailto:info@hirenum.com" className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 sm:mb-6  uppercase tracking-wider text-xs sm:text-sm">INFO@HIRENUM.COM</p>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <p className="hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] cursor-pointer transition-colors">Privacy Policy</p>
                <p>©2025 All Rights Reserved</p>
                <p>by Hirenum</p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Logo */}
        <div className="pt-4 sm:pt-6 pb-4 sm:pb-8 flex justify-center">
          <span className="text-[15vw] sm:text-[12vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-[#1BB8BD]/20 dark:from-gray-400 dark:to-[#1BB8BD]/20 tracking-tighter opacity-80 font-logo" aria-hidden="true">
            HIRENUM
          </span>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
