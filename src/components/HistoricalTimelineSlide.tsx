import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TIMELINE_DATA } from '../data/curriculumData';
import { ImagePlaceholder } from './ImagePlaceholder';
import { 
  Quote, 
  CheckCircle2, 
  Bookmark, 
  X, 
  ArrowRight
} from 'lucide-react';

interface Props {
  isDark?: boolean;
}

const STAGE_SUMMARIES: Record<string, { title: string; teaser: string }> = {
  '1930-1945': {
    title: 'Hoạt động bí mật',
    teaser: 'Cán bộ trung thành tuyệt đối trước sự đàn áp khốc liệt của thực dân Pháp.',
  },
  '1945-1954': {
    title: 'Kháng chiến chống Pháp',
    teaser: 'Tác phẩm "Sửa đổi lối làm việc" (1947) & 5 chuẩn mực đạo đức cách mạng.',
  },
  '1954-1969': {
    title: 'Nhiệm vụ kép',
    teaser: 'Áp lực kép: Vừa xây dựng CNXH miền Bắc vừa chi viện kháng chiến miền Nam.',
  },
  '1969': {
    title: 'Bài báo cuối đời',
    teaser: 'Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân đến tận cuối đời.',
  },
};

export const HistoricalTimelineSlide: React.FC<Props> = ({ isDark = false }) => {
  // Filter the 4 milestones corresponding to 1930-1945, 1945-1954, 1954-1969, 1969
  const milestones = TIMELINE_DATA.filter((m) =>
    ['1930-1945', '1945-1954', '1954-1969', '1969'].includes(m.id)
  );

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const activeMilestone = milestones.find((m) => m.id === activeModalId);

  const handleOpenModal = (id: string) => {
    setActiveModalId(id);
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  // Lock background scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activeModalId) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalId]);

  const renderTimelineCard = (m: typeof milestones[0], idx: number) => {
    const summary = STAGE_SUMMARIES[m.id] || { title: m.title, teaser: m.description };
    const isHovered = hoveredId === m.id;

    return (
      <div
        onClick={() => handleOpenModal(m.id)}
        onMouseEnter={() => setHoveredId(m.id)}
        onMouseLeave={() => setHoveredId(null)}
        className={`group relative bg-white rounded-2xl border transition-all duration-300 p-4 sm:p-5 shadow-xs cursor-pointer flex flex-col justify-between ${
          isHovered
            ? 'border-[#800000] shadow-md -translate-y-1 ring-2 ring-[#800000]/10'
            : 'border-slate-200/90 hover:border-[#800000]/50 hover:shadow-sm'
        }`}
      >
        <div className="space-y-2">
          {/* Card Header Tag */}
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-[#800000] border border-red-100">
              GIAI ĐOẠN 0{idx + 1}
            </span>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              {m.year}
            </span>
          </div>

          {/* Short Title */}
          <h3 className="text-sm sm:text-[15px] font-black text-slate-900 leading-snug group-hover:text-[#800000] transition-colors">
            {summary.title}
          </h3>

          {/* Short Teaser Description */}
          {/* <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
            {summary.teaser}
          </p> */}
        </div>

        {/* Action CTA */}
        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#800000]">
          <span className="group-hover:underline">Xem chi tiết</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-slideUpFade px-2 sm:px-4">
      {/* 1. COMPACT SECTION HEADER */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight`}>
          Bối cảnh lịch sử nào đã dẫn đến những tư tưởng này?
        </h2>
        <p className={`text-xs sm:text-sm ${isDark ? 'text-red-200' : 'text-slate-600'} leading-relaxed max-w-2xl mx-auto`}>
          4 giai đoạn lịch sử khắc nghiệt tôi rèn tư tưởng Hồ Chí Minh về xây dựng Đảng và công tác cán bộ
        </p>
      </div>

      {/* 2. MODERN HORIZONTAL TIMELINE WITH ALTERNATING NODES (DESKTOP / TABLET) */}
      <div className="hidden md:block relative py-6">
        {/* Timeline Horizontal Line Axis */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-1 bg-gradient-to-r from-red-800 via-[#800000] to-red-600 rounded-full z-0 flex items-center justify-end pr-1">
          {/* Arrow pointing right */}
          <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45 transform translate-x-1"></div>
        </div>

        {/* Time Direction Badge */}
        <div className="absolute -top-1 right-4 text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
          <span>Tiến trình thời gian</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#800000]" />
        </div>

        {/* 4 Alternating Columns */}
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {milestones.map((m, idx) => {
            const isTop = idx % 2 === 0; // Top for 0 (1930-1945) & 2 (1954-1969), Bottom for 1 (1945-1954) & 3 (1969)
            const isHovered = hoveredId === m.id;
            const shortYear = m.year.split('–')[0].trim();

            return (
              <div key={m.id} className="flex flex-col items-center justify-between h-[360px]">
                {/* TOP HALF */}
                <div className="w-full flex-1 flex flex-col justify-end items-center">
                  {isTop ? (
                    <div className="w-full space-y-2">
                      {renderTimelineCard(m, idx)}
                      {/* Stem connector line going DOWN */}
                      <div className="w-full flex justify-center">
                        <div className={`w-0.5 h-6 transition-colors duration-300 ${
                          isHovered ? 'bg-[#800000]' : 'bg-red-200'
                        }`}></div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full"></div>
                  )}
                </div>

                {/* CENTER TIMELINE NODE */}
                <div className="relative py-2 flex items-center justify-center">
                  <button
                    onClick={() => handleOpenModal(m.id)}
                    onMouseEnter={() => setHoveredId(m.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative w-12 h-12 rounded-full border-4 transition-all duration-300 flex items-center justify-center font-black text-xs cursor-pointer shadow-sm z-20 ${
                      isHovered
                        ? 'bg-[#800000] border-amber-300 text-white scale-125 shadow-md ring-4 ring-[#800000]/20'
                        : 'bg-white border-[#800000] text-[#800000] hover:scale-110'
                    }`}
                    title={`Mốc ${m.year}: Bấm để xem chi tiết`}
                  >
                    {shortYear}
                  </button>
                </div>

                {/* BOTTOM HALF */}
                <div className="w-full flex-1 flex flex-col justify-start items-center">
                  {!isTop ? (
                    <div className="w-full space-y-2">
                      {/* Stem connector line going DOWN from node to card */}
                      <div className="w-full flex justify-center">
                        <div className={`w-0.5 h-6 transition-colors duration-300 ${
                          isHovered ? 'bg-[#800000]' : 'bg-red-200'
                        }`}></div>
                      </div>
                      {renderTimelineCard(m, idx)}
                    </div>
                  ) : (
                    <div className="h-full"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. VERTICAL TIMELINE FOR MOBILE VIEW */}
      <div className="md:hidden space-y-4 relative pl-6 border-l-2 border-[#800000]/40 my-4">
        {milestones.map((m, idx) => (
          <div key={m.id} className="relative">
            {/* Mobile Node on Left line */}
            <div className="absolute -left-[31px] top-4 w-6 h-6 rounded-full bg-[#800000] border-2 border-white text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              0{idx + 1}
            </div>
            {renderTimelineCard(m, idx)}
          </div>
        ))}
      </div>

      {/* 4. REDESIGNED COMPACT UI OVERLAY VIA PORTAL (NO BACKGROUND RECTANGLE / NO CONTAINER BOUNDS) */}
      {activeMilestone && createPortal(
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/[0.07] backdrop-blur-[2.5px] p-3 sm:p-5 md:p-6 transition-all duration-200"
          style={{ margin: 0 }}
        >
          <div className="relative bg-[#fefcf9] rounded-2xl md:rounded-3xl border border-stone-300/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5 max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-slideUpFade">
            {/* A. COMPACT HEADER */}
            <div className="px-5 py-3 sm:px-6 sm:py-3.5 bg-white border-b border-stone-200/90 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="shrink-0 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#800000] text-white shadow-xs">
                  MỐC {activeMilestone.year}
                </span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300"></span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                  {activeMilestone.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 flex items-center justify-center transition-all cursor-pointer ring-1 ring-slate-200/70 hover:ring-red-200 shrink-0 ml-2"
                title="Đóng cửa sổ (Esc)"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* B. CONTENT BODY - 2 COLUMNS (FITS VIEWPORT WITH MINIMAL SCROLL) */}
            <div className="p-5 sm:p-6 md:p-7 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
                {/* LEFT COLUMN (55-60%): Concise Content, Quote & Key Points */}
                <div className="lg:col-span-7 space-y-3.5">
                  {/* Stage Badge & Context tag */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-red-100/80 text-[#800000] border border-red-200/60">
                      {activeMilestone.subtitle || `Bối cảnh lịch sử`}
                    </span>
                  </div>

                  {/* Stage Main Title */}
                  <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-snug tracking-tight">
                    {activeMilestone.title}
                  </h2>

                  {/* Short Explanatory Text */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                    {activeMilestone.description}
                  </p>

                  {/* Prominent Quote Block if exists */}
                  {activeMilestone.quote && (
                    <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-red-50/90 via-amber-50/40 to-stone-50 border-l-4 border-[#800000] text-slate-800 shadow-2xs">
                      <div className="flex items-start gap-2.5">
                        <Quote className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" />
                        <p className="font-serif-quote italic text-xs sm:text-[12.5px] leading-relaxed text-slate-900 font-medium">
                          "{activeMilestone.quote}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Key Points - Compact List */}
                  {activeMilestone.keyPoints && activeMilestone.keyPoints.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Bookmark className="w-3.5 h-3.5 text-[#800000]" />
                        <span>Ý NGHĨA & NỘI DUNG TRỌNG TÂM</span>
                      </div>
                      <div className="space-y-1.5">
                        {activeMilestone.keyPoints.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 text-xs text-slate-800 font-medium leading-snug shadow-2xs hover:border-[#800000]/30 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT COLUMN (40-45%): Historical Document Image Frame & Caption */}
                <div className="lg:col-span-5 space-y-2.5 flex flex-col justify-start">
                  <div className="w-full rounded-2xl bg-stone-100/90 p-1.5 border border-stone-200 shadow-xs">
                    <ImagePlaceholder
                      label={`Tư liệu mốc ${activeMilestone.year}`}
                      prompt={activeMilestone.suggestedImagePrompt || `Tư liệu lịch sử giai đoạn ${activeMilestone.year}`}
                      aspectRatio="landscape"
                      className="w-full rounded-xl"
                    />
                  </div>

                  {/* Caption & Instructions */}
                  <div className="text-center px-1 space-y-1">
                    <p className="text-xs font-semibold text-slate-700">
                      Tư liệu lịch sử: Giai đoạn {activeMilestone.year}
                    </p>
                    <p className="text-[11px] text-slate-400 italic leading-tight">
                      💡 Khung ảnh tư liệu: Có thể dán URL ảnh trực tiếp hoặc sao chép prompt để tìm kiếm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

