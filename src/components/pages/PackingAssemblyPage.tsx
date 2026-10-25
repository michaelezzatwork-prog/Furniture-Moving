import React, { useState } from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, PACKING_MATERIALS, createWhatsAppUrl } from '../../data/companyData';
import {
  Wrench,
  Package,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowLeft,
  Tv,
  Wind,
  Layers,
  Hammer,
} from 'lucide-react';

interface PackingAssemblyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PackingAssemblyPage: React.FC<PackingAssemblyPageProps> = ({ onNavigate }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(PACKING_MATERIALS[0].id);

  const assemblyServices = [
    {
      title: 'فك وتركيب غرف النوم والأثاث الخشبي',
      icon: <Hammer className="w-6 h-6 text-amber-600" />,
      desc: 'نجارون متخصصون في التعامل مع غرف النوم المودرن والكلاسيك، غرف إيكيا (IKEA)، الغرف التركية والإيطالية والوطنية، مع ترقيم كل جزء والاحتفاظ بكافة المسامير والمقابض في أكياس مخصصة مرقمة.',
      features: ['خبرة خاصة بأثاث إيكيا الحساس', 'ميزان مائي لضبط استقامة الأبواب والدواليب', 'إصلاح التخلخل وضبط المفصلات أثناء التركيب'],
    },
    {
      title: 'فك وتركيب وتعديل المطابخ',
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      desc: 'فريق متخصص في فك دواليب المطابخ الجاهزة والتفصيل (خشب وألمنيوم)، مع إمكانية تعديل المقاسات وقص الرخام الطبيعي والصناعي ليتناسب مع مساحة مطبخك الجديد.',
      features: ['قص وتعديل الرخام باحترافية', 'إعادة تثبيت الأحواض ومجاري الأدراج', 'تأمين أفران الغاز والشفاطات'],
    },
    {
      title: 'فك وتركيب المكيفات والأجهزة الكهربائية',
      icon: <Wind className="w-6 h-6 text-sky-600" />,
      desc: 'فنيو تكييف وتبريد معتمدون لفك وتركيب مكيفات الاسبليت والشباك مع الحفاظ على شحنة غاز الفريون وتنظيف الفلاتر والتأكد من التمديدات النحاسية.',
      features: ['الحفاظ على غاز الفريون بدون تسريب', 'تمديد المواسير وعزلها حرارياً', 'فحص وتشغيل فوري بعد التركيب'],
    },
    {
      title: 'فك وتركيب الشاشات، الستائر، والنجف',
      icon: <Tv className="w-6 h-6 text-purple-600" />,
      desc: 'تثبيت حوامل شاشات التلفزيون الجدارية باحترافية، فك وتركيب كافة أنواع الستائر الرول والطبقات، وفك النجف الكريستالي وتغليفه قطعة بقطعة لمنع الكسر.',
      features: ['تغليف مبطن فائق الدقة للشاشات', 'مسامير وجبسون بورد خاصة بالستائر', 'فك النجف بحذر وإعادة تجميعه'],
    },
  ];

  const comparisonData = [
    {
      feature: 'مهارة وخبرة الفنيين',
      itqan: 'نجارون وفنيو مطابخ وتكييف محترفون بأدوات كهربائية دقيقة',
      traditional: 'عمالة عشوائية بدون خبرة تكسر المفصلات ومجاري الأدراج',
    },
    {
      feature: 'نوعية مواد التغليف',
      itqan: 'نايلون هوائي فقاعي + كراتين 5 طبقات + كرتون زوايا + ستريتش',
      traditional: 'استخدام أقمشة قديمة أو كراتين ضعيفة ومستهلكة',
    },
    {
      feature: 'حماية الأجهزة والشاشات',
      itqan: 'تغليف ثلاثي الطبقات مع كراتين مخصصة وبطانيات حماية',
      traditional: 'وضع الأجهزة مباشرة بدون حماية من الصدمات',
    },
    {
      feature: 'ترقيم وفرز المسامير',
      itqan: 'فرز كل غرفة في أكياس مستقلة مرقمة تمنع ضياع أي قطعة',
      traditional: 'خلط المسامير وفقدان أجزاء أساسية من الأثاث',
    },
    {
      feature: 'الضمان والتعويض المالي',
      itqan: 'ضمان رسمي موثق بالعقد مع تعويض فوري عن أي تلفيات',
      traditional: 'تنصل كامل من المسؤولية في حال حدوث أي كسر أو خدش',
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-xs font-semibold text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>خدمات الفك والتركيب والتغليف الاحترافي بالرياض</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            فك وتركيب وتغليف الأثاث بأعلى درجات الإتقان
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            نحمي مقتنياتك وأثاثك الثمين كما لو كانت ملكنا. نجارون محترفون، مواد تغليف مستوردة عالية المقاومة، وضمان شامل 100% ضد الخدش والكسر.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
            >
              اتصل للحجز المباشر: {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={createWhatsAppUrl('السلام عليكم، أود حجز خدمة فك وتركيب وتغليف أثاث في الرياض.')}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              واتساب الفنيين المباشر
            </a>
          </div>
        </div>
      </section>

      {/* Assembly & Carpentry Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative group">
              <picture>
                <source srcSet="/src/assets/images/furniture_assembly.webp" type="image/webp" />
                <img
                  src="/src/assets/images/furniture_assembly_1792924429990.jpg"
                  alt="نجار فك وتركيب اثاث بالرياض - فك وتركيب غرف نوم واثاث ايكيا ومطابخ بالرياض بدقة واحترافية"
                  width={1200}
                  height={896}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-slate-700">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>دقة في التركيب وضبط الميزان</span>
                </div>
                <p className="text-xs text-slate-300">
                  إعادة تجميع الأثاث بدقة المصنع مع ضبط الأبواب والمفصلات بدون تخلخل.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-blue-900 font-bold text-sm">كوادر متخصصة</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                نجارون وفنيو فك وتركيب على أعلى درجات الاحتراف
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                لا نعتمد على العمالة العادية في فك الأثاث؛ بل يتولى كل خطوة نجارون وفنيون متخصصون يمتلكون المعدات الدقيقة لفك وإعادة تركيب كافة أنواع الأثاث المعقدة.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {assemblyServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-1.5">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{service.desc}</p>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Packaging Materials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-700 text-xs font-semibold text-amber-400">
                <Package className="w-3.5 h-3.5" />
                <span>المواد المعتمدة في تغليف إتقان</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                تغليف خماسي الطبقات يحمي العفش من الصدمات والخدوش
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                سر وصول أثاثك سليماً بنسبة 100% يكمن في دقة اختيار مواد التغليف المناسبة لكل قطعة. نستخدم خامات صناعية مقاومة للاهتزازات، الرطوبة، والاحتكاك أثناء النقل:
              </p>

              <div className="space-y-3">
                {PACKING_MATERIALS.map((mat) => {
                  const isSelected = selectedMaterial === mat.id;
                  return (
                    <div
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-blue-950/90 border-amber-400 shadow-md'
                          : 'bg-slate-800/40 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-sm text-white">{mat.name}</h4>
                        <span className="text-xs text-amber-400 font-semibold">{mat.useCase}</span>
                      </div>
                      {isSelected && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/80 mt-2">
                          {mat.features.map((feat, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-700"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <picture>
                  <source srcSet="/src/assets/images/furniture_packing.webp" type="image/webp" />
                  <img
                    src="/src/assets/images/furniture_packing_1792924429279.jpg"
                    alt="فك وتغليف الأثاث بالرياض - تغليف كنب ومجالس بالنايلون الفقاعي والكرتون المقوى شركة إتقان"
                    width={1200}
                    height={896}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table: Professional vs Traditional Moving */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-blue-900 font-bold text-sm">لماذا تختار إتقان؟</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            مقارنة بين تغليف إتقان المحترف والنقل العشوائي
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            الفرق الجوهري الذي يحمي استثمارك في أثاث منزلك من الخسائر والتلفيات.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase">
                <tr>
                  <th className="py-4 px-6 font-bold w-1/4">وجه المقارنة</th>
                  <th className="py-4 px-6 font-bold text-amber-400 w-2/5 bg-slate-800">
                    شركة إتقان لنقل وتخزين العفش
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-400 w-1/3">
                    النقل العشوائي التقليدي
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 text-slate-800 bg-amber-50/30 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.itqan}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2 text-slate-500">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-black">
              هل ترغب في خدمة فك وتغليف فقط بدون نقل؟
            </h3>
            <p className="text-sm text-blue-200">
              نوفر خدمة توفير الكراتين ومواد التغليف وفريق النجارين للفك والتغليف في موقعك أينما كنت بالرياض.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              احسب التكلفة الآن
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              اتصل: {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
