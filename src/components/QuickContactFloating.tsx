import React, { useState } from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyData';
import { MessageCircle, Phone, X, ShieldAlert } from 'lucide-react';

export const QuickContactFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3 pointer-events-auto">
      {/* Tooltip / Quick Action Popover */}
      {showTooltip && (
        <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 w-72 text-right relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 left-2.5 text-slate-400 hover:text-slate-600 p-1"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="font-bold text-sm text-slate-900">خدمة العملاء متصلة الآن</h4>
          </div>
          <p className="text-xs text-slate-600 mb-3">
            احصل على مقايسة فورية لنقل وتخزين أثاثك بالرياض مع خصم خاص عبر الواتساب.
          </p>
          <div className="space-y-2">
            <a
              href={createWhatsAppUrl('السلام عليكم، أود الحصول على عرض سعر فوري لنقل العفش بالرياض.')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>محادثة واتساب فورية</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-xs font-bold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      {/* Action Buttons Group */}
      <div className="flex items-center gap-2.5">
        {/* WhatsApp Button */}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-105 transition-all focus:outline-hidden"
          aria-label="تواصل عبر الواتساب مع شركة إتقان"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
          </span>
          <MessageCircle className="w-7 h-7" />
        </a>

        {/* Quick Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 hover:bg-blue-950 text-white shadow-lg hover:scale-105 transition-all focus:outline-hidden sm:hidden"
          aria-label="اتصل هاتفياً"
        >
          <Phone className="w-5 h-5 text-amber-400" />
        </a>

        {/* Toggle Info Button (desktop) */}
        <button
          onClick={() => setShowTooltip(!showTooltip)}
          className="hidden sm:flex items-center gap-2 py-2 px-3.5 bg-slate-900/90 backdrop-blur-md text-white rounded-full text-xs font-semibold shadow-lg hover:bg-slate-950 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>طلب سعر سريع</span>
        </button>
      </div>
    </div>
  );
};
