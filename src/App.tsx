/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { CategoryPage } from './pages/CategoryPage';
import { AllArticlesPage } from './pages/AllArticlesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MedicalDisclaimerPage } from './pages/MedicalDisclaimerPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SearchModal } from './components/search/SearchModal';
import { ProteinCalculatorModal } from './components/calculator/ProteinCalculatorModal';
import { getArticleBySlug } from './data/articles';
import { CategorySlug } from './types/article';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [searchOpen, setSearchOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  // Sync route with browser history (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newRoute: string) => {
    if (newRoute !== currentRoute) {
      window.history.pushState({}, '', newRoute);
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dynamic document title and meta description updates based on active page
  useEffect(() => {
    let title = "Evidence-Informed Women's Wellness | JADORESHREY";
    let description = "Evidence-informed wellness publication for Indian women covering melanin skincare, vegetarian protein, PCOS, Ayurveda, and strength. Read our guides.";

    if (currentRoute === '/' || currentRoute === '') {
      title = "Evidence-Informed Women's Wellness | JADORESHREY";
      description = "Evidence-informed wellness publication for Indian women covering melanin skincare, vegetarian protein, PCOS, Ayurveda, and strength. Read our guides.";
    } else if (currentRoute.startsWith('/article/')) {
      const slug = currentRoute.replace('/article/', '');
      const art = getArticleBySlug(slug);
      if (art) {
        title = art.seoTitle;
        description = art.metaDescription;
      }
    } else if (currentRoute.startsWith('/category/')) {
      const cat = currentRoute.replace('/category/', '');
      const categoryTitles: Record<string, { title: string; desc: string }> = {
        'skincare': {
          title: "Clinical Skincare for Indian Skin | JADORESHREY",
          desc: "Evidence-informed skincare for Fitzpatrick skin types III–V. Protect your barrier against tropical humidity, acne marks, and UVA with PA++++ sunscreens."
        },
        'womens-health': {
          title: "Women's Health in India & Hormones | JADORESHREY",
          desc: "Clinical guides on PCOS diagnosis, thyroid health, cervical screening, and pelvic floor recovery tailored to the Indian medical context. Learn more."
        },
        'nutrition': {
          title: "Protein & Nutrition for Women | JADORESHREY",
          desc: "Master high-protein Indian vegetarian nutrition, calculate ICMR targets, and reverse widespread iron deficiency with clinical food combinations."
        },
        'ayurveda': {
          title: "Evidence-Based Ayurveda for Women | JADORESHREY",
          desc: "Classical Ayurvedic phytomedicine examined through modern clinical science. Discover Shatavari, Amla, and Ashwagandha with heavy-metal testing."
        },
        'fitness': {
          title: "Female Biomechanics & Strength | JADORESHREY",
          desc: "Empowering women with progressive strength training, reformer Pilates, and yoga for bone mineral density and lifelong metabolic vitality."
        },
        'daily-wellness': {
          title: "Circadian Sleep & Daily Habits | JADORESHREY",
          desc: "Science-backed daily wellness protocols, circadian light hygiene, and stress down-regulation routines to restore female endocrine balance."
        }
      };

      if (categoryTitles[cat]) {
        title = categoryTitles[cat].title;
        description = categoryTitles[cat].desc;
      }
    } else if (currentRoute === '/articles') {
      title = "All Articles & Clinical Guides | JADORESHREY";
      description = "Explore all 10 evidence-informed women's wellness guides spanning melanin dermatology, ICMR protein nutrition, PCOS, and strength training.";
    } else if (currentRoute === '/about') {
      title = "About Our Editorial Standards | JADORESHREY";
      description = "Learn about the mission, editorial independence, and medical review board behind JADORESHREY WELLNESS. Read our founding story.";
    } else if (currentRoute === '/contact') {
      title = "Contact Editorial Desk | JADORESHREY";
      description = "Submit letters to the editor, suggest clinical topics, or send scientific citation inquiries directly to our medical fact-checking team.";
    } else if (currentRoute === '/medical-disclaimer') {
      title = "Medical & Clinical Disclaimer | JADORESHREY";
      description = "Important medical disclaimer regarding educational content, physician consultations, and clinical standards on JADORESHREY WELLNESS.";
    } else if (currentRoute === '/privacy') {
      title = "Privacy Policy & Data Rights | JADORESHREY";
      description = "Transparent data protection policy compliant with India's Digital Personal Data Protection Act (DPDPA 2023). Review your rights.";
    }

    // Set document title
    document.title = title;

    // Update meta description
    let metaDescEl = document.querySelector('meta[name="description"]');
    if (!metaDescEl) {
      metaDescEl = document.createElement('meta');
      metaDescEl.setAttribute('name', 'description');
      document.head.appendChild(metaDescEl);
    }
    metaDescEl.setAttribute('content', description);

    // Update og:title and og:description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [currentRoute]);

  // Routing renderer
  const renderContent = () => {
    // 1. Home
    if (currentRoute === '/' || currentRoute === '') {
      return (
        <HomePage 
          onNavigate={navigate}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />
      );
    }

    // 2. Individual Article Route
    if (currentRoute.startsWith('/article/')) {
      const slug = currentRoute.replace('/article/', '');
      const article = getArticleBySlug(slug);
      if (article) {
        return <ArticlePage article={article} onNavigate={navigate} />;
      }
      return (
        <div className="max-w-2xl mx-auto py-24 px-4 text-center space-y-4">
          <h2 className="font-serif text-3xl font-bold text-[#2C2926]">Guide Not Found</h2>
          <p className="text-sm text-[#6A6560]">The requested wellness article could not be located in our library.</p>
          <button
            onClick={() => navigate('/articles')}
            className="px-5 py-2.5 bg-[#5A3825] text-white text-xs font-semibold rounded-lg"
          >
            Browse All 10 Guides
          </button>
        </div>
      );
    }

    // 3. Category Archive Route
    if (currentRoute.startsWith('/category/')) {
      const categoryId = currentRoute.replace('/category/', '') as CategorySlug;
      return <CategoryPage categoryId={categoryId} onNavigate={navigate} />;
    }

    // 4. All Articles
    if (currentRoute === '/articles') {
      return <AllArticlesPage onNavigate={navigate} />;
    }

    // 5. About
    if (currentRoute === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 6. Contact
    if (currentRoute === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 7. Medical Disclaimer
    if (currentRoute === '/medical-disclaimer') {
      return <MedicalDisclaimerPage onNavigate={navigate} />;
    }

    // 8. Privacy Policy
    if (currentRoute === '/privacy') {
      return <PrivacyPage onNavigate={navigate} />;
    }

    // Fallback: 404
    return (
      <div className="max-w-2xl mx-auto py-24 px-4 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-[#2C2926]">Page Not Found</h2>
        <p className="text-sm text-[#6A6560]">The page you requested does not exist or has been relocated.</p>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 bg-[#5A3825] text-white text-xs font-semibold rounded-lg"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#211F1D] selection:bg-[#E8D5CE] selection:text-[#5A3825]">
      {/* Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectArticle={(slug) => navigate(`/article/${slug}`)}
      />

      <ProteinCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onSelectArticle={(slug) => navigate(`/article/${slug}`)}
      />
    </div>
  );
}
