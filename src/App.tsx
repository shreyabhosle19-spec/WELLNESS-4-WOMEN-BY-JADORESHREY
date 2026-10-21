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

  // Dynamic document title update based on active page
  useEffect(() => {
    if (currentRoute === '/' || currentRoute === '') {
      document.title = "JADORESHREY WELLNESS — Evidence-Informed Skincare, Health & Nutrition";
    } else if (currentRoute.startsWith('/article/')) {
      const slug = currentRoute.replace('/article/', '');
      const art = getArticleBySlug(slug);
      if (art) {
        document.title = `${art.title} — JADORESHREY WELLNESS`;
      }
    } else if (currentRoute.startsWith('/category/')) {
      const cat = currentRoute.replace('/category/', '');
      const formatted = cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      document.title = `${formatted} Archives — JADORESHREY WELLNESS`;
    } else if (currentRoute === '/articles') {
      document.title = "All Articles & Clinical Guides — JADORESHREY WELLNESS";
    } else if (currentRoute === '/about') {
      document.title = "About Our Editorial Standards — JADORESHREY WELLNESS";
    } else if (currentRoute === '/contact') {
      document.title = "Contact Editorial Desk — JADORESHREY WELLNESS";
    } else if (currentRoute === '/medical-disclaimer') {
      document.title = "Medical & Scientific Disclaimer — JADORESHREY WELLNESS";
    } else if (currentRoute === '/privacy') {
      document.title = "Privacy Policy (DPDPA 2023) — JADORESHREY WELLNESS";
    }
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
