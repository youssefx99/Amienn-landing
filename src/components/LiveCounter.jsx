import React from 'react';

import { useEffect, useState } from 'react';

export default function LiveCounter() {
  const [value, setValue] = useState(16420.45);
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setValue((current) => Number((current + (Math.random() * 0.62 + 0.08)).toFixed(2)));
    }, 1400);

    const dotsCycle = ['.', '..', '...'];
    let index = 0;
    const dotsInterval = setInterval(() => {
      index = (index + 1) % dotsCycle.length;
      setDots(dotsCycle[index]);
    }, 500);

    return () => {
      clearInterval(valueInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-white border-y border-outline-variant relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern"></div>
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        <p className="text-on-surface-variant font-bold uppercase tracking-[0.2em] mb-4 text-sm">Real-Time Data Protection</p>
        <div className="text-5xl md:text-7xl font-headline font-black text-primary tabular-nums tracking-tighter">
          {value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} GB <span className="text-secondary text-3xl md:text-5xl">and counting{dots}</span>
        </div>
      </div>
      <img
        src="/chart icon.png"
        alt=""
        className="absolute right-4 top-1/2 -translate-y-1/2 -translate-y-40 w-48 h-48 md:right-4 md:w-72 md:h-72 opacity-20 md:opacity-100 pointer-events-none z-20"
      />
    </section>
  );
}
