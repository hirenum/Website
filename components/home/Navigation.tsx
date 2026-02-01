'use client';

import React, { memo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { CALENDLY_URL } from '@/lib/constants';

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  mounted: boolean;
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = memo(({ 
  scrolled, 
  isMenuOpen, 
  setIsMenuOpen, 
  mounted,
  scrollToSection 
}) => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md py-4 border-b bg-[var(--nav-bg)] border-[var(--border-color)]' : 'bg-transparent py-6 border-transparent'}`}
    >
      <div className="w-full px-8 flex justify-between items-center">
        <div className="text-2xl text-[#1BB8BD] font-bold tracking-tighter cursor-pointer font-logo" onClick={() => scrollToSection('start-here')}>
          H<span className="relative">ı<span className="absolute top-[0.15em] left-1 -translate-x-1/2 w-[0.18em] h-[0.18em] bg-[#dc0078] rounded-full"></span></span>renum
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <button onClick={() => scrollToSection('what-we-do')} className="relative hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">What We Do</button>
          <button onClick={() => scrollToSection('why-it-works')} className="relative hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">Why It Works</button>
          <button onClick={() => scrollToSection('who-we-work-with')} className="relative hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">Who We Work With</button>
          <button onClick={() => scrollToSection('how-it-works')} className="relative hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">How It Works</button>
          <button onClick={() => scrollToSection('packages')} className="relative hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">Packages</button>
          <button onClick={() => scrollToSection('faqs')} className="relative hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">FAQs</button>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full transition-all duration-500 hover:bg-black/5 dark:hover:bg-white/10 hover:rotate-180 hover:scale-110"
            title="Toggle Theme"
            aria-label={mounted && resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />)}
          </button>

          <button 
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            className="bg-[#1BB8BD] text-white px-5 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(27,184,189,0.5)] hover:bg-[#1fcfd4] relative overflow-hidden group font-btn"
          >
            <span className="relative z-10 font-btn">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 transition-all duration-500 hover:rotate-180"
            aria-label={mounted && resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />)}
          </button>
          <button 
            className="cursor-pointer transition-transform duration-300 hover:scale-110" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 w-full border-b p-6 flex flex-col space-y-4 shadow-2xl bg-[var(--bg-primary)] border-[var(--border-color)]"
        >
          <button onClick={() => scrollToSection('what-we-do')} className="text-lg hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">What We Do</button>
          <button onClick={() => scrollToSection('why-it-works')} className="text-lg hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">Why It Works</button>
          <button onClick={() => scrollToSection('who-we-work-with')} className="text-lg hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">Who We Work With</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-lg hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">How It Works</button>
          <button onClick={() => scrollToSection('packages')} className="text-lg hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">Packages</button>
          <button onClick={() => scrollToSection('faqs')} className="text-lg hover:text-[#17A8AD] dark:hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">FAQs</button>
          <button 
            onClick={() => { setIsMenuOpen(false); window.open(CALENDLY_URL, '_blank'); }}
            className="bg-[#1BB8BD] text-white px-5 py-3 rounded-full font-bold text-center transition-all duration-300 hover:bg-[#1fcfd4]"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
