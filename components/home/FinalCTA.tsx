'use client';

import React, { memo, useState } from 'react';

const FreeAudit: React.FC = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedinUrl: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden theme-transition">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-8 2xl:px-6">
        {/* Centered Heading */}
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight text-center mb-8 sm:mb-12 md:mb-16">
          Get Your Free <br/>LinkedIn Audit
        </h2>
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-14 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">
          
          {/* Left Side - Description */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
              Share your LinkedIn profile and we&apos;ll send you a structured audit covering:
            </p>
            
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="url(#tickGradient)" strokeWidth={3}>
                  <defs>
                    <linearGradient id="tickGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1BB8BD" />
                      <stop offset="100%" stopColor="#DC0078" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>First impression & clarity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="url(#tickGradient)" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Headline strength</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="url(#tickGradient)" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>About section effectiveness</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="url(#tickGradient)" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experience and credibility signals</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="url(#tickGradient)" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Overall positioning</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-5 h-5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="url(#tickGradient)" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quick wins and priority fixes</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="rounded-2xl sm:rounded-3xl border border-[#1BB8BD]/15 p-6 sm:p-8 md:p-12 bg-[linear-gradient(45deg,rgba(240,240,240,0.95)_0%,rgba(245,245,245,0.9)_70%,rgba(250,250,250,0.85)_100%)] dark:bg-[linear-gradient(45deg,var(--bg-primary)_0%,var(--bg-primary)_70%,rgba(63,63,70,0.5)_100%)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 py-5 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none text-lg"
                      placeholder="Name"
                    />
                    <div className="h-[1px] bg-[var(--border-color)] group-focus-within:bg-[#1BB8BD] transition-colors duration-300"></div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 py-4 sm:py-5 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none text-base sm:text-lg"
                      placeholder="Email"
                    />
                    <div className="h-[1px] bg-[var(--border-color)] group-focus-within:bg-[#1BB8BD] transition-colors duration-300"></div>
                  </div>

                  {/* LinkedIn URL Field */}
                  <div className="relative group">
                    <input
                      type="url"
                      id="linkedinUrl"
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 py-4 sm:py-5 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none text-base sm:text-lg"
                      placeholder="LinkedIn Profile URL"
                    />
                    <div className="h-[1px] bg-[var(--border-color)] group-focus-within:bg-[#1BB8BD] transition-colors duration-300 mb-6 sm:mb-8"></div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto self-start py-3 px-8 rounded-full font-bold text-center transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-gradient-to-r hover:from-[#1BB8BD] hover:to-[#DC0078] hover:text-white font-btn relative overflow-hidden group hover:scale-105 active:scale-95"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative z-10">Submit</span>
                  </button>

                  
                </form>
              ) : (
                /* Success Message */
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#1BB8BD] to-[#DC0078] flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xl text-[var(--text-primary)] font-semibold">
                    Thank you! Your submission has been received!
                  </p>
                  <p className="text-[var(--text-secondary)] mt-2">
                    We&apos;ll send your audit report within 24 hours.
                  </p>
                </div>
              )}

              {isError && (
                /* Error Message */
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                  <p className="text-red-500">Oops! Something went wrong while submitting the form.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FreeAudit.displayName = 'FreeAudit';

export default FreeAudit;
