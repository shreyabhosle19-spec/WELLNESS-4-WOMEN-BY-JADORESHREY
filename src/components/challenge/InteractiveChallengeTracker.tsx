import React, { useState, useEffect } from 'react';
import { Check, Sparkles, RotateCcw, Calendar, ArrowRight } from 'lucide-react';

interface DayItem {
  day: number;
  week: number;
  habit: string;
  category: string;
  articleSlug: string;
  articleTitle: string;
  instruction: string;
}

const CHALLENGE_DAYS: DayItem[] = [
  // Week 1: Morning Light & Hydration Foundations
  { day: 1, week: 1, habit: "10-Min Morning Sunlight", category: "Circadian", articleSlug: "sleep-stress-hormonal-health-guide", articleTitle: "Sleep & Stress Guide", instruction: "Step outside without sunglasses within 60 minutes of waking to anchor cortisol." },
  { day: 2, week: 1, habit: "Warm Cumin-Coriander Water", category: "Ayurveda", articleSlug: "ayurveda-for-womens-wellness-modern-science", articleTitle: "Ayurveda for Wellness", instruction: "Sip gentle CCF water to stimulate gentle digestive Agni without caffeine." },
  { day: 3, week: 1, habit: "Barrier-First Gentle Cleanse", category: "Skincare", articleSlug: "ultimate-skincare-guide-indian-women", articleTitle: "Skincare Guide", instruction: "Switch from foaming sulfates to a non-stripping creamy hydrating cleanser." },
  { day: 4, week: 1, habit: "20g Protein Breakfast", category: "Nutrition", articleSlug: "protein-for-women-indian-vegetarian-sources", articleTitle: "Protein for Women", instruction: "Add paneer bhurji, besan chilla with paneer, or sprouted moong bowl." },
  { day: 5, week: 1, habit: "Vitamin C with Dal Lunch", category: "Nutrition", articleSlug: "iron-nutrition-energy-indian-women", articleTitle: "Iron & Nutrition Guide", instruction: "Squeeze half a fresh lime or raw amla over dal to triple iron absorption." },
  { day: 6, week: 1, habit: "20-Min Brisk Nature Walk", category: "Movement", articleSlug: "pilates-vs-yoga-vs-gym-comparison", articleTitle: "Pilates vs Yoga vs Gym", instruction: "Elevate your heart rate gently; focus on deep diaphragmatic nasal breathing." },
  { day: 7, week: 1, habit: "Digital Sunset at 9:30 PM", category: "Circadian", articleSlug: "sleep-stress-hormonal-health-guide", articleTitle: "Sleep & Stress Guide", instruction: "Turn off screens 45 minutes before bed; journal or read print paper." },

  // Week 2: Melanin Care & Gut Nourishment
  { day: 8, week: 2, habit: "Daily SPF 50 Broad Spectrum", category: "Skincare", articleSlug: "ultimate-skincare-guide-indian-women", articleTitle: "Skincare Guide", instruction: "Apply two finger-lengths of PA++++ sunscreen, even indoors near windows." },
  { day: 9, week: 2, habit: "Probiotic Curd Bowl", category: "Nutrition", articleSlug: "protein-for-women-indian-vegetarian-sources", articleTitle: "Protein for Women", instruction: "Enjoy homemade fresh dahi or Greek yogurt with toasted flax seeds." },
  { day: 10, week: 2, habit: "Identify PIH Triggers", category: "Skincare", articleSlug: "acne-and-pigmentation-what-actually-works", articleTitle: "Acne & Pigmentation", instruction: "Commit to zero picking or harsh walnut scrubs to prevent dark marks." },
  { day: 11, week: 2, habit: "The 60-Minute Chai Rule", category: "Nutrition", articleSlug: "iron-nutrition-energy-indian-women", articleTitle: "Iron & Nutrition Guide", instruction: "Ensure your tea or coffee is separated from meals by at least an hour." },
  { day: 12, week: 2, habit: "15-Min Grounding Yin Yoga", category: "Movement", articleSlug: "pilates-vs-yoga-vs-gym-comparison", articleTitle: "Pilates vs Yoga vs Gym", instruction: "Hold passive hip and hamstring stretches to soothe sympathetic tone." },
  { day: 13, week: 2, habit: "Track Your Menstrual Phase", category: "Health", articleSlug: "womens-health-india-preventive-care-guide", articleTitle: "Women's Health Guide", instruction: "Log your cycle day, energy levels, and cervical mucus consistency." },
  { day: 14, week: 2, habit: "Warm Abhyanga Oil Massage", category: "Ayurveda", articleSlug: "ayurveda-for-womens-wellness-modern-science", articleTitle: "Ayurveda for Wellness", instruction: "Apply warm sesame or coconut oil before a shower to calm Vata dosha." },

  // Week 3: Muscle Architecture & Bone Density
  { day: 15, week: 3, habit: "Intro to Squat & Hip Hinge", category: "Fitness", articleSlug: "strength-training-for-women-beginners-guide", articleTitle: "Strength Training", instruction: "Practice 3 sets of 10 bodyweight squats and Romanian deadlift hinges." },
  { day: 16, week: 3, habit: "Soya or Tempeh Stir-fry", category: "Nutrition", articleSlug: "protein-for-women-indian-vegetarian-sources", articleTitle: "Protein for Women", instruction: "Incorporate high-density plant protein with cumin and bell peppers." },
  { day: 17, week: 3, habit: "Hydrating Niacinamide Serum", category: "Skincare", articleSlug: "ultimate-skincare-guide-indian-women", articleTitle: "Skincare Guide", instruction: "Apply 2–5% niacinamide to support barrier ceramides and even skin tone." },
  { day: 18, week: 3, habit: "Upper Body Dumbbell Push", category: "Fitness", articleSlug: "strength-training-for-women-beginners-guide", articleTitle: "Strength Training", instruction: "Perform dumbbell chest presses and overhead presses for bone density." },
  { day: 19, week: 3, habit: "Review Preventive Health Dates", category: "Health", articleSlug: "womens-health-india-preventive-care-guide", articleTitle: "Women's Health Guide", instruction: "Schedule your overdue annual CBC, thyroid panel, or Pap smear." },
  { day: 20, week: 3, habit: "10-Min Pilates Core Series", category: "Fitness", articleSlug: "pilates-vs-yoga-vs-gym-comparison", articleTitle: "Pilates vs Yoga vs Gym", instruction: "Engage the transversus abdominis with toe taps and modified hundreds." },
  { day: 21, week: 3, habit: "Magnesium-Rich Evening Snack", category: "Nutrition", articleSlug: "sleep-stress-hormonal-health-guide", articleTitle: "Sleep & Stress Guide", instruction: "Pumpkin seeds and warm turmeric almond milk to encourage muscle relaxation." },

  // Week 4: Deep Hormonal Harmony & Longevity
  { day: 22, week: 4, habit: "Breast Self-Awareness Check", category: "Health", articleSlug: "womens-health-india-preventive-care-guide", articleTitle: "Women's Health Guide", instruction: "Perform a mindful breast check 3–5 days after menstruation ends." },
  { day: 23, week: 4, habit: "Gentle Chemical Exfoliation", category: "Skincare", articleSlug: "acne-and-pigmentation-what-actually-works", articleTitle: "Acne & Pigmentation", instruction: "Use low-strength lactic acid or 1% salicylic acid on clean, dry skin." },
  { day: 24, week: 4, habit: "Full-Body Strength Circuit", category: "Fitness", articleSlug: "strength-training-for-women-beginners-guide", articleTitle: "Strength Training", instruction: "Combine squats, dumbbell rows, glute bridges, and farmer's carries." },
  { day: 25, week: 4, habit: "Golden Milk with Black Pepper", category: "Ayurveda", articleSlug: "ayurveda-for-womens-wellness-modern-science", articleTitle: "Ayurveda for Wellness", instruction: "Piperine in black pepper boosts curcumin bioavailability by up to 2000%." },
  { day: 26, week: 4, habit: "4-7-8 Parasympathetic Breath", category: "Circadian", articleSlug: "sleep-stress-hormonal-health-guide", articleTitle: "Sleep & Stress Guide", instruction: "Inhale for 4, hold for 7, exhale for 8 to reset an agitated nervous system." },
  { day: 27, week: 4, habit: "Complete Amino Acid Pairing", category: "Nutrition", articleSlug: "protein-for-women-indian-vegetarian-sources", articleTitle: "Protein for Women", instruction: "Prepare rajma-chawal or khichdi with roasted sattu salad for lunch." },
  { day: 28, week: 4, habit: "Cold Bedroom Sleep Sanctuary", category: "Circadian", articleSlug: "sleep-stress-hormonal-health-guide", articleTitle: "Sleep & Stress Guide", instruction: "Lower bedroom temperature to 20–22°C to aid natural nocturnal cooling." },
  { day: 29, week: 4, habit: "Active Recovery & Mobility", category: "Fitness", articleSlug: "pilates-vs-yoga-vs-gym-comparison", articleTitle: "Pilates vs Yoga vs Gym", instruction: "Full spine roll-downs, cat-cows, and thoracic rotations for posture." },
  { day: 30, week: 4, habit: "Monthly Wellness Reflection", category: "Integration", articleSlug: "30-day-womens-wellness-challenge", articleTitle: "30-Day Wellness Challenge", instruction: "Celebrate non-scale victories: steady daytime energy, clearer skin, and strength." }
];

interface Props {
  onSelectArticle?: (slug: string) => void;
}

export const InteractiveChallengeTracker: React.FC<Props> = ({ onSelectArticle }) => {
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jadore_challenge_completed');
      return saved ? JSON.parse(saved) : [1, 2, 3]; // default first 3 completed for demo
    } catch {
      return [1, 2, 3];
    }
  });

  const [selectedDay, setSelectedDay] = useState<DayItem>(CHALLENGE_DAYS[0]);
  const [activeWeekFilter, setActiveWeekFilter] = useState<number>(0); // 0 = all

  useEffect(() => {
    try {
      localStorage.setItem('jadore_challenge_completed', JSON.stringify(completedDays));
    } catch (e) {
      console.error(e);
    }
  }, [completedDays]);

  const toggleDay = (day: number) => {
    setCompletedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const resetChallenge = () => {
    if (window.confirm("Reset your 30-day challenge progress?")) {
      setCompletedDays([]);
    }
  };

  const progressPercent = Math.round((completedDays.length / 30) * 100);

  const filteredDays = activeWeekFilter === 0 
    ? CHALLENGE_DAYS 
    : CHALLENGE_DAYS.filter(d => d.week === activeWeekFilter);

  return (
    <div className="my-10 p-6 md:p-8 bg-[#FAF6EF] rounded-2xl border border-[#E8E1D5] shadow-xs">
      {/* Header and Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8E1D5] pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#8C533C] font-semibold">
            Interactive Roadmap
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#2C2926] mt-1">
            The 30-Day Women's Wellness Blueprint
          </h3>
          <p className="text-sm text-[#7A6858] mt-1">
            Build sustainable, scientifically grounded micro-habits across skin, nutrition, hormones, and movement.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-[#E8E1D5] shrink-0">
          <div>
            <div className="text-xs text-[#7A6858] font-medium">Completion</div>
            <div className="font-serif text-2xl font-bold text-[#5A3825]">
              {completedDays.length} <span className="text-sm font-normal text-[#8A7A6D]">/ 30 Days</span>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#FDFBF7] border-2 border-[#586F60] text-sm font-bold text-[#586F60]">
            {progressPercent}%
          </div>
        </div>
      </div>

      {/* Week Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 my-6">
        <div className="flex items-center gap-1.5 p-1 bg-[#F2ECE3] rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveWeekFilter(0)}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeWeekFilter === 0 ? 'bg-white text-[#2C2926] shadow-xs' : 'text-[#7A6858] hover:text-[#2C2926]'}`}
          >
            All 30 Days
          </button>
          {[1, 2, 3, 4].map(w => (
            <button
              key={w}
              onClick={() => setActiveWeekFilter(w)}
              className={`px-3 py-1.5 rounded-md transition-colors ${activeWeekFilter === w ? 'bg-white text-[#2C2926] shadow-xs' : 'text-[#7A6858] hover:text-[#2C2926]'}`}
            >
              Week {w}
            </button>
          ))}
        </div>

        <button
          onClick={resetChallenge}
          className="flex items-center gap-1.5 text-xs text-[#8A7A6D] hover:text-[#8C533C] transition-colors"
          title="Reset your challenge progress"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Tracker</span>
        </button>
      </div>

      {/* 30-Day Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2.5 mb-8">
        {filteredDays.map((item) => {
          const isDone = completedDays.includes(item.day);
          const isSelected = selectedDay.day === item.day;

          return (
            <div
              key={item.day}
              onClick={() => setSelectedDay(item)}
              className={`cursor-pointer p-3 rounded-xl border transition-all text-left relative ${
                isSelected 
                  ? 'border-[#8C533C] bg-white ring-2 ring-[#8C533C]/20 shadow-xs' 
                  : isDone
                  ? 'border-[#C5D7C9] bg-[#F4F8F5]'
                  : 'border-[#E8E1D5] bg-white/70 hover:bg-white hover:border-[#D6CAB8]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono font-semibold text-[#8A7A6D]">Day {item.day}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDay(item.day);
                  }}
                  className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                    isDone 
                      ? 'bg-[#586F60] text-white' 
                      : 'border border-[#D6CAB8] hover:border-[#8C533C] text-transparent hover:text-[#8C533C]'
                  }`}
                  aria-label={`Mark day ${item.day} complete`}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </button>
              </div>
              <div className="text-xs font-medium text-[#2C2926] line-clamp-1">{item.habit}</div>
              <div className="text-[10px] text-[#7A6858] mt-0.5">{item.category}</div>
            </div>
          );
        })}
      </div>

      {/* Detail Card for Selected Day */}
      <div className="p-5 md:p-6 bg-white rounded-xl border border-[#E8E1D5] flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono font-semibold text-[#8C533C]">DAY {selectedDay.day} FOCUS</span>
            <span className="text-[#D6CAB8]">·</span>
            <span className="text-[#586F60] font-medium">{selectedDay.category}</span>
            <span className="text-[#D6CAB8]">·</span>
            <span className="text-[#7A6858]">Week {selectedDay.week}</span>
          </div>

          <h4 className="font-serif text-xl font-bold text-[#2C2926]">
            {selectedDay.habit}
          </h4>

          <p className="text-sm text-[#554E48] leading-relaxed">
            {selectedDay.instruction}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
          <button
            onClick={() => toggleDay(selectedDay.day)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors ${
              completedDays.includes(selectedDay.day)
                ? 'bg-[#EEF3EF] text-[#3D5344] hover:bg-[#E2EDE5]'
                : 'bg-[#5A3825] text-white hover:bg-[#462B1C]'
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{completedDays.includes(selectedDay.day) ? 'Completed!' : 'Mark as Done'}</span>
          </button>

          {onSelectArticle && (
            <button
              onClick={() => onSelectArticle(selectedDay.articleSlug)}
              className="px-4 py-2 text-xs font-medium text-[#8C533C] hover:text-[#5A3825] border border-[#E8E1D5] hover:border-[#8C533C] rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Read {selectedDay.articleTitle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
