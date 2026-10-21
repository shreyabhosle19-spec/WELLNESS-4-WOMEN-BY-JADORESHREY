import React from 'react';
import { ShieldCheck, Heart, Sparkles, BookOpen, Check } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface Props {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      <Breadcrumbs
        items={[{ label: 'About the Publication' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="border-b border-[#E8E1D5] pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
          About JADORESHREY WELLNESS
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2926]">
          Rooted in Heritage. Validated by Clinical Science.
        </h1>
        <p className="text-base sm:text-lg text-[#6A6560] leading-relaxed italic font-serif">
          A dedicated space for the modern Indian woman who demands scientific integrity over marketing hype.
        </p>
      </header>

      {/* Origin Story */}
      <section className="space-y-4 text-base text-[#38332E] leading-relaxed">
        <h2 className="font-serif text-2xl font-bold text-[#2C2926]">
          Why JADORESHREY WELLNESS Was Created
        </h2>
        <p>
          For decades, mainstream wellness media has ignored the unique biological, dermatological, and culinary realities of women in India. Western publications champion salads and raw kale that fail to nourish Vata or align with traditional culinary digestion, while ignoring that over 70% of Indian diets are clinically deficient in protein.
        </p>
        <p>
          Simultaneously, global skincare brands push harsh hydroquinone and chemical peels designed for Fitzpatrick phototypes I and II—routines that trigger catastrophic post-inflammatory hyperpigmentation (PIH) on melanin-rich Indian skin. And within our own borders, commercial "Ayurvedic" brands have bastardized centuries of empirical medicine into cheap detox teas and unstandardized herbal churnas laden with heavy metals.
        </p>
        <p>
          JADORESHREY WELLNESS was founded by Shreya Bhosale to bridge this gap: creating a rigorous, aesthetic, and compassionate home where Indian clinical nutrition (ICMR-NIN), melanin-aware dermatology, classical Ayurvedic phytomedicine, and musculoskeletal biomechanics meet.
        </p>
      </section>

      {/* 4 Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="p-6 bg-white rounded-xl border border-[#E8E1D5] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FAF6EF] text-[#8C533C] flex items-center justify-center font-serif font-bold text-sm">
            01
          </div>
          <h3 className="font-serif text-lg font-bold text-[#2C2926]">Melanin-First Dermatology</h3>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Formulations and regimens tailored specifically to Fitzpatrick skin types III through V, accounting for tropical humidity, reactive melanogenesis, and barrier preservation.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-[#E8E1D5] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#EEF3EF] text-[#586F60] flex items-center justify-center font-serif font-bold text-sm">
            02
          </div>
          <h3 className="font-serif text-lg font-bold text-[#2C2926]">ICMR-Aligned Nutrition</h3>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Debunking the myth of the "protein-rich dal", addressing the 57% female anemia crisis, and optimizing complete amino acid profiles using culturally native staples.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-[#E8E1D5] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#F8EFEA] text-[#8F554E] flex items-center justify-center font-serif font-bold text-sm">
            03
          </div>
          <h3 className="font-serif text-lg font-bold text-[#2C2926]">Evidence-Based Ayurveda</h3>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Respecting the classical Caraka and Susruta treatises while subjecting botanicals like Shatavari, Amla, and Ashwagandha to modern pharmacological and safety testing.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-[#E8E1D5] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FAF6EF] text-[#5A3825] flex items-center justify-center font-serif font-bold text-sm">
            04
          </div>
          <h3 className="font-serif text-lg font-bold text-[#2C2926]">Female Musculoskeletal Strength</h3>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Busting the "bulky" myth and championing progressive resistance training, reformer Pilates, and pelvic floor vitality to halt post-30 osteopenia in Indian women.
          </p>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="p-8 bg-[#FAF6EF] rounded-2xl border border-[#E8E1D5] space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8C533C] font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Our Editorial Constitution</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#2C2926]">
          The Scientific Vetting Process
        </h3>
        <ul className="space-y-2.5 text-xs text-[#554E48]">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#586F60] shrink-0 mt-0.5" />
            <span><strong>Primary Sources Only:</strong> We cite peer-reviewed clinical trials, ICMR-NIN guidelines, WHO standards, and verified dermatological consensus. No manufactured buzzwords or influencer hearsay.</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#586F60] shrink-0 mt-0.5" />
            <span><strong>Medical Review:</strong> Health, hormonal, and dermatological articles are peer-reviewed by certified medical professionals (MD Dermatologists, MD Gynecologists, and BAMS Ayurvedic Physicians).</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-[#586F60] shrink-0 mt-0.5" />
            <span><strong>Zero Quick-Fix Claims:</strong> We never promise overnight cures, effortless weight loss, hormonal miracle teas, or glass-skin transformations. We champion compounding micro-habits.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
