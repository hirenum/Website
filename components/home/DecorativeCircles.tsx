import React, { memo } from 'react';

// Decorative Circles Background - Static dots without expensive animations
const DecorativeCircles: React.FC = memo(() => (
  <>
    {/* Left Side Circles - Static with varying opacity */}
    <svg 
      className="absolute left-0 top-0 hidden sm:block sm:w-24 md:w-32 lg:w-48 h-full pointer-events-none" 
      viewBox="0 0 200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid slice"
    >
      <circle cx="25" cy="45" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="78" cy="142" r="2" fill="#1BB8BD" opacity="0.6"></circle>
      <circle cx="12" cy="285" r="2" fill="#1BB8BD" opacity="0.4"></circle>
      <circle cx="165" cy="198" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="52" cy="390" r="2" fill="#1BB8BD" opacity="0.6"></circle>
      <circle cx="135" cy="320" r="2" fill="#1BB8BD" opacity="0.4"></circle>
      <circle cx="88" cy="510" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="18" cy="455" r="2" fill="#1BB8BD" opacity="0.6"></circle>
      <circle cx="42" cy="640" r="2" fill="#1BB8BD" opacity="0.4"></circle>
      <circle cx="155" cy="575" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="70" cy="735" r="2" fill="#1BB8BD" opacity="0.6"></circle>
    </svg>
    
    {/* Right Side Circles - Static with varying opacity */}
    <svg 
      className="absolute right-0 top-0 hidden sm:block sm:w-24 md:w-32 lg:w-48 h-full pointer-events-none" 
      viewBox="0 0 200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
    >
      <circle cx="175" cy="72" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="45" cy="115" r="2" fill="#1BB8BD" opacity="0.4"></circle>
      <circle cx="160" cy="248" r="2" fill="#1BB8BD" opacity="0.6"></circle>
      <circle cx="35" cy="185" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="125" cy="365" r="2" fill="#1BB8BD" opacity="0.4"></circle>
      <circle cx="58" cy="305" r="2" fill="#1BB8BD" opacity="0.6"></circle>
      <circle cx="185" cy="478" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="72" cy="420" r="2" fill="#1BB8BD" opacity="0.4"></circle>
      <circle cx="148" cy="615" r="2" fill="#1BB8BD" opacity="0.6"></circle>
      <circle cx="28" cy="545" r="2" fill="#1BB8BD" opacity="0.5"></circle>
      <circle cx="165" cy="740" r="2" fill="#1BB8BD" opacity="0.4"></circle>
    </svg>
  </>
));

DecorativeCircles.displayName = 'DecorativeCircles';

export default DecorativeCircles;
