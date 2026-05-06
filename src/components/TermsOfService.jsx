import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ number, title, children }) => (
  <div className="mb-12">
    <h2 className="font-headline text-xl font-bold text-primary mb-4">
      {number}. {title}
    </h2>
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

const WarningBox = ({ children }) => (
  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-3">
    <div className="font-body text-sm text-amber-900 leading-relaxed space-y-1">
      {children}
    </div>
  </div>
);

const InfoBox = ({ children }) => (
  <div className="bg-primary/5 border border-primary/20 p-4 my-3">
    <div className="font-body text-sm text-on-surface leading-relaxed space-y-1">
      {children}
    </div>
  </div>
);

export default function TermsOfService() {
  const { t } = useTranslation();
  const eligibilityItems = t('landing.termsPage.eligibilityItems', { returnObjects: true });
  const accountItems = t('landing.termsPage.accountItems', { returnObjects: true });
  const acceptableItems = t('landing.termsPage.acceptableItems', { returnObjects: true });
  const architectureItems = t('landing.termsPage.architectureItems', { returnObjects: true });
  const subscriptionItems = t('landing.termsPage.subscriptionItems', { returnObjects: true });
  const refundItems = t('landing.termsPage.refundItems', { returnObjects: true });
  const expiryItems = t('landing.termsPage.expiryItems', { returnObjects: true });
  const availabilityItems = t('landing.termsPage.availabilityItems', { returnObjects: true });
  const liabilityItems = t('landing.termsPage.liabilityItems', { returnObjects: true });
  const businessItems = t('landing.termsPage.businessItems', { returnObjects: true });
  const terminationItems = t('landing.termsPage.terminationItems', { returnObjects: true });
  const lawItems = t('landing.termsPage.lawItems', { returnObjects: true });
  const changesItems = t('landing.termsPage.changesItems', { returnObjects: true });

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
            {t('landing.termsPage.title')}
          </h1>
          <p className="text-white/70 font-body text-sm">{t('landing.legal.lastUpdated')}</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        {/* Introduction */}
        <div className="mb-12 text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
          <p>
            {t('landing.termsPage.intro')}
          </p>
        </div>

        <Section number="1" title={t('landing.termsPage.sections.eligibility')}>
          <BulletList items={eligibilityItems} />
        </Section>

        <Section number="2" title={t('landing.termsPage.sections.account')}>
          <p>{t('landing.termsPage.accountIntro')}</p>
          <BulletList items={accountItems} />
          <WarningBox>
            <p><strong>{t('landing.termsPage.importantLabel')}</strong>{t('landing.termsPage.accountWarning')}</p>
          </WarningBox>
        </Section>

        <Section number="3" title={t('landing.termsPage.sections.acceptableUse')}>
          <p>{t('landing.termsPage.acceptableIntro')}</p>
          <BulletList items={acceptableItems} />
          <InfoBox>
            <p><strong>{t('landing.termsPage.enforceLabel')}</strong>{t('landing.termsPage.enforceText')}</p>
          </InfoBox>
          <p>{t('landing.termsPage.acceptableFooter')}</p>
        </Section>

        <Section number="4" title={t('landing.termsPage.sections.architecture')}>
          <InfoBox>
            <p><strong>{t('landing.termsPage.corePromiseLabel')}</strong>{t('landing.termsPage.corePromiseText')}</p>
          </InfoBox>
          <BulletList items={architectureItems} />
        </Section>

        <Section number="5" title={t('landing.termsPage.sections.subscription')}>
          <p>{t('landing.termsPage.subscriptionIntro')}</p>
          <div className="bg-surface-container-low border border-outline-variant overflow-hidden my-3">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container">
                  <th className="text-left px-4 py-2 text-on-surface font-headline font-bold text-xs uppercase tracking-widest">{t('landing.termsPage.table.storage')}</th>
                  <th className="text-left px-4 py-2 text-on-surface font-headline font-bold text-xs uppercase tracking-widest">{t('landing.termsPage.table.monthly')}</th>
                  <th className="text-left px-4 py-2 text-on-surface font-headline font-bold text-xs uppercase tracking-widest">{t('landing.termsPage.table.yearly')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['4 GB',   t('landing.termsPage.table.free'),       t('landing.termsPage.table.free')],
                  ['8 GB',   'EGP 7',      'EGP 70'],
                  ['16 GB',  'EGP 13',     'EGP 130'],
                  ['32 GB',  'EGP 25',     'EGP 250'],
                  ['64 GB',  'EGP 49',     'EGP 490'],
                  ['128 GB', 'EGP 99',     'EGP 990'],
                  ['256 GB', 'EGP 195',    'EGP 1,950'],
                  ['512 GB', 'EGP 390',    'EGP 3,900'],
                  ['1 TB',   'EGP 600',    'EGP 6,000'],
                  ['2 TB',   'EGP 900',    'EGP 9,000'],
                ].map(([storage, monthly, yearly]) => (
                  <tr key={storage} className="border-b border-outline-variant last:border-0">
                    <td className="px-4 py-2 text-on-surface font-semibold">{storage}</td>
                    <td className="px-4 py-2 text-on-surface-variant">{monthly}</td>
                    <td className="px-4 py-2 text-on-surface-variant">{yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BulletList items={subscriptionItems} />
        </Section>

        <Section number="6" title={t('landing.termsPage.sections.refund')}>
          <BulletList items={refundItems} />
          <p>
            {t('landing.termsPage.refundLinkBefore')}
            <a href="/refund" className="text-primary underline hover:text-secondary transition-colors">
              {t('landing.termsPage.refundLinkText')}
            </a>{' '}
            {t('landing.termsPage.refundLinkAfter')}
          </p>
        </Section>

        <Section number="7" title={t('landing.termsPage.sections.expiry')}>
          <p>{t('landing.termsPage.expiryIntro')}</p>
          <BulletList items={expiryItems} />
          <WarningBox>
            <p>{t('landing.termsPage.expiryWarning')}</p>
          </WarningBox>
        </Section>

        <Section number="8" title={t('landing.termsPage.sections.availability')}>
          <BulletList items={availabilityItems} />
        </Section>

        <Section number="9" title={t('landing.termsPage.sections.liability')}>
          <BulletList items={liabilityItems} />
        </Section>

        <Section number="10" title={t('landing.termsPage.sections.business')}>
          <BulletList items={businessItems} />
        </Section>

        <Section number="11" title={t('landing.termsPage.sections.termination')}>
          <p>{t('landing.termsPage.terminationIntro')}</p>
          <BulletList items={terminationItems} />
          <p>{t('landing.termsPage.terminationFooter')}</p>
        </Section>

        <Section number="12" title={t('landing.termsPage.sections.law')}>
          <BulletList items={lawItems} />
        </Section>

        <Section number="13" title={t('landing.termsPage.sections.changes')}>
          <BulletList items={changesItems} />
        </Section>

        <Section number="14" title={t('landing.termsPage.sections.contact')}>
          <div className="bg-surface-container-low border border-outline-variant p-5 space-y-2">
            <div className="font-body text-sm">
              <span className="text-on-surface-variant">{t('landing.legal.generalLabel')}</span>
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
