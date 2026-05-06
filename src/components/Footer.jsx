import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-7xl mx-auto gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl font-headline font-bold text-primary">Aamenn</div>
          <div className="font-['Manrope'] text-sm text-slate-500">&copy; 2026 Aamenn Institutional Cloud. Zero-Knowledge Encryption Standard.</div>
          <div className="font-['Manrope'] text-xs text-slate-400 mt-1">177 Al Haram Street, Police Tower, Office No. 1, First Floor</div>

        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/about">About Us</a>
            <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/privacy">Privacy Policy</a>
            <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/refund">Refund &amp; Cancellation</a>
            <a className="text-slate-500 hover:text-red-800 underline font-['Manrope'] text-sm" href="/terms">Terms of Service</a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/company/aamenn" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/aamenn.cloud/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/aamenn.cloud" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@aamenn.cloud" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.84.01 5.68-.02 8.51-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.36-4.08-1.1-2.03-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.69 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.25.71-.24 1.5-.04 2.22.32.96 1.04 1.76 1.96 2.15 1.1.46 2.42.35 3.4-.41.72-.53 1.16-1.38 1.29-2.28.08-.55.09-1.11.07-1.66-.02-3.51-.01-7.02-.01-10.53 0-.05 0-.09-.01-.14z"/>
              </svg>
            </a>
            <a href="https://x.com/aamenncloud" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
