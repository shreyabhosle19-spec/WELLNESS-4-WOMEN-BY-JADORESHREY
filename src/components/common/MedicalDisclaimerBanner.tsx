import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface Props {
  reviewedBy?: string;
  onNavigateDisclaimer?: () => void;
}

export const MedicalDisclaimerBanner: React.FC<Props> = ({ reviewedBy, onNavigateDisclaimer }) => {
  return (
    <aside className="my-8 p-5 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#423C36] text-xs leading-relaxed">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white border border-[#E8E1D5] text-[#8C533C] shrink-0 mt-0.5">
          <ShieldAlert className="w-4 h-4" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-serif font-bold text-sm text-[#2C2926]">Medical & Scientific Disclaimer</span>
            {reviewedBy && (
              <span className="text-[11px] text-[#586F60] font-medium bg-[#EEF3EF] px-2 py-0.5 rounded">
                Medically Reviewed: {reviewedBy}
              </span>
            )}
          </div>
          <p className="text-[#6A6560]">
            The health, nutrition, botanical, and dermatological information published in this article is prepared for educational purposes and is grounded in clinical literature (ICMR, NIN, WHO, AYUSH, and medical consensus). It does not substitute for personalized medical diagnosis, prescription, or clinical consultation. Always consult a certified physician, gynecologist, or dermatologist before adopting new supplementation or clinical protocols.
          </p>
          {onNavigateDisclaimer && (
            <button
              onClick={onNavigateDisclaimer}
              className="text-[#8C533C] hover:underline font-semibold pt-1 inline-block cursor-pointer"
            >
              Read our full Editorial & Clinical Review Standards →
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
