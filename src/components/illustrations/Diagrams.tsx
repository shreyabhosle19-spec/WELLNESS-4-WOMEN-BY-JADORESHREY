import React from 'react';

/**
 * Editorial diagram component collection for JADORESHREY WELLNESS
 * High-fidelity, responsive SVG educational diagrams with pastel aesthetic.
 */

// 1. Skin Layers & Lipid Barrier Diagram
export const SkinLayersDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 1 — Skin Anatomy & Epidermal Barrier Function
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#8C533C] font-medium mt-1 sm:mt-0">
          Fitzpatrick Types III–V Focus
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 720 280" className="w-full min-w-[550px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stratum Corneum (Brick and Mortar) */}
          <rect x="20" y="30" width="680" height="60" rx="6" fill="#F4EDE4" stroke="#D9C9B8" strokeWidth="1.5" />
          <text x="35" y="55" fill="#6E3B27" fontSize="13" fontWeight="600" fontFamily="sans-serif">STRATUM CORNEUM (Outer Protective Shield)</text>
          <text x="35" y="73" fill="#7A6858" fontSize="11" fontFamily="sans-serif">The "Brick and Mortar" Lipid Matrix: Ceramides (50%), Cholesterol (25%), Free Fatty Acids (15%)</text>
          
          {/* Corneocytes illustrations inside stratum corneum */}
          <g opacity="0.65">
            <rect x="520" y="42" width="40" height="14" rx="2" fill="#E8D5C4" stroke="#9E7D65" strokeWidth="1"/>
            <rect x="565" y="42" width="40" height="14" rx="2" fill="#E8D5C4" stroke="#9E7D65" strokeWidth="1"/>
            <rect x="610" y="42" width="40" height="14" rx="2" fill="#E8D5C4" stroke="#9E7D65" strokeWidth="1"/>
            <rect x="540" y="60" width="40" height="14" rx="2" fill="#E8D5C4" stroke="#9E7D65" strokeWidth="1"/>
            <rect x="585" y="60" width="40" height="14" rx="2" fill="#E8D5C4" stroke="#9E7D65" strokeWidth="1"/>
            <rect x="630" y="60" width="40" height="14" rx="2" fill="#E8D5C4" stroke="#9E7D65" strokeWidth="1"/>
          </g>

          {/* Viable Epidermis with Melanocytes */}
          <rect x="20" y="100" width="680" height="70" rx="6" fill="#EFE8DE" stroke="#D4C4B0" strokeWidth="1.5" />
          <text x="35" y="125" fill="#586F60" fontSize="13" fontWeight="600" fontFamily="sans-serif">VIABLE EPIDERMIS & BASAL LAYER (Melanocyte Distribution)</text>
          <text x="35" y="143" fill="#6A7A6E" fontSize="11" fontFamily="sans-serif">Active melanocytes produce protective eumelanin. In Indian skin, melanocytes are larger and more reactive.</text>
          
          {/* Melanocyte dendritic cell representation */}
          <g transform="translate(560, 115)">
            <circle cx="20" cy="20" r="12" fill="#8C533C" />
            <path d="M20 8 Q24 0 35 2 M20 32 Q26 40 38 36 M8 20 Q-2 24 2 34 M32 20 Q44 20 48 12" stroke="#8C533C" strokeWidth="2.5" strokeLinecap="round" />
            <text x="55" y="24" fill="#6E3B27" fontSize="10" fontWeight="600">Active Melanocyte</text>
          </g>

          {/* Dermis with Collagen & Elastin */}
          <rect x="20" y="180" width="680" height="75" rx="6" fill="#F8EFEA" stroke="#E6D3C9" strokeWidth="1.5" />
          <text x="35" y="205" fill="#8F554E" fontSize="13" fontWeight="600" fontFamily="sans-serif">DERMIS (Structural Scaffolding)</text>
          <text x="35" y="223" fill="#8A6B65" fontSize="11" fontFamily="sans-serif">Densely packed Type I & III collagen bundles, elastin fibers, hyaluronic acid, and microcapillaries.</text>

          {/* Collagen wave fibers */}
          <path d="M520 205 Q540 195 560 205 T600 205 T640 205" stroke="#D9A99B" strokeWidth="2.5" fill="none" />
          <path d="M520 225 Q540 215 560 225 T600 225 T640 225" stroke="#586F60" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          <text x="520" y="244" fill="#7A6858" fontSize="10">Collagen & Elastin Network</text>
        </svg>
      </div>
      <p className="text-xs text-[#7A6858] mt-3 italic leading-relaxed">
        Key Takeaway: Over-exfoliating strips the lipid mortar of the stratum corneum, triggering inflammatory signals that activate underlying melanocytes to deposit stubborn pigment (PIH). A resilient barrier is the first defense against pigmentation.
      </p>
    </div>
  );
};

// 2. Acne Pathogenesis & PIH vs PIE
export const AcneFormationDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 2 — The 4 Stages of Acne Formation & Melanin Response
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#8C533C] font-medium mt-1 sm:mt-0">
          Clinical Pathophysiology
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2">
        <div className="p-4 bg-white rounded-lg border border-[#EAE3D8]">
          <div className="w-8 h-8 rounded-full bg-[#EBF0EC] text-[#586F60] font-serif font-bold flex items-center justify-center mb-3">1</div>
          <h5 className="font-serif text-sm font-semibold text-[#2C2926] mb-1">Hyperkeratinization</h5>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Dead skin cells fail to shed normally, compacting within the follicular infundibulum (pore opening) to form a microcomedone.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg border border-[#EAE3D8]">
          <div className="w-8 h-8 rounded-full bg-[#F8EFEA] text-[#8C533C] font-serif font-bold flex items-center justify-center mb-3">2</div>
          <h5 className="font-serif text-sm font-semibold text-[#2C2926] mb-1">Sebum Excess</h5>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Androgen stimulation increases sebaceous gland activity. Trapped sebum creates an anaerobic, lipid-rich environment.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg border border-[#EAE3D8]">
          <div className="w-8 h-8 rounded-full bg-[#FCEFEB] text-[#8F554E] font-serif font-bold flex items-center justify-center mb-3">3</div>
          <h5 className="font-serif text-sm font-semibold text-[#2C2926] mb-1">Bacterial Proliferation</h5>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            <em>Cutibacterium acnes</em> hydrolyzes sebum triglycerides into free fatty acids, triggering inflammatory neutrophils and papules.
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg border border-[#EAE3D8]">
          <div className="w-8 h-8 rounded-full bg-[#F3ECE3] text-[#6E3B27] font-serif font-bold flex items-center justify-center mb-3">4</div>
          <h5 className="font-serif text-sm font-semibold text-[#2C2926] mb-1">PIH Pigmentation</h5>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            Inflammatory cytokines stimulate melanocytes. In melanin-rich skin, this deposits brown/black melanin marks (PIH) rather than pink vascular scars (PIE).
          </p>
        </div>
      </div>
      <div className="mt-4 p-3 bg-[#EEF3EF] rounded-lg text-xs text-[#425548] leading-relaxed">
        <strong>Dermatology Golden Rule:</strong> Never mechanically pick or scrub active papules. Physical trauma ruptures the follicular wall, spreading dermal inflammation deeper and prolonging PIH duration from weeks to over 12 months.
      </div>
    </div>
  );
};

// 3. Balanced Indian Protein Plate Diagram
export const ProteinPlateDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 3 — The Balanced Indian Plate (ICMR-NIN Aligned)
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#586F60] font-medium mt-1 sm:mt-0">
          Target: 20–25g Protein Per Meal
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* SVG Plate visual */}
        <div className="col-span-1 md:col-span-1 flex justify-center">
          <svg viewBox="0 0 260 260" className="w-56 h-56">
            {/* Plate Rim */}
            <circle cx="130" cy="130" r="120" fill="#FFFFFF" stroke="#E0D6C8" strokeWidth="8" />
            <circle cx="130" cy="130" r="112" fill="#FAF7F2" stroke="#ECE4D8" strokeWidth="1" />
            
            {/* Half: Fiber & Vegetables (50%) */}
            <path d="M130 18 A112 112 0 0 1 130 242 Z" fill="#EEF3EF" stroke="#C5D7C9" strokeWidth="1.5" />
            <text x="175" y="125" textAnchor="middle" fill="#3D5344" fontSize="12" fontWeight="700">50% FIBER</text>
            <text x="175" y="142" textAnchor="middle" fill="#586F60" fontSize="10">Sabzi, Greens,</text>
            <text x="175" y="156" textAnchor="middle" fill="#586F60" fontSize="10">Kachumber, Amla</text>

            {/* Quarter: Protein (25%) */}
            <path d="M130 18 A112 112 0 0 0 18 130 L130 130 Z" fill="#F8EFEA" stroke="#E6D3C9" strokeWidth="1.5" />
            <text x="75" y="75" textAnchor="middle" fill="#6E3B27" fontSize="12" fontWeight="700">25% PROTEIN</text>
            <text x="75" y="90" textAnchor="middle" fill="#8C533C" fontSize="10">Paneer / Soya /</text>
            <text x="75" y="104" textAnchor="middle" fill="#8C533C" fontSize="10">Sprouts / Eggs</text>

            {/* Quarter: Complex Carbs (25%) */}
            <path d="M18 130 A112 112 0 0 0 130 242 L130 130 Z" fill="#F4EDE4" stroke="#DBC8B5" strokeWidth="1.5" />
            <text x="75" y="185" textAnchor="middle" fill="#755231" fontSize="12" fontWeight="700">25% CARBS</text>
            <text x="75" y="200" textAnchor="middle" fill="#8B6946" fontSize="10">Millet / Roti /</text>
            <text x="75" y="214" textAnchor="middle" fill="#8B6946" fontSize="10">Brown Rice</text>
          </svg>
        </div>

        {/* Nutritional breakdown */}
        <div className="col-span-1 md:col-span-2 space-y-3">
          <div className="p-3 bg-white rounded-lg border border-[#E8E1D5]">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm text-[#2C2926]">High-Density Protein Sources</span>
              <span className="text-xs text-[#8C533C] font-mono font-medium">Protein per 100g</span>
            </div>
            <p className="text-xs text-[#6A6560] mt-1">
              Soya Chunks (~52g) · Low-fat Paneer (~20g) · Tempeh (~19g) · Greek Yogurt / Hung Curd (~10g) · Sattu Flour (~20g) · Whole Eggs (6g/egg)
            </p>
          </div>

          <div className="p-3 bg-white rounded-lg border border-[#E8E1D5]">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-sm text-[#2C2926]">Complementary Amino Acid Pairing</span>
              <span className="text-xs text-[#586F60] font-mono font-medium">PDCAAS Score Boost</span>
            </div>
            <p className="text-xs text-[#6A6560] mt-1">
              Grains (rich in methionine, low in lysine) + Legumes/Dal (rich in lysine, low in methionine). Pairing Dal with Rice or Roti forms a complete essential amino acid profile.
            </p>
          </div>

          <div className="p-3 bg-[#EEF3EF] rounded-lg border border-[#C5D7C9]">
            <span className="text-xs text-[#3D5344] font-medium leading-relaxed block">
              <strong>ICMR 2020 RDA Guideline:</strong> Indian adult women require a baseline of 0.83g of protein per kg body weight daily (approx. 46g–55g). For active women or those strength training, 1.2g–1.6g/kg is recommended to preserve lean tissue.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Menstrual Cycle & Hormonal Rhythm Diagram
export const MenstrualHormoneDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 4 — The 4 Menstrual Phases & Endocrine Dynamics
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#8F554E] font-medium mt-1 sm:mt-0">
          Estrogen & Progesterone Cycle
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 720 220" className="w-full min-w-[550px] h-auto">
          {/* Phase 1: Menstruation */}
          <rect x="10" y="20" width="165" height="180" rx="6" fill="#FDF3F1" stroke="#E8D5CE" />
          <text x="25" y="45" fill="#8F554E" fontSize="12" fontWeight="700">1. MENSTRUAL (Days 1–5)</text>
          <text x="25" y="65" fill="#755E5A" fontSize="10">Estrogen & Progesterone low</text>
          <text x="25" y="85" fill="#2C2926" fontSize="11" fontWeight="600">Body state:</text>
          <text x="25" y="102" fill="#6A6560" fontSize="10">Lower basal body temp, uterine shed</text>
          <text x="25" y="125" fill="#2C2926" fontSize="11" fontWeight="600">Optimal Movement:</text>
          <text x="25" y="142" fill="#586F60" fontSize="10">Gentle Yin yoga, walking, rest</text>
          <text x="25" y="165" fill="#2C2926" fontSize="11" fontWeight="600">Nutritional Need:</text>
          <text x="25" y="182" fill="#8C533C" fontSize="10">Iron, Vitamin C, warm ginger broth</text>

          {/* Phase 2: Follicular */}
          <rect x="185" y="20" width="165" height="180" rx="6" fill="#F4F8F5" stroke="#C5D7C9" />
          <text x="200" y="45" fill="#586F60" fontSize="12" fontWeight="700">2. FOLLICULAR (Days 6–13)</text>
          <text x="200" y="65" fill="#536D5A" fontSize="10">Estrogen steadily rises (FSH)</text>
          <text x="200" y="85" fill="#2C2926" fontSize="11" fontWeight="600">Body state:</text>
          <text x="200" y="102" fill="#6A6560" fontSize="10">Surging energy, insulin sensitivity up</text>
          <text x="200" y="125" fill="#2C2926" fontSize="11" fontWeight="600">Optimal Movement:</text>
          <text x="200" y="142" fill="#586F60" fontSize="10">Progressive strength, HIIT, new skills</text>
          <text x="200" y="165" fill="#2C2926" fontSize="11" fontWeight="600">Nutritional Need:</text>
          <text x="200" y="182" fill="#8C533C" fontSize="10">Fermented foods, sprouted legumes</text>

          {/* Phase 3: Ovulatory */}
          <rect x="360" y="20" width="165" height="180" rx="6" fill="#FBF7EE" stroke="#E2D4B7" />
          <text x="375" y="45" fill="#966B40" fontSize="12" fontWeight="700">3. OVULATION (Days 14–16)</text>
          <text x="375" y="65" fill="#755E38" fontSize="10">LH surge + peak Estrogen</text>
          <text x="375" y="85" fill="#2C2926" fontSize="11" fontWeight="600">Body state:</text>
          <text x="375" y="102" fill="#6A6560" fontSize="10">Peak stamina, confidence, libido</text>
          <text x="375" y="125" fill="#2C2926" fontSize="11" fontWeight="600">Optimal Movement:</text>
          <text x="375" y="142" fill="#586F60" fontSize="10">Heaviest lifting PRs, intense cardio</text>
          <text x="375" y="165" fill="#2C2926" fontSize="11" fontWeight="600">Nutritional Need:</text>
          <text x="375" y="182" fill="#8C533C" fontSize="10">Fiber to eliminate excess estrogen metabolites</text>

          {/* Phase 4: Luteal */}
          <rect x="535" y="20" width="175" height="180" rx="6" fill="#F7F1EE" stroke="#DFD1CA" />
          <text x="550" y="45" fill="#6E3B27" fontSize="12" fontWeight="700">4. LUTEAL (Days 17–28)</text>
          <text x="550" y="65" fill="#6E5042" fontSize="10">Progesterone dominant</text>
          <text x="550" y="85" fill="#2C2926" fontSize="11" fontWeight="600">Body state:</text>
          <text x="550" y="102" fill="#6A6560" fontSize="10">Higher metabolic rate (+150 kcal)</text>
          <text x="550" y="125" fill="#2C2926" fontSize="11" fontWeight="600">Optimal Movement:</text>
          <text x="550" y="142" fill="#586F60" fontSize="10">Pilates, steady-state zone 2, swimming</text>
          <text x="550" y="165" fill="#2C2926" fontSize="11" fontWeight="600">Nutritional Need:</text>
          <text x="550" y="182" fill="#8C533C" fontSize="10">Magnesium, complex carbs, seeds</text>
        </svg>
      </div>
      <p className="text-xs text-[#7A6858] mt-3 italic leading-relaxed">
        PCOS Clinical Consideration: In women with Polycystic Ovary Syndrome, chronic elevated insulin impairs ovulation, leaving estrogen unopposed by progesterone. Strength training improves muscular insulin sensitivity, aiding regular ovulatory cycling.
      </p>
    </div>
  );
};

// 5. Ayurvedic Herbs Botanical Profile
export const AyurvedicHerbsDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 5 — Classical Ayurvedic Botanicals: Traditional Rasayana vs Clinical Evidence
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#966B40] font-medium mt-1 sm:mt-0">
          Ministry of AYUSH Aligned
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Amla */}
        <div className="p-4 bg-white rounded-lg border border-[#E8E1D5]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🌿</span>
            <div>
              <h5 className="font-serif text-sm font-bold text-[#2C2926]">Amla (Amalaki)</h5>
              <p className="text-[11px] text-[#7A6858] italic">Phyllanthus emblica</p>
            </div>
          </div>
          <p className="text-xs text-[#586F60] font-medium mb-1">Traditional View: Tridoshic Rasayana, cools Pitta.</p>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            <strong>Clinical Data:</strong> High ascorbic acid (Vitamin C) content stable even when heated. Potent bioflavonoids enhance non-heme iron bioavailability in gut mucosa.
          </p>
        </div>

        {/* Shatavari */}
        <div className="p-4 bg-white rounded-lg border border-[#E8E1D5]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🌸</span>
            <div>
              <h5 className="font-serif text-sm font-bold text-[#2C2926]">Shatavari</h5>
              <p className="text-[11px] text-[#7A6858] italic">Asparagus racemosus</p>
            </div>
          </div>
          <p className="text-xs text-[#8F554E] font-medium mb-1">Traditional View: Female reproductive tonic & rejuvenator.</p>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            <strong>Clinical Data:</strong> Steroidal saponins (shatavarins I–IV) exhibit phytoestrogenic modulation, supporting mucosal hydration and menopausal vasomotor relief.
          </p>
        </div>

        {/* Ashwagandha */}
        <div className="p-4 bg-white rounded-lg border border-[#E8E1D5]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🍂</span>
            <div>
              <h5 className="font-serif text-sm font-bold text-[#2C2926]">Ashwagandha</h5>
              <p className="text-[11px] text-[#7A6858] italic">Withania somnifera</p>
            </div>
          </div>
          <p className="text-xs text-[#8C533C] font-medium mb-1">Traditional View: Medhya Rasayana, pacifies Vata & promotes Ojas.</p>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            <strong>Clinical Data:</strong> Withanolides modulate hypothalamic-pituitary-adrenal (HPA) axis, clinically shown in randomized trials to lower serum cortisol by 27–30%.
          </p>
        </div>
      </div>
      <p className="text-xs text-[#7A6858] mt-3 italic leading-relaxed">
        Important Quality Check: Traditional herbs must always be sourced with heavy-metal testing (lead, mercury, cadmium) compliant with Pharmacopoeia Commission for Indian Medicine & Homoeopathy (PCIM&H) standards.
      </p>
    </div>
  );
};

// 6. Movement Disciplines Comparison: Pilates vs Yoga vs Gym
export const MovementComparisonDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 6 — Comparative Biomechanics: Strength vs Pilates vs Yoga
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#4A6966] font-medium mt-1 sm:mt-0">
          Movement Synergy Matrix
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#DCD3C7] text-[#5A3825]">
              <th className="py-2.5 px-3 font-semibold font-serif">Modality</th>
              <th className="py-2.5 px-3 font-semibold font-serif">Primary Physical Adaptations</th>
              <th className="py-2.5 px-3 font-semibold font-serif">Endocrine / Neurological Impact</th>
              <th className="py-2.5 px-3 font-semibold font-serif">Weekly Recommendation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAE3D8] text-[#554E48]">
            <tr className="hover:bg-white/50">
              <td className="py-3 px-3 font-semibold text-[#6E3B27]">Gym (Strength Training)</td>
              <td className="py-3 px-3">Increases bone mineral density, builds type II fast-twitch muscle fibers, stimulates osteoblasts.</td>
              <td className="py-3 px-3">Markedly enhances GLUT-4 glucose transporters, reversing insulin resistance and boosting resting metabolic rate.</td>
              <td className="py-3 px-3 font-medium text-[#6E3B27]">2–3 sessions (45 min)</td>
            </tr>
            <tr className="hover:bg-white/50">
              <td className="py-3 px-3 font-semibold text-[#4A6966]">Pilates (Reformer & Mat)</td>
              <td className="py-3 px-3">Deep core architecture (transversus abdominis, multifidus, pelvic floor), spinal articulation, eccentric control.</td>
              <td className="py-3 px-3">Improves proprioception, postural alignment, decreases lumbar shear stress, pelvic floor recovery.</td>
              <td className="py-3 px-3 font-medium text-[#4A6966]">2 sessions (45–50 min)</td>
            </tr>
            <tr className="hover:bg-white/50">
              <td className="py-3 px-3 font-semibold text-[#586F60]">Yoga (Asana & Pranayama)</td>
              <td className="py-3 px-3">Fascial elasticity, joint range of motion, isometric tendon stiffness balance, mindful breath integration.</td>
              <td className="py-3 px-3">Down-regulates sympathetic nervous system ("fight or flight"), elevates vagal tone and parasympathetic recovery.</td>
              <td className="py-3 px-3 font-medium text-[#586F60]">2–4 sessions (20–45 min)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#7A6858] mt-3 italic leading-relaxed">
        The Optimal Protocol: You do not have to choose only one. A holistic weekly routine of 2 strength training days, 1–2 Pilates sessions, and 2 restorative yoga practices covers bone density, postural endurance, and stress downregulation.
      </p>
    </div>
  );
};

// 7. Iron Absorption & Chai Timing Mechanism
export const IronAbsorptionDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 7 — Non-Heme Iron Absorption: The Tea & Tannin Mechanism
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#8C533C] font-medium mt-1 sm:mt-0">
          Indian Nutritional Reality
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Enhancers */}
        <div className="p-4 bg-[#F2F7F3] rounded-lg border border-[#C5D7C9]">
          <h5 className="font-serif text-sm font-bold text-[#3D5344] mb-2 flex items-center gap-1.5">
            <span className="text-base">🍋</span> Bioavailability Enhancers (+300% to +400%)
          </h5>
          <ul className="text-xs text-[#536D5A] space-y-2">
            <li><strong>Ascorbic Acid (Vitamin C):</strong> Reduces ferric iron (Fe3+) to soluble ferrous iron (Fe2+), which easily passes through enterocyte DMT-1 transporters.</li>
            <li><strong>Fermentation & Soaking:</strong> Soaking dals for 8+ hours deactivates phytates (phytic acid), freeing bound elemental iron.</li>
            <li><strong>Amla, Lemon, Tomato, Raw Guava:</strong> Squeeze fresh lime or add amla directly onto cooked dal right before serving.</li>
          </ul>
        </div>

        {/* Inhibitors */}
        <div className="p-4 bg-[#FDF4F2] rounded-lg border border-[#E8D5CE]">
          <h5 className="font-serif text-sm font-bold text-[#8F554E] mb-2 flex items-center gap-1.5">
            <span className="text-base">☕</span> Potent Absorption Blockers (-60% to -80%)
          </h5>
          <ul className="text-xs text-[#755E5A] space-y-2">
            <li><strong>Tannins & Polyphenols in Chai/Coffee:</strong> Insoluble tannin-iron complexes precipitate in the duodenum and cannot be absorbed.</li>
            <li><strong>Calcium Competition:</strong> Calcium (&gt;300mg) competes for the same mucosal absorption channels. Avoid taking high-dose calcium tablets with iron-rich meals.</li>
            <li><strong>The 60-Minute Rule:</strong> Never drink milk tea or coffee immediately before, during, or within 60 minutes after lunch or dinner.</li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-[#7A6858] mt-3 italic leading-relaxed">
        NFHS-5 Fact: Over 57% of Indian women aged 15–49 are anemic. Much of this is not lack of food quantity, but low bioavailability of plant non-heme iron and widespread consumption of tea alongside meals.
      </p>
    </div>
  );
};

// 8. Circadian Sleep & HPA Axis Diagram
export const CircadianSleepDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] text-[#2C2926]">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4 border-b border-[#E8E1D5] pb-3">
        <h4 className="font-serif text-lg font-semibold text-[#5A3825]">
          Fig. 8 — Circadian Endocrine Curve: Cortisol vs Melatonin
        </h4>
        <span className="text-xs uppercase tracking-wider text-[#6B5770] font-medium mt-1 sm:mt-0">
          HPA Axis Optimization
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg viewBox="0 0 720 180" className="w-full min-w-[550px] h-auto">
          {/* Timeline background */}
          <rect x="20" y="20" width="680" height="130" rx="8" fill="#FFFFFF" stroke="#E6DED3" />
          
          {/* Time markers */}
          <line x1="100" y1="20" x2="100" y2="150" stroke="#F0ECE3" />
          <line x1="270" y1="20" x2="270" y2="150" stroke="#F0ECE3" />
          <line x1="440" y1="20" x2="440" y2="150" stroke="#F0ECE3" />
          <line x1="610" y1="20" x2="610" y2="150" stroke="#F0ECE3" />

          <text x="100" y="165" textAnchor="middle" fill="#8B8278" fontSize="10">6:00 AM (Sunrise)</text>
          <text x="270" y="165" textAnchor="middle" fill="#8B8278" fontSize="10">12:00 PM (Solar Noon)</text>
          <text x="440" y="165" textAnchor="middle" fill="#8B8278" fontSize="10">6:00 PM (Dusk)</text>
          <text x="610" y="165" textAnchor="middle" fill="#8B8278" fontSize="10">10:30 PM (Sleep Window)</text>

          {/* Cortisol Curve (Yellow/Terracotta) */}
          <path d="M40 130 Q100 35 150 45 T270 90 T440 120 T680 135" fill="none" stroke="#8C533C" strokeWidth="3" />
          <text x="160" y="40" fill="#8C533C" fontSize="11" fontWeight="700">Cortisol Awakening Response (CAR)</text>

          {/* Melatonin Curve (Sage/Indigo) */}
          <path d="M40 140 Q300 140 440 130 T560 65 T680 40" fill="none" stroke="#586F60" strokeWidth="3" strokeDasharray="5 4" />
          <text x="560" y="55" fill="#586F60" fontSize="11" fontWeight="700">Melatonin Synthesis Surge</text>
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs text-[#554E48]">
        <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8E1D5]">
          <strong className="text-[#8C533C]">Morning (6:30–8:00 AM):</strong> Get 10–15 minutes of direct morning sunlight in eyes (without sunglasses) to set suprachiasmatic nucleus clock and trigger the healthy cortisol spike.
        </div>
        <div className="p-2.5 bg-[#FAF7F2] rounded border border-[#E8E1D5]">
          <strong className="text-[#586F60]">Evening (9:00–10:30 PM):</strong> Dim overhead LEDs, switch to warm lamps, avoid blue phone screens which suppress pineal melatonin release by up to 50%.
        </div>
      </div>
    </div>
  );
};
