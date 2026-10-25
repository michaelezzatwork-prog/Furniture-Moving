import React, { useState } from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, FAQS, createWhatsAppUrl } from '../../data/companyData';
import { DynamicPriceCalculator } from '../calculator/DynamicPriceCalculator';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Calculator,
  HelpCircle,
  ChevronDown,
  Building,
} from 'lucide-react';

interface ContactQuotePageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactQuotePage: React.FC<ContactQuotePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-xs font-semibold text-amber-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>تسعير فوري ومقايسة دقيقة بدون أي رسوم خفية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            حاسبة الأسعار التفاعلية وطلب المعاينة الفورية
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            احسب تكلفة نقل أو تخزين أثاثك فوراً بالريال السعودي بناءً على عدد الغرف والأدوار والمكان، ثم أرسل المواصفات للواتساب أو المشرف بضغطة واحدة.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg transition-all"
            >
              اتصال مباشر: {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all"
            >
              واتساب خدمة العملاء: {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Price Calculator Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DynamicPriceCalculator />
      </section>

      {/* Official Direct Contact Details & Working Hours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">الاتصال الهاتفي السريع</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              طاقم المعاينة وتوجيه الدينات متواجد للرد على اتصالاتكم وتأكيد المواعيد في غضون ثوانٍ.
            </p>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-block pt-2 text-base font-black text-blue-900 hover:text-amber-600 font-mono"
              dir="ltr"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">خدمة عملاء واتساب 24/7</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              يمكنك تصوير الأثاث وإرسال مقاطع فيديو عبر الواتساب للحصول على تسعيرة دقيقة في دقائق.
            </p>
            <a
              href={createWhatsAppUrl('السلام عليكم، أود إرسال صور الأثاث لتقدير تكلفة النقل والتخزين.')}
              target="_blank"
              rel="noreferrer"
              className="inline-block pt-2 text-xs font-bold text-emerald-700 hover:underline"
            >
              مراسلة الواتساب الآن ←
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">موقعنا وتغطيتنا الميدانية</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              فروع وسيارات متمركزة في شمال، شرق، غرب، وجنوب الرياض، مع مستودعات مركزية بطريق الملك فهد.
            </p>
            <div className="pt-2 text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>خدمة على مدار 24 ساعة طوال أيام الأسبوع</span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-blue-900 font-bold text-xs">إجابات واضحة</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            الأسئلة الشائعة حول أسعار وحجز نقل العفش
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-blue-900 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
