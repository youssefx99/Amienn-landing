import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div className="mb-14">
    <h2 className="font-headline text-2xl font-bold text-primary mb-4">{title}</h2>
    <div className="text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-surface-container-low border border-outline-variant p-6 flex gap-4">
    <div className="text-2xl mt-0.5 shrink-0">{icon}</div>
    <div>
      <div className="font-headline font-bold text-primary text-base mb-1">{title}</div>
      <div className="font-body text-sm text-on-surface-variant leading-relaxed">{description}</div>
    </div>
  </div>
);

const DifferentiatorRow = ({ title, description }) => (
  <div className="flex gap-4 py-4 border-b border-outline-variant last:border-0">
    <div className="w-1.5 bg-secondary shrink-0 mt-1" />
    <div>
      <span className="font-headline font-bold text-on-surface text-sm">{title} — </span>
      <span className="font-body text-sm text-on-surface-variant">{description}</span>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-label uppercase tracking-widest px-4 py-1.5 mb-6">
            About Us
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Built for Privacy.<br />Built for MENA.
          </h1>
          <p className="text-white/70 font-body text-base max-w-2xl mx-auto">
            Aamenn is a zero-knowledge encrypted cloud — where only you can access your files, always.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        {/* Mission */}
        <Section title="Our Mission">
          <p>
            Provide cloud storage where only the user can access their files — empowering individuals with true data sovereignty
            and uncompromising privacy protection.
          </p>
          <p>
            Aamenn is built specifically for privacy-conscious users, with a strong focus on the Arab and MENA region:
            a native Arabic interface, local payment support, and regional customer service — features mainstream platforms have always overlooked.
          </p>
        </Section>

        {/* Story */}
        <Section title="Our Story">
          <p>
            Aamenn was founded to solve a problem that mainstream cloud platforms ignore: <strong className="text-on-surface font-semibold">your files aren't actually private.</strong>
          </p>
          <p>
            Google, iCloud, and OneDrive scan content, harvest metadata, train AI models on your data, and comply with government surveillance
            requests — all without your meaningful consent. Existing privacy-focused alternatives either fail to deliver on their promises,
            or fail Arab users entirely: no Arabic UI, no local payment methods, no regional relevance.
          </p>
          <p>
            Aamenn was built to fix that. A cloud platform engineered from the ground up around zero-knowledge encryption,
            designed first for the people who needed it most and were served last.
          </p>
        </Section>

        {/* What Makes Us Different */}
        <Section title="What Makes Us Different">
          <div className="mt-2">
            <DifferentiatorRow
              title="Zero-knowledge architecture"
              description="Your encryption keys never leave your device. The server literally cannot read your files — not even our engineers."
            />
            <DifferentiatorRow
              title="No backdoors"
              description="Admin access exists for infrastructure monitoring and statistics only. It cannot decrypt user data under any circumstances."
            />
            <DifferentiatorRow
              title="Military-grade encryption"
              description="AES-256-GCM for all file encryption, PBKDF2 for key derivation — the same standards used by governments and defense organizations."
            />
            <DifferentiatorRow
              title="True E2EE for everything"
              description="Not just certain file types like competitors — every single file, photo, and document is end-to-end encrypted without exception."
            />
            <DifferentiatorRow
              title="Arab-first"
              description="Native Arabic interface, MENA-compatible payment methods, and Arabic customer support. Built for the region, not bolted on."
            />
          </div>
        </Section>

        {/* Values */}
        <Section title="Our Values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <ValueCard
              icon="🔒"
              title="Privacy"
              description="Your data is yours, full stop. No scanning, no monetization, no exceptions — ever."
            />
            <ValueCard
              icon="🔍"
              title="Transparency"
              description="Zero-knowledge means no hidden access — not even by Aamenn itself. The architecture enforces what policy alone cannot."
            />
            <ValueCard
              icon="🤝"
              title="Trust"
              description="Enforced by cryptography, not promises. The master key never leaves your device — trust is built in, not declared."
            />
          </div>
        </Section>

        {/* Location & Contact */}
        <Section title="Location & Contact">
          <div className="bg-surface-container-low border border-outline-variant p-6 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-1">Address</div>
                <div className="font-body text-sm text-on-surface">177 Al Haram Street, Police Tower, Office No. 1, First Floor</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:info@aamenn.com" className="font-body text-sm text-primary underline hover:text-secondary transition-colors">
                  info@aamenn.com
                </a>
              </div>
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
