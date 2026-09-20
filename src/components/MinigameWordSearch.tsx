import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  RotateCcw, 
  Eye, 
  Trophy, 
  Award
} from 'lucide-react';

interface MysteryPhrase {
  id: number;
  phrase: string;
  category: string;
  explanation: string;
  points: number;
}

const PHRASES: MysteryPhrase[] = [
  {
    id: 1,
    phrase: 'ĐỘC ĐOÁN',
    category: 'Tập trung dân chủ',
    explanation: 'Chuyên quyền, gia trưởng, áp đặt ý chí cá nhân lên tập thể.',
    points: 100,
  },
  {
    id: 2,
    phrase: 'DỰA DẪM TẬP THỂ',
    category: 'Trách nhiệm cá nhân',
    explanation: 'Ỷ lại, trốn tránh trách nhiệm cá nhân, thiếu tính quyết đoán.',
    points: 100,
  },
  {
    id: 3,
    phrase: 'CHE GIẤU KHUYẾT ĐIỂM',
    category: 'Tự phê bình',
    explanation: 'Sợ mất thành tích, không dám nhìn thẳng sự thật để sửa mình.',
    points: 100,
  },
  {
    id: 4,
    phrase: 'MẤT ĐOÀN KẾT',
    category: 'Đoàn kết nội bộ',
    explanation: 'Phá hoại sự thống nhất ý chí và hành động của tổ chức Đảng.',
    points: 100,
  },
  {
    id: 5,
    phrase: 'CỤC BỘ',
    category: 'Ý thức đại cục',
    explanation: 'Chỉ vun vén cho lợi ích địa phương, cơ quan, đơn vị mình.',
    points: 100,
  },
  {
    id: 6,
    phrase: 'BÈ PHÁI',
    category: 'Tổ chức cán bộ',
    explanation: 'Lôi kéo người thân quen, tạo nhóm lợi ích gây chia rẽ.',
    points: 100,
  },
  {
    id: 7,
    phrase: 'THAM Ô',
    category: 'Đạo đức cách mạng',
    explanation: 'Tội ác "giặc nội xâm", bòn rút của công và của nhân dân.',
    points: 100,
  },
  {
    id: 8,
    phrase: 'LÃNG PHÍ',
    category: 'Đạo đức cách mạng',
    explanation: 'Tiêu hao vô bổ của cải, thời gian, công sức của tập thể.',
    points: 100,
  },
  {
    id: 9,
    phrase: 'QUAN LIÊU',
    category: 'Quan hệ với Dân',
    explanation: 'Xa rời thực tế, hách dịch, không lắng nghe ý kiến quần chúng.',
    points: 100,
  },
  {
    id: 10,
    phrase: 'THỤ ĐỘNG',
    category: 'Tác phong làm việc',
    explanation: 'Trông chờ mệnh lệnh, thiếu linh hoạt và sáng tạo trong việc.',
    points: 100,
  },
  {
    id: 11,
    phrase: 'LƯỜI BIẾNG',
    category: 'Rèn luyện cán bộ',
    explanation: 'Lười học lý luận, lười lao động, ngại khó khăn gian khổ.',
    points: 100,
  },
];

export const MinigameWordSearch: React.FC = () => {
  const [revealedIds, setRevealedIds] = useState<number[]>([]);

  const totalPoints = PHRASES.reduce((acc, p) => acc + p.points, 0);
  const currentScore = revealedIds.reduce((acc, id) => {
    const item = PHRASES.find(p => p.id === id);
    return acc + (item ? item.points : 0);
  }, 0);
  const isCompleted = revealedIds.length === PHRASES.length;

  const handleRevealCard = (id: number) => {
    if (!revealedIds.includes(id)) {
      setRevealedIds(prev => [...prev, id]);
    }
  };

  const handleRevealAll = () => {
    setRevealedIds(PHRASES.map(p => p.id));
  };

  const handleReset = () => {
    setRevealedIds([]);
  };

  const renderCard = (item: MysteryPhrase) => {
    const isRevealed = revealedIds.includes(item.id);

    return (
      <div
        key={item.id}
        onClick={() => !isRevealed && handleRevealCard(item.id)}
        className={`relative rounded-2xl border transition-all duration-200 p-3 sm:p-3.5 flex flex-col justify-between h-[105px] sm:h-[115px] cursor-pointer select-none group ${
          isRevealed
            ? 'bg-white border-[#800000]/40 shadow-xs ring-1 ring-[#800000]/15'
            : 'bg-white/80 hover:bg-white border-dashed border-slate-300 hover:border-[#800000]/50 hover:shadow-xs'
        }`}
      >
        {isRevealed ? (
          /* REVEALED STATE */
          <div className="flex flex-col justify-between h-full animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-red-50 text-[#800000] border border-red-100">
                Ô {item.id < 10 ? `0${item.id}` : item.id}
              </span>
              <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                +{item.points}
              </span>
            </div>

            <div className="my-auto">
              <h3 className="text-xs sm:text-sm md:text-[14.5px] font-black text-slate-900 tracking-tight leading-snug uppercase">
                {item.phrase}
              </h3>
            </div>

            <p className="text-[10.5px] sm:text-[11px] text-slate-600 line-clamp-2 leading-tight font-normal">
              {item.explanation}
            </p>
          </div>
        ) : (
          /* MYSTERY / HIDDEN STATE */
          <div className="flex flex-col items-center justify-center text-center h-full space-y-1.5">
            <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-red-50 group-hover:text-[#800000] text-slate-400 flex items-center justify-center font-bold transition-colors shadow-2xs">
              <HelpCircle className="w-4 h-4" />
            </div>

            <div>
              <span className="text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-[#800000] transition-colors block leading-tight">
                Ô BÍ MẬT {item.id < 10 ? `0${item.id}` : item.id}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 block">
                Bấm mở (+{item.points} đ)
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-4 animate-slideUpFade px-2 sm:px-4">
      {/* 1. COMPACT HEADER & CONTROLS */}
      <div className="relative bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-800 via-[#800000] to-amber-600"></div>

        <div className="space-y-3">
          {/* Top Bar: Title + Score */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/70 text-[#800000] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                MINIGAME
              </span>
              <h1 className="text-base sm:text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">
                TÌM CỤM TỪ – NHẬN DIỆN NHỮNG BIỂU HIỆN CẦN TRÁNH
              </h1>
            </div>

            {/* Score HUD - Only Total Score */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-50 border border-amber-200/90 text-amber-900 font-extrabold text-xs sm:text-sm shadow-2xs shrink-0">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>{currentScore} / {totalPoints} ĐIỂM</span>
            </div>
          </div>

          {/* Subtitle & Action Controls Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl">
              Chủ đề: Những hành vi, biểu hiện tiêu cực cần tránh để góp phần xây dựng Đảng trong sạch, vững mạnh.
            </p>

            {/* Compact Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleRevealAll}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-2xs active:scale-95"
                title="Mở tất cả các ô"
              >
                <Eye className="w-4 h-4 text-slate-600" />
                <span>Mở hết</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-2xs active:scale-95"
                title="Chơi lại từ đầu"
              >
                <RotateCcw className="w-4 h-4 text-slate-600" />
                <span>Chơi lại</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MYSTERY CARDS: 4 + 4 + 3 ENLARGED LAYOUT */}
      <div className="space-y-3">
        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5">
          {PHRASES.slice(0, 4).map(renderCard)}
        </div>

        {/* Row 2: 4 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5">
          {PHRASES.slice(4, 8).map(renderCard)}
        </div>

        {/* Row 3: 3 Cards (Centered on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-3 sm:gap-3.5">
          {PHRASES.slice(8, 11).map(renderCard)}
        </div>
      </div>

      {/* 3. VICTORY BANNER (Compact & Elegant) */}
      {isCompleted && (
        <div className="bg-gradient-to-r from-red-950 via-[#800000] to-red-950 text-white rounded-2xl p-4 text-center shadow-md border border-red-800 animate-slideUpFade flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-red-950 flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Award className="w-5 h-5 text-red-950" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wide">
                XUẤT SẮC! ĐÃ NHẬN DIỆN TOÀN BỘ 11 BIỂU HIỆN CẦN TRÁNH
              </h4>
              <p className="text-[11px] sm:text-xs text-red-100 opacity-90">
                Kiên quyết loại bỏ suy thoái để xây dựng Đảng trong sạch, vững mạnh.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl bg-white/15 text-amber-300 text-xs sm:text-sm font-bold">
              1100 / 1100 ĐIỂM
            </span>
            <button
              onClick={handleReset}
              className="px-4 py-1.5 bg-white text-[#800000] hover:bg-red-50 rounded-xl font-bold text-xs sm:text-sm shadow-xs active:scale-95 transition-all"
            >
              Chơi lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
