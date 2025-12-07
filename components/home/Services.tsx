'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BulletItem, BrandIllustration, StrategyIllustration, CollaborationIllustration } from './Illustrations';

const Services: React.FC = memo(() => {
  const brands: string[] = ["TRUSTED BY FOUNDERS", "POWERED BY STRATEGY", "FOCUSED ON AUTHORITY", "BUILT FOR INFLUENCE", "DESIGNED FOR LINKEDIN GROWTH"];

  return (
    <>
      {/* Logo Ticker */}
      <div className="border-y py-8 overflow-hidden theme-transition bg-[var(--bg-primary)] border-[var(--border-color)]">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center transition-opacity duration-500 opacity-60 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100">
            {brands.map((brand, i) => (
              <span key={i} className="text-xl font-bold mx-4 text-gray-500 dark:text-gray-400">{brand}</span>
            ))}
            {brands.map((brand, i) => (
              <span key={`dup-${i}`} className="text-xl font-bold font-md mx-4 text-gray-500 dark:text-gray-400">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="what-we-do" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden theme-transition bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-6">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            <h2 className="text-2xl min-[400px]:text-[1.65rem] sm:text-3xl md:text-[2rem] lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight px-2">Disclaimer: We are NOT a content & social media agency<span className="text-[#DC0078]">.</span></h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 px-2">
              We build thought leadership with a clear strategy, strong positioning, and consistent execution.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 max-w-sm sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 group px-4 sm:px-6 md:px-4 lg:px-2 py-6 sm:py-8 md:py-6 lg:py-4 rounded-2xl md:rounded-none hover:bg-gray-50/50 dark:hover:bg-white/[0.02] md:hover:bg-transparent transition-colors duration-300"
            >
              <div className="w-full flex justify-center group-hover:scale-105 transition-transform duration-300">
                <BrandIllustration />
              </div>
              <h3 className="text-lg min-[400px]:text-xl sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold w-full text-center">
                Architect Your <span className="text-[#1BB8BD]">Brand</span>
              </h3>
              <p className="text-sm sm:text-base md:text-sm lg:text-base font-medium w-full text-center text-[var(--text-secondary)]">We help you uncover and define:</p>
              <div className="w-full flex justify-center">
                <ul className="space-y-2 sm:space-y-3">
                  <BulletItem text="Your story, journey and core expertise" />
                  <BulletItem text="Your positioning and proposition" />
                  <BulletItem text="Founder's voice" />
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 group px-4 sm:px-6 md:px-4 lg:px-2 py-6 sm:py-8 md:py-6 lg:py-4 rounded-2xl md:rounded-none hover:bg-gray-50/50 dark:hover:bg-white/[0.02] md:hover:bg-transparent transition-colors duration-300"
            >
              <div className="w-full flex justify-center group-hover:scale-105 transition-transform duration-300">
                <StrategyIllustration />
              </div>
              <h3 className="text-lg min-[400px]:text-xl sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold w-full text-center">
                Build a Scaling <span className="text-[#1BB8BD]">Strategy</span>
              </h3>
              <p className="text-sm sm:text-base md:text-sm lg:text-base font-medium w-full text-center text-[var(--text-secondary)]">Once brand is clear, we map its growth:</p>
              <div className="w-full flex justify-center">
                <ul className="space-y-2 sm:space-y-3">
                  <BulletItem text="Content pillars and key topics" />
                  <BulletItem text="Posting rhythm and formats that suit your schedule" />
                  <BulletItem text="How your content supports your business goals" />
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 group px-4 sm:px-6 md:px-4 lg:px-2 py-6 sm:py-8 md:py-6 lg:py-4 rounded-2xl md:rounded-none hover:bg-gray-50/50 dark:hover:bg-white/[0.02] md:hover:bg-transparent transition-colors duration-300 md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none"
            >
              <div className="w-full flex justify-center group-hover:scale-105 transition-transform duration-300">
                <CollaborationIllustration />
              </div>
              <h3 className="text-lg min-[400px]:text-xl sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold w-full text-center">
                Co-Create and  <span className="text-[#1BB8BD]">Execute</span>
              </h3>
              <p className="text-sm sm:text-base md:text-sm lg:text-base font-medium w-full text-center text-[var(--text-secondary)]">Depending on your package, we:</p>
              <div className="w-full flex justify-center">
                <ul className="space-y-2 sm:space-y-3">
                  <BulletItem text="Fully optimize your LinkedIn profile and company page" />
                  <BulletItem text="Co-create content with you" />
                  <BulletItem text="Support you in networking and outreach" />
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
});

Services.displayName = 'Services';

export default Services;
