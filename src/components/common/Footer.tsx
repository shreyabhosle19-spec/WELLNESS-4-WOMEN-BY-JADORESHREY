import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

interface Props {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#FAF6EF] border-t border-[#E8E1D5] text-[#423C36] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E8E1D5]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2C2926] tracking-tight">
              JADORESHREY WELLNESS
            </h3>
            <p className="text-sm text-[#6A6560] leading-relaxed max-w-md">
              A premium editorial publication dedicated to evidence-informed skincare, women’s health in India, protein nutrition, Ayurveda, and physical vitality. Grounded in clinical literature and tailored to our biological realities.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-[#586F60] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Reviewed by Certified Medical & Nutrition Experts</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#8C533C] font-semibold">
              Editorial Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate(`/category/${cat.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#8C533C] transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onNavigate('/article/30-day-womens-wellness-challenge');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-semibold text-[#5A3825] hover:underline cursor-pointer"
                >
                  30-Day Wellness Challenge →
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#8C533C] font-semibold">
              The Sunday Journal
            </h4>
            <p className="text-xs text-[#6A6560] leading-relaxed">
              Curated evidence-backed essays on Indian women’s endocrinology, nutrition science, and intentional living delivered every Sunday morning.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#EEF3EF] border border-[#C5D7C9] rounded-lg text-xs text-[#3D5344] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#586F60]" />
                <span>Thank you for subscribing to JADORESHREY Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3.5 py-2 text-xs bg-white border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926] placeholder-[#A49B8F]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#5A3825] hover:bg-[#462B1C] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#8A7A6D]">No spam, ever. Unsubscribe with one click anytime.</p>
          </div>
        </div>

        {/* Middle Medical Disclaimer strip */}
        <div className="py-6 border-b border-[#E8E1D5] text-[11px] text-[#7A6858] leading-relaxed">
          <strong className="text-[#5A3825]">Medical Disclaimer:</strong> The articles, guides, and educational content published on JADORESHREY WELLNESS are developed for general educational and informational purposes only. Content does not constitute clinical medical advice, formal diagnosis, or individualized treatment plans. Always seek the advice of a qualified physician, gynecologist, or dermatologist regarding any personal medical condition.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7A6D]">
          <div>
            © {new Date().getFullYear()} JADORESHREY WELLNESS. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                onNavigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#2C2926] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#2C2926] transition-colors"
            >
              Contact & Editorial Desk
            </button>
            <button
              onClick={() => {
                onNavigate('/medical-disclaimer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#2C2926] transition-colors"
            >
              Medical Disclaimer
            </button>
            <button
              onClick={() => {
                onNavigate('/privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#2C2926] transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
