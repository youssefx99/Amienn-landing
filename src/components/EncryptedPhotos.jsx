import React from 'react';
import { useTranslation } from 'react-i18next';

const images = [
  { src: './image1.jpg', rotate: '-rotate-6 hover:-rotate-3' },
  { src: './image2.jpg', rotate: 'rotate-4 hover:rotate-1' },
  { src: './image3.jpg', rotate: '-rotate-4 hover:-rotate-1' },
  { src: './image4.jpg', rotate: 'rotate-6 hover:rotate-3' },
];

function MatrixOverlay() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const cells = Array.from({ length: 80 }, (_, i) => ({
    char: chars[Math.floor(Math.random() * chars.length)],
    delay: `${(Math.random() * 3).toFixed(1)}s`,
    x: `${Math.floor(Math.random() * 100)}%`,
    y: `${Math.floor(Math.random() * 100)}%`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {cells.map((cell, i) => (
        <span
          key={i}
          className="matrix-char absolute text-xs font-mono text-white/40"
          style={{
            left: cell.x,
            top: cell.y,
            animationDelay: cell.delay,
          }}
        >
          {cell.char}
        </span>
      ))}
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 7V5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5V7M4.5 7H13.5M4.5 7C3.67157 7 3 7.67157 3 8.5V13.5C3 14.3284 3.67157 15 4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V8.5C15 7.67157 14.3284 7 13.5 7M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z"
        stroke="#DC2626"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EncryptedPhotos() {
  const { t } = useTranslation();

  return (

    <section className="py-20 bg-transparent overflow-hidden">      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl border-4 border-white shadow-lg transition-all duration-300 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 shrink-0 ${img.rotate}`}
            >
              {/* Normal image */}
              <img
                src={img.src}
                alt=""
                className="h-full w-full object-cover transition-all duration-500 blur-[3px] group-hover:blur-0"
              />

              {/* Encrypted overlay on hover */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                {/* Red gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#DC2626]/60 to-[#991B1B]/80"></div>

                {/* Animated matrix characters */}
                <MatrixOverlay />

                {/* Encrypted badge */}
                <div className="absolute top-1/2 left-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black shadow-md">
                  <LockIcon />
                  {t('landing.encryptedPhotos.badge')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
