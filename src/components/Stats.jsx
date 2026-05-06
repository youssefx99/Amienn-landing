import React from 'react';

import { useEffect, useState } from 'react';

export default function Stats() {
  const [trustedUsers, setTrustedUsers] = useState(0);
  const [secureData, setSecureData] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const intervalMs = 30;
    const steps = Math.floor(duration / intervalMs);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setTrustedUsers(Math.round(700 * eased));
      setSecureData(16 * eased);
      setUptime(99.9 * eased);

      if (progress >= 1) {
        clearInterval(interval);
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 pb-0 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-black font-headline mb-2">{trustedUsers}+</div>
            <div className="text-primary-fixed-dim uppercase tracking-widest text-sm font-bold">Trusted Users</div>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0">
            <div className="text-5xl font-black font-headline mb-2">{secureData.toFixed(0)} TB+</div>
            <div className="text-primary-fixed-dim uppercase tracking-widest text-sm font-bold">Secure Data Stored</div>
          </div>
          <div>
            <div className="text-5xl font-black font-headline mb-2">{uptime.toFixed(1)}%</div>
            <div className="text-primary-fixed-dim uppercase tracking-widest text-sm font-bold">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
