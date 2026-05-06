import React from 'react';

export default function FAQ() {
  return (
    <section id="security" className="py-24 bg-surface relative overflow-hidden">
      {/* Background pattern with repeated question mark bubbles */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <img src="/question mark or help bubble.png" alt="" className="absolute top-16 left-25 w-16 h-16" />
        <img src="/question mark or help bubble.png" alt="" className="absolute top-20 right-20 w-20 h-20" />
        <img src="/question mark or help bubble.png" alt="" className="absolute bottom-20 left-1/4 w-14 h-14" />
        <img src="/question mark or help bubble.png" alt="" className="absolute bottom-10 right-1/3 w-18 h-18" />
        <img src="/question mark or help bubble.png" alt="" className="absolute top-1/2 left-5 w-12 h-12" />
      </div>
      <div className="max-w-3xl mx-auto px-8 relative z-10">
        <h2 className="font-headline text-4xl font-bold text-primary mb-12 text-center">Frequently Asked</h2>
        <div className="space-y-4">
          <details className="group border-b border-outline-variant pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none py-4">
              <h4 className="font-headline text-xl font-bold">What is zero-knowledge?</h4>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-on-surface-variant leading-relaxed">Zero-knowledge encryption means that your service provider (us) has zero knowledge of the data you store. We don't have the keys, we don't know the file names, and we can't reset your password because we don't know what it is.</p>
          </details>
          <details className="group border-b border-outline-variant pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none py-4">
              <h4 className="font-headline text-xl font-bold">What if I lose my key?</h4>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-on-surface-variant leading-relaxed">Because of our zero-knowledge architecture, if you lose your recovery phrase and password, we cannot recover your data. We recommend storing physical backups of your master recovery key in a secure location.</p>
          </details>
          <details className="group border-b border-outline-variant pb-4">
            <summary className="flex justify-between items-center cursor-pointer list-none py-4">
              <h4 className="font-headline text-xl font-bold">Where is data stored?</h4>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-on-surface-variant leading-relaxed">Your encrypted files are stored on our cloud storage. All data is encrypted on your device before it leaves — our cloud only ever receives ciphertext and has no ability to decrypt or access your files.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
