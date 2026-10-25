import React, { useEffect } from 'react';
import { PageId, SeoLandingPageId } from '../../types';
import { SEO_LANDING_PAGES } from '../../data/landingPagesData';
import { COMPANY_INFO, createWhatsAppUrl } from '../../data/companyData';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Star,
  ChevronLeft,
  Truck,
  Sparkles,
  HelpCircle,
  ArrowLeft,
  Building,
  Layers,
  Calculator,
} from 'lucide-react';

interface SeoLandingPageProps {
  pageId: SeoLandingPageId;
  onNavigate: (page: PageId) => void;
}

export const SeoLandingPage: React.FC<SeoLandingPageProps> = ({ pageId, onNavigate }) => {
  const pageData = SEO_LANDING_PAGES[pageId] || SEO_LANDING_PAGES['landing-north-riyadh'];

  // Dynamic SEO Title and Meta Description update
  useEffect(() => {
    document.title = pageData.seoTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageData.metaDescription);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageData.seoTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', pageData.metaDescription);
    }

    // Dynamic JSON-LD Service Schema for this specific landing page
    const scriptId = 'schema-landing-specific';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageData.keyword,
      description: pageData.metaDescription,
      provider: {
        '@type': 'MovingCompany',
        name: COMPANY_INFO.name,
        telephone: COMPANY_INFO.phoneInternational,
        priceRange: pageData.startingPrice,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: pageData.targetArea,
      },
      offers: {
        '@type': 'Offer',
        price: pageData.startingPrice.replace(/[^0-9]/g, '') || '450',
        priceCurrency: 'SAR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: pageData.localReview.rating.toString(),
        reviewCount: '3200',
      },
    };

    script.textContent = JSON.stringify(serviceSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [pageData]);

  const otherLandingPages = (Object.keys(SEO_LANDING_PAGES) as SeoLandingPageId[]).filter(
    (id) => id !== pageId && id !== 'landing-directory'
  );

  return (
    <div className="space-y-16 pb-20">
      
      {/* Breadcrumbs & SEO Kicker */}
      <div className="bg-slate-100/80 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => onNavigate('landing-directory')}
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              دليل خدمات وأحياء الرياض
            </button>
            <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-950 font-bold">{pageData.keyword}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>نطاق الخدمة: {pageData.targetArea}</span>
          </div>
        </div>
      </div>

      {/* Hero Section specifically optimized for the target keyword */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-700/60 text-xs font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>الخدمة المعتمدة في {pageData.targetArea} | استجابة {pageData.responseTime}</span>
              </div>

              {/* Exact Targeted H1 Headline for SEO */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight sm:leading-tight">
                {pageData.heroHeadline}
              </h1>

              {/* Subheadline (H2) */}
              <h2 className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {pageData.heroSubheadline}
              </h2>

              {/* Price & Guarantee Indicators */}
              <div className="flex flex-wrap items-center gap-4 text-xs pt-2">
                <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200">
                  <span className="text-slate-400 block mb-0.5">الأسعار تبدأ من:</span>
                  <span className="text-base font-bold text-amber-400 font-mono tabular-nums">{pageData.startingPrice}</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200">
                  <span className="text-slate-400 block mb-0.5">ضمان المنقولات:</span>
                  <span className="text-sm font-bold text-emerald-400">100% موثق بالعقد</span>
                </div>
                <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200">
                  <span className="text-slate-400 block mb-0.5">سرعة الاستجابة:</span>
                  <span className="text-sm font-bold text-sky-400">{pageData.responseTime}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-transform hover:scale-105 cursor-pointer"
                >
                  اتصل الآن: {COMPANY_INFO.phoneDisplay}
                </a>

                <a
                  href={createWhatsAppUrl(`السلام عليكم، أود الاستفسار عن خدمة ${pageData.keyword} في ${pageData.targetArea}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>طلب عرض سعر عبر الواتساب</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>حاسبة السعر</span>
                </button>
              </div>

              {/* Secondary SEO Keywords tags */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1.5">الخدمات والكلمات المشمولة في هذه الصفحة:</span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  {pageData.secondaryKeywords.map((kw, i) => (
                    <span key={i} className="text-slate-400 hover:text-white transition-colors">
                      {kw} {i < pageData.secondaryKeywords.length - 1 && '·'}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl relative group">
                <img
                  src={pageData.heroImage}
                  alt={`${pageData.keyword} - ${pageData.targetArea} مع فك وتغليف الأثاث ونقل العفش بالرياض`}
                  width={1200}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-slate-700 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400">{pageData.keyword}</span>
                    <span className="text-emerald-400 font-semibold">جاهزون الآن 24/7</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Overview & Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <span className="text-blue-900 font-bold text-xs">تفاصيل الخدمة ومميزاتها</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              لماذا تختار شركة إتقان لخدمة {pageData.keyword}؟
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
              {pageData.overview}
            </p>
          </div>

          {/* Value Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pageData.whyChooseUs.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Key Districts (if present) */}
          {pageData.keyDistricts && pageData.keyDistricts.length > 0 && (
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-900" />
                <span>أبرز الأحياء المشمولة بالتغطية الفورية في {pageData.targetArea}:</span>
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {pageData.keyDistricts.map((district, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-blue-50/80 text-blue-950 border border-blue-200/60 font-semibold"
                  >
                    ✓ {district}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Steps Execution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-blue-900 font-bold text-xs">خطوات العمل المتبعة</span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            مراحل تنفيذ {pageData.keyword} بدقة وإتقان
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pageData.serviceSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-blue-900/20 block mb-1 font-mono">0{idx + 1}</span>
                <h4 className="font-bold text-sm text-slate-900 mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local Verified Review */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(pageData.localReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-amber-300 font-bold">تقييم موثق لعميل محلي</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
              "{pageData.localReview.comment}"
            </p>
            <div className="text-xs text-slate-400">
              <span className="text-white font-bold">{pageData.localReview.clientName}</span>
              <span className="mx-2">·</span>
              <span>{pageData.localReview.neighborhood}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
            >
              اتصال مباشر: {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={createWhatsAppUrl(`السلام عليكم، أحتاج إلى خدمة ${pageData.keyword}.`)}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
            >
              واتساب فوري
            </a>
          </div>
        </div>
      </section>

      {/* Targeted FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-blue-900 font-bold text-xs">إجابات مباشرة</span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            الأسئلة الشائعة حول {pageData.keyword}
          </h2>
        </div>

        <div className="space-y-3">
          {pageData.faq.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2"
            >
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-900 shrink-0" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 pr-6 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal SEO Cross-Links to Other Service Landing Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-200">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-blue-900 font-bold">روابط الصفحات الشقيقة</span>
            <h3 className="text-lg font-black text-slate-900">
              صفحات خدمات ونقل أخرى قد تهمك في الرياض
            </h3>
          </div>
          <button
            onClick={() => onNavigate('landing-directory')}
            className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
          >
            <span>عرض كل صفحات الدليل</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherLandingPages.slice(0, 3).map((otherId) => {
            const other = SEO_LANDING_PAGES[otherId];
            return (
              <button
                key={otherId}
                onClick={() => onNavigate(otherId)}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-right cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                    {other.keyword}
                  </span>
                  <ChevronLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:-translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {other.metaDescription}
                </p>
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400">{other.targetArea}</span>
                  <span className="text-amber-600 font-bold">{other.startingPrice}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

    </div>
  );
};
