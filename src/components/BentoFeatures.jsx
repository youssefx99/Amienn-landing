import React from 'react';

export default function BentoFeatures() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold text-primary mb-4">Privacy by Architecture</h2>
          <p className="text-on-surface-variant max-w-2xl">We don't just promise privacy; we make it mathematically certain through institutional-grade encryption.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-8 bento-cell bg-white p-12 flex flex-col justify-between group">
            <div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">no_accounts</span>
              <h3 className="font-headline text-3xl font-bold mb-4">No Harvesting</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">Aamenn is blind by design. We cannot see your files, read your metadata, or profile your identity. Your data is your property, not our product.</p>
            </div>
            <div className="flex items-center gap-4 text-secondary font-bold group-hover:gap-6 transition-all cursor-pointer">
              Learn about Zero-Knowledge <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
          <div className="md:col-span-4 bento-cell bg-primary text-white p-8 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>visibility_off</span>
            <h3 className="font-headline text-2xl font-bold mb-2">No Surveillance</h3>
            <p className="text-primary-fixed-dim">Metadata obfuscation ensures even traffic patterns remain private.</p>
          </div>
          <div className="md:col-span-4 bento-cell bg-secondary text-white p-8 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl mb-4">key</span>
            <h3 className="font-headline text-2xl font-bold mb-2">No Backdoors</h3>
            <p className="text-secondary-fixed">We hold no master keys. Encryption happens locally on your device.</p>
          </div>
          <div className="md:col-span-8 bento-cell bg-surface-container p-8 flex items-center gap-8 overflow-hidden">
            <div className="flex-1">
              <h3 className="font-headline text-2xl font-bold mb-2">Institutional Integrity</h3>
              <p className="text-on-surface-variant">Built for governmental and enterprise-level data residency compliance.</p>
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
