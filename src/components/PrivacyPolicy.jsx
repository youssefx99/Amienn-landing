import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-headline text-xl font-bold text-primary mb-3">{title}</h2>
    <div className="text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="list-disc list-inside space-y-1.5 text-on-surface-variant font-body text-sm">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const collectItems = t('landing.privacyPage.collectItems', { returnObjects: true });
  const notCollectItems = t('landing.privacyPage.notCollectItems', { returnObjects: true });
  const extensionItems = t('landing.privacyPage.extensionItems', { returnObjects: true });
  const useItems = t('landing.privacyPage.useItems', { returnObjects: true });
  const rightsItems = t('landing.privacyPage.rightsItems', { returnObjects: true });

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-label uppercase tracking-widest px-4 py-1.5 mb-6">
            {t('landing.legal.badge')}
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">{t('landing.privacyPage.title')}</h1>
          <p className="text-white/70 font-body text-sm">{t('landing.legal.lastUpdated')}</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        <Section title={t('landing.privacyPage.sections.overview')}>
          <p>
            {t('landing.privacyPage.overview.p1BeforeLink')}
            <a href="https://web.aamenn.com" className="text-primary underline hover:text-secondary transition-colors">web.aamenn.com</a>{' '}
            {t('landing.privacyPage.overview.p1AfterLink')}
          </p>
          <p>
            {t('landing.privacyPage.overview.p2BeforeStrong')}<strong className="text-on-surface font-semibold">{t('landing.privacyPage.overview.p2Strong')}</strong>{t('landing.privacyPage.overview.p2AfterStrong')}
          </p>
        </Section>

        <Section title={t('landing.privacyPage.sections.collect')}>
          <p>{t('landing.privacyPage.collectIntro')}</p>
          <BulletList items={collectItems} />
        </Section>

        <Section title={t('landing.privacyPage.sections.notCollect')}>
          <BulletList items={notCollectItems} />
        </Section>

        <Section title={t('landing.privacyPage.sections.extension')}>
          <p>
            {t('landing.privacyPage.extensionIntro')}
          </p>
          <BulletList items={extensionItems} />
          <p>
            {t('landing.privacyPage.extensionFooterBeforeStrong')}<strong className="text-on-surface font-semibold">{t('landing.privacyPage.extensionFooterStrong')}</strong>{t('landing.privacyPage.extensionFooterAfterStrong')}
          </p>
        </Section>

        <Section title={t('landing.privacyPage.sections.use')}>
          <BulletList items={useItems} />
          <p>{t('landing.privacyPage.useFooterBeforeStrong')}<strong className="text-on-surface font-semibold">{t('landing.privacyPage.useFooterStrong')}</strong>{t('landing.privacyPage.useFooterAfterStrong')}</p>
        </Section>

        <Section title={t('landing.privacyPage.sections.storage')}>
          <p>
            {t('landing.privacyPage.storageP1')}
          </p>
          <p>
            {t('landing.privacyPage.storageP2')}
          </p>
        </Section>


        <Section title={t('landing.privacyPage.sections.rights')}>
          <p>{t('landing.privacyPage.rightsIntro')}</p>
          <BulletList items={rightsItems} />
        </Section>

        <Section title={t('landing.privacyPage.sections.cookies')}>
          <p>
            {t('landing.privacyPage.cookiesBeforeCode')}<code className="bg-surface-container px-1 py-0.5 rounded text-xs font-mono text-primary">aamenn_logged_in</code>{t('landing.privacyPage.cookiesAfterCode')}
          </p>
        </Section>


        <Section title={t('landing.privacyPage.sections.changes')}>
          <p>
            {t('landing.privacyPage.changesText')}
          </p>
        </Section>

        <Section title={t('landing.privacyPage.sections.contact')}>
          <p>{t('landing.privacyPage.contactIntro')}</p>
          <BulletList items={[
            <>{t('landing.legal.emailLabel')}<a href="mailto:verify@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">{t('landing.footerMain.email')}</a></>,
            `${t('landing.legal.addressLabel')}${t('landing.footerMain.address')}`,
          ]} />
        </Section>

      </main>

      <Footer />
    </div>
  );
}
