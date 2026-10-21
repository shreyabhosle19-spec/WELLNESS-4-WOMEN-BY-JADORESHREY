import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { ARTICLES } from '../../data/articles';
import { CATEGORIES } from '../../data/categories';
import { Article } from '../../types/article';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<Props> = ({ isOpen, onClose, onSelectArticle }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const q = query.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesTitle = article.title.toLowerCase().includes(q);
    const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
    const matchesCategoryName = article.categoryName.toLowerCase().includes(q);
    const matchesSections = article.sections.some(
      s => s.heading.toLowerCase().includes(q) || s.content.some(c => c.toLowerCase().includes(q))
    );

    return matchesCategory && (matchesTitle || matchesExcerpt || matchesCategoryName || matchesSections);
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="bg-[#FDFBF7] w-full max-w-2xl rounded-2xl border border-[#E8E1D5] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E1D5] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#8A7A6D]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skincare, protein, PCOS, Ayurveda, iron, sleep..."
            className="flex-1 bg-transparent border-none text-[#2C2926] placeholder-[#A49B8F] text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-[#8A7A6D] hover:text-[#2C2926] text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8A7A6D] hover:bg-[#FAF6EF] hover:text-[#2C2926] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-4 py-2.5 bg-[#FAF6EF] border-b border-[#E8E1D5] flex items-center gap-1.5 overflow-x-auto text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-white text-[#8C533C] font-semibold shadow-2xs'
                : 'text-[#7A6858] hover:text-[#2C2926]'
            }`}
          >
            All Articles ({ARTICLES.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-white text-[#8C533C] font-semibold shadow-2xs'
                  : 'text-[#7A6858] hover:text-[#2C2926]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#EAE3D8]">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.slug}
                onClick={() => {
                  onSelectArticle(article.slug);
                  onClose();
                }}
                className="py-3 px-3 hover:bg-[#FAF6EF] rounded-xl cursor-pointer transition-colors group flex items-baseline justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#8A7A6D]">
                    <span className="text-[#8C533C] uppercase tracking-wider font-semibold">
                      {article.categoryName}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{article.readTime}</span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#2C2926] group-hover:text-[#8C533C] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#6A6560] line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#8A7A6D] group-hover:text-[#8C533C] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-sm text-[#8A7A6D]">
              No articles found matching "{query}". Try searching for "hyperpigmentation", "paneer", "thyroid", or "circadian".
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF6EF] border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#8A7A6D]">
          <span>Tip: Press ESC to close</span>
          <span className="font-serif italic text-[#5A3825]">JADORESHREY WELLNESS Library</span>
        </div>
      </div>
    </div>
  );
};
