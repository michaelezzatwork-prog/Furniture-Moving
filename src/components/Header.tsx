import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyData';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Truck } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'الرئيسية والتخزين' },
    { id: 'packing', label: 'الفك والتركيب والتغليف' },
    { id: 'coverage', label: 'النقل داخل وخارج الرياض' },
    { id: 'landing-directory', label: 'صفحات الأحياء والخدمات' },
    { id: 'contact', label: 'التواصل وطلب السعر' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>ضمان شامل على كافة المنقولات</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">خدمة 24 ساعة في جميع أحياء الرياض والمملكة</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 font-semibold transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>واتساب سريع</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header (3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-right focus:outline-hidden group cursor-pointer shrink-0"
            aria-label="شركة إتقان لنقل وتخزين العفش بالرياض"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                شركة إتقان
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-1">
                لنقل وتخزين العفش بالرياض
              </span>
            </div>
          </button>

          {/* Zone 2: 4 Clean Single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer py-2 ${
                    isActive
                      ? 'text-blue-900 font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Direct Contact Button) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>اتصل الآن: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-right px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-900 text-white font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>اتصال فوري: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-sm hover:bg-emerald-700"
              >
                <MessageCircle className="w-4 h-4" />
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
