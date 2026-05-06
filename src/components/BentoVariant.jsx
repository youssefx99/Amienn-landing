import React from 'react';
import KeffiyehPattern from './KeffiyehPattern';

// VARIANT 3: Avatar as floating center element between header and grid, overlapping both
export default function BentoVariant3() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <KeffiyehPattern />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-6">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4">Privacy by Architecture</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Your files are encrypted on your device before they leave it. We store ciphertext. We can't read it.</p>
        </div>
        {/* Avatar floating center */}
        <div className="flex justify-center -mb-26 relative z-20">
          <img src="/image avatar 2.png" alt="" className="w-80 md:w-[440px]" />
        </div>
        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px] pt-10">
          <div className="md:col-span-8 bento-cell bg-white p-12 flex flex-col justify-between group">
            <div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">no_accounts</span>
              <h3 className="font-headline text-3xl font-bold mb-4">No Harvesting</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">We can't see your files, read their names, or reset your password — because we genuinely don't have that access. Your data isn't our product.</p>
            </div>
            <div className="flex items-center gap-4 text-secondary font-bold group-hover:gap-6 transition-all cursor-pointer">
              Learn about Zero-Knowledge <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
          <div className="md:col-span-4 bento-cell bg-primary text-white p-8 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>visibility_off</span>
            <h3 className="font-headline text-2xl font-bold mb-2">No Surveillance</h3>
            <p className="text-primary-fixed-dim">We don't log what you upload, when, or how often.</p>
          </div>
          <div className="md:col-span-4 bento-cell bg-secondary text-white p-8 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-4">key</span>
            <h3 className="font-headline text-2xl font-bold mb-2">No Backdoors</h3>
            <p className="text-secondary-fixed">Your encryption key never leaves your device. We don't have a copy.</p>
          </div>
          <div className="md:col-span-8 bento-cell bg-surface-container p-8 flex items-center gap-8 overflow-hidden">
            <div className="flex-1">
              <h3 className="font-headline text-2xl font-bold mb-2">Built for Serious Use</h3>
              <p className="text-on-surface-variant">Used by teams that can't afford to trust a platform that scans their files.</p>
            </div>
            <div className="w-48 h-32 shrink-0 bg-primary/10 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-6xl">account_balance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
