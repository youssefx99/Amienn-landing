import React from 'react';
import { useTranslation } from 'react-i18next';

function CheckIcon() {
  return <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>;
}

function CancelIcon() {
  return <span className="material-symbols-outlined text-on-surface-variant/40">cancel</span>;
}

export default function Comparison() {
  const { t } = useTranslation();

  return (
    <section id="technology" className="py-24 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold text-primary mb-12 text-center">{t('landing.comparisonTable.title')}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="py-6 px-4 font-headline text-xl">{t('landing.comparisonTable.feature')}</th>
                <th className="py-6 px-4 font-headline text-xl text-primary font-black">{t('landing.comparisonTable.aamenn')}</th>
                <th className="py-6 px-4 font-headline text-xl text-on-surface-variant opacity-60">{t('landing.comparisonTable.googleDrive')}</th>
                <th className="py-6 px-4 font-headline text-xl text-on-surface-variant opacity-60">{t('landing.comparisonTable.protonDrive')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr>
                <td className="py-6 px-4 font-bold">{t('landing.comparisonTable.rows.encryption')}</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
                <td className="py-6 px-4"><CheckIcon /></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold">{t('landing.comparisonTable.rows.metadata')}</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold">{t('landing.comparisonTable.rows.arabic')}</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold">{t('landing.comparisonTable.rows.payments')}</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
