'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Check, ChevronDown, 
  Linkedin, Instagram, Mail, Globe, User, 
  Users, Zap, Sun, Moon,
  FileText, Megaphone, Clock, Target, 
  Fingerprint,
  Eye, Mic, Activity, ArrowUp, MoreHorizontal, Heart, ThumbsUp
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* HIRENUM WEBSITE - NEXT.JS / TYPESCRIPT VERSION
  ------------------------------------------------
  Theme: Dark Mode (Default/Brand) & Light Mode
  Brand Colors: Cyan (#1BB8BD), Magenta (#DC0078)
  Framework: Next.js (App Router compatible)
*/

// --- Types & Interfaces ---

interface Step {
  title: string;
  desc: string;
  details: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

interface BlogPost {
  title: string;
  cat: string;
}

interface PainPointNode {
  text: string;
  icon: LucideIcon;
  top: string;
  left?: string;
  right?: string;
  align: 'left' | 'right';
  delay: number;
  isHighlight?: boolean;
}

interface MobilePainPointNode {
  text: string;
  icon: LucideIcon;
  isHighlight?: boolean;
}

const HirenumPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  
  // Theme State
  const {  setTheme, resolvedTheme } = useTheme();
  
  // Ensure component is mounted before rendering theme-dependent UI
  // Using layout effect alternative to avoid lint warning while still preventing hydration mismatch
  useEffect(() => {
    const timeoutId = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeoutId);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  // --- Scroll Logic ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  // --- Data ---

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
      desc: "We don&apos;t set and forget. We track analytics, learn what works, and adjust your strategy for compound growth over time.",
      details: ["Track Analytics", "Refine Hooks & Topics", "Evolve Strategy"]
    }
  ];

  const faqs: FaqItem[] = [
    { q: "What exactly is personal branding on LinkedIn?", a: "It's the intentional way you present your expertise. It's not about pretending; it's about clearly communicating the value you already bring." },
    { q: "Do I really need a personal brand if my business is fine?", a: "A strong brand opens new doors: better clients, talent, and partnerships. It protects you long-term, carrying weight even if your role changes." },
    { q: "I don't have time to post every day.", a: "You don't need to. We design a strategy that fits your schedule. Consistency beats frequency." },
    { q: "Do I have to be on video?", a: "No. Video helps, but it's not mandatory. We build a plan that matches your strengths—text, carousels, or audio." },
    { q: "Can you run everything for me?", a: "Yes, that is our Authority Package. We handle optimization, content, and outreach while aligning with your voice." }
  ];

  const blogPosts: BlogPost[] = [
    { title: "How to Fix Your LinkedIn Headline in 5 Minutes", cat: "Profile" },
    { title: "5 Types of Posts Every Founder Should Share", cat: "Content" },
    { title: "How to Write an About Section That Actually Sounds Like You", cat: "Branding" }
  ];

  const brands: string[] = ["FORBES", "ENTREPRENEUR", "TECHCRUNCH", "BUSINESS INSIDER", "LINKEDIN NEWS", "THE VERGE", "BLOOMBERG"];

  const painPointNodes: PainPointNode[] = [
    { 
      text: "They’re doing great work, but very few people outside their circle know about it.",
      icon: User,
      top: "20%",
      left: "10%",
      align: "left",
      delay: 0.4
    },
    { 
      text: "They’re relying too much on referrals and outbound, and want more inbound opportunities.",
      icon: FileText,
      top: "20%",
      right: "10%",
      align: "right",
      delay: 0.5
    },
    { 
      text: "Their competitors with less experience have more visibility and a louder voice in the market.",
      icon: Users,
      top: "50%",
      left: "2%",
      align: "left",
      delay: 0.6
    },
    { 
      text: "They know they should “post on LinkedIn,” but don’t have the time, structure or strategy.",
      icon: Megaphone,
      top: "50%",
      right: "2%",
      align: "right",
      delay: 0.7
    },
    { 
      text: "They’ve tried posting randomly, but it hasn’t turned into leads, clients, or real authority.",
      icon: Clock,
      top: "80%",
      left: "10%",
      align: "left",
      delay: 0.8
    },
    { 
      text: "They’re ready to be seen as a go-to name in their industry, not just another professional.",
      icon: Target,
      top: "80%",
      right: "10%",
      align: "right",
      delay: 0.9,
      isHighlight: true
    }
  ];

  const mobilePainPointNodes: MobilePainPointNode[] = [
    { text: "They're doing great work, but very few people outside their circle know about it.", icon: User },
    { text: "They're relying too much on referrals and outbound, and want more inbound opportunities.", icon: FileText },
    { text: "Their competitors with less experience have more visibility and a louder voice in the market.", icon: Users },
    { text: "They know they should \"post on LinkedIn,\" but don't have the time, structure or strategy.", icon: Megaphone },
    { text: "They've tried posting randomly, but it hasn't turned into leads, clients, or real authority.", icon: Clock },
    { text: "They're ready to be seen as a go-to name in their industry, not just another professional.", icon: Target, isHighlight: true }
  ];

    
  return (
    <div 
      className="min-h-screen selection:bg-[#DC0078] selection:text-white overflow-x-hidden theme-transition bg-[var(--bg-primary)] text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}
    >

      {/* --- NAVIGATION --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md py-4 border-b bg-[var(--nav-bg)] border-[var(--border-color)]' : 'bg-transparent py-6 border-transparent'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl text-[#1BB8BD] font-bold tracking-tighter cursor-pointer font-logo" onClick={() => scrollToSection('start-here')}>
            H<span className="relative">ı<span className="absolute top-[0.15em] left-1 -translate-x-1/2 w-[0.2em] h-[0.2em] bg-[#dc0078] rounded-full"></span></span>renum
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <button onClick={() => scrollToSection('what-we-do')} className="relative hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">What We Do</button>
            
            <button onClick={() => scrollToSection('who-we-work-with')} className="relative hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">Who We Work With</button>
            <button onClick={() => scrollToSection('how-it-works')} className="relative hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">How It Works</button>
            <button onClick={() => scrollToSection('packages')} className="relative hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">Packages</button>
            <button onClick={() => scrollToSection('learn-for-free')} className="relative hover:text-[#1BB8BD] transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#1BB8BD] after:to-[#DC0078] hover:after:w-full after:transition-all after:duration-300">Learn for Free</button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full transition-all duration-500 hover:bg-black/5 dark:hover:bg-white/10 hover:rotate-180 hover:scale-110"
              title="Toggle Theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />)}
            </button>

            <button 
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="bg-[#1BB8BD] text-white px-5 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(27,184,189,0.5)] hover:bg-[#1fcfd4] relative overflow-hidden group font-btn"
            >
              <span className="relative z-10 font-btn">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={toggleTheme} className="p-2 transition-all duration-500 hover:rotate-180">
               {mounted && (resolvedTheme === 'dark' ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />)}
            </button>
            <div className="cursor-pointer transition-transform duration-300 hover:scale-110" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 w-full border-b p-6 flex flex-col space-y-4 shadow-2xl bg-[var(--bg-primary)] border-[var(--border-color)]"
          >
            <button onClick={() => scrollToSection('what-we-do')} className="text-lg hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">What We Do</button>
            <button onClick={() => scrollToSection('who-we-work-with')} className="text-lg hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">Who We Work With</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-lg hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">How It Works</button>
            <button onClick={() => scrollToSection('packages')} className="text-lg hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">Packages</button>
            <button onClick={() => scrollToSection('learn-for-free')} className="text-lg hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2">Learn for Free</button>
            <button 
              onClick={() => { setIsMenuOpen(false); window.open('https://calendly.com', '_blank'); }}
              className="bg-[#1BB8BD] text-white px-5 py-3 rounded-full font-bold text-center transition-all duration-300 hover:bg-[#1fcfd4]"
            >
              Book a Call
            </button>
          </div>
        )}
      </nav>

      {/* --- FLOATING CTA --- */}
      <div className="fixed bottom-6 right-6 z-40 animate-bounce-slow">
        <button 
          onClick={() => scrollToSection('linkedin-audit')}
          className="bg-gradient-brand text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-[#DC0078]/30 hover:shadow-[0_0_30px_rgba(220,0,120,0.6)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-110 flex items-center gap-2 group relative overflow-hidden font-btn"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <Zap size={18} fill="currentColor" className="relative z-10 group-hover:rotate-12 transition-transform duration-300" /> 
          <span className="relative z-10">Free LinkedIn Audit</span>
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section id="start-here" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Video Background - Full Section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mobile: hidden or very subtle, Tablet: moderate, Desktop: full effect */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute top-0 right-0 w-full h-full object-cover 
                       opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-50 
                       dark:opacity-60 dark:sm:opacity-70 dark:md:opacity-90 dark:lg:opacity-100"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.9) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.9) 100%)'
            }}
          >
            <source src="/neon-tunnel.mp4" type="video/mp4" />
          </video>
          {/* Additional fade overlays for smoother blending - responsive */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] 
                          opacity-80 sm:opacity-75 md:opacity-70 lg:opacity-60
                          dark:opacity-60 dark:sm:opacity-55 dark:md:opacity-50 dark:lg:opacity-40"></div>
          <div className="absolute inset-0 bg-[var(--bg-primary)] 
                          opacity-50 sm:opacity-40 md:opacity-30 lg:opacity-20
                          dark:opacity-20 dark:sm:opacity-10 dark:md:opacity-5 dark:lg:opacity-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1BB8BD]/5 via-transparent to-[#DC0078]/5 mix-blend-overlay"></div>
        </div>

        {/* Abstract Background Elements */}
        <div className="glow-orb top-0 right-[-200px] animate-pulse"></div>
        <div className="glow-orb bottom-[-200px] left-[-200px] opacity-50"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 max-w-2xl">
            
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1]">
              <span className="block whitespace-nowrap">BECOME YOUR</span>
              <span className="block whitespace-nowrap">INDUSTRY&apos;S GO-TO</span>
              <span className="relative inline-block whitespace-nowrap">
                THOUGHT LEADER
                <svg 
                  className="absolute -bottom-2 sm:-bottom-2 left-0 w-full" 
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

            <p className="text-l max-w-lg leading-relaxed text-gray-600 dark:text-gray-400">
              We help founders, entrepreneurs, C-suites and professionals build powerful <span className="text-[#1BB8BD] font-medium">LinkedIn personal brands</span> that turn visibility into authority, and authority into inbound opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => window.open('https://calendly.com', '_blank')} className="bg-[#1BB8BD] text-white text-lg font-bold px-8 py-4 rounded-full transition-all duration-500 flex items-center justify-center gap-2 group relative overflow-hidden hover:shadow-[0_10px_40px_rgba(27,184,189,0.4)] hover:scale-105 active:scale-95 font-btn">
                <span className="relative z-10">BOOK A DISCOVERY CALL</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#DC0078] to-[#1BB8BD] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              
            </div>

            {/* <div className="pt-8 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs bg-gray-200 border-white text-black dark:bg-gray-800 dark:border-black dark:text-white">
                     <User size={12} />
                  </div>
                ))}
              </div>
              <p>Build authority through clarity, consistency and credibility.</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* --- LOGO TICKER --- */}
      <div 
        className="border-y py-8 overflow-hidden theme-transition bg-[var(--bg-primary)] border-[var(--border-color)]"
      >
        <div className="container mx-auto px-6 text-center mb-6">
           <span className="text-xs text-gray-500 uppercase tracking-[0.2em]">As featured in & Trusted by</span>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center transition-opacity duration-500 opacity-60 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100">
             {brands.map((brand, i) => (
                <span key={i} className="text-2xl font-bold mx-4 text-zinc-800 dark:text-white">{brand}</span>
             ))}
             {brands.map((brand, i) => (
                <span key={`dup-${i}`} className="text-2xl font-bold mx-4 text-zinc-800 dark:text-white">{brand}</span>
             ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 1: WHAT WE DO (SERVICES) --- */}
      <section id="what-we-do" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-5xl font-bold mb-6">Disclaimer: We are NOT a content & social media agency<span className="text-[#DC0078]">.</span></h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
               We build thought leadership with a clear strategy, strong positioning, and consistent execution.
            </p>
          </div>

          {/* Service Cards - Alternating Layout */}
          <div className="space-y-16 max-w-6xl mx-auto">
            
            {/* Card 1: Architect Your Brand - Image Left, Content Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Visual Card */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl group shadow-2xl p-[2px] bg-[conic-gradient(from_180deg_at_0%_0%,#ffffff_0deg,#d0d0e0_15deg,#a0a0b0_30deg,#606070_50deg,#303040_70deg,transparent_90deg,transparent_360deg)]">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[#0a0a14] dark:via-[#02040a] dark:to-[#0a0a14]">
                {/* Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1BB8BD]/10 via-transparent to-[#DC0078]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />
                
                {/* Deep Space Background with Color Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(27,184,189,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(220,0,120,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(27,184,189,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(220,0,120,0.08)_0%,transparent_50%)]" />
                
                {/* Animated Grid Floor */}
                <div className="absolute inset-0 opacity-15 dark:opacity-25 pointer-events-none" 
                     style={{ 
                         backgroundImage: 'linear-gradient(rgba(27, 184, 189, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(27, 184, 189, 0.4) 1px, transparent 1px)',
                         backgroundSize: '40px 40px',
                         transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
                     }} 
                />

                {/* Rotating Data Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[450px] h-[450px] border border-[#1BB8BD]/20 dark:border-[#1BB8BD]/15 rounded-full animate-[spin_30s_linear_infinite]" />
                  <div className="absolute w-[350px] h-[350px] border-2 border-dashed border-[#DC0078]/40 dark:border-[#DC0078]/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                  <div className="absolute w-[280px] h-[280px] border-2 border-transparent border-t-[#1BB8BD]/50 dark:border-t-[#1BB8BD]/40 border-b-[#DC0078]/50 dark:border-b-[#DC0078]/40 rounded-full animate-[spin_8s_ease-in-out_infinite]" />
                </div>
                
                {/* Central Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1BB8BD]/40 to-[#DC0078]/30 dark:from-[#1BB8BD]/30 dark:to-[#DC0078]/20 blur-3xl rounded-full" />
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[#0a0a14] dark:to-[#02040a] border-2 border-[#1BB8BD]/40 dark:border-[#1BB8BD]/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_80px_rgba(27,184,189,0.3),0_0_40px_rgba(220,0,120,0.2)] dark:shadow-[0_0_80px_rgba(27,184,189,0.25),0_0_40px_rgba(220,0,120,0.15)] relative z-10">
                      <Fingerprint size={64} className="text-[#1BB8BD] drop-shadow-[0_0_15px_rgba(27,184,189,0.6)]" />
                    </div>
                    
                    {/* Floating Badges */}
                    <motion.div 
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-6 -right-16 px-4 py-2.5 bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[#0a0a14] dark:to-[#0f0f1a] backdrop-blur-md border border-[#DC0078]/40 rounded-full flex items-center gap-2 shadow-lg shadow-[#DC0078]/20 z-20"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#DC0078] to-[#ff4d9d] animate-pulse shadow-[0_0_8px_#DC0078]" />
                      <Eye size={14} className="text-[#DC0078]" />
                    </motion.div>
                    
                    <motion.div 
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-6 -left-16 px-4 py-2.5 bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[#0a0a14] dark:to-[#0f0f1a] backdrop-blur-md border border-[#1BB8BD]/40 rounded-full flex items-center gap-2 shadow-lg shadow-[#1BB8BD]/20 z-20"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1BB8BD] to-[#4de0e5] animate-pulse shadow-[0_0_8px_#1BB8BD]" />
                      <Mic size={14} className="text-[#1BB8BD]" />
                    </motion.div>
                  </div>
                </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Architect Your <span className="text-[#1BB8BD]">Brand</span>
                  </h3>
                </div>
                <p className="text-xl text-[#1BB8BD] font-medium">We help you uncover and define:</p>
                <ul className="space-y-4">
                  {[
                    "Your story, journey and core expertise",
                    "Your positioning and proposition ",
                    "Founder’s voice ",
                    
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 min-w-[24px]">
                        <div className="w-6 h-6 rounded-full bg-[#DC0078]/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#DC0078]" />
                        </div>
                      </div>
                      <span className="text-lg text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <div className="p-4 rounded-xl bg-[var(--bg-secondary)] dark:bg-[#0a0a14] border border-[#1BB8BD]/20 relative overflow-hidden group/summary">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD]/10 to-transparent opacity-0 group-hover/summary:opacity-100 transition-opacity" />
                  <p className="text-[var(--text-secondary)] italic relative z-10">
                    &quot;So your brand stops being vague and starts becoming crystal clear to you and to your audience.&quot;
                  </p>
                </div> */}
              </div>
            </motion.div>

            {/* Card 2: Build a Scaling Strategy - Content Left, Image Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Content */}
              <div className="space-y-6 md:order-1 order-2">
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Build a Scaling <span className="text-[#1BB8BD]">Strategy</span>
                  </h3>
                </div>
                <p className="text-xl text-[#1BB8BD] font-medium">Once your brand is clear, we design how it grows:</p>
                <ul className="space-y-4">
                  {[
                    "Content pillars and key topics",
                    "Posting rhythm and formats that suit your schedule",
                    "How your content supports your business goals.",
                    
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 min-w-[24px]">
                        <div className="w-6 h-6 rounded-full bg-[#DC0078]/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#DC0078]" />
                        </div>
                      </div>
                      <span className="text-lg text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <div className="p-4 rounded-xl bg-[var(--bg-secondary)] dark:bg-[#0a0a14] border border-[#1BB8BD]/20 relative overflow-hidden group/summary">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD]/10 to-transparent opacity-0 group-hover/summary:opacity-100 transition-opacity" />
                  <p className="text-[var(--text-secondary)] italic relative z-10">
                    &quot;This becomes your LinkedIn growth system, not just a random posting habit.&quot;
                  </p>
                </div> */}
              </div>

              {/* Visual Card */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl group shadow-2xl md:order-2 order-1 p-[2px] bg-[conic-gradient(from_270deg_at_100%_0%,#ffffff_0deg,#d0d0e0_15deg,#a0a0b0_30deg,#606070_50deg,#303040_70deg,transparent_90deg,transparent_360deg)]">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[#0a0a14] dark:via-[#02040a] dark:to-[#0a0a14]">
                {/* Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#DC0078]/10 via-transparent to-[#1BB8BD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />
                
                {/* Cyber Grid Background with Color Accents */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(220,0,120,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,184,189,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(220,0,120,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(27,184,189,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,0,120,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(27,184,189,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(220,0,120,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(27,184,189,0.08)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-secondary)]/80 dark:to-[#02040a]/80" />

                {/* Falling Data Stream with alternating colors */}
                <div className="absolute inset-0 flex justify-around opacity-15 dark:opacity-25 pointer-events-none">
                  {[0.5, 0.7, 0.4, 0.8, 0.6, 0.55].map((opacity, i) => (
                    <div key={i} className={`w-[2px] h-[150%] -mt-[25%] bg-gradient-to-b from-transparent ${i % 2 === 0 ? 'via-[#1BB8BD]' : 'via-[#DC0078]'} to-transparent animate-pulse`} style={{ animationDelay: `${i * 0.7}s`, opacity }} />
                  ))}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-sm px-8 z-10">
                    {/* Floating Stats Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }} 
                      whileInView={{ opacity: 1, x: 0 }} 
                      transition={{ delay: 0.5 }}
                      className="absolute -top-16 right-0 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] dark:from-[#0a0a14] dark:to-[#0f0f1a] backdrop-blur-md border border-[#1BB8BD]/30 px-5 py-4 rounded-xl shadow-2xl shadow-[#1BB8BD]/20 flex items-center gap-4"
                    >
                      <div className="flex flex-col gap-2">
                        <Activity size={18} className="text-[#1BB8BD] drop-shadow-[0_0_8px_rgba(27,184,189,0.5)]" />
                        <div className="flex gap-1 items-end h-5">
                          <div className="w-1.5 h-full bg-gradient-to-t from-[#1BB8BD]/60 to-[#1BB8BD] rounded-sm" />
                          <div className="w-1.5 h-2/3 bg-gradient-to-t from-[#DC0078]/40 to-[#DC0078]/70 rounded-sm" />
                          <div className="w-1.5 h-4/5 bg-gradient-to-t from-[#1BB8BD]/50 to-[#1BB8BD]/90 rounded-sm" />
                          <div className="w-1.5 h-full bg-gradient-to-t from-[#DC0078]/60 to-[#DC0078] rounded-sm" />
                        </div>
                      </div>
                      <div className="h-8 w-[1px] bg-gradient-to-b from-[#1BB8BD]/40 via-[#DC0078]/30 to-[#1BB8BD]/40" />
                      <div className="bg-gradient-to-br from-[#1BB8BD]/20 to-[#DC0078]/10 p-2 rounded-full border border-[#1BB8BD]/20">
                        <ArrowUp size={14} className="text-[#1BB8BD] drop-shadow-[0_0_6px_rgba(27,184,189,0.5)]" />
                      </div>
                    </motion.div>

                    {/* Dynamic Graph */}
                    <div className="flex items-end justify-between h-48 gap-3 mt-8">
                      {[35, 50, 40, 65, 90].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }} 
                          whileInView={{ height: `${h}%` }} 
                          transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 50 }}
                          className="w-full rounded-t-xl relative group/bar"
                        >   
                          {/* Glass Bar with Gradient */}
                          <div className={`absolute inset-0 rounded-t-xl backdrop-blur-sm border-x border-t ${i === 4 ? 'bg-gradient-to-b from-[#1BB8BD] via-[#4de0e5]/60 to-[#DC0078]/50 border-[#1BB8BD]/50 shadow-[0_-10px_30px_rgba(27,184,189,0.3)]' : i % 2 === 0 ? 'bg-gradient-to-b from-[#1BB8BD]/30 to-[#1BB8BD]/10 border-[#1BB8BD]/30 group-hover/bar:from-[#1BB8BD]/50 group-hover/bar:to-[#1BB8BD]/20' : 'bg-gradient-to-b from-[#DC0078]/25 to-[#DC0078]/10 border-[#DC0078]/30 group-hover/bar:from-[#DC0078]/40 group-hover/bar:to-[#DC0078]/15'} transition-all duration-300`} />
                          
                          {/* Inner Glow for tallest bar */}
                          {i === 4 && <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#1BB8BD] via-[#4de0e5] to-[#1BB8BD] shadow-[0_0_20px_#1BB8BD,0_0_40px_rgba(27,184,189,0.5)]" />}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Base Line with gradient */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#1BB8BD]/50 to-transparent mt-[-1px] relative z-20" />
                  </div>
                </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Co-Create & Execute - Image Left, Content Right */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Visual Card */}
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl group shadow-2xl p-[2px] bg-[conic-gradient(from_180deg_at_0%_0%,#ffffff_0deg,#d0d0e0_15deg,#a0a0b0_30deg,#606070_50deg,#303040_70deg,transparent_90deg,transparent_360deg)]">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[var(--bg-secondary)] dark:bg-[#02040a]">
                {/* Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1BB8BD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30" />
                
                {/* Warp Speed Background */}
                <div className="absolute inset-0">
                  {[
                    { top: '15%', left: '10%', width: '120px', opacity: 0.2 },
                    { top: '25%', left: '80%', width: '80px', opacity: 0.15 },
                    { top: '40%', left: '5%', width: '100px', opacity: 0.25 },
                    { top: '55%', left: '70%', width: '140px', opacity: 0.1 },
                    { top: '70%', left: '20%', width: '90px', opacity: 0.2 },
                    { top: '85%', left: '60%', width: '110px', opacity: 0.18 },
                    { top: '10%', left: '45%', width: '70px', opacity: 0.12 },
                    { top: '35%', left: '35%', width: '130px', opacity: 0.22 },
                    { top: '60%', left: '90%', width: '85px', opacity: 0.15 },
                    { top: '80%', left: '15%', width: '95px', opacity: 0.2 },
                    { top: '20%', left: '55%', width: '60px', opacity: 0.1 },
                    { top: '45%', left: '25%', width: '115px', opacity: 0.25 },
                    { top: '65%', left: '50%', width: '75px', opacity: 0.18 },
                    { top: '90%', left: '40%', width: '100px', opacity: 0.15 },
                    { top: '5%', left: '75%', width: '125px', opacity: 0.2 },
                    { top: '30%', left: '95%', width: '65px', opacity: 0.12 },
                    { top: '50%', left: '8%', width: '135px', opacity: 0.22 },
                    { top: '75%', left: '85%', width: '80px', opacity: 0.15 },
                    { top: '95%', left: '30%', width: '105px', opacity: 0.18 },
                    { top: '12%', left: '65%', width: '90px', opacity: 0.2 },
                  ].map((line, i) => (
                    <div 
                      key={i}
                      className="absolute bg-[#1BB8BD]/20 dark:bg-[#1BB8BD]/10 rounded-full"
                      style={{
                        top: line.top,
                        left: line.left,
                        width: line.width,
                        height: '1px',
                        transform: 'rotate(-45deg)',
                        opacity: line.opacity
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC0078]/10 dark:from-[#DC0078]/5 via-transparent to-[#1BB8BD]/10 dark:to-[#1BB8BD]/5" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[320px]">
                    {/* Social Post Card - Glassmorphism */}
                    <motion.div 
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-[var(--bg-primary)] dark:bg-[#0a0a14] backdrop-blur-xl border border-[#1BB8BD]/20 rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(27,184,189,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(27,184,189,0.1)] relative z-10"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1BB8BD]/10 to-transparent rounded-2xl opacity-50 pointer-events-none" />
                      
                      <div className="flex items-center justify-between mb-4 relative">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1BB8BD] to-[#DC0078] p-[1px]">
                            <div className="w-full h-full bg-[var(--bg-primary)] dark:bg-[#0a0a14] rounded-full" />
                          </div>
                          <div>
                            <div className="h-2 w-20 bg-[#1BB8BD]/30 rounded-full mb-1.5" />
                            <div className="h-2 w-12 bg-[#1BB8BD]/20 rounded-full" />
                          </div>
                        </div>
                        <MoreHorizontal size={16} className="text-[var(--text-secondary)]" />
                      </div>
                      
                      <div className="space-y-2.5 mb-5 relative">
                        <div className="h-2 w-full bg-[#1BB8BD]/15 rounded-full" />
                        <div className="h-2 w-[90%] bg-[#1BB8BD]/15 rounded-full" />
                        <div className="h-2 w-[95%] bg-[#1BB8BD]/15 rounded-full" />
                      </div>
                      
                      <div className="h-32 w-full bg-gradient-to-br from-[#1BB8BD]/10 to-[#DC0078]/10 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group/card-image border border-[#1BB8BD]/10">
                        <div className="absolute inset-0 bg-[#1BB8BD]/20 blur-2xl opacity-0 group-hover/card-image:opacity-50 transition-opacity duration-500" />
                        <Zap size={32} className="text-[#1BB8BD]/60 relative z-10" />
                      </div>
                      
                      <div className="flex justify-between text-[var(--text-secondary)] relative">
                        <div className="flex gap-1 items-center">
                          <Heart size={18} className="text-[#DC0078]/60" />
                          <div className="flex gap-1 ml-1">
                            <div className="w-1 h-1 rounded-full bg-[#DC0078]/40" />
                            <div className="w-1 h-1 rounded-full bg-[#DC0078]/40" />
                            <div className="w-1 h-1 rounded-full bg-[#DC0078]/40" />
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-16 h-4 bg-[#1BB8BD]/15 rounded-full" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Reactions */}
                    <motion.div 
                      initial={{ opacity: 0, y: 0 }}
                      whileInView={{ opacity: [0, 1, 0], y: -100, x: 20 }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute -right-6 bottom-20 p-2.5 bg-gradient-to-tr from-[#DC0078] to-[#DC0078]/70 rounded-full shadow-lg shadow-[#DC0078]/30 z-0"
                    >
                      <Heart size={14} fill="white" className="text-white" />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, y: 0 }}
                      whileInView={{ opacity: [0, 1, 0], y: -120, x: -30 }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                      className="absolute -left-6 bottom-28 p-2.5 bg-gradient-to-tr from-[#1BB8BD] to-[#1BB8BD]/70 rounded-full shadow-lg shadow-[#1BB8BD]/30 z-0"
                    >
                      <ThumbsUp size={14} fill="white" className="text-white" />
                    </motion.div>
                  </div>
                </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Co-Create & <span className="text-[#1BB8BD]">Execute</span>
                  </h3>
                </div>
                <p className="text-xl text-[#1BB8BD] font-medium">Depending on your package, we:</p>
                <ul className="space-y-4">
                  {[
                    "Fully optimize your LinkedIn profile and company page.",
                    "Co-create content with you",
                    
                    "Support you in networking and outreach",
                    
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 min-w-[24px]">
                        <div className="w-6 h-6 rounded-full bg-[#DC0078]/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#DC0078]" />
                        </div>
                      </div>
                      <span className="text-lg text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {/* <div className="p-4 rounded-xl bg-[var(--bg-secondary)] dark:bg-[#0a0a14] border border-[#1BB8BD]/20 relative overflow-hidden group/summary">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD]/10 to-transparent opacity-0 group-hover/summary:opacity-100 transition-opacity" />
                  <p className="text-[var(--text-secondary)] italic relative z-10">
                    &quot;So you&apos;re not alone, not guessing — you have a partner building your presence with you.&quot;
                  </p>
                </div> */}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- WHY PEOPLE COME TO US SECTION --- */}
      <section id="why-people-come" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
        {/* Match the final CTA gradient background */}
        <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header - Mobile Only */}
          <div className="text-center mb-16 relative lg:hidden">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            >
              Most people come to us when...
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-brand rounded-full blur-sm opacity-60"></div>
            </motion.h2>
          </div>

          {/* Tree Branch Layout - Desktop */}
          <div className="hidden lg:block relative max-w-7xl mx-auto h-[800px]">
            
            {/* Central Node Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-[400px]">
               <motion.h2 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 viewport={{ once: true }}
                 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400"
               >
                 Most people come to us when...
               </motion.h2>
            </div>

            {/* SVG Tree Branches */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DC0078" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#1BB8BD" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glowFilter">
                  <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Branch Lines - Radiating from Center */}
              {[
                // Left Side
                { path: "M 40 45 C 35 45, 35 20, 32 20", delay: 0.3 }, // Top Left
                { path: "M 40 50 C 35 48, 30 52, 24 50", delay: 0.5 }, // Mid Left
                { path: "M 40 55 C 35 55, 35 80, 32 80", delay: 0.7 }, // Bot Left
                // Right Side
                { path: "M 60 45 C 65 45, 65 20, 68 20", delay: 0.4 }, // Top Right
                { path: "M 60 50 C 65 52, 70 48, 76 50", delay: 0.6 }, // Mid Right
                { path: "M 60 55 C 65 55, 65 80, 68 80", delay: 0.8 }, // Bot Right
              ].map((branch, idx) => (
                <g key={idx}>
                  <motion.path
                    d={branch.path}
                    stroke="url(#branchGradient)"
                    strokeWidth="0.2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: branch.delay }}
                    viewport={{ once: true }}
                  />
                  {/* Animated Particle */}
                  <circle r="0.4" fill="#DC0078" filter="url(#glowFilter)">
                    <animateMotion
                      dur={`${3 + idx * 0.2}s`}
                      repeatCount="indefinite"
                      path={branch.path}
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Nodes */}
            {painPointNodes.map((node, idx) => (
              <motion.div
                key={idx}
                className="absolute w-[300px]"
                style={{ 
                  top: node.top, 
                  left: node.left, 
                  right: node.right,
                  transform: 'translateY(-50%)'
                }}
                initial={{ opacity: 0, x: node.align === 'left' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: node.delay }}
                viewport={{ once: true }}
              >
                <div className={`
                  relative p-6 rounded-2xl border backdrop-blur-md overflow-hidden group transition-all duration-300
                  bg-white/80 dark:bg-zinc-900/80 border-white/20 dark:border-white/10 hover:border-[#DC0078]/30
                `}>
                  {/* Gradient Background for Card */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#DC0078]/5 to-[#1BB8BD]/5" />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="
                      p-3 rounded-xl flex-shrink-0 transition-colors duration-300
                      bg-gray-100 dark:bg-white/5 text-[#DC0078] group-hover:bg-[#DC0078] group-hover:text-white
                    ">
                      <node.icon size={24} />
                    </div>
                    <div>
                      <p className="font-medium leading-relaxed text-gray-700 dark:text-gray-200">
                        {node.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="lg:hidden space-y-6">
             <div className="relative pl-8 border-l-2 border-[#DC0078]/30 ml-4">
              {mobilePainPointNodes.map((node, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-8 relative"
                >
                  {/* Dot on line */}
                  <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#DC0078] border-4 border-[var(--bg-secondary)]" />
                  
                  <div className="
                    flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm
                    bg-white/50 dark:bg-zinc-900/50 border-gray-200 dark:border-white/10
                  ">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-[#DC0078]">
                      <node.icon size={20} />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {node.text}
                    </span>
                  </div>
                </motion.div>
              ))}
             </div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">Sound like you?</p>
            <motion.button 
              onClick={() => scrollToSection('who-we-work-with')} 
              className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all inline-flex items-center gap-2 shadow-lg shadow-[#DC0078]/20 font-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              See who we work with <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- WHY IT WORKS SECTION --- */}
      <section id="why-it-works" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Heading */}
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Why Thought Leadership Works?
            </motion.h2>
            
            {/* Intro Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              People don&apos;t just buy products, services or roles.
              They buy into people,<br></br> their judgment, their track record, their ideas.
              <br />
              <span className="text-[#1BB8BD]">A strong personal brand on LinkedIn helps you:</span>
            </motion.p>
          </div>

          {/* Value Propositions Grid - Top Row (3 columns) */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-x-0 gap-y-4">
              {[
                {
                  title: "Earn trust faster",
                  desc: "When people can see your thinking, experience and consistency, trust doesn&apos;t start at zero.",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="4" stroke="#DC0078" strokeWidth="1.5"/>
                      <circle cx="10" cy="22" r="2" stroke="#DC0078" strokeWidth="1.5"/>
                      <path d="M14 10H24" stroke="#DC0078" strokeWidth="1.5"/>
                      <path d="M12 22H24" stroke="#DC0078" strokeWidth="1.5"/>
                    </svg>
                  )
                },
                {
                  title: "Create demand, not just respond to it",
                  desc: "Your content and presence gently educate your audience on who you are and why you&apos;re the right choice.",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 20L14 14L18 18L24 12" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 12H24V16" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Build investor confidence",
                  desc: "with a professional brand, a sharp site, and a story that gets taken seriously",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8L16 4L24 8V16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16V8Z" stroke="#DC0078" strokeWidth="1.5"/>
                      <path d="M12 14L15 17L20 12" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group py-8 px-6 relative"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Vertical gradient divider lines - Top Row */}
            <div className="hidden md:block absolute left-1/3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#1BB8BD]/40 to-transparent"></div>
            <div className="hidden md:block absolute left-2/3 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#1BB8BD]/40 to-transparent"></div>
          </div>

          {/* Horizontal gradient divider */}
          <div className="relative max-w-5xl mx-auto my-2">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#1BB8BD]/40 to-transparent"></div>
          </div>

          {/* Value Propositions - Bottom Row (2 columns centered) */}
          <div className="relative max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-0 gap-y-4">
              {[
                {
                  title: "Attract aligned opportunities",
                  desc: "Roles, clients, partnerships and speaking invites that match your values, skills and direction.",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="8" width="14" height="16" rx="1" stroke="#DC0078" strokeWidth="1.5"/>
                      <path d="M10 14H16" stroke="#DC0078" strokeWidth="1.5"/>
                      <path d="M10 18H14" stroke="#DC0078" strokeWidth="1.5"/>
                      <path d="M24 10V22" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M20 14L24 10L28 14" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Stand out in a crowded space",
                  desc: "Instead of competing on price or title, you stand out on perspective, clarity and authority.",
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8L12 4L16 8" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 4V16" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M24 24L20 28L16 24" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 28V16" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8 24L12 28L16 24" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 28V16" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M24 8L20 4L16 8" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 4V16" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group py-8 px-6 relative"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Vertical gradient divider line - Bottom Row */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#1BB8BD]/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* --- WHO WE WORK WITH SECTION --- */}
      <section id="who-we-work-with" className="py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
        {/* Background gradient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#DC0078]/10 to-[#1BB8BD]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Heading" */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Who we work with
            </motion.h2>
          </div>

          {/* Service Cards Grid - Top Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 max-w-5xl mx-auto">
            {[
              {
                title: "Founders & Entrepreneurs",
                desc: "You&apos;re building or scaling a business and want your personal brand to drive trust with potential clients and partners, warm inbound leads, and speaking, press and collaboration opportunities.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8L28 16H36L30 22L32 30L24 26L16 30L18 22L12 16H20L24 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M24 26V40" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M18 36H30" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="24" cy="17" r="3" fill="#DC0078" fillOpacity="0.5"/>
                  </svg>
                )
              },
              {
                title: "C-Suite & Corporate Leaders",
                desc: "You lead teams, functions or entire organisations, but your voice isn&apos;t visible outside internal rooms. You want to shape conversations in your industry, attract top talent, and build a public reputation that reflects your leadership.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="14" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="24" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M24 20V26" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 26H36" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 26V42" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M24 26V42" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M36 26V42" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="32" r="3" stroke="#DC0078" strokeWidth="1.5"/>
                    <circle cx="24" cy="32" r="3" stroke="#DC0078" strokeWidth="1.5"/>
                    <circle cx="36" cy="32" r="3" stroke="#DC0078" strokeWidth="1.5"/>
                  </svg>
                )
              },
              {
                title: "Ambitious Professionals",
                desc: "You&apos;re good at what you do and you&apos;re ready for better roles, better opportunities, and a stronger, more visible professional identity.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 40L16 28L24 32L32 20L40 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="40" cy="8" r="4" stroke="#DC0078" strokeWidth="1.5"/>
                    <path d="M36 12L40 8L44 12" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="24" cy="32" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="16" cy="28" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="w-[280px] h-[200px] p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-950 hover:border-[#DC0078]/50 dark:hover:border-[#DC0078]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#DC0078]/10 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC0078]/5 to-[#1BB8BD]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-gray-600 dark:text-gray-400 group-hover:text-[#DC0078] transition-colors duration-300 mb-2 mt-2">
                    {item.icon}
                  </div>
                  <h3 className="relative z-10 font-bold text-base mb-1 text-center">{item.title}</h3>
                  <p className="relative z-10 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Cards Grid - Bottom Row */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Creators & Coaches",
                desc: "You already create or want to start creating content, but need clarity on your niche and message, a strategy that ties content to clients, and a consistent, professional LinkedIn presence.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="10" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M18 22L26 18V26L18 22Z" fill="#DC0078"/>
                    <path d="M6 38H42" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="14" cy="38" r="2" fill="currentColor"/>
                    <circle cx="24" cy="38" r="2" fill="currentColor"/>
                    <circle cx="34" cy="38" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: "Traditional Industry Experts",
                desc: "You may not come from a &apos;digital native&apos; space, but your work has real impact. You want to go beyond word-of-mouth, reach new markets or geographies, and become known for your experience and results.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="12" width="18" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 18H22" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 24H20" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 30H18" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M30 8L38 16V40H30V8Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M30 8V16H38" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="34" cy="26" r="4" stroke="#DC0078" strokeWidth="1.5"/>
                    <path d="M34 32V36" stroke="#DC0078" strokeWidth="1.5"/>
                  </svg>
                )
              },
              {
                title: "And You",
                desc: "If you&apos;re reading this thinking: &apos;I know I should be more visible.&apos; &apos;I want my name to mean something in my industry.&apos; &apos;I want content and a profile that work for me, not against me.&apos; Then yes, this is for you.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 40C12 32.268 17.268 26 24 26C30.732 26 36 32.268 36 40" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M24 12V20" stroke="#DC0078" strokeWidth="1.5"/>
                    <path d="M20 16H28" stroke="#DC0078" strokeWidth="1.5"/>
                    <path d="M18 38L24 32L30 38" stroke="#DC0078" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                highlight: true
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`w-[280px] h-[200px] p-4 rounded-2xl border bg-white dark:bg-zinc-950 transition-all duration-500 hover:shadow-xl hover:shadow-[#1BB8BD]/10 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden ${item.highlight ? 'border-[#1BB8BD]/50 dark:border-[#1BB8BD]/50 shadow-lg shadow-[#1BB8BD]/10' : 'border-gray-200 dark:border-gray-800 hover:border-[#1BB8BD]/50 dark:hover:border-[#1BB8BD]/50'}`}>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1BB8BD]/5 to-[#DC0078]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-gray-600 dark:text-gray-400 group-hover:text-[#1BB8BD] transition-colors duration-300 mb-2 mt-2">
                    {item.icon}
                  </div>
                  <h3 className="relative z-10 font-bold text-base mb-1 text-center">{item.title}</h3>
                  <p className="relative z-10 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Text and CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">Yes, this is for you<span className="text-[#DC0078]">.</span></p>
            <button 
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="bg-[#1BB8BD] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1fcfd4] transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-[#1BB8BD]/20 hover:shadow-[0_0_30px_rgba(27,184,189,0.4)] hover:scale-105 font-btn"
            >
              <span className="mr-2">🚀</span> Let&apos;s Talk
            </button>
          </motion.div>
        </div>
      </section>

      

      {/* --- SECTION 4: AUDIENCE (WHO WE WORK WITH) --- */}
      {/* <section className="py-24 theme-transition border-t bg-[var(--bg-secondary)] border-[var(--border-color)]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-xl">
               <h2 className="text-4xl md:text-5xl font-bold mb-4">Who we work with</h2>
               <p className="text-gray-600 dark:text-gray-400">Hirenum is designed for those ready to lead.</p>
             </div>
             <div className="flex gap-2">
                {["Founders", "C-Suite", "Creators"].map((tag, i) => (
                  <div key={i} className="px-4 py-2 rounded-full border text-xs uppercase tracking-wider border-black/10 bg-white dark:border-white/10 transition-all duration-300 hover:bg-[#1BB8BD] hover:text-white hover:border-[#1BB8BD] hover:scale-105 cursor-pointer">{tag}</div>
                ))}
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
             {[
               { title: "Founders & Entrepreneurs", desc: "Building or scaling a business. You want trust, warm leads, and speaking opps." },
               { title: "C-Suite & Corporate Leaders", desc: "You lead teams but want a voice outside internal rooms. Attract talent & build reputation." },
               { title: "Ambitious Professionals", desc: "Ready for better roles and a stronger, more visible professional identity." },
               { title: "Content Creators & Coaches", desc: "Need clarity on niche, message, and a strategy that ties content to clients." },
               { title: "Traditional Experts", desc: "Go beyond word-of-mouth. Reach new markets with your deep experience." },
               { title: "And You", desc: "If you&apos;re thinking &apos;I know I should be more visible&apos; - this is for you.", highlight: true }
             ].map((item, i) => (
               <div key={i} className={`p-8 rounded-xl border transition-all duration-500 cursor-pointer group ${item.highlight ? 'border-[#DC0078] bg-[#DC0078]/10 hover:bg-[#DC0078]/20 hover:shadow-[0_0_30px_rgba(220,0,120,0.2)]' : 'border-transparent bg-white shadow-sm border-black/5 hover:shadow-xl hover:-translate-y-1 hover:border-[#1BB8BD]/30 dark:bg-black dark:border-white/10 dark:hover:bg-white/5 dark:hover:border-[#1BB8BD]/50'}`}>
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${item.highlight ? 'text-[#DC0078]' : 'text-inherit group-hover:text-[#1BB8BD]'}`}>{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section> */}

      {/* --- SECTION 5: HIRENUM METHOD (PROCESS - VERTICAL ROADMAP) --- */}
      <section id="how-it-works" className="py-24 relative theme-transition bg-[var(--bg-primary)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">The Hirenum Method</h2>
             <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
               We follow a structured, hands-on process to take you from &quot;present on LinkedIn&quot; to &quot;positioned as a thought leader&quot;.
             </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
             {/* Vertical Line */}
             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#1BB8BD] via-[#DC0078] to-[#1BB8BD] opacity-30 md:-translate-x-1/2"></div>
             
             <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                     {/* Mobile spacing filler (Desktop Only) */}
                     <div className="hidden md:block w-1/2"></div>
                     
                     {/* Dot */}
                     <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#1BB8BD] z-10 shadow-[0_0_10px_#1BB8BD] bg-[var(--bg-primary)]">
                        <div className="absolute inset-0 bg-[#1BB8BD] opacity-50 animate-ping rounded-full"></div>
                     </div>

                     {/* Content Card */}
                     <div className="ml-20 md:ml-0 md:w-1/2 md:px-10 w-full">
                        <div className="glass-card p-8 rounded-xl border transition-all duration-500 group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:shadow-[#1BB8BD]/20 hover:-translate-y-1 hover:border-[#DC0078]/50 border-black/5 dark:hover:border-[#DC0078]/50">
                           {/* Animated border gradient */}
                           <div className="absolute inset-0 bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                           {/* Number Watermark */}
                           <div className="absolute -top-4 -right-4 text-8xl font-black z-0 transition-colors text-black/5 group-hover:text-[#DC0078]/10 dark:text-white/5 dark:group-hover:text-[#DC0078]/10">0{i+1}</div>
                           
                           <div className="relative z-10">
                             <h3 className="text-2xl font-bold mb-3 group-hover:text-[#1BB8BD] transition-colors text-zinc-900 dark:text-white">{step.title}</h3>
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
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: PACKAGES --- */}
      <section id="packages" className="py-24 theme-transition bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
             {/* Advisory */}
             <div className="border rounded-2xl p-8 transition-all duration-500 border-black/10 bg-white hover:border-[#1BB8BD]/50 shadow-lg hover:shadow-2xl hover:shadow-[#1BB8BD]/10 hover:-translate-y-2 dark:border-white/10 dark:bg-black dark:hover:border-[#1BB8BD]/50 group">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Advisory</h3>
                  <p className="text-[#1BB8BD] text-sm font-bold mt-1">You execute. We guide.</p>
                </div>
                <p className="text-sm mb-8 min-h-[40px] text-gray-600 dark:text-gray-400">For those who want to stay hands-on but need a strategic expert.</p>
                <button className="w-full py-3 border rounded-lg font-bold transition-all duration-300 mb-8 border-black hover:bg-black hover:text-white hover:scale-[1.02] hover:shadow-lg active:scale-95 dark:border-white dark:hover:bg-white dark:hover:text-black relative overflow-hidden group/btn font-btn"><span className="relative z-10">Select Advisory</span></button>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2"><Check size={16} className="text-[#1BB8BD]" /> Weekly 1:1 sessions</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#1BB8BD]" /> Positioning consultation</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#1BB8BD]" /> Content strategy & feedback</li>
                </ul>
             </div>

             {/* Foundation - Highlighted */}
             <div className="border-2 border-[#1BB8BD] rounded-2xl p-8 relative transform md:-translate-y-4 shadow-2xl shadow-[#1BB8BD]/20 bg-white dark:bg-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(27,184,189,0.3)] hover:-translate-y-6 group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1BB8BD] text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Foundation</h3>
                  <p className="text-[#1BB8BD] text-sm font-bold mt-1">We build with you.</p>
                </div>
                <p className="text-sm mb-8 min-h-[40px] text-gray-600 dark:text-gray-400">Structure, support and consistent visible progress.</p>
                <button className="w-full py-3 bg-[#1BB8BD] text-white rounded-lg font-bold transition-all duration-300 mb-8 hover:bg-[#1fcfd4] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(27,184,189,0.5)] active:scale-95 relative overflow-hidden font-btn">Select Foundation</button>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2"><Check size={16} className="text-[#1BB8BD]" /> <strong>All Advisory features</strong></li>
                  <li className="flex gap-2"><Check size={16} className="text-[#1BB8BD]" /> Profile Optimization (Done For You)</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#1BB8BD]" /> Content Calendar</li>
                </ul>
             </div>

             {/* Authority */}
             <div className="border rounded-2xl p-8 transition-all duration-500 border-black/10 bg-white hover:border-[#DC0078]/50 shadow-lg hover:shadow-2xl hover:shadow-[#DC0078]/10 hover:-translate-y-2 dark:border-white/10 dark:bg-black dark:hover:border-[#DC0078]/50 group">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Authority</h3>
                  <p className="text-[#DC0078] text-sm font-bold mt-1">We build for you.</p>
                </div>
                <p className="text-sm mb-8 min-h-[40px] text-gray-600 dark:text-gray-400">A done-for-you thought leadership engine for busy leaders.</p>
                <button className="w-full py-3 border rounded-lg font-bold transition-all duration-300 mb-8 border-black hover:bg-[#DC0078] hover:text-white hover:border-[#DC0078] hover:scale-[1.02] hover:shadow-lg active:scale-95 dark:border-white dark:hover:bg-[#DC0078] dark:hover:border-[#DC0078] relative overflow-hidden font-btn">Select Authority</button>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2"><Check size={16} className="text-[#DC0078]" /> <strong>All Foundation features</strong></li>
                  <li className="flex gap-2"><Check size={16} className="text-[#DC0078]" /> Outreach support</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#DC0078]" /> Heavy lifting on execution</li>
                </ul>
             </div>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-gray-600 dark:text-gray-400 mb-4">Not sure which one fits?</p>
             <button onClick={() => window.open('https://calendly.com', '_blank')} className="text-gradient underline decoration-[#DC0078] underline-offset-4 hover:decoration-[#1BB8BD] transition-all duration-300 hover:scale-105 inline-block font-btn">Book a Discovery Call</button>
          </div>
        </div>
      </section>

      {/* --- SECTION 7 : FREE AUDIT --- */}
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
            <div className="p-8 rounded-2xl shadow-2xl backdrop-blur-sm border bg-white/90 border-white/40 dark:bg-black/90 dark:border-white/20">
               <form className="space-y-4">
                 <div className="group">
                   <label className="block text-xs font-bold uppercase mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-focus-within:text-[#1BB8BD]">Full Name</label>
                   <input type="text" className="w-full border rounded-lg p-3 focus:outline-none focus:border-[#1BB8BD] focus:ring-2 focus:ring-[#1BB8BD]/20 bg-white border-gray-300 text-black dark:bg-white/10 dark:border-white/20 dark:text-white transition-all duration-300 hover:border-[#1BB8BD]/50" placeholder="John Doe" />
                 </div>
                 <div className="group">
                   <label className="block text-xs font-bold uppercase mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-focus-within:text-[#1BB8BD]">Email Address</label>
                   <input type="email" className="w-full border rounded-lg p-3 focus:outline-none focus:border-[#1BB8BD] focus:ring-2 focus:ring-[#1BB8BD]/20 bg-white border-gray-300 text-black dark:bg-white/10 dark:border-white/20 dark:text-white transition-all duration-300 hover:border-[#1BB8BD]/50" placeholder="john@company.com" />
                 </div>
                 <div className="group">
                   <label className="block text-xs font-bold uppercase mb-1 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-focus-within:text-[#1BB8BD]">LinkedIn URL</label>
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

      {/* --- SECTION 9: BLOG --- */}
      <section id="learn-for-free" className="py-24 theme-transition bg-[var(--bg-primary)]">
         <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold mb-2">Learn for free</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Practical guides to improve your presence today.</p>
               </div>
               <button className="text-[#1BB8BD] hover:text-[#DC0078] transition-all duration-300 text-sm font-bold flex items-center gap-2 group">
                 Read Blog <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
               </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {blogPosts.map((post, i) => (
                 <div key={i} className="group cursor-pointer transition-all duration-500 hover:-translate-y-2">
                    <div className="h-48 rounded-xl mb-4 overflow-hidden relative bg-gray-200 shadow-md group-hover:shadow-xl group-hover:shadow-[#1BB8BD]/20 transition-all duration-500">
                       <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-xs px-3 py-1 rounded-full text-white border border-white/10 z-10 transition-all duration-300 group-hover:bg-[#1BB8BD] group-hover:border-[#1BB8BD]">{post.cat}</div>
                       <div className="w-full h-full group-hover:scale-110 transition-transform duration-700 bg-gradient-to-tr from-gray-300 to-gray-200 dark:from-zinc-800 dark:to-zinc-700"></div>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-[#1BB8BD] transition-colors duration-300">{post.title}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 10: FAQ --- */}
      <section id="faqs" className="py-24 theme-transition border-t bg-[var(--bg-secondary)] border-[var(--border-color)]">
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

      {/* --- FINAL CTA --- */}
      <section className="py-32 relative flex items-center justify-center text-center overflow-hidden theme-transition bg-[var(--bg-primary)]">
         <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-[100px]"></div>
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

      {/* --- FOOTER --- */}
      <footer className="pt-20 pb-10 border-t theme-transition bg-[var(--bg-secondary)] border-[var(--border-color)]">
         <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
               <h2 className="text-3xl font-bold mb-6 font-logo">HIRENUM<span className="text-[#1BB8BD]">.</span></h2>
               <p className="max-w-sm mb-8 text-gray-600 dark:text-gray-500">Helping founders, entrepreneurs, and C-suites build powerful LinkedIn personal brands that turn visibility into authority.</p>
               <div className="flex space-x-4">
                 {[Linkedin, Instagram, Mail].map((Icon, i) => (
                    <div key={i} className="p-2 rounded-full transition-all duration-300 cursor-pointer bg-black/5 hover:bg-[#1BB8BD] hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(27,184,189,0.5)] hover:-translate-y-1 dark:bg-white/5 dark:hover:bg-[#1BB8BD] dark:hover:text-white active:scale-95">
                       <Icon size={20} />
                    </div>
                 ))}
               </div>
            </div>

            <div>
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400 dark:text-gray-500">Navigate</h3>
               <ul className="space-y-4 text-lg font-medium">
                  {['Home', 'Services', 'Packages', 'Blog'].map((item, i) => (
                     <li key={i}><button className="hover:text-[#1BB8BD] transition-all duration-300 hover:translate-x-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#1BB8BD] after:transition-all after:duration-300">{item}</button></li>
                  ))}
               </ul>
            </div>

            <div>
               <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400 dark:text-gray-500">Locations</h3>
               <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><Globe size={16} /> London, UK</li>
                  <li className="flex items-center gap-2"><Globe size={16} /> Surrey, UK</li>
                  <li className="pt-4 text-[#1BB8BD] font-bold">hello@hirenum.com</li>
               </ul>
            </div>
         </div>

         <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
            <p>&copy; 2024 Hirenum. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="cursor-pointer hover:text-[#1BB8BD] transition-colors duration-300">Privacy Policy</span>
               <span className="cursor-pointer hover:text-[#1BB8BD] transition-colors duration-300">Terms & Conditions</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default HirenumPage;