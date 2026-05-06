import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-headline font-bold text-primary">Aamenn</div>
          <div className="font-['Manrope'] text-sm text-slate-500">&copy; 2026 Aamenn Institutional Cloud. Zero-Knowledge Encryption Standard.</div>
          <div className="font-['Manrope'] text-xs text-slate-400 mt-1">177 Al Haram Street, Police Tower, Office No. 1, First Floor</div>
          <div className="font-['Manrope'] text-xs text-slate-400">
            <a href="tel:+201094263212" className="hover:text-red-800 transition-colors">+20 1094263212</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/about">About Us</a>
          <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/privacy">Privacy Policy</a>
          <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/refund">Refund &amp; Cancellation</a>
          <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/terms">Terms of Service</a>
          <a href="https://www.linkedin.com/company/aamenn/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
