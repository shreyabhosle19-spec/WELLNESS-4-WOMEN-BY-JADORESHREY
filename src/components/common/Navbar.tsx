import React, { useState } from 'react';
import { Search, Menu, X, BookOpen, Sparkles } from 'lucide-react';
import { CategorySlug } from '../../types/article';

interface Props {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenSearch: () => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenCalculator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'All Articles', route: '/articles' },
    { label: 'Skincare', route: '/category/skincare' },
    { label: "Women's Health", route: '/category/womens-health' },
    { label: 'Nutrition', route: '/category/nutrition' },
    { label: 'Ayurveda', route: '/category/ayurveda' },
    { label: 'Fitness', route: '/category/fitness' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E1D5] transition-all">
      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav links) — Zone 3 (Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C2926] hover:text-[#5A3825] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          JADORESHREY WELLNESS
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#6A6560]">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => onNavigate(link.route)}
                className={`hover:text-[#2C2926] transition-colors whitespace-nowrap shrink-0 relative py-1 cursor-pointer ${
                  isActive ? 'text-[#8C533C] font-semibold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C533C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Search */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#6A6560] hover:text-[#2C2926] hover:bg-[#FAF6EF] rounded-lg transition-colors cursor-pointer"
            aria-label="Search wellness articles"
            title="Search articles"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#586F60] bg-[#EEF3EF] hover:bg-[#E2EDE5] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="Calculate your daily protein requirement"
          >
            <span>Protein Tool</span>
          </button>

          <button
            onClick={() => onNavigate('/article/30-day-womens-wellness-challenge')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#5A3825] hover:bg-[#462B1C] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            30-Day Guide
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#6A6560] hover:text-[#2C2926] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EF] border-b border-[#E8E1D5] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium uppercase tracking-wider text-[#6A6560] pt-2">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => {
                  onNavigate(link.route);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-left transition-colors ${
                  currentRoute === link.route 
                    ? 'bg-white text-[#8C533C] font-semibold border border-[#E8E1D5]' 
                    : 'hover:bg-white text-[#554E48]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E1D5] flex gap-2">
            <button
              onClick={() => {
                onOpenCalculator();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-xs font-medium text-center text-[#586F60] bg-[#EEF3EF] rounded-lg"
            >
              Protein Target Tool
            </button>
            <button
              onClick={() => {
                onNavigate('/about');
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 text-xs font-medium text-center text-[#554E48] bg-white border border-[#E8E1D5] rounded-lg"
            >
              About
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
