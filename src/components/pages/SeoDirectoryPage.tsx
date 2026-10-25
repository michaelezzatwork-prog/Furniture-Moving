import React, { useState } from 'react';
import { PageId, SeoLandingPageId } from '../../types';
import { SEO_LANDING_PAGES } from '../../data/landingPagesData';
import { COMPANY_INFO, createWhatsAppUrl } from '../../data/companyData';
import {
  MapPin,
  Truck,
  Warehouse,
  Wrench,
  Search,
  Sparkles,
  ChevronLeft,
  ShieldCheck,
  Phone,
  MessageCircle,
  Building,
} from 'lucide-react';

interface SeoDirectoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const SeoDirectoryPage: React.FC<SeoDirectoryPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const landingList = (Object.keys(SEO_LANDING_PAGES) as SeoLandingPageId[]).filter(
    (id) => id !== 'landing-directory'
  );

  const filteredList = landingList.filter((id) => {
    const data = SEO_LANDING_PAGES[id];
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      data.keyword.toLowerCase().includes(term) ||
      data.targetArea.toLowerCase().includes(term) ||
      data.metaDescription.toLowerCase().includes(term) ||
      (data.keyDistricts && data.keyDistricts.some((d) => d.toLowerCase().includes(term)))
    );
  });

  const getIconForLanding = (id: SeoLandingPageId) => {
    if (id === 'landing-storage-riyadh') return <Warehouse className="w-5 h-5 text-purple-600" />;
    if (id === 'landing-carpentry') return <Wrench className="w-5 h-5 text-amber-600" />;
    return <Truck className="w-5 h-5 text-blue-600" />;
  };

  return (
    <div className="space-y-16 pb-20 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>فهرس ودليل صفحات الخدمات المتخصصة بالرياض</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
          صفحات الخدمات المخصصة لكل حي وكلمة مفتاحية بالرياض
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          نظراً لكبر مساحة العاصمة الرياض، خصصنا صفحات مستقلة لكل منطقة وخدمة لتقديم تفاصيل التغطية الميدانية، أوقات الوصول الدقيقة، والأسعار الشفافة لكل حي.
        </p>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto pt-2">
          <input
            type="text"
            placeholder="ابحث بالحي أو الخدمة (مثلاً: الياسمين، شمال الرياض، تخزين)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-11 py-3 text-xs sm:text-sm rounded-2xl border border-slate-300 focus:outline-hidden focus:border-blue-900 bg-white shadow-xs"
          />
          <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-5.5" />
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map((id) => {
          const item = SEO_LANDING_PAGES[id];
          return (
            <div
              key={id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIconForLanding(id)}
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    تبدأ من {item.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{item.targetArea}</span>
                  <span>·</span>
                  <span>{item.responseTime}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-950 transition-colors">
                  {item.keyword}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {item.metaDescription}
                </p>

                {item.keyDistricts && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.keyDistricts.slice(0, 4).map((d, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {d}
                      </span>
                    ))}
                    {item.keyDistricts.length > 4 && (
                      <span className="text-[11px] px-1.5 py-0.5 text-slate-400">
                        +{item.keyDistricts.length - 4} أحياء
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors cursor-pointer"
                >
                  <span>عرض صفحة الخدمة المخصصة</span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 transition-colors"
                  title="اتصال سريع"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support Box */}
      <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-right">
          <h3 className="text-xl font-bold">لم تجد حيك ضمن القائمة السريعة؟</h3>
          <p className="text-xs text-slate-300">
            شركة إتقان تغطي كافة أحياء الرياض الـ 80 والمحافظات المجاورة دون استثناء. اتصل بنا فوراً لنصلك بأقرب دينا متواجدة.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            اتصال مباشر: {COMPANY_INFO.phoneDisplay}
          </a>
          <a
            href={createWhatsAppUrl('السلام عليكم، أود الاستفسار عن توفر دينا نقل عفش في حيي بالرياض.')}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
          >
            استفسار واتساب
          </a>
        </div>
      </div>

    </div>
  );
};
