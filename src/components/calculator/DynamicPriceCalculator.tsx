import React, { useState, useId } from 'react';
import { COMPANY_INFO, createWhatsAppUrl, RIYADH_ZONES, INTERCITY_ROUTES } from '../../data/companyData';
import {
  Calculator,
  Truck,
  Building,
  Wrench,
  Package,
  Layers,
  Send,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  Calendar,
  MapPin,
  ChevronRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface DynamicPriceCalculatorProps {
  onSuccess?: () => void;
  className?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const DynamicPriceCalculator: React.FC<DynamicPriceCalculatorProps> = ({
  onSuccess,
  className = '',
  isModal = false,
  onClose,
}) => {
  // Service Type
  const [serviceType, setServiceType] = useState<'inside_riyadh' | 'outside_riyadh' | 'storage' | 'packing_only'>('inside_riyadh');

  // Route Locations
  const [fromDistrict, setFromDistrict] = useState('الملقا - شمال الرياض');
  const [toDistrict, setToDistrict] = useState('اليرموك - شرق الرياض');
  const [targetCity, setTargetCity] = useState('جدة');
  const [storageMonths, setStorageMonths] = useState(3);

  // Property & Rooms
  const [propertyType, setPropertyType] = useState<'apartment' | 'floor' | 'villa' | 'studio'>('apartment');
  const [roomsCount, setRoomsCount] = useState(3);
  const [livingRoomsCount, setLivingRoomsCount] = useState(1);

  // Floors & Elevator
  const [pickupElevator, setPickupElevator] = useState<'elevator' | 'stairs_low' | 'stairs_high' | 'winch'>('elevator');
  const [dropoffElevator, setDropoffElevator] = useState<'elevator' | 'stairs_low' | 'stairs_high' | 'winch'>('elevator');

  // Packaging Grade
  const [packagingLevel, setPackagingLevel] = useState<'standard' | 'full' | 'vip'>('full');

  // Add-on Services
  const [includeKitchen, setIncludeKitchen] = useState(true);
  const [acUnitsCount, setAcUnitsCount] = useState(2);
  const [includeCurtains, setIncludeCurtains] = useState(true);

  // Lead Submission
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email_form'>('whatsapp');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  // Cost Calculation Formula (Itemized & Realistic for Riyadh Market in SAR)
  const calculateEstimate = () => {
    let baseTruck = 350;
    let carpentryFee = 0;
    let packingFee = 0;
    let additionalFees = 0;

    // Service adjustment
    if (serviceType === 'inside_riyadh') {
      baseTruck = propertyType === 'villa' ? 600 : propertyType === 'floor' ? 450 : 350;
    } else if (serviceType === 'outside_riyadh') {
      baseTruck = targetCity.includes('جدة') || targetCity.includes('مكة') ? 1400 : targetCity.includes('الدمام') ? 950 : 1200;
      if (propertyType === 'villa') baseTruck += 800;
    } else if (serviceType === 'storage') {
      baseTruck = 300;
      additionalFees += storageMonths * 350; // storage fee per month
    } else if (serviceType === 'packing_only') {
      baseTruck = 0;
    }

    // Carpentry by rooms
    carpentryFee += roomsCount * 100; // ~100 SAR per room disassembly/assembly
    if (livingRoomsCount > 0) carpentryFee += livingRoomsCount * 60;
    if (includeKitchen && serviceType !== 'storage') carpentryFee += 180; // Kitchen dismantle & install

    // Packaging cost
    if (packagingLevel === 'standard') {
      packingFee = roomsCount * 60;
    } else if (packagingLevel === 'full') {
      packingFee = roomsCount * 120 + 80;
    } else if (packagingLevel === 'vip') {
      packingFee = roomsCount * 180 + 150;
    }

    // Elevator / Winch adjustments
    if (pickupElevator === 'stairs_high') additionalFees += 150;
    if (pickupElevator === 'winch') additionalFees += 350;
    if (dropoffElevator === 'stairs_high') additionalFees += 150;
    if (dropoffElevator === 'winch') additionalFees += 350;

    // AC units
    if (acUnitsCount > 0 && serviceType !== 'storage') {
      additionalFees += acUnitsCount * 130;
    }

    // Curtains & TVs
    if (includeCurtains) additionalFees += 80;

    const subtotal = baseTruck + carpentryFee + packingFee + additionalFees;
    const minPrice = Math.round(subtotal * 0.95);
    const maxPrice = Math.round(subtotal * 1.15);

    return {
      baseTruck,
      carpentryFee,
      packingFee,
      additionalFees,
      minPrice,
      maxPrice,
      subtotal,
    };
  };

  const estimate = calculateEstimate();

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'inside_riyadh': return 'نقل عفش داخل أحياء الرياض';
      case 'outside_riyadh': return `نقل عفش من الرياض إلى ${targetCity}`;
      case 'storage': return `تخزين أثاث بمستودعات إتقان (${storageMonths} أشهر)`;
      case 'packing_only': return 'فك وتركيب وتغليف فقط بدون نقل';
    }
  };

  const getPropertyLabel = () => {
    switch (propertyType) {
      case 'studio': return 'استوديو / غرفة واحدة';
      case 'apartment': return `شقة (${roomsCount} غرف نوم + ${livingRoomsCount} مجلس)`;
      case 'floor': return `دور كامل (${roomsCount} غرف نوم + ${livingRoomsCount} مجالس)`;
      case 'villa': return `فيلا (${roomsCount} غرف نوم + ${livingRoomsCount} مجالس)`;
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `*طلب مقايسة وحجز موعد عبر حاسبة شركة إتقان:*
--------------------------------
• *نوع الخدمة:* ${getServiceLabel()}
• *المسار:* من [${fromDistrict}] إلى [${serviceType === 'outside_riyadh' ? targetCity : toDistrict}]
• *حجم السكن:* ${getPropertyLabel()}
• *درجة التغليف:* ${packagingLevel === 'vip' ? 'تغليف VIP فاخر للتحف والرخام' : packagingLevel === 'full' ? 'تغليف شامل بكراتين 5 طبقات وفقاعات' : 'تغليف عادي'}
• *المصاعد/الأدوار:* ${pickupElevator === 'winch' || dropoffElevator === 'winch' ? 'يتطلب ونش هيدروليكي' : pickupElevator === 'elevator' ? 'متوفر مصعد' : 'سلالم عادية'}
• *المكيفات:* ${acUnitsCount > 0 ? `${acUnitsCount} مكيفات سبليت/شباك` : 'بدون مكيفات'}
• *فك وتركيب المطبخ:* ${includeKitchen ? 'نعم مطلوب' : 'غير مطلوب'}
--------------------------------
• *التكلفة التقديرية:* ${estimate.minPrice} - ${estimate.maxPrice} ر.س
• *الاسم:* ${clientName || 'العميل الكريم'}
• *تاريخ النقل المطلوب:* ${preferredDate || 'في أقرب وقت'}
${clientNotes ? `• *ملاحظات:* ${clientNotes}` : ''}
--------------------------------
أرجو التواصل معي لتأكيد الموعد والمعاينة. شكراً لكم.`;

    window.open(createWhatsAppUrl(text), '_blank');
    if (onSuccess) onSuccess();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientPhone.trim()) return;

    const ref = `ITQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderRef(ref);
    setIsSubmitted(true);

    if (onSuccess) onSuccess();
  };

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden ${className}`}>
      
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 p-6 sm:p-8 text-white relative">
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="إغلاق"
          >
            ✕
          </button>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>الحاسبة التفاعلية المعتمدة لنقل وتخزين العفش</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              احسب تكلفة نقل عفشك بدقة وشفافية
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              حدد خياراتك لتحصل على التكلفة اللحظية وإرسال المواصفات إلى الواتساب أو المشرف بضغطة واحدة.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-amber-300 shrink-0 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>تسعير واضح بدون أي رسوم خفية</span>
          </div>
        </div>
      </div>

      {isSubmitted ? (
        /* Success Screen */
        <div className="p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-slate-900">تم استلام طلب المقايسة بنجاح!</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              شكراً لاختيارك شركة إتقان. تم قيد طلبك بالرقم المرجعي{' '}
              <strong className="font-mono text-blue-900 font-black">{orderRef}</strong>.
            </p>
            <p className="text-xs text-slate-500">
              سيتواصل معك المشرف الفني على رقمك <strong>{clientPhone}</strong> خلال أقل من 5 دقائق لتأكيد الموعد والمعاينة المجانية.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto space-y-2 text-right">
            <div className="flex justify-between border-b border-slate-200 pb-1">
              <span>الخدمة:</span>
              <strong className="text-slate-900">{getServiceLabel()}</strong>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1">
              <span>التكلفة التقديرية:</span>
              <strong className="text-emerald-700 font-mono tabular-nums">{estimate.minPrice} - {estimate.maxPrice} ر.س</strong>
            </div>
            <div className="flex justify-between">
              <span>الرقم المرجعي:</span>
              <strong className="font-mono text-blue-900">{orderRef}</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleSendToWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>متابعة الطلب عبر الواتساب فوراً</span>
            </button>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
            >
              حساب مقايسة أخرى
            </button>
          </div>
        </div>
      ) : (
        /* The Interactive Form & Calculator */
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* STEP 1: Service Type Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                <span>اختر نوع الخدمة والمكان</span>
              </label>
              <span className="text-[11px] text-slate-400">الخطوة الأولى</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'inside_riyadh', label: 'نقل داخل أحياء الرياض', icon: <Truck className="w-4 h-4" /> },
                { id: 'outside_riyadh', label: 'نقل خارج الرياض (بين المدن)', icon: <MapPin className="w-4 h-4" /> },
                { id: 'storage', label: 'تخزين عفش بمستودعاتنا', icon: <Layers className="w-4 h-4" /> },
                { id: 'packing_only', label: 'فك وتركيب وتغليف فقط', icon: <Wrench className="w-4 h-4" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id as any)}
                  className={`p-3 rounded-2xl border text-right transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                    serviceType === item.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-md scale-[1.01]'
                      : 'bg-slate-50/70 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className={`p-2 rounded-xl w-fit ${serviceType === item.id ? 'bg-white/20 text-amber-300' : 'bg-white text-blue-900 shadow-xs'}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold leading-snug">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Sub-options for locations based on service */}
            {serviceType === 'inside_riyadh' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">حي الانطلاق (التحميل):</label>
                  <input
                    type="text"
                    value={fromDistrict}
                    onChange={(e) => setFromDistrict(e.target.value)}
                    placeholder="مثلاً: حي الملقا أو الياسمين..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">حي الوجهة (التنزيل والتركيب):</label>
                  <input
                    type="text"
                    value={toDistrict}
                    onChange={(e) => setToDistrict(e.target.value)}
                    placeholder="مثلاً: حي اليرموك أو النرجس..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-blue-900"
                  />
                </div>
              </div>
            )}

            {serviceType === 'outside_riyadh' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">مكان التحميل بالرياض:</label>
                  <input
                    type="text"
                    value={fromDistrict}
                    onChange={(e) => setFromDistrict(e.target.value)}
                    placeholder="الحي بالرياض..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-blue-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">المدينة المراد النقل إليها:</label>
                  <select
                    value={targetCity}
                    onChange={(e) => setTargetCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-hidden focus:border-blue-900 bg-white"
                  >
                    <option value="جدة ومكة المكرمة">جدة ومكة المكرمة</option>
                    <option value="الدمام والخبر والجبيل">الدمام والخبر والجبيل</option>
                    <option value="بريدة وعنيزة (القصيم)">بريدة وعنيزة (القصيم)</option>
                    <option value="المدينة المنورة وينبع">المدينة المنورة وينبع</option>
                    <option value="أبها وخميس مشيط وجازان">أبها وخميس مشيط وجازان</option>
                    <option value="حائل وتبوك">حائل وتبوك</option>
                  </select>
                </div>
              </div>
            )}

            {serviceType === 'storage' && (
              <div className="pt-2">
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">مدة التخزين التقريبية بمستودعاتنا:</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { m: 1, label: 'شهر واحد' },
                    { m: 3, label: '3 أشهر (الأكثر طلباً)' },
                    { m: 6, label: '6 أشهر (خصم 15%)' },
                    { m: 12, label: 'سنة كاملة (خصم 25%)' },
                  ].map((s) => (
                    <button
                      key={s.m}
                      type="button"
                      onClick={() => setStorageMonths(s.m)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        storageMonths === s.m
                          ? 'bg-amber-500 text-slate-950 border-amber-500'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* STEP 2: Residence & Rooms Count */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                <span>نوع السكن وحجم الأثاث</span>
              </label>
              <span className="text-[11px] text-slate-400">الخطوة الثانية</span>
            </div>

            {/* Property Type Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'apartment', label: 'شقة سكنية' },
                { id: 'floor', label: 'دور كامل' },
                { id: 'villa', label: 'فيلا سكنية' },
                { id: 'studio', label: 'استوديو / غرفة' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPropertyType(p.id as any)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                    propertyType === p.id
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Detailed Room Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">عدد غرف النوم الرئيسية والأطفال:</span>
                  <span className="text-[10px] text-slate-500">يشمل تفكيك الدواليب والأسرة وإعادة تركيبها</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-800 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-sm text-slate-900 w-6 text-center tabular-nums">
                    {roomsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setRoomsCount(Math.min(10, roomsCount + 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-800 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border-t sm:border-t-0 pt-2 sm:pt-0">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">عدد المجالس والصالونات:</span>
                  <span className="text-[10px] text-slate-500">يشمل طاولات الطعام وكنب الجلوس والستائر</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setLivingRoomsCount(Math.max(0, livingRoomsCount - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-800 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-sm text-slate-900 w-6 text-center tabular-nums">
                    {livingRoomsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setLivingRoomsCount(Math.min(6, livingRoomsCount + 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-800 hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: Floors, Elevators & Winch */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                <span>المصاعد والأدوار والونش الهيدروليكي</span>
              </label>
              <span className="text-[11px] text-slate-400">الخطوة الثالثة</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-[11px] font-bold text-slate-700 mb-1.5">موقع التحميل (الانطلاق):</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'elevator', label: 'يتوفر مصعد' },
                    { id: 'stairs_low', label: 'درج أرضي/أول' },
                    { id: 'stairs_high', label: 'درج مرتفع (3 فما فوق)' },
                    { id: 'winch', label: 'أحتاج ونش رفع' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPickupElevator(opt.id as any)}
                      className={`p-2 rounded-xl border text-[11px] font-bold transition-all text-center cursor-pointer ${
                        pickupElevator === opt.id
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[11px] font-bold text-slate-700 mb-1.5">موقع التنزيل (الوصول):</span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'elevator', label: 'يتوفر مصعد' },
                    { id: 'stairs_low', label: 'درج أرضي/أول' },
                    { id: 'stairs_high', label: 'درج مرتفع (3 فما فوق)' },
                    { id: 'winch', label: 'أحتاج ونش رفع' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setDropoffElevator(opt.id as any)}
                      className={`p-2 rounded-xl border text-[11px] font-bold transition-all text-center cursor-pointer ${
                        dropoffElevator === opt.id
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4: Packaging Quality & Add-ons */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">4</span>
                <span>درجة التغليف والخدمات الإضافية</span>
              </label>
              <span className="text-[11px] text-slate-400">الخطوة الرابعة</span>
            </div>

            {/* Packaging Levels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'standard', name: 'تغليف أساسي', desc: 'نايلون حراري وأشرطة تثبيت' },
                { id: 'full', name: 'تغليف شامل (الموصى به)', desc: 'فقاعات هوائية + كراتين 5 طبقات + بطانيات' },
                { id: 'vip', name: 'تغليف VIP فاخر', desc: 'صناديق مبطنة وحماية فائقة للتحف والرخام' },
              ].map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setPackagingLevel(pkg.id as any)}
                  className={`p-3 rounded-2xl border text-right transition-all cursor-pointer ${
                    packagingLevel === pkg.id
                      ? 'bg-blue-50/80 border-blue-900 shadow-xs'
                      : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{pkg.name}</div>
                  <div className="text-[10px] text-slate-500 mt-1">{pkg.desc}</div>
                </button>
              ))}
            </div>

            {/* Additional Services Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIncludeKitchen(!includeKitchen)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  includeKitchen ? 'bg-emerald-50 text-emerald-900 border-emerald-300' : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <span>فك وتركيب المطبخ وتعديل الرخام</span>
                <span>{includeKitchen ? '✓' : '+'}</span>
              </button>

              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">فك وتركيب المكيفات:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAcUnitsCount(Math.max(0, acUnitsCount - 1))}
                    className="w-6 h-6 rounded-md bg-white border border-slate-300 text-xs font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold font-mono tabular-nums">{acUnitsCount}</span>
                  <button
                    type="button"
                    onClick={() => setAcUnitsCount(acUnitsCount + 1)}
                    className="w-6 h-6 rounded-md bg-white border border-slate-300 text-xs font-bold hover:bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIncludeCurtains(!includeCurtains)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                  includeCurtains ? 'bg-emerald-50 text-emerald-900 border-emerald-300' : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <span>تثبيت الستائر وشاشات التلفزيون</span>
                <span>{includeCurtains ? '✓' : '+'}</span>
              </button>
            </div>
          </div>

          {/* LIVE PRICE BREAKDOWN & ESTIMATE DISPLAY */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs text-amber-400 font-bold block mb-1">المقايسة التقديرية المحسوبة فورياً:</span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono flex items-baseline gap-2">
                  <span className="tabular-nums">{estimate.minPrice}</span>
                  <span className="text-amber-400 text-xl font-normal">إلى</span>
                  <span className="tabular-nums">{estimate.maxPrice}</span>
                  <span className="text-sm font-sans font-bold text-slate-300 mr-2">
                    {serviceType === 'storage' ? 'ريال شهرياً' : 'ريال سعودي'}
                  </span>
                </div>
              </div>

              <div className="text-right sm:text-left text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>شامل دينا مقفلة + نجارين + تغليف</span>
                </div>
                <div>ضمان 100% موثق في العقد الرسمي</div>
              </div>
            </div>

            {/* Detailed Itemized Costs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-slate-400 block text-[11px]">أجور الدينا والنقل:</span>
                <span className="font-mono font-bold text-white tabular-nums text-sm">~{estimate.baseTruck} ر.س</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-slate-400 block text-[11px]">أجور النجارين والفك:</span>
                <span className="font-mono font-bold text-white tabular-nums text-sm">~{estimate.carpentryFee} ر.س</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-slate-400 block text-[11px]">التغليف والمواد:</span>
                <span className="font-mono font-bold text-white tabular-nums text-sm">~{estimate.packingFee} ر.س</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-slate-400 block text-[11px]">الخدمات الإضافية:</span>
                <span className="font-mono font-bold text-white tabular-nums text-sm">~{estimate.additionalFees} ر.س</span>
              </div>
            </div>

            {/* DISPATCH ACTION BUTTONS */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 p-1 bg-slate-800 rounded-xl w-fit">
                <button
                  type="button"
                  onClick={() => setSendMethod('whatsapp')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    sendMethod === 'whatsapp' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  إرسال فوري للواتساب (أسرع)
                </button>
                <button
                  type="button"
                  onClick={() => setSendMethod('email_form')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    sendMethod === 'email_form' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  إرسال نموذج حجز واتصال هاتفي
                </button>
              </div>

              {sendMethod === 'whatsapp' ? (
                /* WhatsApp Direct Send */
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="اسمك الكريم (اختياري)..."
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-amber-400"
                    />
                    <input
                      type="text"
                      placeholder="التاريخ المفضل للنقل (مثلاً: الجمعة القادمة)..."
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>إرسال تفاصيل المقايسة كاملة إلى الواتساب فوراً (0561003275)</span>
                  </button>
                </div>
              ) : (
                /* Detailed Form for Email / Direct Dispatch */
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">الاسم الكريم *</label>
                      <input
                        type="text"
                        required
                        placeholder="أدخل اسمك"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">رقم الجوال للتواصل *</label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        placeholder="05XXXXXXXX"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-hidden focus:border-amber-400 text-right"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">البريد الإلكتروني (اختياري)</label>
                      <input
                        type="email"
                        dir="ltr"
                        placeholder="name@example.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-hidden focus:border-amber-400 text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">ملاحظات إضافية عن نوع الأثاث أو الموعد:</label>
                    <textarea
                      rows={2}
                      placeholder="أي تفاصيل ترغب بإطلاع المشرف عليها..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-hidden focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>تأكيد طلب المعاينة وحفظ المقايسة</span>
                  </button>
                </form>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>للتواصل المباشر والاستفسار الفوري: {COMPANY_INFO.phoneDisplay}</span>
                </span>
                <span>متواجدون على مدار 24 ساعة في كافة أحياء الرياض</span>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};
