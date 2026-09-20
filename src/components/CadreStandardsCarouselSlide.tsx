import React, { useState } from 'react';
import { 
  ShieldAlert, 
  FileText, 
  Star, 
  BookOpen, 
  Users, 
  Target, 
  AlertTriangle,
  ChevronLeft, 
  ChevronRight, 
  Quote
} from 'lucide-react';

interface StandardItem {
  id: number;
  order: string;
  title: string;
  desc: string;
  quote?: string;
  cardImage: string;
  icon: React.ElementType;
}

const CADRE_STANDARDS: StandardItem[] = [
  {
    id: 1,
    order: '01',
    title: 'Phải Tuyệt Đối Trung Thành Với Đảng',
    desc: 'Lợi ích của Đảng luôn phải đặt lên trước lợi ích cá nhân — kể cả khi phải hy sinh tính mạng.',
    quote: 'Vô luận lúc nào, vô luận việc gì, đảng viên và cán bộ phải đặt lợi ích của Đảng ra trước, lợi ích của cá nhân lại sau... Khi cần đến tính mệnh của mình cũng phải vui lòng hy sinh cho Đảng.',
    cardImage: '/ngt1.jpg',
    icon: ShieldAlert,
  },
  {
    id: 2,
    order: '02',
    title: 'Phải Nghiêm Chỉnh Thực Hiện Cương Lĩnh, Đường Lối Của Đảng',
    desc: 'Mọi chủ trương, nghị quyết, nguyên tắc xây dựng Đảng phải được chấp hành đầy đủ, không ngoại lệ.',
    quote: 'Đảng là một khối thống nhất ý chí và hành động. Kỷ luật của Đảng là kỷ luật sắt, tự giác và nghiêm minh.',
    cardImage: '/ngt2.png',
    icon: FileText,
  },
  {
    id: 3,
    order: '03',
    title: 'Phải Luôn Luôn Tu Dưỡng Đạo Đức Cách Mạng',
    desc: 'Rèn luyện đạo đức là việc làm suốt đời, không phải thành tích một lần.',
    quote: 'Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư.',
    cardImage: '/ngt3.jpg',
    icon: Star,
  },
  {
    id: 4,
    order: '04',
    title: 'Phải Luôn Luôn Học Tập Nâng Cao Trình Độ',
    desc: 'Cán bộ phải liên tục nâng cao hiểu biết về mọi mặt để không bị tụt hậu.',
    quote: 'Nếu không chịu khó học thì không tiến bộ được. Không tiến bộ là thoái bộ.',
    cardImage: '/ngt4.jpg',
    icon: BookOpen,
  },
  {
    id: 5,
    order: '05',
    title: 'Phải Có Mối Liên Hệ Mật Thiết Với Nhân Dân',
    desc: 'Cán bộ phải là "đầy tớ thật trung thành" của nhân dân — chịu khổ trước, hưởng sau.',
    quote: 'Đảng viên đi trước, làng nước theo sau.',
    cardImage: '/ngt5.jpg',
    icon: Users,
  },
  {
    id: 6,
    order: '06',
    title: 'Phải Luôn Chịu Trách Nhiệm, Năng Động, Sáng Tạo',
    desc: 'Không thụ động, không lười biếng — phải dám chịu trách nhiệm trước Đảng và nhân dân.',
    quote: 'Thắng không kiêu, bại không nản.',
    cardImage: '/ngt6.jfif',
    icon: Target,
  },
  {
    id: 7,
    order: '07',
    title: 'Phải Thường Xuyên Tự Phê Bình Và Phê Bình',
    desc: 'Kiên quyết chống tham ô, lãng phí, quan liêu — coi đó là "giặc nội xâm" phá hoại từ bên trong.',
    quote: 'Mỗi kẻ địch bên trong là một bạn đồng minh của kẻ địch bên ngoài. Địch bên ngoài không đáng sợ. Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra.',
    cardImage: '/ngt7.jfif',
    icon: AlertTriangle,
  },
];

interface Props {
  isDark?: boolean;
}

export const CadreStandardsCarouselSlide: React.FC<Props> = ({ isDark: _isDark = false }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const total = CADRE_STANDARDS.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const currentItem = CADRE_STANDARDS[currentIndex];
  const prevItem = CADRE_STANDARDS[prevIndex];
  const nextItem = CADRE_STANDARDS[nextIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleSelectIndex = (idx: number) => {
    setCurrentIndex(idx);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-slideUpFade px-2 sm:px-4 flex flex-col justify-center min-h-[72vh]">
      {/* 2. THREE-CARD HORIZONTAL CAROUSEL */}
      <div className="relative py-2">
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white hover:bg-red-50 text-slate-700 hover:text-[#800000] border border-stone-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-black/5"
          title="Tiêu chuẩn trước (←)"
          aria-label="Tiêu chuẩn trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white hover:bg-red-50 text-slate-700 hover:text-[#800000] border border-stone-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-black/5"
          title="Tiêu chuẩn tiếp theo (→)"
          aria-label="Tiêu chuẩn tiếp theo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3-Card Stage Layout */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {/* A. LEFT CARD (PREVIOUS PRINCIPLE) */}
          <div
            onClick={handlePrev}
            className="hidden md:flex flex-col w-64 lg:w-72 h-[410px] rounded-3xl bg-white border border-stone-200/90 shadow-sm opacity-50 hover:opacity-85 scale-90 hover:scale-95 transition-all duration-300 cursor-pointer overflow-hidden select-none"
            title={`Bấm để chuyển về Tiêu chuẩn ${prevItem.order}: ${prevItem.title}`}
          >
            {/* Image Banner */}
            <div className="h-50 w-full relative overflow-hidden bg-stone-200 shrink-0">
              <img
                src={prevItem.cardImage}
                alt={prevItem.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
            </div>

            {/* Card Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#faf8f5]">
              <div className="space-y-2">
                <h4 className="text-xs sm:text-[13px] font-black text-slate-800 leading-snug line-clamp-2">
                  {prevItem.id}. {prevItem.title}
                </h4>
                <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed">
                  {prevItem.desc}
                </p>
              </div>

              {prevItem.quote && (
                <div className="p-2.5 rounded-xl bg-white/80 border-l-2 border-slate-300 text-[11px] text-slate-600 italic line-clamp-2">
                  "{prevItem.quote}"
                </div>
              )}
            </div>
          </div>

          {/* B. CENTER CARD (ACTIVE / FULL CONTENT - 1.2x SCALE) */}
          <div className="relative w-full max-w-md lg:max-w-lg h-[520px] rounded-3xl bg-[#fefcf9] border-2 border-[#800000] shadow-[0_20px_45px_-10px_rgba(128,0,0,0.22)] flex flex-col z-20 scale-100 ring-4 ring-[#800000]/10 transition-all duration-300 overflow-hidden">
            {/* Top Image Banner */}
            <div className="h-70 w-full relative overflow-hidden bg-stone-200 shrink-0">
              <img
                src={currentItem.cardImage}
                alt={currentItem.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
            </div>

            {/* Content Area with Full Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 bg-[#fefcf9]">
              {/* Title & Main Description */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                  {currentItem.id}. {currentItem.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
                  {currentItem.desc}
                </p>
              </div>

              {/* Prominent Quote Block */}
              {currentItem.quote && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-50/90 via-amber-50/40 to-stone-50 border-l-4 border-[#800000] text-slate-800 shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" />
                    <p className="font-serif-quote italic text-xs sm:text-[12.5px] leading-relaxed text-slate-900 font-medium">
                      "{currentItem.quote}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* C. RIGHT CARD (NEXT PRINCIPLE) */}
          <div
            onClick={handleNext}
            className="hidden md:flex flex-col w-64 lg:w-72 h-[410px] rounded-3xl bg-white border border-stone-200/90 shadow-sm opacity-50 hover:opacity-85 scale-90 hover:scale-95 transition-all duration-300 cursor-pointer overflow-hidden select-none"
            title={`Bấm để chuyển tới Tiêu chuẩn ${nextItem.order}: ${nextItem.title}`}
          >
            {/* Image Banner */}
            <div className="h-50 w-full relative overflow-hidden bg-stone-200 shrink-0">
              <img
                src={nextItem.cardImage}
                alt={nextItem.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            {/* Card Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#faf8f5]">
              <div className="space-y-2">
                <h4 className="text-xs sm:text-[13px] font-black text-slate-800 leading-snug line-clamp-2">
                  {nextItem.id}. {nextItem.title}
                </h4>
                <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed">
                  {nextItem.desc}
                </p>
              </div>

              {nextItem.quote && (
                <div className="p-2.5 rounded-xl bg-white/80 border-l-2 border-slate-300 text-[11px] text-slate-600 italic line-clamp-2">
                  "{nextItem.quote}"
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. STEP INDICATOR PILLS */}
        <div className="flex items-center justify-center gap-1.5 pt-4">
          {CADRE_STANDARDS.map((s, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={s.id}
                onClick={() => handleSelectIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2.5 bg-[#800000] shadow-xs'
                    : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400 hover:scale-125'
                }`}
                title={`Tiêu chuẩn 0${idx + 1}: ${s.title}`}
                aria-label={`Tiêu chuẩn ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
