import React from 'react';
import { useTranslation } from 'react-i18next';

function isLoggedInViaCookie() {
  return document.cookie.split('; ').some(c => c.startsWith('aamenn_logged_in='));
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isLoggedIn = isLoggedInViaCookie();
  const nextLanguage = i18n.language === 'ar' ? 'en' : 'ar';

  const changeLanguage = () => {
    i18n.changeLanguage(nextLanguage);
    document.documentElement.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLanguage;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <img src="/newlogo.png" alt="Aamenn" className="h-12" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary border-b-2 border-primary pb-1 font-label text-sm font-bold" href="/#features">{t('landing.navbar.features')}</a>
          <a className="text-slate-600 font-label text-sm hover:text-red-800 transition-colors duration-200" href="/#technology">{t('landing.navbar.technology')}</a>
          <a className="text-slate-600 font-label text-sm hover:text-red-800 transition-colors duration-200" href="/#security">{t('landing.navbar.security')}</a>
          <a className="text-slate-600 font-label text-sm hover:text-red-800 transition-colors duration-200" href="/#pricing">{t('landing.navbar.pricing')}</a>
          <a className="text-slate-600 font-label text-sm hover:text-red-800 transition-colors duration-200" href="/#enterprise">{t('landing.navbar.enterprise')}</a>
        </div>
        <div className="flex items-center gap-4">
          <button type="button" onClick={changeLanguage} className="text-sm font-bold text-slate-600 hover:text-secondary transition-opacity">
            {t('landing.navbar.language')}
          </button>
          {isLoggedIn ? (
            <a href="https://web.aamenn.com/folders" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-secondary transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
              </svg>
              {t('landing.navbar.myAccount')}
            </a>
          ) : (
            <>
              <a href="https://web.aamenn.com/login" className="text-sm font-bold text-slate-600 hover:text-secondary transition-opacity">{t('landing.navbar.login')}</a>
              <a href="https://web.aamenn.com/register" className="bg-primary text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all border border-primary">{t('landing.navbar.signUp')}</a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
