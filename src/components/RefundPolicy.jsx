import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="font-headline text-xl font-bold text-primary mb-4">{title}</h2>
    <div className="text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const TimelineStep = ({ day, title, description, isWarning }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isWarning ? 'bg-secondary text-white' : 'bg-primary-fixed text-primary'}`}>
        {day}
      </div>
      <div className="w-px flex-1 bg-outline-variant mt-1" />
    </div>
    <div className="pb-6">
      <div className={`font-headline font-bold text-sm mb-1 ${isWarning ? 'text-secondary' : 'text-on-surface'}`}>{title}</div>
      <div className="font-body text-sm text-on-surface-variant">{description}</div>
    </div>
  </div>
);

const NoRefundRow = ({ reason }) => (
  <div className="flex items-start gap-3 py-3 border-b border-outline-variant last:border-0">
    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <span className="font-body text-sm text-on-surface-variant">{reason}</span>
  </div>
);

export default function RefundPolicy() {
  const { t } = useTranslation();
  const noRefunds = t('landing.refundPage.noRefunds', { returnObjects: true });
  const timeline = t('landing.refundPage.timeline', { returnObjects: true });

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-label uppercase tracking-widest px-4 py-1.5 mb-6">
            {t('landing.legal.badge')}
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
            {t('landing.refundPage.title')}
          </h1>
          <p className="text-white/70 font-body text-sm">{t('landing.legal.lastUpdated')}</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        {/* Summary banner */}
        <div className="bg-primary/5 border border-primary/20 p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-headline font-bold text-primary text-lg">{t('landing.refundPage.summary.graceValue')}</div>
              <div className="font-body text-xs text-on-surface-variant mt-1">{t('landing.refundPage.summary.graceLabel')}</div>
            </div>
            <div>
              <div className="font-headline font-bold text-primary text-lg">{t('landing.refundPage.summary.coolingValue')}</div>
              <div className="font-body text-xs text-on-surface-variant mt-1">{t('landing.refundPage.summary.coolingLabel')}</div>
            </div>
            <div>
              <div className="font-headline font-bold text-primary text-lg">{t('landing.refundPage.summary.annualValue')}</div>
              <div className="font-body text-xs text-on-surface-variant mt-1">{t('landing.refundPage.summary.annualLabel')}</div>
            </div>
          </div>
        </div>

        {/* Refunds */}
        <Section title={t('landing.refundPage.sections.refunds')}>
          <div className="bg-surface-container-low border border-outline-variant p-5 mb-3">
            <div className="font-headline font-bold text-on-surface text-sm mb-2">{t('landing.refundPage.coolingTitle')}</div>
            <p>
              {t('landing.refundPage.coolingBeforeStrong')}<strong className="text-on-surface font-semibold">{t('landing.refundPage.coolingStrong')}</strong>{t('landing.refundPage.coolingAfterStrong')}
            </p>
          </div>
          <div className="font-headline font-bold text-on-surface text-sm mb-2 mt-4">{t('landing.refundPage.noRefundsTitle')}</div>
          <div className="bg-surface-container-low border border-outline-variant p-4">
            {noRefunds.map((reason) => (
              <NoRefundRow key={reason} reason={reason} />
            ))}
          </div>
          <p className="text-xs text-on-surface-variant italic">
            {t('landing.refundPage.legalNoteBeforeLink')}
            <a href="mailto:verify@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">{t('landing.footerMain.email')}</a>{t('landing.refundPage.legalNoteAfterLink')}
          </p>
        </Section>

        {/* Grace Period */}
        <Section title={t('landing.refundPage.sections.grace')}>
          <p>
            {t('landing.refundPage.graceP1BeforeStrong')}
            <strong className="text-on-surface font-semibold">{t('landing.refundPage.graceP1Strong')}</strong>{t('landing.refundPage.graceP1AfterStrong')}
          </p>
          <p>
            {t('landing.refundPage.graceP2BeforeStrong')}
            <strong className="text-on-surface font-semibold">{t('landing.refundPage.graceP2Strong')}</strong>{t('landing.refundPage.graceP2AfterStrong')}
          </p>

          <div className="mt-6">
            <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">{t('landing.refundPage.timelineTitle')}</div>
            <div>
              {timeline.map((step, index) => (
                <TimelineStep
                  key={`${step.day}-${step.title}`}
                  day={step.day}
                  title={step.title}
                  description={step.description}
                  isWarning={index >= 4}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Annual Plan Cancellation */}
        <Section title={t('landing.refundPage.sections.annual')}>
          <p>
            {t('landing.refundPage.annualP1BeforeStrong')}<strong className="text-on-surface font-semibold">{t('landing.refundPage.annualP1Strong')}</strong>{t('landing.refundPage.annualP1AfterStrong')}
          </p>
          <p>
            {t('landing.refundPage.annualP2')}
          </p>
          <p>
            {t('landing.refundPage.annualP3')}
          </p>
        </Section>

        {/* Free Tier */}
        <Section title={t('landing.refundPage.sections.freeTier')}>
          <p>
            {t('landing.refundPage.freeP1BeforeStrong')}<strong className="text-on-surface font-semibold">{t('landing.refundPage.freeP1Strong')}</strong>{t('landing.refundPage.freeP1AfterStrong')}
          </p>
          <p>
            {t('landing.refundPage.freeP2')}
          </p>
        </Section>

        {/* Contact */}
        <Section title={t('landing.refundPage.sections.support')}>
          <p>
            {t('landing.refundPage.supportIntro')}
          </p>
          <div className="bg-surface-container-low border border-outline-variant p-5 space-y-2 mt-2">
            <div className="font-body text-sm">
              <span className="text-on-surface-variant">{t('landing.legal.emailLabel')}</span>
              <a href="mailto:verify@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">{t('landing.footerMain.email')}</a>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              {t('landing.legal.addressLabel')}{t('landing.footerMain.address')}
            </div>

          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
