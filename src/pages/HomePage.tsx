import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Heart, Leaf, Dumbbell, Activity, Calendar } from 'lucide-react';
import { ARTICLES, getFeaturedArticles } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from '../components/article/ArticleCard';

interface Props {
  onNavigate: (route: string) => void;
  onOpenCalculator: () => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, onOpenCalculator }) => {
  const featuredArticles = getFeaturedArticles();
  const leadArticle = ARTICLES.find(a => a.slug === 'ultimate-skincare-guide-indian-women') || ARTICLES[0];
  const secondaryArticles = ARTICLES.filter(a => a.slug !== leadArticle.slug).slice(0, 4);
  const challengeArticle = ARTICLES.find(a => a.slug === '30-day-womens-wellness-challenge')!;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'skincare': return Sparkles;
      case 'womens-health': return Heart;
      case 'nutrition': return Leaf;
      case 'ayurveda': return Activity;
      case 'fitness': return Dumbbell;
      default: return Calendar;
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* 1. Curatorial Header & Marquee */}
      <section className="pt-6 sm:pt-10 border-b border-[#E8E1D5] pb-12 sm:pb-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8C533C] mb-3">
          <span>Est. 2026</span>
          <span aria-hidden="true">·</span>
          <span>An Evidence-Informed Publication</span>
          <span aria-hidden="true">·</span>
          <span>Vol. I</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2C2926] leading-[1.15] text-balance">
          Evidence-Informed Wellness for the Modern Indian Woman
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#6A6560] leading-relaxed max-w-2xl mx-auto font-sans font-light">
          Bridging clinical dermatology, ICMR nutrition standards, traditional Ayurvedic phytomedicine, and musculoskeletal science — without pseudoscientific trends or Western defaults.
        </p>

        {/* Quick Topics Ribbon */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#7A6858]">
          <span className="text-[#8C533C] font-semibold">Core Pillars:</span>
          <span>Melanin Dermatology</span>
          <span aria-hidden="true">·</span>
          <span>Indian Vegetarian Protein</span>
          <span aria-hidden="true">·</span>
          <span>PCOS & Thyroid Health</span>
          <span aria-hidden="true">·</span>
          <span>Evidence-Based Ayurveda</span>
          <span aria-hidden="true">·</span>
          <span>Bone Density & Strength</span>
        </div>
      </section>

      {/* 2. Lead Story Section (Pattern C: 3-Tier Salience) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2926]">
            Lead Editorial
          </h2>
          <span className="text-xs font-mono uppercase tracking-wider text-[#8C533C]">
            Cover Feature
          </span>
        </div>

        <ArticleCard
          article={leadArticle}
          onSelect={(slug) => onNavigate(`/article/${slug}`)}
          variant="featured"
        />
      </section>

      {/* 3. Thematic Categories Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2926]">
            Explore by Department
          </h2>
          <button
            onClick={() => onNavigate('/articles')}
            className="text-xs font-semibold text-[#8C533C] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>All 10 Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => onNavigate(`/category/${cat.id}`)}
                className="group p-4 sm:p-5 bg-white rounded-xl border border-[#E8E1D5] hover:border-[#8C533C] text-left transition-all hover:shadow-xs cursor-pointer flex flex-col justify-between h-36"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF6EF] group-hover:bg-[#EEF3EF] flex items-center justify-center text-[#8C533C] group-hover:text-[#586F60] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#2C2926] group-hover:text-[#8C533C] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#8A7A6D] mt-0.5 line-clamp-1">
                    {cat.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Secondary Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2926]">
            Featured Guides
          </h2>
          <span className="text-xs text-[#8A7A6D]">800–1,200 words · Medically Reviewed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              onSelect={(slug) => onNavigate(`/article/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* 5. The 30-Day Wellness Challenge Marquee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-14 bg-[#FAF6EF] rounded-2xl border border-[#E8E1D5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
              Signature Curriculum
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#2C2926] leading-tight">
              The 30-Day Women's Wellness Challenge
            </h2>
            <p className="text-sm sm:text-base text-[#6A6560] leading-relaxed max-w-xl">
              A comprehensive 4-week structured curriculum connecting skin barrier care, 20g protein breakfasts, iron bioavailability hacks, compound resistance movement, and circadian sleep rituals. No restrictive fads — only compounding micro-habits.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/article/30-day-womens-wellness-challenge')}
                className="px-5 py-2.5 bg-[#5A3825] hover:bg-[#462B1C] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore the 30-Day Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenCalculator}
                className="px-4 py-2.5 bg-white border border-[#E8E1D5] hover:border-[#8C533C] text-xs font-medium text-[#5A3825] rounded-lg transition-colors cursor-pointer"
              >
                Calculate Daily Protein First
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-16/10 rounded-xl overflow-hidden border border-[#E8E1D5] bg-[#F2ECE3]">
              <img
                src={challengeArticle.heroImage}
                alt={challengeArticle.heroImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Remaining Library Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2C2926]">
            From the Library
          </h2>
          <button
            onClick={() => onNavigate('/articles')}
            className="text-xs font-semibold text-[#8C533C] hover:underline"
          >
            View All 10 Guides →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(5, 8).map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              onSelect={(slug) => onNavigate(`/article/${slug}`)}
            />
          ))}
        </div>
      </section>

      {/* 7. Editorial Philosophy Letter */}
      <section className="max-w-3xl mx-auto px-4 text-center space-y-4 py-8">
        <div className="w-12 h-1 bg-[#8C533C] mx-auto rounded-full" />
        <h3 className="font-serif text-2xl font-semibold text-[#2C2926]">
          A Note from the Editorial Desk
        </h3>
        <p className="text-sm text-[#6A6560] leading-relaxed italic">
          "For too long, women in India have been offered two flawed extremes: either generic Western fitness protocols that ignore our vegetarian culinary heritage and melanin biology, or commercial wellness fads that peddle unregulated detox powders. JADORESHREY WELLNESS was founded to provide a third way: deep, rigorous, unapologetically scientific health journalism grounded in the lived realities of Indian women."
        </p>
        <div className="text-xs text-[#8A7A6D] pt-2">
          <strong className="text-[#2C2926] font-serif text-sm block">Shreya Bhosale</strong>
          Founder & Editorial Director
        </div>
      </section>
    </div>
  );
};
