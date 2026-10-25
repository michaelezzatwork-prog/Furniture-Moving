import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyData';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Truck, ChevronLeft, Lock, FileText, CheckCircle2, Building2, ReceiptText } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust & Google Ads Compliance Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>موقع موثق ومعتمد تجارياً</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>متوافق مع سياسات إعلانات جوجل ومعايير الأمان وحماية البيانات</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400">عقود رسمية وضمان 100% على المنقولات</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav('privacy')}
              className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer font-semibold transition-colors"
            >
              سياسة الخصوصية
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => handleNav('terms')}
              className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer font-semibold transition-colors"
            >
              الشروط والأحكام
            </button>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-amber-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">شركة إتقان</h3>
                <p className="text-xs text-slate-400">لنقل وتخزين العفش بالرياض</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              الخيار الأول والموثوق لنقل العفش السكني والتجاري داخل وخارج مدينة الرياض. نقدم خدمات فك وتركيب احترافية، تغليف خماسي الطبقات، ومستودعات تخزين آمنة ومكيفة بأفضل الأسعار.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 pt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>ضمان كامل على سلامة الأثاث والأجهزة 100%</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Legal Policies */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 inline-block">
              صفحات الموقع والسياسات
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                  <span>الرئيسية ومستودعات التخزين</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('packing')}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                  <span>فك وتركيب وتغليف الأثاث</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('coverage')}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                  <span>النقل داخل وخارج الرياض</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors text-right cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                  <span>التواصل وحاسبة الأسعار</span>
                </button>
              </li>

              {/* Dedicated High-Visibility Legal Links */}
              <li className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => handleNav('privacy')}
                  className="flex items-center gap-2 text-amber-400/90 hover:text-amber-300 font-semibold transition-colors text-right cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>سياسة الخصوصية (Privacy Policy)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="flex items-center gap-2 text-amber-400/90 hover:text-amber-300 font-semibold transition-colors text-right cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>الشروط والأحكام (Terms of Service)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Coverage Areas */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 inline-block">
              تغطيتنا الجغرافية
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>شمال الرياض: الملقا، حطين، الياسمين، النرجس، الصحافة، العارض</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>شرق الرياض: اليرموك، الرمال، المونسية، الروضة، الحمراء</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>غرب وجنوب ووسط: لبن، طويق، الشفا، العليا، السليمانية</span>
              </div>
              <div className="flex items-start gap-2 text-amber-300">
                <Truck className="w-4 h-4 shrink-0 mt-0.5" />
                <span>نقل لجميع مدن المملكة: جدة، مكة، الدمام، القصيم، الجنوب</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Direct Booking */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 inline-block">
              بيانات التواصل المباشر
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500 transition-colors"
                  dir="ltr"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div className="text-right">
                    <span className="block text-xs text-slate-400">اتصال هاتفي مباشر</span>
                    <span className="text-base font-black text-white">{COMPANY_INFO.phoneDisplay}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 hover:border-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-xs text-emerald-400">خدمة عملاء واتساب</span>
                    <span className="text-sm font-bold text-white">راسلنا على {COMPANY_INFO.phoneDisplay}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Landing Pages Directory Links */}
        <div className="py-8 my-8 border-y border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <h4 className="text-sm font-bold text-amber-400">
              صفحات الخدمات المتخصصة بالرياض (SEO Landing Pages)
            </h4>
            <button
              onClick={() => handleNav('landing-directory')}
              className="text-xs text-blue-400 hover:text-white underline cursor-pointer self-start md:self-auto"
            >
              عرض دليل كافة الأحياء والخدمات ←
            </button>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs text-slate-400">
            <button
              onClick={() => handleNav('landing-north-riyadh')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • شركة نقل عفش بشمال الرياض
            </button>
            <button
              onClick={() => handleNav('landing-yasmin-malqa')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • نقل عفش بحي الياسمين والملقا
            </button>
            <button
              onClick={() => handleNav('landing-east-riyadh')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • شركة نقل عفش بشرق الرياض
            </button>
            <button
              onClick={() => handleNav('landing-storage-riyadh')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • مستودعات تخزين اثاث بالرياض
            </button>
            <button
              onClick={() => handleNav('landing-dina-fleet')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • دينا نقل عفش بالرياض مجهزة
            </button>
            <button
              onClick={() => handleNav('landing-intercity')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • نقل عفش من الرياض إلى جدة والدمام
            </button>
            <button
              onClick={() => handleNav('landing-carpentry')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-right"
            >
              • نجار فك وتركيب اثاث ومطابخ بالرياض
            </button>
          </div>
        </div>

        {/* Saudi Commercial Registration & VAT Compliance Bar */}
        <div className="my-8 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 text-xs text-slate-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Box 1: Legal Entity */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-700/50 flex items-center justify-center text-amber-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-400">الكيان التجاري المعتمد</span>
                <span className="font-bold text-white text-xs">{COMPANY_INFO.taxEntityName}</span>
              </div>
            </div>

            {/* Box 2: Commercial Registration */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-400">السجل التجاري (CR)</span>
                <span className="font-mono font-bold text-emerald-400 text-sm tracking-wider tabular-nums">
                  {COMPANY_INFO.commercialRegistration}
                </span>
              </div>
            </div>

            {/* Box 3: VAT Number */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-9 h-9 rounded-lg bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 shrink-0">
                <ReceiptText className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-400">الرقم الضريبي (VAT)</span>
                <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm tracking-wider tabular-nums" dir="ltr">
                  {COMPANY_INFO.vatNumber}
                </span>
              </div>
            </div>

            {/* Box 4: ZATCA Compliance */}
            <div className="flex items-center gap-2.5 text-xs text-slate-400 border-t sm:border-t-0 pt-2 sm:pt-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>فواتير ضريبية إلكترونية معتمدة خاضعة لهيئة الزكاة والضريبة والجمارك (ZATCA)</span>
            </div>

          </div>
        </div>

        {/* Bottom Bar with Distinct Legal Links & Registration IDs */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 border-t border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-right">
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()} {COMPANY_INFO.name}.</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400">
              س.ت: <strong className="font-mono text-slate-300 tabular-nums">{COMPANY_INFO.commercialRegistration}</strong>
            </span>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-slate-400">
              الرقم الضريبي: <strong className="font-mono text-slate-300 tabular-nums" dir="ltr">{COMPANY_INFO.vatNumber}</strong>
            </span>
          </div>

          {/* Visible Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-amber-400 transition-colors cursor-pointer font-semibold underline underline-offset-4"
            >
              سياسة الخصوصية (Privacy Policy)
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-amber-400 transition-colors cursor-pointer font-semibold underline underline-offset-4"
            >
              الشروط والأحكام (Terms of Service)
            </button>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">الرياض - المملكة العربية السعودية</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
