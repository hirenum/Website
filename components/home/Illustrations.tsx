'use client';

import React from 'react';

// Bullet Point Component for Service Cards
export const BulletItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-2 sm:gap-3 text-left">
    <div className="mt-2 sm:mt-2.5 w-2 h-2 rounded-full bg-[#DC0078] flex-shrink-0" />
    <span className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">{text}</span>
  </li>
);

// Brand Architecture Illustration - Person designing brand identity
export const BrandIllustration: React.FC = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
    <circle cx="60" cy="28" r="12" fill="#1BB8BD" opacity="0.9"/>
    <path d="M45 45 Q60 55 75 45 L72 75 Q60 80 48 75 Z" fill="#1BB8BD" opacity="0.8"/>
    <rect x="25" y="82" width="22" height="22" rx="3" fill="#DC0078" opacity="0.8">
      <animate attributeName="y" values="82;78;82" dur="3s" repeatCount="indefinite"/>
    </rect>
    <rect x="49" y="88" width="22" height="22" rx="3" fill="#1BB8BD" opacity="0.7">
      <animate attributeName="y" values="88;84;88" dur="3s" repeatCount="indefinite" begin="0.5s"/>
    </rect>
    <rect x="73" y="82" width="22" height="22" rx="3" fill="#DC0078" opacity="0.6">
      <animate attributeName="y" values="82;78;82" dur="3s" repeatCount="indefinite" begin="1s"/>
    </rect>
    <circle cx="30" cy="35" r="2" fill="#DC0078">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="90" cy="40" r="2" fill="#1BB8BD">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.7s"/>
    </circle>
  </svg>
);

// Growth Strategy Illustration - Upward chart with dynamic elements
export const StrategyIllustration: React.FC = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
    <rect x="20" y="70" width="16" height="35" rx="3" fill="#1BB8BD" opacity="0.5">
      <animate attributeName="height" values="35;40;35" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="y" values="70;65;70" dur="2s" repeatCount="indefinite"/>
    </rect>
    <rect x="42" y="55" width="16" height="50" rx="3" fill="#DC0078" opacity="0.6">
      <animate attributeName="height" values="50;58;50" dur="2s" repeatCount="indefinite" begin="0.3s"/>
      <animate attributeName="y" values="55;47;55" dur="2s" repeatCount="indefinite" begin="0.3s"/>
    </rect>
    <rect x="64" y="40" width="16" height="65" rx="3" fill="#1BB8BD" opacity="0.7">
      <animate attributeName="height" values="65;72;65" dur="2s" repeatCount="indefinite" begin="0.6s"/>
      <animate attributeName="y" values="40;33;40" dur="2s" repeatCount="indefinite" begin="0.6s"/>
    </rect>
    <rect x="86" y="22" width="16" height="83" rx="3" fill="#DC0078" opacity="0.8">
      <animate attributeName="height" values="83;90;83" dur="2s" repeatCount="indefinite" begin="0.9s"/>
      <animate attributeName="y" values="22;15;22" dur="2s" repeatCount="indefinite" begin="0.9s"/>
    </rect>
    <path d="M25 75 Q55 50 95 20" stroke="#1BB8BD" strokeWidth="3" fill="none" strokeLinecap="round">
      <animate attributeName="stroke-dasharray" values="0,200;150,200" dur="2s" repeatCount="indefinite"/>
    </path>
    <polygon points="95,15 100,25 90,25" fill="#1BB8BD">
      <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite"/>
    </polygon>
  </svg>
);

// Collaboration Illustration - Two people working together
export const CollaborationIllustration: React.FC = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
    <circle cx="38" cy="35" r="10" fill="#1BB8BD" opacity="0.9"/>
    <path d="M25 50 Q38 58 51 50 L49 72 Q38 76 27 72 Z" fill="#1BB8BD" opacity="0.8"/>
    <circle cx="82" cy="35" r="10" fill="#DC0078" opacity="0.9"/>
    <path d="M69 50 Q82 58 95 50 L93 72 Q82 76 71 72 Z" fill="#DC0078" opacity="0.8"/>
    <path d="M50 65 Q60 55 70 65" stroke="#1BB8BD" strokeWidth="3" fill="none" strokeLinecap="round">
      <animate attributeName="stroke-dasharray" values="0,50;40,50" dur="1.5s" repeatCount="indefinite"/>
    </path>
    <rect x="48" y="80" width="24" height="28" rx="3" fill="url(#collab-gradient)" opacity="0.8">
      <animate attributeName="y" values="80;77;80" dur="2s" repeatCount="indefinite"/>
    </rect>
    <defs>
      <linearGradient id="collab-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1BB8BD"/>
        <stop offset="100%" stopColor="#DC0078"/>
      </linearGradient>
    </defs>
    <line x1="52" y1="88" x2="68" y2="88" stroke="white" strokeWidth="2" opacity="0.6"/>
    <line x1="52" y1="93" x2="64" y2="93" stroke="white" strokeWidth="2" opacity="0.6"/>
    <line x1="52" y1="98" x2="68" y2="98" stroke="white" strokeWidth="2" opacity="0.6"/>
    <circle cx="60" cy="45" r="3" fill="#DC0078">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);
