import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div className="mb-14">
    <h2 className="font-headline text-2xl font-bold text-primary mb-4">{title}</h2>
    <div className="text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-surface-container-low border border-outline-variant p-6 flex gap-4">
    <div className="text-2xl mt-0.5 shrink-0">{icon}</div>
    <div>
      <div className="font-headline font-bold text-primary text-base mb-1">{title}</div>
      <div className="font-body text-sm text-on-surface-variant leading-relaxed">{description}</div>
    </div>
  </div>
);

const DifferentiatorRow = ({ title, description }) => (
  <div className="flex gap-4 py-4 border-b border-outline-variant last:border-0">
    <div className="w-1.5 bg-secondary shrink-0 mt-1" />
    <div>
      <span className="font-headline font-bold text-on-surface text-sm">{title} — </span>
      <span className="font-body text-sm text-on-surface-variant">{description}</span>
    </div>
  </div>
);

export default function AboutUs() {
  const { t } = useTranslation();
  const differentItems = t('landing.aboutPage.differentItems', { returnObjects: true });

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-label uppercase tracking-widest px-4 py-1.5 mb-6">
            {t('landing.aboutPage.badge')}
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('landing.aboutPage.titleLine1')}<br />{t('landing.aboutPage.titleLine2')}
          </h1>
          <p className="text-white/70 font-body text-base max-w-2xl mx-auto">
            {t('landing.aboutPage.subtitle')}
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        {/* Mission */}
        <Section title={t('landing.aboutPage.missionTitle')}>
          <p>
            {t('landing.aboutPage.missionParagraph1')}
          </p>
          <p>
            {t('landing.aboutPage.missionParagraph2')}
          </p>
        </Section>

        {/* Story */}
        <Section title={t('landing.aboutPage.storyTitle')}>
          <p>
            {t('landing.aboutPage.storyParagraph1Prefix')}<strong className="text-on-surface font-semibold">{t('landing.aboutPage.storyParagraph1Strong')}</strong>
          </p>
          <p>
            {t('landing.aboutPage.storyParagraph2')}
          </p>
          <p>
            {t('landing.aboutPage.storyParagraph3')}
          </p>
        </Section>

        {/* What Makes Us Different */}
        <Section title={t('landing.aboutPage.differentTitle')}>
          <div className="mt-2">
            {differentItems.map((item) => (
              <DifferentiatorRow
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Section>

        {/* Values */}
        <Section title={t('landing.aboutPage.valuesTitle')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <ValueCard
              icon="🔒"
              title={t('landing.aboutPage.values.privacy.title')}
              description={t('landing.aboutPage.values.privacy.description')}
            />
            <ValueCard
              icon="🔍"
              title={t('landing.aboutPage.values.transparency.title')}
              description={t('landing.aboutPage.values.transparency.description')}
            />
            <ValueCard
              icon="🤝"
              title={t('landing.aboutPage.values.trust.title')}
              description={t('landing.aboutPage.values.trust.description')}
            />
          </div>
        </Section>

        {/* Location & Contact */}
        <Section title={t('landing.aboutPage.contactTitle')}>
          <div className="bg-surface-container-low border border-outline-variant p-6 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-1">{t('landing.aboutPage.addressLabel')}</div>
                <div className="font-body text-sm text-on-surface">{t('landing.footerMain.address')}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-1">{t('landing.aboutPage.emailLabel')}</div>
                <a href="mailto:verify@aamenn.com" className="font-body text-sm text-primary underline hover:text-secondary transition-colors">
                  {t('landing.footerMain.email')}
                </a>
              </div>
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
