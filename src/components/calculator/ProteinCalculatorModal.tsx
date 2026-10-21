import React, { useState } from 'react';
import { X, Sparkles, Scale, Info, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle?: (slug: string) => void;
}

export const ProteinCalculatorModal: React.FC<Props> = ({ isOpen, onClose, onSelectArticle }) => {
  const [weightKg, setWeightKg] = useState<number>(58);
  const [activityLevel, setActivityLevel] = useState<'sedentary' | 'moderate' | 'active'>('moderate');
  const [goal, setGoal] = useState<'maintenance' | 'muscle_tone' | 'pcos_reversal'>('muscle_tone');

  if (!isOpen) return null;

  // Multiplier based on ICMR 2020 RDA & International Society of Sports Nutrition (ISSN)
  let multiplier = 0.83; // sedentary baseline ICMR
  if (activityLevel === 'moderate') multiplier = 1.2;
  if (activityLevel === 'active') multiplier = 1.5;
  if (goal === 'pcos_reversal' && activityLevel === 'moderate') multiplier = 1.3;

  const dailyTarget = Math.round(weightKg * multiplier);
  const perMealTarget = Math.round(dailyTarget / 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div 
        className="bg-[#FDFBF7] w-full max-w-lg rounded-2xl border border-[#E8E1D5] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E8E1D5] flex items-center justify-between bg-[#FAF6EF]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C533C]">ICMR 2020 Aligned</span>
            <h3 className="font-serif text-xl font-bold text-[#2C2926]">Indian Women's Protein Calculator</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8A7A6D] hover:bg-[#EAE3D8] hover:text-[#2C2926] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5 text-sm text-[#38332E]">
          {/* Weight Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E5042] mb-1.5">
              Your Current Weight: <span className="font-mono text-base text-[#2C2926] font-bold">{weightKg} kg</span>
            </label>
            <input 
              type="range" 
              min="40" 
              max="110" 
              value={weightKg} 
              onChange={(e) => setWeightKg(Number(e.target.value))}
              className="w-full accent-[#8C533C] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#8A7A6D] mt-1">
              <span>40 kg</span>
              <span>75 kg</span>
              <span>110 kg</span>
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E5042] mb-1.5">
              Weekly Activity Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sedentary', label: 'Desk / Light', factor: '0.83g/kg' },
                { id: 'moderate', label: '1–3 Workouts', factor: '1.20g/kg' },
                { id: 'active', label: '4+ Workouts', factor: '1.50g/kg' },
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActivityLevel(item.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    activityLevel === item.id 
                      ? 'border-[#8C533C] bg-white text-[#2C2926] ring-1 ring-[#8C533C]' 
                      : 'border-[#E8E1D5] bg-[#FAF7F2] text-[#6A6560] hover:bg-white'
                  }`}
                >
                  <div className="font-medium text-xs text-[#2C2926]">{item.label}</div>
                  <div className="text-[10px] text-[#8A7A6D] font-mono mt-0.5">{item.factor}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Primary Goal */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E5042] mb-1.5">
              Primary Goal
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'maintenance', label: 'General Health' },
                { id: 'muscle_tone', label: 'Lean Strength' },
                { id: 'pcos_reversal', label: 'PCOS / Insulin' },
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setGoal(item.id as any)}
                  className={`p-2 rounded-lg border text-center text-xs transition-all ${
                    goal === item.id 
                      ? 'border-[#586F60] bg-[#EEF3EF] text-[#2C2926] font-semibold' 
                      : 'border-[#E8E1D5] bg-[#FAF7F2] text-[#6A6560] hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Output */}
          <div className="p-4 bg-[#F5EFE6] rounded-xl border border-[#DFD3C3] space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A5B42] font-semibold">Recommended Daily Intake</span>
                <div className="font-serif text-3xl font-bold text-[#5A3825]">
                  {dailyTarget}g <span className="text-sm font-sans font-normal text-[#7A6858]">/ day</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase tracking-wider text-[#7A5B42] font-semibold">Per Meal (3 meals)</span>
                <div className="font-serif text-xl font-bold text-[#586F60]">
                  ~{perMealTarget}g
                </div>
              </div>
            </div>

            <div className="text-xs text-[#5D5248] pt-2 border-t border-[#E2D5C3]">
              <strong>Easy Indian Vegetarian Plan to hit {dailyTarget}g:</strong>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-[12px]">
                <li>Breakfast: 2 Besan-Paneer chillas (~22g protein)</li>
                <li>Lunch: 1 cup Dal + 50g Soya chunks stir-fry (~30g protein)</li>
                <li>Snack: Roasted chana & Greek curd (~12g protein)</li>
                <li>Dinner: Paneer sabzi (100g) with 2 multi-grain rotis (~24g protein)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF6EF] border-t border-[#E8E1D5] flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              if (onSelectArticle) onSelectArticle('protein-for-women-indian-vegetarian-sources');
            }}
            className="text-xs font-semibold text-[#8C533C] hover:underline"
          >
            Read Full Indian Protein Food Guide →
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#5A3825] hover:bg-[#462B1C] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
