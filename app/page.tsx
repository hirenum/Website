'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { throttle } from '@/lib/throttle';

// Eagerly loaded components (above the fold)
import Navigation from '@/components/home/Navigation';
import Hero from '@/components/home/Hero';
import FloatingCTA from '@/components/home/FloatingCTA';

// Dynamically imported components (below the fold) for better code splitting
const Services = dynamic(() => import('@/components/home/Services'), {
  loading: () => <div className="min-h-[600px]" />
});

const WhyPeopleCome = dynamic(() => import('@/components/home/WhyPeopleCome'), {
  loading: () => <div className="min-h-[600px]" />
});

const WhyItWorks = dynamic(() => import('@/components/home/WhyItWorks'), {
  loading: () => <div className="min-h-[600px]" />
});

const WhoWeWorkWith = dynamic(() => import('@/components/home/WhoWeWorkWith'), {
  loading: () => <div className="min-h-[600px]" />
});

const HowItWorks = dynamic(() => import('@/components/home/HowItWorks'), {
  loading: () => <div className="min-h-[600px]" />
});

const Packages = dynamic(() => import('@/components/home/Packages'), {
  loading: () => <div className="min-h-[600px]" />
});

const FreeAudit = dynamic(() => import('@/components/home/FreeAudit'), {
  loading: () => <div className="min-h-[400px]" />
});

const Blog = dynamic(() => import('@/components/home/Blog'), {
  loading: () => <div className="min-h-[400px]" />
});

const FAQ = dynamic(() => import('@/components/home/FAQ'), {
  loading: () => <div className="min-h-[400px]" />
});

const Footer = dynamic(() => import('@/components/home/Footer'), {
  loading: () => <div className="min-h-[300px]" />
});

/* HIRENUM WEBSITE - OPTIMIZED VERSION
  ------------------------------------------------
  Theme: Dark Mode (Default/Brand) & Light Mode
  Brand Colors: Cyan (#1BB8BD), Magenta (#DC0078)
  Framework: Next.js (App Router compatible)
  
  Optimizations applied:
  - Code split into smaller components
  - Dynamic imports for below-the-fold sections
  - Throttled scroll handlers
  - Memoized components and callbacks
*/

const HirenumPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // Ensure component is mounted before rendering theme-dependent UI
  useEffect(() => {
    const timeoutId = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeoutId);
  }, []);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Memoized scroll to section function
  const scrollToSection = useCallback((id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoized props for child components
  const navigationProps = useMemo(() => ({
    scrolled,
    isMenuOpen,
    setIsMenuOpen,
    mounted,
    scrollToSection
  }), [scrolled, isMenuOpen, mounted, scrollToSection]);

  return (
    <>
      {/* Navigation - Above the fold, eagerly loaded */}
      <Navigation {...navigationProps} />

      {/* Floating CTA - Above the fold, eagerly loaded */}
      <FloatingCTA scrollToSection={scrollToSection} />

      {/* Main content landmark for accessibility */}
      <main 
        id="main-content"
        className="min-h-screen selection:bg-[#DC0078] selection:text-white overflow-x-hidden theme-transition bg-[var(--bg-primary)] text-[var(--text-primary)]" 
        style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}
      >
        {/* Hero Section - Above the fold, eagerly loaded */}
        <Hero />

        {/* Services Section - Dynamic import */}
        <Services />

        {/* Why People Come Section - Dynamic import */}
        <WhyPeopleCome scrollToSection={scrollToSection} />

        {/* Why It Works Section - Dynamic import */}
        <WhyItWorks />

        {/* Who We Work With Section - Dynamic import */}
        <WhoWeWorkWith />

        {/* How It Works Section - Dynamic import */}
        <HowItWorks />

        {/* Packages Section - Dynamic import */}
        <Packages />

        {/* Blog Section - Dynamic import */}
        {/* <Blog /> */}

        {/* FAQ Section - Dynamic import */}
        <FAQ />

        {/* Free Audit Section - Dynamic import */}
        <FreeAudit />
      </main>

      {/* Footer - Dynamic import */}
      <Footer scrollToSection={scrollToSection} />
    </>
  );
};

export default HirenumPage;
