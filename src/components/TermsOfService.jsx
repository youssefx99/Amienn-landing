import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ number, title, children }) => (
  <div className="mb-12">
    <h2 className="font-headline text-xl font-bold text-primary mb-4">
      {number}. {title}
    </h2>
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

const WarningBox = ({ children }) => (
  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-3">
    <div className="font-body text-sm text-amber-900 leading-relaxed space-y-1">
      {children}
    </div>
  </div>
);

const InfoBox = ({ children }) => (
  <div className="bg-primary/5 border border-primary/20 p-4 my-3">
    <div className="font-body text-sm text-on-surface leading-relaxed space-y-1">
      {children}
    </div>
  </div>
);

export default function TermsOfService() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <div className="bg-primary pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-label uppercase tracking-widest px-4 py-1.5 mb-6">
            Legal
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 font-body text-sm">Last updated: April 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        {/* Introduction */}
        <div className="mb-12 text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
          <p>
            Aamenn ("we", "us", "our") is a privacy-first, zero-knowledge encrypted cloud storage platform
            operated under Egyptian law. By creating an account or using the service, you agree to these Terms.
            If you do not agree, do not use the service.
          </p>
        </div>

        <Section number="1" title="Eligibility">
          <BulletList items={[
            'You must be 13 or older to use Aamenn.',
            'Available to individuals and businesses across the MENA region and worldwide.',
            'You must provide accurate registration information.',
          ]} />
        </Section>

        <Section number="2" title="Account Responsibility">
          <p>You are fully responsible for your account and everything done under it.</p>
          <BulletList items={[
            'Keep your password and recovery key secure — we cannot recover them for you.',
            'If you lose your recovery key, your encrypted files are permanently inaccessible — this is by design.',
            'Notify us immediately at info@aamenn.com if you suspect unauthorized access.',
          ]} />
          <WarningBox>
            <p><strong>Important:</strong> Aamenn uses zero-knowledge encryption. If you lose your password and recovery key,
            your encrypted files cannot be recovered — by you or by Aamenn. There are no backdoors.</p>
          </WarningBox>
        </Section>

        <Section number="3" title="Acceptable Use">
          <p>You may not use Aamenn to store or share:</p>
          <BulletList items={[
            'Illegal content under Egyptian or international law.',
            'Content that violates third-party intellectual property rights.',
            'Malware, exploits, or harmful code.',
            'Content that endangers minors.',
          ]} />
          <InfoBox>
            <p><strong>How we enforce this:</strong> Because we cannot read your files, enforcement relies on metadata, user reports, and external legal requests — not content inspection.</p>
          </InfoBox>
          <p>Violation results in immediate account termination with no refund and no grace period.</p>
        </Section>

        <Section number="4" title="Zero-Knowledge Architecture">
          <InfoBox>
            <p><strong>This is our core promise:</strong> Aamenn is technically incapable of reading your files.</p>
          </InfoBox>
          <BulletList items={[
            'All files are encrypted on your device before upload.',
            'Aamenn servers cannot read, access, or view your files.',
            'We have no ability to recover your files if you lose your encryption key.',
            'In the event of a government or legal data request, we can only provide metadata (account email, IP logs, storage usage) — never file contents, because we technically cannot access them.',
          ]} />
        </Section>

        <Section number="5" title="Subscription & Payment">
          <p>Aamenn offers the following plans (prices in EGP, subject to applicable Egyptian taxes):</p>
          <div className="bg-surface-container-low border border-outline-variant overflow-hidden my-3">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container">
                  <th className="text-left px-4 py-2 text-on-surface font-headline font-bold text-xs uppercase tracking-widest">Storage</th>
                  <th className="text-left px-4 py-2 text-on-surface font-headline font-bold text-xs uppercase tracking-widest">Monthly</th>
                  <th className="text-left px-4 py-2 text-on-surface font-headline font-bold text-xs uppercase tracking-widest">Yearly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['4 GB',   'Free',       'Free'],
                  ['8 GB',   'EGP 7',      'EGP 70'],
                  ['16 GB',  'EGP 13',     'EGP 130'],
                  ['32 GB',  'EGP 25',     'EGP 250'],
                  ['64 GB',  'EGP 49',     'EGP 490'],
                  ['128 GB', 'EGP 99',     'EGP 990'],
                  ['256 GB', 'EGP 195',    'EGP 1,950'],
                  ['512 GB', 'EGP 390',    'EGP 3,900'],
                  ['1 TB',   'EGP 600',    'EGP 6,000'],
                  ['2 TB',   'EGP 900',    'EGP 9,000'],
                ].map(([storage, monthly, yearly]) => (
                  <tr key={storage} className="border-b border-outline-variant last:border-0">
                    <td className="px-4 py-2 text-on-surface font-semibold">{storage}</td>
                    <td className="px-4 py-2 text-on-surface-variant">{monthly}</td>
                    <td className="px-4 py-2 text-on-surface-variant">{yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BulletList items={[
            'Billing is monthly or annual, auto-renewing.',
            'Annual plans are billed upfront for the full year.',
            'Annual plan users retain full access until the end of their paid year upon cancellation.',
          ]} />
        </Section>

        <Section number="6" title="Refund & Cancellation Policy">
          <BulletList items={[
            'First purchase only: 7-day refund window for new subscribers who have never held a paid plan before.',
            'All other payments: final, no exceptions.',
            'Annual cancellations: no pro-rata refund — access continues until end of paid year.',
            'To cancel: account settings → subscription → cancel.',
          ]} />
          <p>
            See the full{' '}
            <a href="/refund" className="text-primary underline hover:text-secondary transition-colors">
              Refund &amp; Cancellation Policy
            </a>{' '}
            for the complete grace period timeline and deletion schedule.
          </p>
        </Section>

        <Section number="7" title="Account Expiry & Data Deletion">
          <p>When a paid subscription expires without renewal:</p>
          <BulletList items={[
            'Uploads are blocked immediately.',
            '15-day grace period begins — encrypted files remain readable and downloadable.',
            'Warning emails sent on: Day 0 / Day 5 / Day 10 / Day 13 / Day 15 morning / Day 15 night.',
            'After Day 15: all encrypted files are permanently and irreversibly deleted.',
          ]} />
          <WarningBox>
            <p>We cannot recover deleted files. Zero-knowledge encryption means deletion is final — for everyone, including Aamenn.</p>
          </WarningBox>
        </Section>

        <Section number="8" title="Service Availability">
          <BulletList items={[
            'We aim for high availability but do not guarantee uninterrupted service.',
            'Planned maintenance will be communicated in advance.',
            'We are not liable for data loss caused by user error, lost recovery keys, or force majeure events.',
          ]} />
        </Section>

        <Section number="9" title="Liability Limitations">
          <BulletList items={[
            "Aamenn's liability is limited to the amount you paid in the last 3 months.",
            'We are not liable for indirect, incidental, or consequential damages.',
            'We are not responsible for data you cannot access due to lost recovery keys — this is inherent to zero-knowledge design.',
          ]} />
        </Section>

        <Section number="10" title="Business Accounts">
          <BulletList items={[
            'Businesses using Aamenn accept these Terms on behalf of their organization.',
            'The account owner is legally responsible for all users under that account.',
            'We offer no SLA guarantees at this stage — enterprise SLAs are roadmap items.',
          ]} />
        </Section>

        <Section number="11" title="Termination by Aamenn">
          <p>We may suspend or terminate your account immediately if you:</p>
          <BulletList items={[
            'Violate these Terms.',
            'Use Aamenn for illegal activity.',
            'Attempt to reverse-engineer or attack our infrastructure.',
          ]} />
          <p>Terminated accounts for violations receive no refund and no grace period.</p>
        </Section>

        <Section number="12" title="Governing Law & Disputes">
          <BulletList items={[
            'These Terms are governed by Egyptian law.',
            'Disputes will be resolved in Egyptian courts.',
            'We will always attempt to resolve disputes informally first — contact info@aamenn.com.',
          ]} />
        </Section>

        <Section number="13" title="Changes to Terms">
          <BulletList items={[
            'We may update these Terms at any time.',
            'Users will be notified by email 30 days before major changes take effect.',
            'Continued use after that date constitutes acceptance of the updated Terms.',
          ]} />
        </Section>

        <Section number="14" title="Contact">
          <div className="bg-surface-container-low border border-outline-variant p-5 space-y-2">
            <div className="font-body text-sm">
              <span className="text-on-surface-variant">General: </span>
              <a href="mailto:info@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">info@aamenn.com</a>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Address: 177 Al Haram Street, Police Tower, Office No. 1, First Floor
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
