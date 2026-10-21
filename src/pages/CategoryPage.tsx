import React from 'react';
import { CategorySlug } from '../types/article';
import { getCategoryById, CATEGORIES } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { ArticleCard } from '../components/article/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface Props {
  categoryId: CategorySlug;
  onNavigate: (route: string) => void;
}

export const CategoryPage: React.FC<Props> = ({ categoryId, onNavigate }) => {
  const category = getCategoryById(categoryId) || CATEGORIES[0];
  const articles = getArticlesByCategory(categoryId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      <Breadcrumbs
        items={[{ label: category.name }]}
        onNavigate={onNavigate}
      />

      {/* Category Header */}
      <header className="border-b border-[#E8E1D5] pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#8C533C] font-semibold">
          Department Archives
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#2C2926]">
          {category.name}
        </h1>
        <p className="text-base sm:text-lg text-[#6A6560] max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </header>

      {/* Category Navigation Pills/Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
        <span className="text-[#8A7A6D] font-medium shrink-0">Switch Category:</span>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onNavigate(`/category/${cat.id}`)}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              cat.id === categoryId
                ? 'bg-[#5A3825] text-white font-semibold'
                : 'bg-white border border-[#E8E1D5] text-[#554E48] hover:border-[#8C533C]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div>
        <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
          <h2 className="font-serif text-xl font-bold text-[#2C2926]">
            {articles.length} {articles.length === 1 ? 'Article' : 'Articles'} in {category.name}
          </h2>
          <span className="text-xs text-[#8A7A6D]">Full Evidence-Informed Guides</span>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                onSelect={(slug) => onNavigate(`/article/${slug}`)}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-sm text-[#8A7A6D]">
            More guides coming soon to this department.
          </div>
        )}
      </div>
    </div>
  );
};
