'use client';

import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';

const Blog: React.FC = memo(() => {
  const blogPosts: BlogPost[] = [
    { title: "How to Fix Your LinkedIn Headline in 5 Minutes", cat: "Profile" },
    { title: "5 Types of Posts Every Founder Should Share", cat: "Content" },
    { title: "How to Write an About Section That Actually Sounds Like You", cat: "Branding" }
  ];

  return (
    <section id="learn-for-free" className="py-24 theme-transition bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Learn for free</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Practical guides to improve your presence today.</p>
          </div>
          <button className="text-[#17A8AD] dark:text-[#1BB8BD] hover:text-[#DC0078] transition-all duration-300 text-sm font-bold flex items-center gap-2 group">
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
              <h3 className="text-lg font-bold group-hover:text-[#17A8AD] dark:group-hover:text-[#1BB8BD] transition-colors duration-300">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;
