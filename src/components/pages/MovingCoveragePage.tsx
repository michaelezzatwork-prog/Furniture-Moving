import React, { useState } from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, RIYADH_ZONES, INTERCITY_ROUTES, createWhatsAppUrl } from '../../data/companyData';
import {
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowLeft,
  Search,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface MovingCoveragePageProps {
  onNavigate: (page: PageId) => void;
}

export const MovingCoveragePage: React.FC<MovingCoveragePageProps> = ({ onNavigate }) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchDistrict, setSearchDistrict] = useState<string>('');

  const filteredZones = RIYADH_ZONES.filter((z) => {
    if (selectedZone !== 'all' && z.zone !== selectedZone) return false;
    if (!searchDistrict.trim()) return true;
    return z.keyDistricts.some((d) => d.includes(searchDistrict.trim())) || z.name.includes(searchDistrict.trim());
  });

  const fleetTypes = [
    {
      title: 'دينا مقفلة ومؤمنة (صندوق مغلق 4.5 متر)',
      desc: 'الخيار المثالي لنقل الشقق والمنازل المتوسطة داخل أحياء الرياض. صندوق معزول حرارياً ومحمي تماماً ضد الأتربة والأمطار.',
      capacity: 'تستوعب شقة من 2 إلى 3 غرف نوم ومجلس',
      features: ['صندوق معزول ومبطن بالكامل', 'أحزمة تثبيت داخلية للأجهزة', 'حماية الخصوصية التامة للعفش'],
    },
    {
      title: 'دينا جامبو عملاقة (صندوق 6 متر كارتك)',
      desc: 'مخصصة لنقل الفلل الكبيرة، القصور، والمكاتب، إضافة إلى رحلات النقل الطويلة بين مدن المملكة مع سعة تحميل قصوى.',
      capacity: 'تستوعب فيلا أو أثاث كبير حتى 5 إلى 6 غرف',
      features: ['مصدات صدمات متطورة على الطرق السريعة', 'نظام تعليق هيدروليكي يمنع الاهتزاز', 'حمولة حتى 7 أطنان'],
    },
    {
      title: 'ونش هيدروليكي ألماني لرفع وتنزيل الأثاث',
      desc: 'حل جذري لتنزيل ورفع القطع الكبيرة والكنب والرخام للأدوار العليا حتى الدور الخامس عشر دون الحاجة للمصاعد أو السلالم الضيقة.',
      capacity: 'رفع حتى الدور 15 بحمولة 400 كجم في الرفعة الواحدة',
      features: ['حماية 100% من خدش المداخل والسلالم', 'سرعة فائقة في تنزيل العفش', 'مشغلين معتمدين وشهادات أمان'],
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Header Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-xs font-semibold text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            <span>تغطية شاملة لكافة أحياء الرياض وشحن لكافة مدن المملكة</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            خدمات النقل داخل وخارج الرياض
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            أسطول ديانات مجهزة ورافعات هيدروليكية جاهزة لخدمتك أينما كنت في العاصمة الرياض، ورحلات شحن منتظمة يومية إلى كافة مناطق المملكة مع التتبع المباشر.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              اطلب دينا الآن: {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={createWhatsAppUrl('السلام عليكم، أرغب في حجز دينا لنقل عفش داخل أو خارج الرياض.')}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              حجز دينا عبر الواتساب
            </a>
          </div>
        </div>
      </section>

      {/* Part 1: Moving Inside Riyadh */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-blue-900 font-bold text-sm">التغطية المحلية</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            نقل العفش في كافة أحياء مدينة الرياض
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            فروعنا وفرق عملنا متمركزة استراتيجياً لنصلك أينما كنت خلال 30 دقيقة فقط.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Zone Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
              {[
                { id: 'all', label: 'كافة الأحياء' },
                { id: 'north', label: 'شمال الرياض' },
                { id: 'east', label: 'شرق الرياض' },
                { id: 'center', label: 'وسط الرياض' },
                { id: 'west', label: 'غرب الرياض' },
                { id: 'south', label: 'جنوب الرياض' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedZone(tab.id)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    selectedZone === tab.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* District Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="ابحث عن اسم حيك بالرياض..."
                value={searchDistrict}
                onChange={(e) => setSearchDistrict(e.target.value)}
                className="w-full pl-4 pr-10 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-900 text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            </div>

          </div>

          {/* Zones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            {filteredZones.map((zone) => (
              <div
                key={zone.name}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-900" />
                    <span>{zone.name}</span>
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    وصول {zone.averageResponseTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                  {zone.keyDistricts.map((d, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-md bg-white border border-slate-200 text-slate-700"
                    >
                      حي {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Moving Outside Riyadh (Intercity Routes) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-700 text-xs font-semibold text-amber-400 mb-2">
                <Truck className="w-3.5 h-3.5" />
                <span>الشحن السريع بين المدن</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                النقل من الرياض إلى جميع مدن ومحافظات المملكة
              </h2>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl">
                رحلات يومية ومباشرة من الباب إلى الباب بشاحنات مقفلة تضمن وصول عفشك في الموعد المحدد دون أي تأخير أو خلط للشحنات.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all shrink-0 self-start md:self-auto"
            >
              استفسر عن رحلات اليوم: {COMPANY_INFO.phoneDisplay}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERCITY_ROUTES.map((route, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{route.city}</h3>
                    <span className="text-xs text-amber-400 font-semibold">{route.region}</span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300 py-3 border-y border-slate-700/80 my-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">المسافة التقريبية:</span>
                      <span className="font-mono font-bold text-white tabular-nums">{route.distanceKm} كم</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">زمن الوصول المتوقع:</span>
                      <span className="font-bold text-white">{route.estimatedHours}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{route.tripFrequency}</span>
                  </span>
                  <a
                    href={createWhatsAppUrl(`السلام عليكم، أود حجز رحلة نقل عفش من الرياض إلى ${route.city}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-amber-400 hover:text-amber-300 font-bold"
                  >
                    حجز الرحلة ←
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Fleet & Hydraulic Lifters Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-900 font-bold text-sm">مواصفات الأسطول</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            شاحنات وأوناش هيدروليكية مجهزة بأحدث التجهيزات
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            نعتمد على مركبات ومعدات حديثة تخضع لصيانة دورية لضمان سلامة منقولاتك على الطريق.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fleetTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 font-bold mb-4">
                  السعة والتحمل: {item.capacity}
                </div>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-3 border-t border-slate-100">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-black">
              هل تحتاج دينا في حي معين الآن بالرياض؟
            </h3>
            <p className="text-sm text-slate-300">
              اتصل بنا مباشرة وسيتم توجيه أقرب دينا متواجدة في حيك فوراً مع طاقم العمل المتكامل.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              اتصل فوراً: {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
