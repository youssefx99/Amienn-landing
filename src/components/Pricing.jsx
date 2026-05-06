import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import KeffiyehPattern from './KeffiyehPattern';

const PLANS = [
  { gb: 4,    monthly: null,  yearly: null,   label: 'FREE',    free: true  },
  { gb: 8,    monthly: 7,     yearly: 70,     label: '8 GB'               },
  { gb: 16,   monthly: 13,    yearly: 130,    label: '16 GB'              },
  { gb: 32,   monthly: 25,    yearly: 250,    label: '32 GB'              },
  { gb: 64,   monthly: 49,    yearly: 490,    label: '64 GB'              },
  { gb: 128,  monthly: 99,    yearly: 990,    label: '128 GB'             },
  { gb: 256,  monthly: 195,   yearly: 1950,   label: '256 GB'             },
  { gb: 512,  monthly: 390,   yearly: 3900,   label: '512 GB'             },
  { gb: 1024, monthly: 600,   yearly: 6000,   label: '1 TB'               },
  { gb: 2048, monthly: 900,   yearly: 9000,   label: '2 TB'               },
];

function formatStorage(gb) {
  if (gb >= 1024) return { value: gb / 1024, unit: 'TB' };
  return { value: gb, unit: 'GB' };
}

export default function Pricing() {
  const { t } = useTranslation();
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      <KeffiyehPattern />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-5xl font-black mb-4 text-primary">
            {t('landing.pricingGrid.title')}
          </h2>
          <p className="text-xl text-on-surface-variant mb-10">
            {t('landing.pricingGrid.subtitle')}
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-surface-container rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                billing === 'monthly'
                  ? 'bg-primary text-white shadow'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {t('landing.pricingGrid.monthly')}
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                billing === 'yearly'
                  ? 'bg-primary text-white shadow'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {t('landing.pricingGrid.yearly')}
              <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                billing === 'yearly' ? 'bg-white/20 text-white' : 'bg-secondary/10 text-secondary'
              }`}>
                {t('landing.pricingGrid.save')}
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PLANS.map((plan, i) => {
            const { value, unit } = formatStorage(plan.gb);
            const isFeatured = plan.gb === 128;
            const price = billing === 'yearly' ? plan.yearly : plan.monthly;

            return (
              <div
                key={plan.gb}
                className={`group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 border relative ${
                  isFeatured
                    ? 'border-primary shadow-2xl bg-white pt-6'
                    : 'border-surface-container bg-white'
                }`}
              >
                <div className="absolute inset-0 geometric-pattern-red"></div>
                {isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs font-black px-3 py-0.5 uppercase tracking-widest whitespace-nowrap z-20 shadow-lg rounded-b-md">
                    {t('landing.pricingGrid.popular')}
                  </div>
                )}
                <div className="p-5 flex flex-col items-center flex-1 w-full relative z-10">
                  {/* Storage */}
                  <div className="font-headline text-4xl font-black text-primary leading-none mt-2">
                    {value}
                    <span className="text-base">{unit}</span>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-4 min-h-[3rem] flex flex-col items-center justify-center">
                    {plan.free ? (
                      <span className="text-secondary font-black text-lg uppercase tracking-widest">{t('landing.pricingGrid.free')}</span>
                    ) : (
                      <>
                        <span className="font-bold text-on-surface text-base">
                          EGP {price?.toLocaleString()}
                        </span>
                        <span className="text-xs text-on-surface-variant">
                          / {billing === 'yearly' ? t('landing.pricingGrid.year') : t('landing.pricingGrid.month')}
                        </span>
                        {billing === 'yearly' && (
                          <span className="text-xs text-secondary font-bold mt-0.5">
                            EGP {Math.round(plan.yearly / 12)}/mo
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  <a
                    href="https://web.aamenn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto w-full py-3 text-xs font-black uppercase tracking-widest transition-all text-center block ${
                      isFeatured
                        ? 'bg-primary text-white group-hover:bg-secondary'
                        : 'border border-primary text-primary group-hover:bg-secondary group-hover:border-secondary group-hover:text-white'
                    }`}
                  >
                    {plan.free ? t('landing.pricingGrid.startFree') : t('landing.pricingGrid.selectTier')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-on-surface-variant mt-8">
          {t('landing.pricingGrid.footer')}
        </p>
      </div>
    </section>
  );
}
