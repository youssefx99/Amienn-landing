import React from 'react';

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15.5C6.93281 15.05 0.5625 11.525 0.5625 5.1875C0.5625 4.20368 0.87205 3.24479 1.4473 2.44667C2.02255 1.64855 2.83434 1.05166 3.76768 0.740547C4.70102 0.429435 5.70859 0.419873 6.64766 0.713218C7.58673 1.00656 8.40971 1.58794 9 2.375C9.59029 1.58794 10.4133 1.00656 11.3523 0.713218C12.2914 0.419873 13.299 0.429435 14.2323 0.740547C15.1657 1.05166 15.9774 1.64855 16.5527 2.44667C17.128 3.24479 17.4375 4.20368 17.4375 5.1875C17.4375 11.525 11.0672 15.05 9 15.5Z"
        fill="#DC2626"
      />
    </svg>
  );
}

export default function EncryptedPhotos() {
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
                className="h-full w-full object-cover transition-all duration-500"
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
                  encrypted
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
