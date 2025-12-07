'use client';

import React, { memo, useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Optimize video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate once video is ready
    const handleCanPlay = () => {
      video.playbackRate = 0.65;
      setIsVideoLoaded(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    
    // If video is already loaded
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section id="start-here" className="relative min-h-[100svh] flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          className={`absolute top-0 right-0 w-full h-full object-cover will-change-auto
                     opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-50 
                     dark:opacity-40 dark:sm:opacity-60 dark:md:opacity-80 dark:lg:opacity-100
                     brightness-110 saturate-75 contrast-75
                     dark:brightness-[0.8] dark:saturate-75 dark:contrast-95
                     [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.3)_20%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.3)_80%,transparent_100%)]
                     sm:[mask-image:linear-gradient(to_right,transparent_0%,transparent_10%,rgba(0,0,0,0.15)_30%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]
                     md:[mask-image:linear-gradient(to_right,transparent_0%,transparent_15%,rgba(0,0,0,0.2)_35%,rgba(0,0,0,0.5)_55%,rgba(0,0,0,0.75)_75%,rgba(0,0,0,0.9)_100%)]
                     lg:[mask-image:linear-gradient(to_right,transparent_0%,transparent_25%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.6)_65%,rgba(0,0,0,0.85)_85%,rgba(0,0,0,1)_100%)]
                     transition-opacity duration-500 ${isVideoLoaded ? '' : 'opacity-0'}`}
          style={{ transform: 'translateZ(0)' }}
        >
          <source src="/neon-tunnel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)] 
                        opacity-90 sm:opacity-80 md:opacity-70 lg:opacity-60
                        dark:opacity-70 dark:sm:opacity-60 dark:md:opacity-50 dark:lg:opacity-40"></div>
        <div className="absolute inset-0 bg-[var(--bg-primary)] 
                        opacity-60 sm:opacity-50 md:opacity-30 lg:opacity-20
                        dark:opacity-30 dark:sm:opacity-20 dark:md:opacity-5 dark:lg:opacity-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1BB8BD]/5 via-transparent to-[#DC0078]/5 mix-blend-overlay"></div>
      </div>

      {/* Abstract Background Elements */}
      <div className="glow-orb top-0 right-[-200px] animate-pulse hidden sm:block"></div>
      <div className="glow-orb bottom-[-200px] left-[-200px] opacity-50 hidden sm:block"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative z-10">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          
          <h1 className="text-[2rem] min-[360px]:text-[2.25rem] min-[400px]:text-[2.5rem] min-[480px]:text-[2.85rem] sm:text-[3.15rem] md:text-[3.65rem] lg:text-[3.25rem] xl:text-[4rem] 2xl:text-[4.75rem] font-bold leading-[1.08] tracking-tight">
            <span className="block">BECOME YOUR</span>
            <span className="block">INDUSTRY&apos;S GO-TO</span>
            <span className="relative inline-block">
              THOUGHT LEADER
              <svg
                className="absolute bottom-0 min-[480px]:-bottom-0.5 sm:-bottom-1 md:-bottom-1.5 lg:-bottom-1 xl:-bottom-2 left-0 w-full h-2 sm:h-3 md:h-4"
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

          <p className="text-[0.9rem] min-[400px]:text-[0.95rem] min-[480px]:text-base sm:text-[1.05rem] md:text-lg lg:text-base xl:text-lg 2xl:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-600 dark:text-gray-400">
            We help founders, entrepreneurs, C-suites and professionals build powerful <span className="text-[#17A8AD] dark:text-[#1BB8BD] font-medium">LinkedIn personal brands</span> that turn visibility into authority, and authority into inbound opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4 justify-center lg:justify-start">
            <button onClick={() => window.open('https://calendly.com', '_blank')} className="bg-[#1BB8BD] text-white text-sm sm:text-base lg:text-base xl:text-lg font-bold px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full transition-all duration-500 flex items-center justify-center gap-2 group relative overflow-hidden hover:shadow-[0_10px_40px_rgba(27,184,189,0.4)] hover:scale-105 active:scale-95 font-btn w-full sm:w-auto">
              <span className="relative z-10 whitespace-nowrap">BOOK A DISCOVERY CALL</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#DC0078] to-[#1BB8BD] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
