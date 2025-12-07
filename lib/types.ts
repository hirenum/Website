import type { LucideIcon } from 'lucide-react';

export interface Step {
  title: string;
  desc: string;
  details: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  title: string;
  cat: string;
}

export interface PainPointNode {
  text: string;
  icon: LucideIcon;
  top: string;
  left?: string;
  right?: string;
  align: 'left' | 'right';
  delay: number;
  isHighlight?: boolean;
}

export interface MobilePainPointNode {
  text: string;
  icon: LucideIcon;
  isHighlight?: boolean;
}
