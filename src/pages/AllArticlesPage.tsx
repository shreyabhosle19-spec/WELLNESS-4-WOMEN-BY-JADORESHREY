import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { ArticleCard } from '../components/article/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface Props {
  onNavigate: (route: string) => void;
}

export const AllArticlesPage: React.FC<Props> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'readTime'>('recent');

  const filtered = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    return (
      matchesCategory &&
      (article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.categoryName.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      <Breadcrumbs
        items={[{ label: 'All Articles' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="border-b border-[#E8E1D5] pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
          Curated Compendium
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2926]">
          All Editorial Guides
        </h1>
        <p className="text-base text-[#6A6560] max-w-2xl leading-relaxed">
          Explore all 10 in-depth, scientifically validated wellness guides spanning melanin skincare, Indian vegetarian nutrition, hormonal biology, and progressive movement.
        </p>
      </header>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-[#FAF6EF] p-4 rounded-xl border border-[#E8E1D5]">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#8A7A6D] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within guides..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#E8E1D5] rounded-lg focus:outline-none focus:border-[#8C533C] text-[#2C2926] placeholder-[#A49B8F]"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 md:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#5A3825] text-white font-semibold'
                : 'bg-white border border-[#E8E1D5] text-[#554E48] hover:border-[#8C533C]'
            }`}
          >
            All ({ARTICLES.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#5A3825] text-white font-semibold'
                  : 'bg-white border border-[#E8E1D5] text-[#554E48] hover:border-[#8C533C]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div>
        <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            Showing {filtered.length} {filtered.length === 1 ? 'Guide' : 'Guides'}
          </h2>
          <span className="text-xs text-[#8A7A6D]">800–1,200 Words Each</span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                onSelect={(slug) => onNavigate(`/article/${slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-sm text-[#8A7A6D]">
            No guides found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};
