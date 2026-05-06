import React from 'react';
import KeffiyehPattern from './KeffiyehPattern';

export default function FooterCTA() {
  return (
    <section id="enterprise" className="py-32 bg-white relative overflow-hidden">
      <KeffiyehPattern />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="max-w-6xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src="/image avatar1.png"
            alt="Aamenn security avatar holding encryption key"
            className="w-52 md:w-72"
          />
        </div>
        {/* CTA Content */}
        <div className="text-center md:text-left flex-1">
          <h2 className="font-headline text-5xl md:text-6xl font-black mb-8 text-primary">Your files, locked to you.</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl">No scanning. No metadata collection. No access — not even ours. Sign up and keep your files to yourself.</p>
          <a href="https://web.aamenn.com/signup" className="bg-secondary text-white px-14 py-6 md:px-16 md:py-6 font-black uppercase tracking-wider md:tracking-[0.3em] hover:bg-secondary/90 transition-all shadow-2xl md:scale-110 text-sm md:text-base">Get Started</a>
        </div>
      </div>
    </section>
  );
}
