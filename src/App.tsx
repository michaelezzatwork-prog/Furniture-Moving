import React, { useState, useEffect } from 'react';
import { PageId, SeoLandingPageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { HomePage } from './components/pages/HomePage';
import { PackingAssemblyPage } from './components/pages/PackingAssemblyPage';
import { MovingCoveragePage } from './components/pages/MovingCoveragePage';
import { ContactQuotePage } from './components/pages/ContactQuotePage';
import { LegalPage } from './components/pages/LegalPage';
import { SeoLandingPage } from './components/pages/SeoLandingPage';
import { SeoDirectoryPage } from './components/pages/SeoDirectoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const validLandingIds: SeoLandingPageId[] = [
    'landing-north-riyadh',
    'landing-east-riyadh',
    'landing-yasmin-malqa',
    'landing-storage-riyadh',
    'landing-dina-fleet',
    'landing-intercity',
    'landing-carpentry',
    'landing-directory',
  ];

  // Sync with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (
        ['home', 'packing', 'coverage', 'contact', 'privacy', 'terms'].includes(hash) ||
        validLandingIds.includes(hash as SeoLandingPageId)
      ) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSeoLanding = validLandingIds.includes(currentPage as SeoLandingPageId);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800" dir="rtl">
      {/* 3-Zone Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'packing' && <PackingAssemblyPage onNavigate={handleNavigate} />}
        {currentPage === 'coverage' && <MovingCoveragePage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactQuotePage onNavigate={handleNavigate} />}
        {(currentPage === 'privacy' || currentPage === 'terms') && (
          <LegalPage initialTab={currentPage} onNavigate={handleNavigate} />
        )}
        {currentPage === 'landing-directory' && (
          <SeoDirectoryPage onNavigate={handleNavigate} />
        )}
        {isSeoLanding && currentPage !== 'landing-directory' && (
          <SeoLandingPage pageId={currentPage as SeoLandingPageId} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* WhatsApp & Call Floating Action Component */}
      <QuickContactFloating />
    </div>
  );
}
