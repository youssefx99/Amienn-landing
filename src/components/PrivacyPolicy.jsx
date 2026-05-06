import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-headline text-xl font-bold text-primary mb-3">{title}</h2>
    <div className="text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="list-disc list-inside space-y-1.5 text-on-surface-variant font-body text-sm">
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

export default function PrivacyPolicy() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-label uppercase tracking-widest px-4 py-1.5 mb-6">
            Legal
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/70 font-body text-sm">Last updated: April 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        <Section title="Overview">
          <p>
            AAMENN ("we", "our", or "us") operates the Aamenn encrypted cloud platform accessible at{' '}
            <a href="https://web.aamenn.com" className="text-primary underline hover:text-secondary transition-colors">web.aamenn.com</a>{' '}
            and the Aamenn Image Saver browser extension. This Privacy Policy explains what data we collect, how we use it, and the rights you have over your data.
          </p>
          <p>
            Aamenn is built on a <strong className="text-on-surface font-semibold">zero-knowledge encryption</strong> architecture.
            Your files and master key are encrypted on your device before they ever reach our servers.
            We are technically incapable of reading your files, photos, or encryption keys.
          </p>
        </Section>

        <Section title="Data We Collect">
          <p>We collect the minimum data necessary to provide the service:</p>
          <BulletList items={[
            'Email address — used for account identification and security notifications.',
            'Encrypted master key — a version of your master key that can only be decrypted with your password. We never see the plaintext key.',
            'Encrypted files — your files are encrypted client-side before upload. We store only the ciphertext.',
            'Encrypted file metadata — filenames and thumbnails are encrypted before storage.',
            'Account activity metadata — timestamps of uploads, file counts, and storage usage for billing and quota purposes.',
            'IP address — logged transiently for security and abuse prevention. Not linked to your files.',
          ]} />
        </Section>

        <Section title="Data We Do NOT Collect">
          <BulletList items={[
            'Your plaintext files, photos, or documents.',
            'Your master encryption key in plaintext.',
            'Your password — we use zero-knowledge key derivation (PBKDF2/Argon2).',
            'Browsing history or activity outside the Aamenn platform.',
            'Any data from the browser extension beyond what you explicitly save to your cloud storage.',
          ]} />
        </Section>

        <Section title="Browser Extension — Aamenn Image Saver">
          <p>
            The Aamenn Image Saver extension collects and uses the following data locally in your browser:
          </p>
          <BulletList items={[
            'Access token — stored in your browser\'s local extension storage to authenticate uploads to your own cloud. Never sent to third parties.',
            'Master key (base64) — stored locally to encrypt images before upload. Never transmitted except as encrypted ciphertext to Aamenn servers.',
            'Images you choose to save — fetched from the source URL you right-click on, encrypted on-device, then uploaded to your cloud.',
          ]} />
          <p>
            The extension does <strong className="text-on-surface font-semibold">not</strong> track your browsing activity, collect analytics, or transmit any data to parties other than Aamenn servers.
          </p>
        </Section>

        <Section title="How We Use Your Data">
          <BulletList items={[
            'To provide the encrypted cloud storage service.',
            'To authenticate your identity and protect your account.',
            'To enforce storage quotas and billing.',
            'To send security-related notifications (e.g. new device login).',
            'To investigate abuse and enforce our Terms of Service.',
          ]} />
          <p>We do <strong className="text-on-surface font-semibold">not</strong> sell, rent, or share your data with third parties for advertising or marketing purposes.</p>
        </Section>

        <Section title="Data Storage & Security">
          <p>
            Encrypted files are stored in our cloud storage. All data in transit is protected by TLS 1.3.
            Your encryption keys are derived from your password using PBKDF2 and never leave your device in plaintext.
          </p>
          <p>
            Even in the event of a server breach, your files remain protected by AES-256-GCM encryption that only you can decrypt.
          </p>
        </Section>


        <Section title="Your Rights">
          <p>You have the right to:</p>
          <BulletList items={[
            'Access — request a copy of the data we hold about your account.',
            'Deletion — delete your account and all associated data at any time from your account settings.',
            'Portability — export your encrypted files at any time.',
            'Correction — update your account information.',
            'Objection — object to processing of your data where applicable under GDPR.',
          ]} />
        </Section>

        <Section title="Cookies">
          <p>
            The Aamenn web application uses a minimal session indicator cookie (<code className="bg-surface-container px-1 py-0.5 rounded text-xs font-mono text-primary">aamenn_logged_in</code>) to
            show the correct navigation state on the landing page. This cookie contains no personal data.
            We do not use tracking or advertising cookies.
          </p>
        </Section>


        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or via a notice on the platform.
            Continued use of the service after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>For privacy-related questions or data requests, contact us at:</p>
          <BulletList items={[
            <>Email: <a href="mailto:info@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">info@aamenn.com</a></>,
            'Address: 177 Al Haram Street, Police Tower, Office No. 1, First Floor',
            <>Phone: <a href="tel:+201094263212" className="text-primary underline hover:text-secondary transition-colors">+20 1094263212</a></>,
          ]} />
        </Section>

      </main>

      <Footer />
    </div>
  );
}
