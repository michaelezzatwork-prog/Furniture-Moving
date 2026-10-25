import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO, createWhatsAppUrl } from '../../data/companyData';
import {
  ShieldCheck,
  FileText,
  Lock,
  Phone,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  Calendar,
} from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigate: (page: PageId) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy', onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'terms'>(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="space-y-12 pb-20 pt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-blue-900 transition-colors cursor-pointer"
        >
          الرئيسية
        </button>
        <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-semibold">
          {activeTab === 'privacy' ? 'سياسة الخصوصية' : 'الشروط والأحكام'}
        </span>
      </div>

      {/* Header & Tabs */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>الوثائق القانونية المعتمدة وسياسات الاستخدام</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
          {activeTab === 'privacy' ? 'سياسة الخصوصية وسرية البيانات' : 'شروط وأحكام الخدمة والضمان'}
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5" />
          <span>آخر تحديث: 25 أكتوبر 2026</span>
          <span>·</span>
          <span>متوافق مع معايير إعلانات جوجل (Google Ads) ونظام حماية البيانات الشخصية بالمملكة</span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center pt-4">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>سياسة الخصوصية (Privacy Policy)</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'terms'
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>الشروط والأحكام (Terms of Service)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm leading-relaxed text-slate-700 text-sm space-y-8">
        
        {/* Official Saudi Business Credentials Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div>
            <span className="text-slate-500 block mb-0.5">الكيان التجاري المعتمد:</span>
            <strong className="text-slate-900 font-bold">{COMPANY_INFO.taxEntityName}</strong>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="text-slate-500 block mb-0.5">رقم السجل التجاري:</span>
              <span className="font-mono font-bold text-blue-900 text-sm tabular-nums">{COMPANY_INFO.commercialRegistration}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">الرقم الضريبي (VAT):</span>
              <span className="font-mono font-bold text-blue-900 text-sm tabular-nums" dir="ltr">{COMPANY_INFO.vatNumber}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">الامتثال والتراخيص:</span>
              <span className="font-semibold text-emerald-800">مرخص تجارياً وضريبياً بالمملكة</span>
            </div>
          </div>
        </div>

        {activeTab === 'privacy' ? (
          /* ================= PRIVACY POLICY ================= */
          <div className="space-y-8">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>1. مقدمة والتزام شركة إتقان</span>
              </h2>
              <p>
                نحن في <strong>{COMPANY_INFO.name}</strong> نقدر ثقتكم ونولي أقصى درجات الاهتمام لحماية خصوصيتكم وسرية بياناتكم الشخصية. توضح هذه الوثيقة بوضوح كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي تقدمونها عند زيارة موقعنا الإلكتروني أو طلب خدمات نقل وتخزين العفش وفك وتركيب الأثاث. نلتزم بالامتثال التام لنظام حماية البيانات الشخصية في المملكة العربية السعودية ومعايير الخصوصية الصارمة الخاصة بإعلانات جوجل (Google Ads Policies).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>2. المعلومات التي نجمعها</span>
              </h2>
              <p>
                نقوم بجمع المعلومات اللازمة فقط لتنفيذ الخدمة وتقديم مقايسات الأسعار بدقة، وتشمل:
              </p>
              <ul className="space-y-2 pr-4 list-disc text-slate-600">
                <li><strong>البيانات الشخصية وبيانات الاتصال:</strong> مثل الاسم الكريم، رقم الهاتف الجوال ({COMPANY_INFO.phone})، والبريد الإلكتروني إن وجد.</li>
                <li><strong>بيانات موقع الخدمة:</strong> الحي، العنوان داخل الرياض أو المدينة المراد النقل إليها خارج الرياض لتوجيه الشاحنات وتحديد المسافات.</li>
                <li><strong>تفاصيل المنقولات:</strong> عدد الغرف، نوع الأثاث، توفر المصعد أو الحاجة لونش رفع لتحديد حجم الدينا ومواد التغليف.</li>
                <li><strong>البيانات التقنية غير المعرفة:</strong> نوع المتصفح، نظام التشغيل، عنوان الـ IP مجهول الهوية، ومصدر الزيارة لتحسين تجربة التصفح وقياس أداء حملاتنا الإعلانية.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>3. الأغراض المحددة لاستخدام البيانات</span>
              </h2>
              <p>
                نستخدم المعلومات التي تزودنا بها للأغراض المشروعة التالية حصراً:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>إصدار عروض الأسعار والمقايسات الفورية للعملاء.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>تنسيق مواعيد وصول الدينات والنجارين وفريق التغليف.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>التواصل المباشر عبر الهاتف والواتساب لتأكيد الحجز.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>تحسين جودة الخدمة وقياس رضا العملاء بعد انتهاء النقل.</span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>4. ملفات تعريف الارتباط وإعلانات جوجل (Cookies & Google Ads)</span>
              </h2>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط (Cookies) والتقنيات المشابهة لتقديم تجربة تصفح سريعة وسلسة ولقياس فاعلية حملاتنا الإعلانية:
              </p>
              <ul className="space-y-2 pr-4 list-disc text-slate-600">
                <li>نستخدم علامات تتبع التحويل (Google Ads Conversion Tracking) لمعرفة ما إذا كانت نقرات الإعلانات تؤدي إلى اتصالات أو طلبات أسعار.</li>
                <li>تستخدم جوجل ملفات تعريف ارتباط لعرض إعلانات ملائمة بناءً على زيارات المستخدمين السابقة لموقعنا، وذلك دون جمع أو تخزين أي بيانات شخصية حساسة.</li>
                <li>يمكن للمستخدمين في أي وقت تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح أو عبر صفحة إعدادات إعلانات جوجل الرسمية.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>5. عدم مشاركة أو بيع البيانات للغير</span>
              </h2>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950">
                <p className="font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>تعهد صارم بسرية البيانات وعدم بيعها:</span>
                </p>
                <p className="text-xs mt-1 leading-relaxed text-amber-900">
                  نحن في <strong>شركة إتقان</strong> لا نقوم ببيع أو تأجير أو مقايضة أو مشاركة أرقام هواتف أو بيانات أي عميل مع أي جهة تسويقية أو تجارية خارجية على الإطلاق. تظل بياناتك محفوظة حصرياً داخل نظام إدارة العمليات بالشركة لغرض تنفيذ طلبك فقط.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>6. حماية وأمن المعلومات</span>
              </h2>
              <p>
                نطبق معايير أمنية وإدارية وتقنية متقدمة تشمل التشفير الآمن (SSL/TLS)، وجدران الحماية، وتقييد الوصول إلى البيانات بحيث لا يتاح الاطلاع عليها إلا للموظفين المخولين المعنيين بتنفيذ طلب النقل.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>7. حقوق العميل والاستفسارات</span>
              </h2>
              <p>
                يحق لأي عميل في أي وقت طلب مراجعة بياناته المسجلة لدينا، أو تعديلها، أو طلب حذفها نهائياً من سجلاتنا بعد إتمام عملية النقل والتخزين. للاستفسار أو ممارسة حقوقكم:
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 text-white font-bold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>الاتصال بالمسؤول: {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={createWhatsAppUrl('السلام عليكم، لدي استفسار يتعلق بسياسة الخصوصية وسرية البيانات.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>المراسلة عبر الواتساب</span>
                </a>
              </div>
            </section>

          </div>
        ) : (
          /* ================= TERMS OF SERVICE ================= */
          <div className="space-y-8">
            
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span>1. نطاق تقديم الخدمات والموافقة</span>
              </h2>
              <p>
                تحكم هذه الشروط والأحكام كافة خدمات نقل العفش، فك وتركيب وتغليف الأثاث، وتخزين الأثاث بمستودعات <strong>{COMPANY_INFO.name}</strong> داخل مدينة الرياض وخارجها إلى كافة مناطق المملكة. يمثل طلبك لأي خدمة أو تأكيدك لموعد النقل موافقة صريحة على هذه البنود.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span>2. التزامات الشركة وضمان السلامة 100%</span>
              </h2>
              <ul className="space-y-2 pr-4 list-disc text-slate-600">
                <li><strong>الالتزام بالمواعيد:</strong> تلتزم الشركة بإرسال الشاحنات وفريق العمل في الوقت المتفق عليه دون تأخير.</li>
                <li><strong>العمالة المتخصصة:</strong> توفير نجارين وفنيي تكييف ومطابخ وعمالة مدربة ومجهزة بكافة الأدوات اللازمة.</li>
                <li><strong>سلامة المنقولات:</strong> نلتزم بالحفاظ على الأثاث والأجهزة، وفي حال حدوث أي كسر أو خدش ناتج عن إهمال أثناء العمل تلتزم الشركة بالتعويض الفوري أو الإصلاح وفق العقد المبرم.</li>
                <li><strong>عقد رسمي موثق:</strong> يتم توقيع استمارة أو عقد استلام يوضح محتويات المنقولات وملاحظات العميل قبل وبعد النقل.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span>3. التزامات العميل وإخلاء المسؤولية عن المقتنيات الثمينة</span>
              </h2>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950">
                <p className="font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>تنبيه هام بشأن المقتنيات الخاصة والشخصية:</span>
                </p>
                <p className="text-xs mt-1 leading-relaxed text-amber-900">
                  يلتزم العميل بالاحتفاظ بكافة الأموال النقدية، المصوغات الذهبية، الساعات الثمينة، الأوراق الثبوتية والوثائق الرسمية، والأجهزة اللوحية الشخصية بمعرفته الخاصة ونقلها بنفسه. تخلي شركة إتقان مسؤوليتها القانونية عن فقدان أي مقتنيات لم تسلم رسمياً بإيصال أمانة موثق.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span>4. شروط ومواصفات تخزين العفش</span>
              </h2>
              <p>
                في حال الاستفادة من خدمة تخزين الأثاث بمستودعاتنا بالرياض:
              </p>
              <ul className="space-y-2 pr-4 list-disc text-slate-600">
                <li>يتم عمل قائمة جرد تفصيلية مرقمة بكافة القطع المخزنة وتوقيع نسختين للعميل وللشركة.</li>
                <li>يحظر تخزين أي مواد سريعة الاشتعال، أسلحة، أغذية قابلة للتلف، أو أي مواد تخالف أنظمة المملكة العربية السعودية.</li>
                <li>تغلف القطع المخزنة تغليفاً عازلاً للرطوبة والغبار قبل إدخالها للغرفة المستقلة.</li>
                <li>تسلم مفاتيح الغرفة أو يوضع القفل الأمني بحضور العميل مع إمكانية الزيارة أو سحب أي قطعة بتنسيق مسبق.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span>5. الأسعار، الدفع، وسياسة الإلغاء</span>
              </h2>
              <ul className="space-y-2 pr-4 list-disc text-slate-600">
                <li>الأسعار المعطاة تعتمد على الوصف المقدم من العميل (عدد الغرف، الأدوار، المصاعد، ومواد التغليف).</li>
                <li>في حال وجود متطلبات إضافية لم يتم ذكرها مسبقاً (مثل أدوار مرتفعة بدون مصعد أو مكيفات إضافية)، يتم الاتفاق على الفارق قبل البدء في التحميل.</li>
                <li>سداد التكلفة يتم بعد إتمام العمل وفحص العميل للأثاث في موقعه الجديد والتأكد من سلامته ورضاه التام.</li>
                <li>يحق للعميل تعديل موعد النقل أو إلغائه بدون أي غرامات بإخطار الشركة قبل الموعد بـ 12 ساعة على الأقل.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                <span>6. القانون المعمول به وتسوية النزاعات</span>
              </h2>
              <p>
                تخضع هذه الشروط والأحكام وتفسر وفقاً للأنظمة واللوائح السارية في المملكة العربية السعودية، وتختص محاكم مدينة الرياض بالنظر في أي نزاع قد ينشأ لا قدر الله، مع تأكيدنا الدائم على حل أي مسألة ودياً بما يضمن كامل حقوق عملائنا الكرام.
              </p>
            </section>

          </div>
        )}

      </div>

      {/* Direct Contact Bar at the bottom of Legal Page */}
      <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
        <div>
          <h3 className="font-bold text-base">هل لديك أي سؤال قانوني أو استفسار حول الخدمة؟</h3>
          <p className="text-xs text-slate-400 mt-1">تواصل مع إدارة العمليات وخدمة العملاء مباشرة.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors"
          >
            اتصال: {COMPANY_INFO.phoneDisplay}
          </a>
          <a
            href={createWhatsAppUrl('السلام عليكم، لدي استفسار حول شروط الخدمة أو سياسة الخصوصية.')}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
          >
            واتساب
          </a>
        </div>
      </div>

    </div>
  );
};
