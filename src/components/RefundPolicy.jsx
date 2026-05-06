import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="font-headline text-xl font-bold text-primary mb-4">{title}</h2>
    <div className="text-on-surface-variant font-body text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const TimelineStep = ({ day, title, description, isWarning }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isWarning ? 'bg-secondary text-white' : 'bg-primary-fixed text-primary'}`}>
        {day}
      </div>
      <div className="w-px flex-1 bg-outline-variant mt-1" />
    </div>
    <div className="pb-6">
      <div className={`font-headline font-bold text-sm mb-1 ${isWarning ? 'text-secondary' : 'text-on-surface'}`}>{title}</div>
      <div className="font-body text-sm text-on-surface-variant">{description}</div>
    </div>
  </div>
);

const NoRefundRow = ({ reason }) => (
  <div className="flex items-start gap-3 py-3 border-b border-outline-variant last:border-0">
    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <span className="font-body text-sm text-on-surface-variant">{reason}</span>
  </div>
);

export default function RefundPolicy() {
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
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-white/70 font-body text-sm">Last updated: April 26, 2026</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-16">

        {/* Summary banner */}
        <div className="bg-primary/5 border border-primary/20 p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-headline font-bold text-primary text-lg">15 days</div>
              <div className="font-body text-xs text-on-surface-variant mt-1">Grace period after expiry</div>
            </div>
            <div>
              <div className="font-headline font-bold text-primary text-lg">7-day</div>
              <div className="font-body text-xs text-on-surface-variant mt-1">First-purchase cooling-off only</div>
            </div>
            <div>
              <div className="font-headline font-bold text-primary text-lg">Full year</div>
              <div className="font-body text-xs text-on-surface-variant mt-1">Access on annual plan cancellation</div>
            </div>
          </div>
        </div>

        {/* Refunds */}
        <Section title="Refunds">
          <div className="bg-surface-container-low border border-outline-variant p-5 mb-3">
            <div className="font-headline font-bold text-on-surface text-sm mb-2">7-Day First-Purchase Cooling-Off</div>
            <p>
              If you are a <strong className="text-on-surface font-semibold">first-time paying customer</strong> and request a refund within
              7 days of your very first payment, we will issue a full refund — no questions asked.
              This applies once, to the first payment only, and never to renewals.
            </p>
          </div>
          <div className="font-headline font-bold text-on-surface text-sm mb-2 mt-4">No Refunds For</div>
          <div className="bg-surface-container-low border border-outline-variant p-4">
            <NoRefundRow reason="Any renewal payment (monthly or annual)" />
            <NoRefundRow reason="Forgot to cancel before the renewal date" />
            <NoRefundRow reason="Did not use the storage during the billing period" />
            <NoRefundRow reason="Partial month unused after monthly cancellation" />
            <NoRefundRow reason="Technical issues — these are resolved via customer support, not refunds" />
          </div>
          <p className="text-xs text-on-surface-variant italic">
            Note: Aamenn complies with applicable Egyptian consumer protection law. If you believe you have a legal claim, contact us at{' '}
            <a href="mailto:info@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">info@aamenn.com</a>.
          </p>
        </Section>

        {/* Grace Period */}
        <Section title="Grace Period — What Happens When Your Subscription Expires">
          <p>
            When a monthly subscription expires without renewal, your account enters a{' '}
            <strong className="text-on-surface font-semibold">15-day grace period</strong>.
            During this period your encrypted files remain fully accessible — you can read and download them at any time.
            New uploads are blocked immediately.
          </p>
          <p>
            After 15 days, if the subscription has not been renewed,{' '}
            <strong className="text-on-surface font-semibold">all encrypted files are permanently and irreversibly deleted</strong>.
            Because Aamenn uses zero-knowledge encryption, deleted files cannot be recovered by anyone — including Aamenn.
          </p>

          <div className="mt-6">
            <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">15-Day Grace Period Timeline</div>
            <div>
              <TimelineStep
                day="0"
                title="Subscription expires — Grace Period begins"
                description="New uploads are blocked. Your encrypted files remain fully readable and downloadable. Notification email sent."
              />
              <TimelineStep
                day="5"
                title="Reminder email"
                description="10 days remaining. Renew now to keep your encrypted files."
              />
              <TimelineStep
                day="10"
                title="Reminder email"
                description="5 days remaining — final stretch. Renew or download your encrypted files."
              />
              <TimelineStep
                day="13"
                title="Urgent reminder"
                description="48 hours remaining. Renew immediately or download your encrypted files."
              />
              <TimelineStep
                day="15"
                title="Morning — Last chance"
                description="Deletion scheduled in 12 hours. This is your last opportunity to renew or download."
                isWarning
              />
              <TimelineStep
                day="15"
                title="Night — Permanent deletion"
                description="All encrypted files are permanently and irreversibly deleted. This action cannot be undone."
                isWarning
              />
            </div>
          </div>
        </Section>

        {/* Annual Plan Cancellation */}
        <Section title="Annual Plan Cancellation">
          <p>
            If you cancel an annual plan, you retain <strong className="text-on-surface font-semibold">full access until the end of your paid year</strong>.
            No pro-rata refund is issued for unused months.
          </p>
          <p>
            Once the paid year ends, the standard 15-day grace period begins — following the same timeline and email sequence described above.
            After 15 days, all encrypted files are permanently deleted.
          </p>
          <p>
            This is intentional: you paid for a year, you get the year. No credits, no complexity — just a clean and fair exit window.
          </p>
        </Section>

        {/* Free Tier */}
        <Section title="Free Tier">
          <p>
            The free tier includes 4 GB of encrypted storage at no charge. If a paid subscription expires and
            your total storage exceeds 4 GB, your account does <strong className="text-on-surface font-semibold">not</strong> downgrade to the free tier —
            all encrypted files are deleted after the 15-day grace period regardless of total size.
          </p>
          <p>
            If your total storage is within the 4 GB free limit at the time of expiry, your account automatically reverts to
            the free tier with no data loss.
          </p>
        </Section>

        {/* Contact */}
        <Section title="Questions & Support">
          <p>
            For billing questions, cancellation requests, or dispute resolution, contact us at:
          </p>
          <div className="bg-surface-container-low border border-outline-variant p-5 space-y-2 mt-2">
            <div className="font-body text-sm">
              <span className="text-on-surface-variant">Email: </span>
              <a href="mailto:info@aamenn.com" className="text-primary underline hover:text-secondary transition-colors">info@aamenn.com</a>
            </div>
            <div className="font-body text-sm text-on-surface-variant">
              Address: 177 Al Haram Street, Police Tower, Office No. 1, First Floor
            </div>
            <div className="font-body text-sm">
              <span className="text-on-surface-variant">Phone: </span>
              <a href="tel:+201094263212" className="text-primary underline hover:text-secondary transition-colors">+20 1094263212</a>
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
