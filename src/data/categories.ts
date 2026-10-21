import { Category } from '../types/article';

export const CATEGORIES: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    tagline: 'Melanin-Aware Clinical Dermatology',
    description: 'Evidence-informed skin science specifically calibrated for Indian Fitzpatrick skin types III through V, tropical humidity, and barrier preservation.',
    accentColor: '#8C533C'
  },
  {
    id: 'womens-health',
    name: "Women's Health",
    tagline: 'Preventive Medicine & Hormonal Vitality',
    description: "Addressing PCOS, thyroid balance, cervical screening, and reproductive wellness tailored to the Indian medical context and lived realities.",
    accentColor: '#8F554E'
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Protein',
    tagline: 'ICMR-Aligned Whole-Food Fueling',
    description: 'Busting protein myths in traditional Indian vegetarian diets, reversing subclinical iron deficiency, and nourishing female metabolic health.',
    accentColor: '#586F60'
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda & Science',
    tagline: 'Ancient Wisdom Through an Evidence Lens',
    description: 'Bridging classical Dinacharya and Ayurvedic botanical phytomedicine (Amla, Tulsi, Shatavari) with modern clinical pharmacology and safety standards.',
    accentColor: '#966B40'
  },
  {
    id: 'fitness',
    name: 'Movement & Fitness',
    tagline: 'Strength, Biomechanics & Longevity',
    description: 'Empowering Indian women through progressive strength training, Pilates core architecture, and restorative yoga for bone density and vitality.',
    accentColor: '#4A6966'
  },
  {
    id: 'daily-wellness',
    name: 'Daily Wellness',
    tagline: 'Circadian Biology, Sleep & Habit Architecture',
    description: 'Practical daily routines, stress resilience protocols, and structured challenges designed to transform everyday wellbeing without burnout.',
    accentColor: '#6B5770'
  }
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}
