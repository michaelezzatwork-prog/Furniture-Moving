import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, createWhatsAppUrl, TESTIMONIALS } from '../../data/companyData';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Truck,
  Package,
  Wrench,
  Warehouse,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  Star,
  Lock,
  ThermometerSnowflake,
  Video,
  FileCheck2,
  Calculator,
} from 'lucide-react';
import { DynamicPriceCalculator } from '../calculator/DynamicPriceCalculator';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left/Main Column: Text Proposition */}
            <div className="lg:col-span-7 space-y-6 text-right">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/50 text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>الشركة الرائدة لنقل وتخزين الأثاث في الرياض منذ 2012</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
                شركة إتقان لنقل وتخزين العفش بالرياض
                <span className="block text-amber-400 mt-2">
                  دقة، أمان، وضمان شامل 100%
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                نقدم لك الحل المتكامل لنقل أثاثك السكني والمكتبي داخل وخارج الرياض بأحدث أسطول ديانات مقفلة ومؤمنة، مع فك وتركيب بأيدي أمهر النجارين، وتغليف خماسي الطبقات، ومستودعات تخزين مكيفة ومعزولة على أعلى المعايير.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل الآن: {COMPANY_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={createWhatsAppUrl('السلام عليكم، أحتاج إلى استشارة وحجز موعد لنقل عفش في الرياض.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل عبر الواتساب</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('interactive-calculator');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      onNavigate('contact');
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-white font-bold text-sm backdrop-blur-xs transition-colors border border-amber-500/40 cursor-pointer shadow-sm"
                >
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>حاسبة السعر الفورية</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Key Trust Guarantees */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>عقد رسمي وضمان سلامة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>التزام صارم بالمواعيد</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>معاينة مجانية بدون التزام</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl group">
                <picture>
                  <source srcSet="/src/assets/images/hero_moving_truck.webp" type="image/webp" />
                  <img
                    src="/src/assets/images/hero_moving_truck_1792924428792.jpg"
                    alt="شركة نقل عفش بالرياض - دينا نقل اثاث مقفلة ومجهزة لنقل وتخزين الأثاث بالرياض مع الفك والتركيب"
                    width={1376}
                    height={768}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-80 sm:h-96 lg:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-amber-400">أسطول حديث ومجهز بالكامل</h4>
                      <p className="text-xs text-slate-300">دينات مقفلة ومحمية ضد الحرارة والأتربة وعوامل الجو</p>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold tabular-nums">
                      {COMPANY_INFO.completedMoves} نقلة
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Quantitative Proof Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-100">
          <div className="pt-4 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-blue-950 tabular-nums">12+</div>
            <div className="text-sm font-bold text-slate-800 mt-1">سنة من الخبرة والريادة</div>
            <p className="text-xs text-slate-500 mt-1">في نقل وتخزين العفش بالرياض</p>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-blue-950 tabular-nums">{COMPANY_INFO.completedMoves}</div>
            <div className="text-sm font-bold text-slate-800 mt-1">عملية نقل وتخزين ناجحة</div>
            <p className="text-xs text-slate-500 mt-1">للشقق، الفلل، والمؤسسات</p>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 tabular-nums">100%</div>
            <div className="text-sm font-bold text-slate-800 mt-1">ضمان سلامة المنقولات</div>
            <p className="text-xs text-slate-500 mt-1">تأمين شامل وعقد موثق</p>
          </div>
          <div className="pt-4 lg:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-blue-950 tabular-nums">35+</div>
            <div className="text-sm font-bold text-slate-800 mt-1">دينا وشاحنة مجهزة</div>
            <p className="text-xs text-slate-500 mt-1">مع أوناش هيدروليكية للأدوار العليا</p>
          </div>
        </div>
      </section>

      {/* Interactive Real-Time Price Calculator Section */}
      <section id="interactive-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <DynamicPriceCalculator />
      </section>

      {/* Core Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-900 font-bold text-sm tracking-wide">خدماتنا الشاملة</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-2">
            منظومة متكاملة لنقل أثاثك بأعلى معايير الإتقان
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            لا داعي للقلق بشأن أثاثك الثمين أو أجهزتك الحساسة، نحن نتكفل بكافة المراحل من الباب إلى الباب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-5 group-hover:bg-blue-900 group-hover:text-amber-400 transition-colors">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                نقل العفش السكني والتجاري
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                نقل متكامل للفلل والقصور والشقق والمكاتب والشركات بدينات مقفلة تحافظ على خصوصية العفش وسلامته التامة من الأتربة.
              </p>
            </div>
            <button
              onClick={() => onNavigate('coverage')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>تفاصيل التغطية والأسطول</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                فك وتركيب متقن باحترافية
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                نجارون متخصصون في غرف النوم الوطنية والأوروبية وإيكيا، فك وتركيب المطابخ وتعديل الرخام، وفنيو تكييف للمكيفات.
              </p>
            </div>
            <button
              onClick={() => onNavigate('packing')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>تعرف على خدمات الفك والتركيب</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                تغليف خماسي الطبقات فائق الأمان
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                تغليف بالنايلون الهوائي الفقاعي، كراتين 5 طبقات، بطانيات لبادية ثقيلة، وحماية خاصة للزجاج والتحف واللوحات.
              </p>
            </div>
            <button
              onClick={() => onNavigate('packing')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>كتالوج مواد التغليف</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Warehouse className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                مستودعات تخزين مكيفة ومؤمنة
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                غرف تخزين مستقلة مقفلة بمفتاح للعميل، عزل حراري، كاميرات مراقبة 24/7، ومكافحة دورية للحشرات والرطوبة.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <span>حجز مساحة تخزين</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Spotlight: Climate-Controlled Secure Storage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-700/60 text-xs font-semibold text-amber-400">
                <Warehouse className="w-3.5 h-3.5" />
                <span>مستودعات إتقان المركزية بالرياض</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                أحدث مستودعات تخزين الأثاث بالرياض
                <span className="block text-slate-300 font-medium text-lg sm:text-xl mt-2">
                  راحة بال تامة أثناء السفر، الترميم، أو الانتقال
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                سواء كنت مسافراً، أو تقوم بترميم منزلك، أو بانتظار استلام وحدتك السكنية، نوفر لك مستودعات مجهزة بمواصفات قياسية عالمية لضمان بقاء أثاثك كأنه جديد تماماً حتى استلامه:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <ThermometerSnowflake className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">تكييف وعزل حراري كامل</strong>
                    <span className="text-slate-300">درجة حرارة ورطوبة محكومة لمنع جفاف الخشب أو تلف الجلد.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">غرف تخزين مستقلة خاصة</strong>
                    <span className="text-slate-300">مساحة خاصة لكل عميل مقفلة بمفتاح شخصي ورقم تعريفي.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <Video className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">حراسة ومراقبة بالكاميرات 24/7</strong>
                    <span className="text-slate-300">أنظمة إنذار وحريق حديثة مع تغطية شاملة لكافة الممرات.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <FileCheck2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">عقود رسمية وتأمين شامل</strong>
                    <span className="text-slate-300">بوليصة تأمين ضد الحوادث والحرائق مع فترات تخزين مرنة.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
                >
                  استفسر عن أسعار التخزين: {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={createWhatsAppUrl('السلام عليكم، أرغب في الاستفسار عن حجز مستودع لتخزين أثاث في الرياض.')}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
                >
                  حجز مساحة تخزين عبر الواتساب
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
                <picture>
                  <source srcSet="/src/assets/images/secure_storage.webp" type="image/webp" />
                  <img
                    src="/src/assets/images/secure_storage_1792924429772.jpg"
                    alt="مستودعات تخزين اثاث بالرياض - غرف تخزين عفش مكيفة ومؤمنة بكاميرات مراقبة 24 ساعة شركة إتقان"
                    width={1200}
                    height={896}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 lg:h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5-Step Professional Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-900 font-bold text-sm">خطوات العمل المنهجية</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            كيف تتم عملية النقل باحترافية خطوة بخطوة؟
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            نظام تشغيلي دقيق يضمن سلامة كل قطعة وسرعة الإنجاز بدون أي إرباك لمنزلك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative">
            <span className="text-3xl font-black text-blue-900/20 block mb-2 tabular-nums">01</span>
            <h4 className="text-base font-bold text-slate-900 mb-1">المعاينة وتحديد الخطة</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              معاينة فورية لتحديد حجم الدينات المطلوبة ومواد التغليف المناسبة وتحديد موعد دقيق.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative">
            <span className="text-3xl font-black text-amber-500/30 block mb-2 tabular-nums">02</span>
            <h4 className="text-base font-bold text-slate-900 mb-1">الفك والتغليف المتقن</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              فك الغرف والمطابخ بأيدي نجارين، وتغليف كل قطعة بالمواد المخصصة لها وترقيمها.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative">
            <span className="text-3xl font-black text-emerald-500/30 block mb-2 tabular-nums">03</span>
            <h4 className="text-base font-bold text-slate-900 mb-1">التنزيل والتحميل الآمن</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              تنزيل العفش بحذر عبر المصاعد أو السلالم أو الونش الهيدروليكي، ورصه هندسياً بالدينا.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative">
            <span className="text-3xl font-black text-blue-900/20 block mb-2 tabular-nums">04</span>
            <h4 className="text-base font-bold text-slate-900 mb-1">النقل بالشاحنات المقفلة</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              قيادة حذرة عبر سائقين معتمدين ومسارات آمنة داخل أحياء الرياض أو بين المدن.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs relative">
            <span className="text-3xl font-black text-purple-500/30 block mb-2 tabular-nums">05</span>
            <h4 className="text-base font-bold text-slate-900 mb-1">التركيب والتسليم النهائي</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              إعادة تركيب الغرف والمطابخ والستائر وترتيب الأثاث وفق رغبتك والتأكد من رضاك التام.
            </p>
          </div>

        </div>
      </section>

      {/* Customer Testimonials & Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-blue-900 font-bold text-sm">تجارب حقيقية</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              ماذا يقول عملاؤنا في الرياض؟
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5.0</span>
            <span>بناءً على أكثر من 3,200 تقييم موثق</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{t.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                  <span>{t.district}</span>
                  <span>·</span>
                  <span className="text-blue-900 font-medium truncate max-w-[140px]">{t.serviceType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
              جاهز لنقل أو تخزين أثاثك بأمان واحترافية؟
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              فريق شركة إتقان جاهز على مدار الساعة في كافة أحياء الرياض. اتصل الآن لتحصل على فحص مجاني وعرض سعر فوري يضمن لك أفضل جودة وأنسب سعر.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-lg transition-transform hover:scale-105"
              >
                اتصل فوراً: {COMPANY_INFO.phoneDisplay}
              </a>
              <a
                href={createWhatsAppUrl('السلام عليكم، أود حجز موعد لنقل العفش مع شركة إتقان.')}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-transform hover:scale-105"
              >
                محادثة واتساب مباشرة
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
