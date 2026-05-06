import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 geometric-pattern"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <h1 className="font-headline text-5xl md:text-8xl font-black text-primary leading-tight mb-8">
          Your files. <span className="text-secondary italic">Only yours.</span>
        </h1>

        <div className="flex justify-center">
          <a href="https://web.aamenn.com/signup" className="bg-primary text-white px-16 py-8 font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-2xl text-lg md:text-xl transform hover:scale-105 transition-transform">
            Start & Get 5GB FREE
          </a>
        </div>
      </div>
    </section>
  );
}
