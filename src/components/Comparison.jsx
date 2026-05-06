import React from 'react';

function CheckIcon() {
  return <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>;
}

function CancelIcon() {
  return <span className="material-symbols-outlined text-on-surface-variant/40">cancel</span>;
}

export default function Comparison() {
  return (
    <section id="technology" className="py-24 bg-surface-bright">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold text-primary mb-12 text-center">How we compare</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="py-6 px-4 font-headline text-xl">Feature</th>
                <th className="py-6 px-4 font-headline text-xl text-primary font-black">Aamenn</th>
                <th className="py-6 px-4 font-headline text-xl text-on-surface-variant opacity-60">Google Drive</th>
                <th className="py-6 px-4 font-headline text-xl text-on-surface-variant opacity-60">Proton Drive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              <tr>
                <td className="py-6 px-4 font-bold">End-to-End Encryption</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
                <td className="py-6 px-4"><CheckIcon /></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold">Zero-Knowledge (No Metadata)</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold">Native Arabic UI</td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CheckIcon /></td>
                <td className="py-6 px-4"><CancelIcon /></td>
              </tr>
              <tr>
                <td className="py-6 px-4 font-bold">Local GCC Payments</td>
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
