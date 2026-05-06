import React from 'react';

function isLoggedInViaCookie() {
  return document.cookie.split('; ').some(c => c.startsWith('aamenn_logged_in='));
}

export default function Navbar() {
  const isLoggedIn = isLoggedInViaCookie();

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <img src="/newlogo.png" alt="Aamenn" className="h-12" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary border-b-2 border-primary pb-1 font-label text-sm font-bold" href="/#features">Features</a>
          <a className="text-slate-600 font-['Manrope'] text-sm hover:text-red-800 transition-colors duration-200" href="/#technology">Technology</a>
          <a className="text-slate-600 font-['Manrope'] text-sm hover:text-red-800 transition-colors duration-200" href="/#security">Security</a>
          <a className="text-slate-600 font-['Manrope'] text-sm hover:text-red-800 transition-colors duration-200" href="/#pricing">Pricing</a>
          <a className="text-slate-600 font-['Manrope'] text-sm hover:text-red-800 transition-colors duration-200" href="/#enterprise">Enterprise</a>
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <a href="https://web.aamenn.com/folders" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-secondary transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" strokeLinecap="round" />
              </svg>
              My Account
            </a>
          ) : (
            <>
              <a href="https://web.aamenn.com/login" className="text-sm font-bold text-slate-600 hover:text-secondary transition-opacity">Login</a>
              <a href="https://web.aamenn.com/register" className="bg-primary text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-all border border-primary">Sign Up</a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
