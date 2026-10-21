export type CategorySlug = 
  | 'skincare' 
  | 'womens-health' 
  | 'nutrition' 
  | 'ayurveda' 
  | 'fitness' 
  | 'daily-wellness';

export interface Category {
  id: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
}

export interface Author {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}

export interface ReferenceItem {
  citation: string;
  source: string;
  year?: string;
  url?: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

export interface ArticleSection {
  id: string;
  heading: string;
  subheading?: string;
  content: string[]; // array of paragraphs or markdown-like text
  keyTakeaway?: string;
  diagramId?: string; // e.g. 'skin-layers', 'protein-plate', etc.
  callout?: {
    title: string;
    text: string;
    type?: 'tip' | 'clinical-note' | 'ayurveda-insight';
  };
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: CategorySlug;
  categoryName: string;
  heroImage: string;
  heroImageAlt: string;
  heroCaption?: string;
  author: Author;
  publishedDate: string;
  readTime: string;
  wordCount: number;
  excerpt: string;
  toc: TOCItem[];
  sections: ArticleSection[];
  relatedSlugs: string[];
  references: ReferenceItem[];
  medicalReviewedBy?: string;
  hasMedicalDisclaimer: boolean;
  featured?: boolean;
}
