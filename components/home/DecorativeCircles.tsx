import React, { memo } from 'react';

// Decorative Circles Background - Pure SVG component, no client-side JS needed
const DecorativeCircles: React.FC = memo(() => (
  <>
    {/* Left Side Circles */}
    <svg 
      className="absolute left-0 top-0 hidden sm:block sm:w-24 md:w-32 lg:w-48 h-full pointer-events-none" 
      viewBox="0 0 200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid slice"
    >
      <defs>
        <filter id="filter_glow_sm_l" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter_glow_md_l" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter_glow_lg_l" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
      </defs>
      
      <style>
        {`
          @keyframes fade1 {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
          @keyframes fade2 {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.9; }
          }
          @keyframes fade3 {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.7; }
          }
          .fade1 { animation: fade1 4s ease-in-out infinite; }
          .fade2 { animation: fade2 5s ease-in-out infinite; }
          .fade3 { animation: fade3 6s ease-in-out infinite; }
        `}
      </style>
      
      <g filter="url(#filter_glow_md_l)" className="fade1">
        <circle cx="25" cy="45" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="25" cy="45" r="1.5" fill="#1BB8BD" className="fade1"></circle>
      <circle cx="78" cy="142" r="1.5" fill="#1BB8BD" className="fade2"></circle>
      <g filter="url(#filter_glow_lg_l)" className="fade3">
        <circle cx="12" cy="285" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="12" cy="285" r="1.5" fill="#1BB8BD" className="fade3"></circle>
      <circle cx="165" cy="198" r="1.5" fill="#1BB8BD" className="fade1"></circle>
      <g filter="url(#filter_glow_md_l)" className="fade2">
        <circle cx="52" cy="390" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="52" cy="390" r="1.5" fill="#1BB8BD" className="fade2"></circle>
      <circle cx="135" cy="320" r="1.5" fill="#1BB8BD" className="fade3"></circle>
      <g filter="url(#filter_glow_md_l)" className="fade1">
        <circle cx="88" cy="510" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="88" cy="510" r="1.5" fill="#1BB8BD" className="fade1"></circle>
      <circle cx="18" cy="455" r="1.5" fill="#1BB8BD" className="fade2"></circle>
      <g filter="url(#filter_glow_lg_l)" className="fade3">
        <circle cx="42" cy="640" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="42" cy="640" r="1.5" fill="#1BB8BD" className="fade3"></circle>
      <circle cx="155" cy="575" r="1.5" fill="#1BB8BD" className="fade1"></circle>
      <circle cx="70" cy="735" r="1.5" fill="#1BB8BD" className="fade2"></circle>
    </svg>
    
    {/* Right Side Circles */}
    <svg 
      className="absolute right-0 top-0 hidden sm:block sm:w-24 md:w-32 lg:w-48 h-full pointer-events-none" 
      viewBox="0 0 200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <filter id="filter_glow_sm_r" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter_glow_md_r" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter_glow_lg_r" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
      </defs>
      
      <style>
        {`
          @keyframes fade4 {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.85; }
          }
          @keyframes fade5 {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.75; }
          }
          @keyframes fade6 {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.9; }
          }
          .fade4 { animation: fade4 5s ease-in-out infinite; }
          .fade5 { animation: fade5 4s ease-in-out infinite; }
          .fade6 { animation: fade6 6s ease-in-out infinite; }
        `}
      </style>
      
      <g filter="url(#filter_glow_md_r)" className="fade4">
        <circle cx="175" cy="72" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="175" cy="72" r="1.5" fill="#1BB8BD" className="fade4"></circle>
      <circle cx="45" cy="115" r="1.5" fill="#1BB8BD" className="fade5"></circle>
      <g filter="url(#filter_glow_lg_r)" className="fade6">
        <circle cx="160" cy="248" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="160" cy="248" r="1.5" fill="#1BB8BD" className="fade6"></circle>
      <circle cx="35" cy="185" r="1.5" fill="#1BB8BD" className="fade4"></circle>
      <g filter="url(#filter_glow_md_r)" className="fade5">
        <circle cx="125" cy="365" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="125" cy="365" r="1.5" fill="#1BB8BD" className="fade5"></circle>
      <circle cx="58" cy="305" r="1.5" fill="#1BB8BD" className="fade6"></circle>
      <g filter="url(#filter_glow_md_r)" className="fade4">
        <circle cx="185" cy="478" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="185" cy="478" r="1.5" fill="#1BB8BD" className="fade4"></circle>
      <circle cx="72" cy="420" r="1.5" fill="#1BB8BD" className="fade5"></circle>
      <g filter="url(#filter_glow_lg_r)" className="fade6">
        <circle cx="148" cy="615" r="1.5" fill="#1BB8BD"></circle>
      </g>
      <circle cx="148" cy="615" r="1.5" fill="#1BB8BD" className="fade6"></circle>
      <circle cx="28" cy="545" r="1.5" fill="#1BB8BD" className="fade4"></circle>
      <circle cx="165" cy="740" r="1.5" fill="#1BB8BD" className="fade5"></circle>
    </svg>
  </>
));

DecorativeCircles.displayName = 'DecorativeCircles';

export default DecorativeCircles;
