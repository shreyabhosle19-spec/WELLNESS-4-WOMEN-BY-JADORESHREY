import React, { useState } from 'react';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, Check, BookOpen, ExternalLink, Bookmark } from 'lucide-react';
import { Article } from '../types/article';
import { ARTICLES, getArticleBySlug } from '../data/articles';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { TableOfContents } from '../components/article/TableOfContents';
import { MedicalDisclaimerBanner } from '../components/common/MedicalDisclaimerBanner';
import { ArticleCard } from '../components/article/ArticleCard';
import {
  SkinLayersDiagram,
  AcneFormationDiagram,
  ProteinPlateDiagram,
  MenstrualHormoneDiagram,
  AyurvedicHerbsDiagram,
  MovementComparisonDiagram,
  IronAbsorptionDiagram,
  CircadianSleepDiagram
} from '../components/illustrations/Diagrams';
import { InteractiveChallengeTracker } from '../components/challenge/InteractiveChallengeTracker';

interface Props {
  article: Article;
  onNavigate: (route: string) => void;
}

export const ArticlePage: React.FC<Props> = ({ article, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Resolve related articles
  const relatedArticles = article.relatedSlugs
    .map(slug => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);

  // Helper to render diagrams inside sections
  const renderDiagram = (diagramId?: string) => {
    if (!diagramId) return null;
    switch (diagramId) {
      case 'skin-layers': return <SkinLayersDiagram />;
      case 'acne-formation': return <AcneFormationDiagram />;
      case 'protein-plate': return <ProteinPlateDiagram />;
      case 'menstrual-hormones': return <MenstrualHormoneDiagram />;
      case 'ayurvedic-herbs': return <AyurvedicHerbsDiagram />;
      case 'movement-matrix': return <MovementComparisonDiagram />;
      case 'iron-absorption': return <IronAbsorptionDiagram />;
      case 'circadian-sleep': return <CircadianSleepDiagram />;
      case 'challenge-tracker': return <InteractiveChallengeTracker onSelectArticle={(slug) => onNavigate(`/article/${slug}`)} />;
      default: return null;
    }
  };

  // Helper for internal linking within body text
  // We can render rich paragraph text and auto-link key wellness phrases to actual routes!
  const renderParagraphWithLinks = (text: string, pIdx: number) => {
    // Map of keywords to internal article routes with descriptive anchor text
    const linkMap: { [keyword: string]: { route: string; label: string } } = {
      'ultimate skincare guide': { route: '/article/ultimate-skincare-guide-indian-women', label: 'ultimate skincare guide for Indian women' },
      'skincare guide': { route: '/article/ultimate-skincare-guide-indian-women', label: 'skincare guide for Indian women' },
      'acne and pigmentation': { route: '/article/acne-and-pigmentation-what-actually-works', label: 'acne and pigmentation clinical guide' },
      'vegetarian protein sources': { route: '/article/protein-for-women-indian-vegetarian-sources', label: 'vegetarian protein sources for Indian women' },
      'Indian vegetarian protein guide': { route: '/article/protein-for-women-indian-vegetarian-sources', label: 'Indian vegetarian protein guide' },
      "women’s health in India": { route: '/article/womens-health-india-preventive-care-guide', label: "women’s health in India preventive guide" },
      "women's health in India": { route: '/article/womens-health-india-preventive-care-guide', label: "women’s health in India preventive guide" },
      'Ayurveda for women’s wellness': { route: '/article/ayurveda-for-womens-wellness-modern-science', label: 'Ayurveda for women’s wellness guide' },
      "Ayurveda for women's wellness": { route: '/article/ayurveda-for-womens-wellness-modern-science', label: 'Ayurveda for women’s wellness guide' },
      'beginner’s strength training guide': { route: '/article/strength-training-for-women-beginners-guide', label: 'beginner’s strength training guide for women' },
      "beginner's strength training guide": { route: '/article/strength-training-for-women-beginners-guide', label: 'beginner’s strength training guide for women' },
      'Pilates vs Yoga vs Gym': { route: '/article/pilates-vs-yoga-vs-gym-comparison', label: 'comparative analysis of Pilates vs Yoga vs Gym' },
      'iron and nutrition': { route: '/article/iron-nutrition-energy-indian-women', label: 'iron, nutrition and energy guide' },
      'sleep, stress, and hormonal health': { route: '/article/sleep-stress-hormonal-health-guide', label: 'sleep, stress, and hormonal health guide' },
      'sleep, stress and hormonal health': { route: '/article/sleep-stress-hormonal-health-guide', label: 'sleep, stress and hormonal health guide' },
      '30-day women’s wellness challenge': { route: '/article/30-day-womens-wellness-challenge', label: '30-day women’s wellness challenge' },
      "30-day women's wellness challenge": { route: '/article/30-day-womens-wellness-challenge', label: '30-day women’s wellness challenge' }
    };

    // Check if paragraph contains any of these phrases
    // If found, highlight and link smoothly
    let contentNode: React.ReactNode = text;

    // Check for AEO Direct Answer prefix
    const isDirectAnswer = text.startsWith('**Direct Answer:**');
    const displayHtml = text;

    for (const [phrase, target] of Object.entries(linkMap)) {
      if (text.toLowerCase().includes(phrase.toLowerCase()) && !text.includes('href=')) {
        const regex = new RegExp(`(${phrase})`, 'gi');
        const parts = text.split(regex);
        if (parts.length > 1) {
          return (
            <p key={pIdx} className={`text-[#38332E] leading-relaxed text-base sm:text-[17px] font-sans my-4 ${isDirectAnswer ? 'p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E1D5]' : ''}`}>
              {parts.map((part, i) => {
                if (part.toLowerCase() === phrase.toLowerCase()) {
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        onNavigate(target.route);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[#8C533C] underline underline-offset-4 decoration-[#D6CAB8] hover:decoration-[#8C533C] font-semibold transition-colors cursor-pointer inline text-left"
                    >
                      {part}
                    </button>
                  );
                }
                if (part.includes('**Direct Answer:**')) {
                  const subParts = part.split('**Direct Answer:**');
                  return (
                    <React.Fragment key={i}>
                      <strong className="text-[#5A3825] font-serif text-base block mb-1">Direct Answer:</strong>
                      {subParts[1]}
                    </React.Fragment>
                  );
                }
                return part;
              })}
            </p>
          );
        }
      }
    }

    if (isDirectAnswer) {
      const cleanText = text.replace('**Direct Answer:**', '').trim();
      return (
        <div key={pIdx} className="p-4 sm:p-5 bg-[#FAF7F2] rounded-xl border border-[#E8E1D5] my-5 text-[#38332E] leading-relaxed">
          <strong className="text-[#5A3825] font-serif text-base block mb-1">Direct Answer:</strong>
          <p className="text-base sm:text-[17px] font-sans">{cleanText}</p>
        </div>
      );
    }

    return (
      <p key={pIdx} className="text-[#38332E] leading-relaxed text-base sm:text-[17px] font-sans my-4">
        {text}
      </p>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: article.categoryName, route: `/category/${article.category}` },
          { label: article.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Article Header */}
      <header className="space-y-4 my-6 sm:my-8">
        {/* Zero-Pill Metadata */}
        <div className="flex items-center flex-wrap gap-2 text-xs text-[#7A6858]">
          <button
            onClick={() => onNavigate(`/category/${article.category}`)}
            className="uppercase tracking-widest font-semibold text-[#8C533C] hover:underline cursor-pointer"
          >
            {article.categoryName}
          </button>
          <span aria-hidden="true">·</span>
          <span>{article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums text-[#8A7A6D]">{article.wordCount} words</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2C2926] leading-[1.2] text-balance">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#6A6560] leading-relaxed font-serif italic text-balance">
          {article.subtitle}
        </p>

        {/* SEO & AEO Keyword Focus Indicator */}
        <div className="py-2.5 px-4 bg-[#FAF6EF] rounded-lg border border-[#E8E1D5] text-xs text-[#554E48] flex flex-wrap items-center gap-x-3 gap-y-1">
          <div>
            <span className="font-semibold text-[#8C533C] uppercase tracking-wider text-[11px]">Primary Focus:</span>{' '}
            <span className="font-medium text-[#2C2926]">{article.mainKeyword}</span>
          </div>
          <span className="text-[#C4B9AA]" aria-hidden="true">·</span>
          <div>
            <span className="font-semibold text-[#586F60] uppercase tracking-wider text-[11px]">Related Topics:</span>{' '}
            <span className="text-[#6A6560]">{article.relatedKeywords.join(', ')}</span>
          </div>
        </div>

        {/* Byline & Actions bar */}
        <div className="pt-4 pb-4 border-y border-[#E8E1D5] flex items-center justify-between flex-wrap gap-4 text-xs text-[#6A6560]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#E8E1D5] flex items-center justify-center text-[#5A3825] font-serif font-bold text-sm">
              SB
            </div>
            <div>
              <div className="font-semibold text-[#2C2926] text-sm">{article.author.name}</div>
              <div className="text-[#8A7A6D]">{article.author.title}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                saved ? 'bg-[#EEF3EF] border-[#586F60] text-[#586F60]' : 'border-[#E8E1D5] hover:bg-white text-[#6A6560]'
              }`}
              title="Save guide"
            >
              <Bookmark className="w-4 h-4" />
              <span>{saved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-lg border border-[#E8E1D5] hover:bg-white text-[#6A6560] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy link to guide"
            >
              {copied ? <Check className="w-4 h-4 text-[#586F60]" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Illustration */}
      <div className="my-8 rounded-2xl overflow-hidden border border-[#E8E1D5] bg-[#FAF6EF] shadow-xs">
        <img
          src={article.heroImage}
          alt={article.heroImageAlt}
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-auto object-cover max-h-[520px]"
        />
        {article.heroCaption && (
          <p className="px-5 py-3 text-xs text-[#7A6858] italic border-t border-[#E8E1D5] bg-[#FAF7F2]">
            {article.heroCaption}
          </p>
        )}
      </div>

      {/* Table of Contents */}
      {article.toc && article.toc.length > 0 && (
        <TableOfContents items={article.toc} />
      )}

      {/* Article Body Content */}
      <article className="prose prose-stone max-w-none text-[#2C2926]">
        {article.sections.map((section, sIdx) => (
          <section key={section.id} id={section.id} className="my-10 scroll-mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2926] tracking-tight mb-2 border-b border-[#E8E1D5] pb-2">
              {section.heading}
            </h2>

            {section.subheading && (
              <h3 className="font-serif text-base sm:text-lg text-[#8C533C] italic mb-4 font-normal">
                {section.subheading}
              </h3>
            )}

            {/* Paragraphs */}
            <div className="space-y-4">
              {section.content.map((p, pIdx) => renderParagraphWithLinks(p, pIdx))}
            </div>

            {/* In-article Diagram Illustration */}
            {section.diagramId && (
              <div className="my-6">
                {renderDiagram(section.diagramId)}
              </div>
            )}

            {/* Key Takeaway Note */}
            {section.keyTakeaway && (
              <div className="my-4 p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E1D5] text-xs text-[#5A3825]">
                <strong className="font-serif text-sm block mb-1">Key Takeaway:</strong>
                <p className="leading-relaxed">{section.keyTakeaway}</p>
              </div>
            )}

            {/* Callout box (No thick left border!) */}
            {section.callout && (
              <div className="my-5 p-5 bg-white rounded-xl border border-[#E8E1D5] shadow-2xs">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8C533C] font-semibold block mb-1">
                  {section.callout.title}
                </span>
                <p className="text-xs sm:text-sm text-[#554E48] leading-relaxed">
                  {section.callout.text}
                </p>
              </div>
            )}

            {/* Contextual "Read Next" Card in the middle of the article */}
            {sIdx === 2 && relatedArticles.length > 0 && (
              <div className="my-8 p-4 sm:p-5 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#8C533C] font-semibold">
                    Related Editorial Recommendation
                  </span>
                  <div className="font-serif text-base font-bold text-[#2C2926]">
                    {relatedArticles[0].title}
                  </div>
                  <p className="text-xs text-[#6A6560] line-clamp-1">
                    {relatedArticles[0].subtitle}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onNavigate(`/article/${relatedArticles[0].slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 bg-[#5A3825] hover:bg-[#462B1C] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </section>
        ))}
      </article>

      {/* Medical Disclaimer Banner */}
      {article.hasMedicalDisclaimer && (
        <MedicalDisclaimerBanner
          reviewedBy={article.medicalReviewedBy}
          onNavigateDisclaimer={() => onNavigate('/medical-disclaimer')}
        />
      )}

      {/* Academic & Clinical References */}
      {article.references && article.references.length > 0 && (
        <section className="my-10 p-6 bg-white rounded-xl border border-[#E8E1D5]">
          <h3 className="font-serif text-lg font-bold text-[#2C2926] mb-3 pb-2 border-b border-[#E8E1D5] flex items-center justify-between">
            <span>Academic & Clinical References</span>
            <span className="text-xs font-mono font-normal text-[#8A7A6D]">Evidence Checked</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-[#6A6560]">
            {article.references.map((ref, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="font-mono text-[#8C533C] font-semibold shrink-0">[{idx + 1}]</span>
                <div>
                  <strong className="text-[#2C2926]">{ref.citation}.</strong> "{ref.source}" {ref.year ? `(${ref.year})` : ''}.
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Author Bio Box */}
      <section className="my-10 p-6 bg-[#FAF6EF] rounded-xl border border-[#E8E1D5] flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="w-16 h-16 rounded-full bg-white border border-[#E8E1D5] flex items-center justify-center text-[#5A3825] font-serif font-bold text-xl shrink-0">
          SB
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h4 className="font-serif text-lg font-bold text-[#2C2926]">{article.author.name}</h4>
            <span className="text-xs text-[#8C533C] font-mono">· {article.author.title}</span>
          </div>
          <p className="text-xs text-[#6A6560] leading-relaxed">
            {article.author.bio}
          </p>
        </div>
      </section>

      {/* Related Articles Bottom Grid */}
      {relatedArticles.length > 0 && (
        <section className="my-14 pt-8 border-t border-[#E8E1D5]">
          <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#E8E1D5]">
            <h3 className="font-serif text-2xl font-bold text-[#2C2926]">
              Related Reading
            </h3>
            <span className="text-xs text-[#8A7A6D]">Curated for this topic</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard
                key={rel.slug}
                article={rel}
                onSelect={(slug) => onNavigate(`/article/${slug}`)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
