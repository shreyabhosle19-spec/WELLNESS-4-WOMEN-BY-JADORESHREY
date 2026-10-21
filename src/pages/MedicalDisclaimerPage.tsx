import React from 'react';
import { ShieldAlert, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface Props {
  onNavigate: (route: string) => void;
}

export const MedicalDisclaimerPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      <Breadcrumbs
        items={[{ label: 'Medical & Scientific Disclaimer' }]}
        onNavigate={onNavigate}
      />

      <header className="border-b border-[#E8E1D5] pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
          Legal & Clinical Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2926]">
          Medical & Health Information Disclaimer
        </h1>
        <p className="text-base text-[#6A6560] max-w-2xl leading-relaxed">
          Last updated: March 2026. Please read this statement carefully before applying any dietary, dermatological, or exercise guidance from JADORESHREY WELLNESS.
        </p>
      </header>

      {/* Main Notice Box */}
      <div className="p-6 sm:p-8 bg-[#FAF6EF] rounded-2xl border border-[#E8E1D5] space-y-4 text-sm text-[#38332E] leading-relaxed">
        <div className="flex items-center gap-2 text-[#8C533C] font-serif font-bold text-lg">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <span>General Educational Information Only</span>
        </div>
        <p>
          The content published on <strong>JADORESHREY WELLNESS</strong>—including articles, infographics, calculators, interactive roadmaps, guides, and newsletters—is created strictly for general educational and informational purposes. It is not intended to be, nor should it ever be treated as, a substitute for professional medical advice, clinical diagnosis, individualized prescription, or clinical treatment.
        </p>
        <p>
          Always seek the personal advice of your physician, registered gynecologist, board-certified dermatologist, or other qualified healthcare provider with any questions you may have regarding a medical condition, symptoms, or medication interactions.
        </p>
      </div>

      {/* Structured Sections */}
      <div className="space-y-8 text-sm text-[#423C36] leading-relaxed">
        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            1. No Doctor-Patient Relationship
          </h2>
          <p>
            Your access to or use of this website, including communications via email, contact forms, or newsletter subscriptions, does not establish a doctor-patient, therapist-client, or other healthcare provider relationship between you and Shreya Bhosale, JADORESHREY WELLNESS, or any contributing medical reviewers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            2. Distinction Between Clinical Evidence and Traditional Ayurveda
          </h2>
          <p>
            JADORESHREY WELLNESS regularly explores classical Ayurvedic concepts (such as Tridosha balance, Dinacharya daily rhythms, and traditional Rasayana botanicals like Shatavari and Amla). While we cite modern pharmacological studies where available, readers should understand that traditional system philosophies and clinical randomized controlled trials (RCTs) represent different epistemic frameworks.
          </p>
          <p>
            Botanical supplements may interact with pharmaceutical medications. For example, Withania somnifera (Ashwagandha) can stimulate thyroid hormone output or interact with immunosuppressants; high doses of curcumin can exert mild antiplatelet effects. Never cease or modify prescribed medications without direct supervision from your treating physician.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            3. Physical Exercise and Musculoskeletal Safety
          </h2>
          <p>
            Before beginning any new physical regimen—including resistance strength training, reformer Pilates, or asana practice—you should consult a healthcare provider or licensed physical therapist, particularly if you have pre-existing cardiovascular conditions, joint injuries, osteopenia, pregnancy, or postpartum pelvic floor dysfunction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            4. Emergency Medical Situations
          </h2>
          <p>
            If you believe you may have a medical emergency, call your local emergency services (such as 112 in India) or go immediately to the nearest hospital casualty emergency ward. Do not rely on digital information for acute, life-threatening symptoms.
          </p>
        </section>
      </div>
    </div>
  );
};
