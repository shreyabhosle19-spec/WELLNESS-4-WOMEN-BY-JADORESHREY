import React from 'react';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface Props {
  onNavigate: (route: string) => void;
}

export const PrivacyPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      <Breadcrumbs
        items={[{ label: 'Privacy Policy' }]}
        onNavigate={onNavigate}
      />

      <header className="border-b border-[#E8E1D5] pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
          Data Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2926]">
          Privacy Policy
        </h1>
        <p className="text-base text-[#6A6560] max-w-2xl leading-relaxed">
          Last updated: March 2026. JADORESHREY WELLNESS is committed to protecting your privacy in full compliance with the Digital Personal Data Protection Act (DPDPA 2023) of India and international standards.
        </p>
      </header>

      <div className="space-y-8 text-sm text-[#423C36] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            1. Information We Collect
          </h2>
          <p>
            We collect minimal, necessary personal information strictly when you voluntarily provide it to us:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs text-[#554E48]">
            <li><strong>Email Address:</strong> When you subscribe to our Sunday Journal newsletter or submit a contact inquiry.</li>
            <li><strong>Correspondence Records:</strong> When you send letters to the editor or submit medical correction feedback.</li>
            <li><strong>Local Browser Data:</strong> When you use the interactive 30-Day Wellness Challenge tracker, your completion status is saved locally in your own browser's <code className="bg-[#FAF6EF] px-1 py-0.5 rounded text-[#8C533C]">localStorage</code> and never transmitted to our servers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            2. How We Use Your Information
          </h2>
          <p>
            We use your email address exclusively to dispatch our curated weekly editorial newsletters and respond to direct inquiries. We do not sell, rent, monetize, or broker your personal data to commercial pharmaceutical, beauty, or advertising entities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            3. Cookies & Analytics
          </h2>
          <p>
            We use essential, lightweight cookies strictly to ensure website navigation integrity, font loading, and anonymous aggregated traffic metrics. We do not employ third-party surveillance trackers or invasive cross-site ad pixels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            4. Your Rights Under DPDPA 2023
          </h2>
          <p>
            You have the right to request access to the personal data we hold about you, request rectification of inaccurate data, or request complete erasure of your email from our subscriber database at any time. Every newsletter includes a single-click unsubscribe link.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            5. Contact the Data Protection Officer
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact our Data Governance desk at <span className="text-[#8C533C] font-semibold">privacy@jshreywellness.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
