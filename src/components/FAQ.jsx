import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const items = t('landing.faq.items', { returnObjects: true });

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
        <h2 className="font-headline text-4xl font-bold text-primary mb-12 text-center">{t('landing.faq.title')}</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details key={item.question} className="group border-b border-outline-variant pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h4 className="font-headline text-xl font-bold">{item.question}</h4>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-on-surface-variant leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
