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
          <a
            href="https://github.com/aamenn-org/aamenn-frontend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aamenn frontend on GitHub"
            title="Frontend on GitHub"
            className="text-slate-600 hover:text-secondary transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://github.com/aamenn-org/aamenn-backend"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aamenn backend on GitHub"
            title="Backend on GitHub"
            className="text-slate-600 hover:text-secondary transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </a>
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
