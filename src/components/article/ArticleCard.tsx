import React, { useState } from 'react';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '../../types/article';

interface Props {
  article: Article;
  onSelect: (slug: string) => void;
  variant?: 'standard' | 'featured' | 'compact';
}

export const ArticleCard: React.FC<Props> = ({ article, onSelect, variant = 'standard' }) => {
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    onSelect(article.slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (variant === 'compact') {
    return (
      <article
        onClick={handleClick}
        className="group cursor-pointer py-4 border-b border-[#E8E1D5] last:border-none flex items-baseline justify-between gap-4 transition-colors"
      >
        <div className="space-y-1">
          {/* Zero-pill metadata with subtle dot separator */}
          <div className="flex items-center gap-2 text-xs text-[#8A7A6D]">
            <span className="uppercase tracking-wider font-medium text-[#8C533C]">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <h4 className="font-serif text-base font-semibold text-[#2C2926] group-hover:text-[#8C533C] transition-colors line-clamp-1">
            {article.title}
          </h4>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#8A7A6D] group-hover:text-[#8C533C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article
        onClick={handleClick}
        className="group cursor-pointer bg-white rounded-2xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:border-[#D6CAB8] transition-all duration-200 grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Visual Slot */}
        <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-[#F2ECE3]">
          {!imgError ? (
            <img
              src={article.heroImage}
              alt={article.heroImageAlt}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full min-h-[280px] flex items-center justify-center bg-[#FAF6EF] p-8 text-center">
              <span className="font-serif text-lg text-[#8C533C] italic">{article.categoryName}</span>
            </div>
          )}
        </div>

        {/* Content Slot */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Zero-Pill Clean Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-[#7A6858]">
              <span className="uppercase tracking-wider font-semibold text-[#8C533C]">{article.categoryName}</span>
              <span aria-hidden="true">·</span>
              <span>{article.publishedDate}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{article.readTime}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2926] group-hover:text-[#8C533C] transition-colors leading-tight">
              {article.title}
            </h3>

            <p className="text-sm text-[#6A6560] leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between text-xs font-semibold text-[#5A3825]">
            <span>Read Complete Guide</span>
            <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard Card
  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-xl border border-[#E8E1D5] overflow-hidden shadow-xs hover:border-[#D6CAB8] transition-all duration-200 flex flex-col h-full"
    >
      {/* Visual Slot */}
      <div className="aspect-16/10 overflow-hidden bg-[#F2ECE3] relative">
        {!imgError ? (
          <img
            src={article.heroImage}
            alt={article.heroImageAlt}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FAF6EF] p-4 text-center">
            <span className="font-serif text-sm text-[#8C533C] italic">{article.categoryName}</span>
          </div>
        )}
      </div>

      {/* Content Slot */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2.5">
          {/* Zero-Pill Clean Unboxed Metadata */}
          <div className="flex items-center gap-2 text-xs text-[#7A6858]">
            <span className="uppercase tracking-wider font-semibold text-[#8C533C]">{article.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{article.readTime}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C2926] group-hover:text-[#8C533C] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6A6560] leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#7A6858]">
          <span className="text-[#8A7A6D]">{article.publishedDate}</span>
          <span className="font-semibold text-[#5A3825] group-hover:text-[#8C533C] flex items-center gap-0.5 transition-colors">
            Read <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
