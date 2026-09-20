import React, { useState, useEffect } from 'react';
import { PRESENTATION_SLIDES } from '../data/curriculumData';
import { CreativeFormula } from './CreativeFormula';
import { MinigameWordSearch } from './MinigameWordSearch';
import { HistoricalTimelineSlide } from './HistoricalTimelineSlide';
import {
  ChevronLeft, ChevronRight, ArrowDown, Quote, ArrowRight, BookOpen, Shield, Users, HeartHandshake, Eye, Scale, Compass, Anchor
} from 'lucide-react';



export const PresentationDeck: React.FC = () => {
  const getInitialIndex = () => {
    const hash = window.location.hash.replace('#slide-', '');
    const idx = parseInt(hash) - 1;
    return !isNaN(idx) && idx >= 0 && idx < PRESENTATION_SLIDES.length ? idx : 0;
  };
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(getInitialIndex());
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${currentSlideIndex + 1}`);
    setOpenAccordion(null); // Reset accordion on slide change
  }, [currentSlideIndex]);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slide = PRESENTATION_SLIDES[currentSlideIndex];
  const isDark = slide.theme === 'dark' || slide.id === 'slide-1' || slide.layout === 'intro';

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const renderSlideContent = () => {
    // 1. HERO SECTION (Slide 1)
    if (slide.id === 'slide-1') {
      return (
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center animate-slideUpFade">
          <span className="inline-block py-2 px-5 rounded-full bg-red-900/50 border border-red-800/50 text-red-200 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            Chương 04
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-yellow-300 leading-tight mb-8 drop-shadow-md">
            {slide.title}
          </h1>
          {(slide.subtitle || slide.notes) && (
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl leading-relaxed opacity-90">
              {slide.subtitle || slide.notes}
            </p>
          )}
        </div>
      );
    }

    // 2. LARGE QUOTE (Slide 2)
    if (slide.id === 'slide-2') {
      return (
        <div className="w-full max-w-5xl mx-auto space-y-6 animate-slideUpFade">
          <div className="flex items-center gap-4 pb-3 border-b border-slate-200">
            <span className="w-10 h-10 rounded-xl bg-[#800000] text-white font-bold flex items-center justify-center text-lg shadow-sm">
              I
            </span>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Tính tất yếu của sự ra đời và vai trò hạt nhân của Đảng
              </h3>
              <p className="text-sm text-slate-500 mt-1">Đảng là điều kiện tiên quyết của cách mạng và là người cầm lái con thuyền dân tộc</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-red-900 font-bold text-sm uppercase tracking-wider border-b border-slate-100 pb-4">
              <BookOpen className="w-5 h-5 text-red-800" />
              <span>1. Đảng – Điều kiện tiên quyết của cách mạng</span>
            </div>

            {/* Quote từ Đường cách mệnh */}
            <div className="p-6 rounded-lg bg-slate-100/80 border-l-4 border-red-800">
              <div className="text-sm text-slate-600 font-medium mb-2">
                Trong tác phẩm <em>Đường cách mệnh (1927)</em>, Người nêu rõ:
              </div>
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-red-800 shrink-0 mt-1" />
                <p className="italic text-slate-900 text-lg md:text-xl leading-relaxed font-medium">
                  "Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi."
                </p>
              </div>
            </div>

            {/* Hình tượng cốt lõi */}
            <div className="p-5 rounded-lg bg-[#f7f5f0] border border-[#e8e4db] space-y-3">
              <div className="flex items-center gap-2 text-stone-800 font-bold text-sm">
                <Compass className="w-4 h-4 text-amber-800" />
                <span>Hình tượng cốt lõi: Người cầm lái con thuyền cách mạng</span>
              </div>
              <p className="italic text-slate-900 text-lg md:text-xl font-bold">
                "Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
                Hồ Chí Minh đã dùng hình tượng chiếc thuyền vượt sóng gió và người cầm lái để nhấn mạnh: phong trào cách mạng của quần chúng nếu không có một bộ tham mưu sáng suốt, kiên định dẫn đường thì sẽ mất phương hướng, tan rã trước phong ba bão táp.
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 3. VERTICAL PROGRESSION (Slide 3)
    if (slide.id === 'slide-3') {
      return (
        <div className="w-full max-w-5xl mx-auto space-y-6 animate-slideUpFade">
          <div className="flex items-center gap-4 pb-3 border-b border-slate-200">
            <span className="w-10 h-10 rounded-xl bg-[#800000] text-white font-bold flex items-center justify-center text-lg shadow-sm">
              I
            </span>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Tính tất yếu của sự ra đời và vai trò hạt nhân của Đảng
              </h3>
              <p className="text-sm text-slate-500 mt-1">Đảng là điều kiện tiên quyết của cách mạng và là người cầm lái con thuyền dân tộc</p>
            </div>
          </div>

          <div className="bg-[#fdfbf7] rounded-xl border border-[#e8e4db] p-8 shadow-sm">
            <div className="flex items-center gap-3 text-red-900 font-bold text-sm uppercase tracking-wider border-b border-slate-200 pb-4 mb-6">
              <Anchor className="w-5 h-5 text-red-800" />
              <span>2. Vai trò hạt nhân xuyên suốt của Đảng</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Khách quan */}
              <div className="p-6 rounded-xl bg-[#f7f5f0] border border-slate-200/80 shadow-sm flex flex-col h-full">
                <div>
                  <span className="text-sm font-bold px-3 py-1.5 rounded-md bg-slate-200 text-slate-800 inline-block">Khách quan</span>
                  <h5 className="font-bold text-slate-900 text-lg md:text-xl mt-5 mb-4 leading-snug">Tính tất yếu khách quan</h5>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Sự lãnh đạo của Đảng là tất yếu khách quan, bắt nguồn trực tiếp từ yêu cầu giải phóng dân tộc khỏi ách nô lệ và khát vọng phát triển của non sông đất nước.
                  </p>
                </div>
              </div>
              {/* Quyết định */}
              <div className="p-6 rounded-xl bg-[#f7f5f0] border border-slate-200/80 shadow-sm flex flex-col h-full">
                <div>
                  <span className="text-sm font-bold px-3 py-1.5 rounded-md bg-blue-100 text-blue-800 inline-block">Quyết định</span>
                  <h5 className="font-bold text-slate-900 text-lg md:text-xl mt-5 mb-4 leading-snug">Quyết định cả hai giai đoạn cách mạng</h5>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Đảng giữ vai trò nhân tố quyết định thắng lợi trong cả hai bước ngoặt vĩ đại: Cách mạng dân tộc dân chủ nhân dân (giành độc lập) và Cách mạng xã hội chủ nghĩa (xây dựng đất nước tự do, phồn vinh).
                  </p>
                </div>
              </div>
              {/* Cốt lõi */}
              <div className="p-6 rounded-xl bg-[#f7f5f0] border border-slate-200/80 shadow-sm flex flex-col h-full">
                <div>
                  <span className="text-sm font-bold px-3 py-1.5 rounded-md bg-red-100 text-red-800 inline-block">Cốt lõi</span>
                  <h5 className="font-bold text-slate-900 text-lg md:text-xl mt-5 mb-4 leading-snug">Mục tiêu cốt lõi bất biến</h5>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Bảo đảm sự phát triển của đất nước theo mục tiêu "Độc lập dân tộc gắn liền với chủ nghĩa xã hội" là nguyên tắc vận hành cốt lõi và ngọn cờ xuyên suốt từ ngày đầu thành lập.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 4. CREATIVE FORMULA (Slide 4)
    if (slide.id === 'slide-4') {
      return (
        <div className="w-full max-w-5xl mx-auto space-y-6 animate-slideUpFade">
          <div className="flex items-center gap-4 pb-3 border-b border-slate-200">
            <span className="w-10 h-10 rounded-xl bg-[#800000] text-white font-bold flex items-center justify-center text-lg shadow-sm">
              II
            </span>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Quy luật ra đời mang tính sáng tạo của Đảng Cộng sản Việt Nam
              </h3>
              <p className="text-sm text-slate-500 mt-1">Mô hình 3 thành tố: Bổ sung Phong trào yêu nước vào lý luận thành lập Đảng</p>
            </div>
          </div>
          <CreativeFormula />
        </div>
      );
    }

    // 6. COMPARISON (Slide 6)
    if (slide.id === 'slide-6') {
      return (
        <div className="w-full max-w-5xl mx-auto space-y-6 animate-slideUpFade">
          <div className="flex items-center gap-4 pb-3 border-b border-slate-200">
            <span className="w-10 h-10 rounded-xl bg-[#800000] text-white font-bold flex items-center justify-center text-lg shadow-sm">
              III
            </span>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Giá trị lý luận và ý nghĩa thực tiễn
              </h3>
              <p className="text-sm text-slate-500 mt-1">Đóng góp cho lý luận cách mạng giải phóng dân tộc và bước ngoặt cứu nước</p>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${isDark ? 'bg-red-800/50' : 'bg-[#800000]/10'} rounded-3xl overflow-hidden shadow-sm`}>
            {slide.bullets?.map((b: any, i: number) => (
              <div key={i} className={`${isDark ? 'bg-red-900/60 hover:bg-red-900/80' : 'bg-white hover:bg-[#fdfbf7]'} p-10 md:p-12 transition-colors`}>
                <div className={`text-sm font-bold ${isDark ? 'text-red-300 border-red-400/50' : 'text-[#800000] border-[#800000]'} uppercase tracking-widest mb-6 inline-block border-b-2 pb-2`}>
                  {b.title}
                </div>
                <p className={`text-lg ${isDark ? 'text-red-100' : 'text-slate-700'} leading-relaxed`}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 7. MODERN ACADEMIC SECTION HEADER (Slide 1b and Slide 7)
    if (slide.id === 'slide-1b' || slide.id === 'slide-7') {
      const isSlide1b = slide.id === 'slide-1b';
      const sectionNum = isSlide1b ? '4 · 1 · 1' : '4 · 1 · 2';
      const subtitle = isSlide1b
        ? 'Quy luật ra đời và vai trò hạt nhân lãnh đạo sự nghiệp cách mạng'
        : 'Nền tảng giữ vững vai trò lãnh đạo và hoàn thành nhiệm vụ cách mạng';

      return (
        <div className="w-full max-w-4xl mx-auto animate-slideUpFade">
          <div className="relative bg-white/90 backdrop-blur-xs rounded-2xl md:rounded-3xl border border-slate-200/80 shadow-xs py-14 px-8 sm:px-12 md:px-16 overflow-hidden text-center">
            {/* Subtle background dot grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* Section number pill */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50/80 border border-red-100 text-[#800000] font-bold text-xs md:text-sm tracking-[0.25em] uppercase shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800000]"></span>
                  MỤC {sectionNum}
                </span>
              </div>

              {/* Main Title with balanced responsive typography */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.3] max-w-3xl mx-auto uppercase">
                {isSlide1b ? (
                  <>
                    Tính tất yếu và vai trò lãnh đạo <br className="hidden sm:inline" />
                    của Đảng Cộng sản Việt Nam
                  </>
                ) : (
                  'Đảng phải trong sạch, vững mạnh'
                )}
              </h1>

              {/* Minimalist Accent line with dot */}
              <div className="flex items-center justify-center gap-2 pt-1 pb-1">
                <div className="w-10 h-px bg-slate-200"></div>
                <div className="w-2 h-2 rounded-full bg-[#800000]/70"></div>
                <div className="w-10 h-px bg-slate-200"></div>
              </div>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      );
    }

    // 8. EDITORIAL LIST (Slide 8)
    if (slide.id === 'slide-8') {
      return (
        <div className="w-full max-w-4xl animate-slideUpFade">
          <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-16`}>{slide.title}</h2>
          <div className="space-y-16">
            {slide.bullets?.map((b: any, i: number) => (
              <div key={i}>
                <div className="flex items-center gap-6 mb-6">
                  <span className={`text-3xl ${isDark ? 'text-red-400' : 'text-[#800000]'} italic font-bold`}>0{i+1}</span>
                  <div className={`flex-1 h-px ${isDark ? 'bg-red-800/50' : 'bg-[#800000]/20'}`}></div>
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-red-100' : 'text-slate-900'} mb-6`}>{b.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className={`text-[16px] font-medium ${isDark ? 'text-red-100/90 border-red-800' : 'text-slate-800 border-slate-200'} leading-relaxed border-l-2 pl-4`}>{b.desc}</p>
                  <p className={`text-[16px] ${isDark ? 'text-red-200/80 border-red-500/30 bg-red-900/30' : 'text-slate-600 border-[#800000]/20 bg-[#f7f5f0]'} leading-relaxed border-l-2 pl-4 p-4 rounded-r-xl`}>{b.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 9. SIX POINT GRID (Slide 9)
    if (slide.id === 'slide-9') {
      return (
        <div className="w-full max-w-5xl mx-auto animate-slideUpFade">
          <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-6 text-center`}>{slide.title}</h2>
          <p className={`text-xl ${isDark ? 'text-red-200' : 'text-slate-600'} mb-20 text-center`}>{slide.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {slide.bullets?.map((b: any, i: number) => (
              <div key={i} className={`relative pt-6 border-t-2 ${isDark ? 'border-red-800/50 hover:border-red-400' : 'border-slate-200 hover:border-[#800000]'} transition-colors group`}>
                <div className={`absolute top-0 right-0 -mt-10 text-6xl font-black ${isDark ? 'text-red-900/30 group-hover:text-red-800/50' : 'text-slate-100 group-hover:text-[#800000]/5'} transition-colors -z-10`}>
                  0{i+1}
                </div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-red-300' : 'text-[#800000]'} mb-4 leading-snug pr-8`}>{b.title}</h3>
                <p className={`${isDark ? 'text-red-100/70' : 'text-slate-600'} leading-relaxed text-[15px]`}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 9b. PREMIUM E-LEARNING LEARNING POINTS (Slide 9b / Page 11)
    if (slide.id === 'slide-9b') {
      const risks = [
        {
          num: '01',
          title: 'Mất vai trò lãnh đạo',
          desc: 'Đánh mất niềm tin thiêng liêng của nhân dân và vị thế hạt nhân tiên phong dẫn đường.',
        },
        {
          num: '02',
          title: 'Trở nên không trong sạch, vững mạnh',
          desc: 'Nội bộ bị suy giảm sức chiến đấu, kỷ luật buông lỏng và thiếu tính nhất quán.',
        },
        {
          num: '03',
          title: 'Cán bộ, đảng viên thoái hóa, biến chất',
          desc: 'Sa vào chủ nghĩa cá nhân, tham ô, lãng phí, quan liêu và xa rời quần chúng nhân dân.',
        },
        {
          num: '04',
          title: 'Nguy cơ mất thành quả cách mạng',
          desc: 'Thành quả xương máu đấu tranh của bao thế hệ có nguy cơ bị hủy hoại từ bên trong.',
        },
      ];

      return (
        <div className="w-full max-w-4xl mx-auto space-y-7 animate-slideUpFade px-4">
          {/* Header Context */}
          <div className="space-y-3 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
              Vì sao phải xây dựng Đảng trong sạch, vững mạnh?
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Nếu Đảng không có đạo đức, không giữ vững tính văn minh, tổ chức sẽ đối mặt với 4 nguy cơ cốt tử:
            </p>
          </div>

          {/* 4 Learning Cards in a 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {risks.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:border-[#800000]/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-[#800000] bg-red-50 border border-red-100 px-2.5 py-1 rounded-md">
                      NGUY CƠ {item.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-500 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 10. PRINCIPLES LAYOUT (Slide 10)
    if (slide.id === 'slide-10') {
      return (
        <div className="w-full max-w-5xl mx-auto animate-slideUpFade">
          <div className="space-y-3 mb-16 text-center">
            <h2 className={`text-3xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{slide.title}</h2>
            <p className={`text-lg ${isDark ? 'text-red-200' : 'text-slate-600'} mt-4`}>{slide.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {slide.bullets?.map((bullet: any, idx: number) => {
              const icons = [Users, Shield, Eye, Scale, HeartHandshake];
              const IconComp = icons[idx] || Users;
              const isLastOdd = idx === slide.bullets!.length - 1 && slide.bullets!.length % 2 !== 0;

              return (
                <div key={idx} className={`p-8 rounded-3xl ${isDark ? 'bg-red-900/30 border-red-800/50' : 'bg-white border-[#e8e4db]'} shadow-sm flex flex-col h-full ${isLastOdd ? 'md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto w-full' : ''}`}>
                  <div className={`flex items-center gap-4 pb-4 border-b ${isDark ? 'border-red-800/50' : 'border-slate-100'} shrink-0`}>
                    <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-red-900/50 text-red-300' : 'bg-red-50 text-[#800000]'} flex items-center justify-center shrink-0`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-sm font-extrabold uppercase tracking-wider ${isDark ? 'text-red-400' : 'text-[#800000]'} block mb-1`}>Nguyên tắc {idx + 1}</span>
                      <h4 className={`font-bold ${isDark ? 'text-red-100' : 'text-slate-900'} text-lg`}>{bullet.title}</h4>
                    </div>
                  </div>
                  <div className="flex-1 mt-6">
                    <p className={`text-[15px] font-semibold ${isDark ? 'text-red-100/90 bg-red-900/40' : 'text-slate-800 bg-[#f7f5f0]'} leading-relaxed p-5 rounded-xl`}>
                      {bullet.desc}
                    </p>
                    <div className="space-y-3 pl-2 mt-6">
                      {bullet.points?.map((pt: string, pIdx: number) => (
                        <div key={pIdx} className={`flex items-start gap-3 text-[15px] ${isDark ? 'text-red-200/80' : 'text-slate-700'}`}>
                          <span className={`${isDark ? 'text-red-400' : 'text-[#800000]'} font-bold mt-0.5`}>•</span>
                          <span className="leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className={`p-5 rounded-xl ${isDark ? 'bg-emerald-900/30 border-emerald-800/50 text-emerald-300' : 'bg-[#e6f4ea]/50 border-[#ceead6] text-[#0d652d]'} text-[15px] font-medium flex items-center gap-3`}>
                      <ArrowRight className="w-5 h-5 shrink-0" />
                      <span>{bullet.details}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // 11. STANDARDS LAYOUT (Slide 11)
    if (slide.id === 'slide-11') {
      return (
        <div className="w-full max-w-5xl mx-auto animate-slideUpFade">
          <div className="space-y-3 mb-16 text-center">
            <h2 className={`text-3xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{slide.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {slide.bullets?.map((bullet: any, idx: number) => {
              const isLastOdd = idx === slide.bullets!.length - 1 && slide.bullets!.length % 2 !== 0;
              return (
                <div key={idx} className={`p-8 rounded-3xl ${isDark ? 'bg-red-900/20 border-red-800/50' : 'bg-[#f7f5f0] border-[#e8e4db]'} flex flex-col h-full shadow-sm hover:shadow-md transition-shadow border ${isLastOdd ? 'md:col-span-2 md:w-[calc(50%-16px)] md:mx-auto w-full' : ''}`}>
                  <div className="flex-1">
                    <div className="flex items-start gap-5 mb-5">
                      <span className={`w-10 h-10 rounded-xl ${isDark ? 'bg-red-900/50 border-red-800 text-red-300' : 'bg-white border-[#e8e4db] text-[#800000]'} font-bold text-lg flex items-center justify-center shrink-0 shadow-sm border`}>
                        {idx + 1}
                      </span>
                      <span className={`text-[17px] font-bold ${isDark ? 'text-red-300' : 'text-[#800000]'} leading-snug pt-1.5`}>
                        {bullet.title}
                      </span>
                    </div>
                    <p className={`text-[15px] ${isDark ? 'text-red-100' : 'text-slate-700'} leading-relaxed pl-15`}>
                      {bullet.desc}
                    </p>
                  </div>
                  {bullet.details && (
                    <div className="mt-auto pt-6">
                      <div className={`p-5 rounded-xl ${isDark ? 'bg-red-900/40 border-red-800' : 'bg-white border-slate-200/80'} shadow-sm border`}>
                        <p className={`italic text-[15px] ${isDark ? 'text-red-200/80' : 'text-slate-600'} leading-relaxed`}>
                          "{bullet.details}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }



    // 13. SIX POINT FRAMEWORK (Slide 12b)
    if (slide.id === 'slide-12b') {
      return (
        <div className="w-full max-w-3xl mx-auto animate-slideUpFade">
          <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-16 text-center`}>{slide.title}</h2>
          <div className="space-y-4">
            {slide.bullets?.map((b: any, i: number) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-full ${isDark ? 'bg-red-900/30 border-red-800/50' : 'bg-white border-[#e8e4db]'} px-8 py-6 rounded-2xl shadow-sm text-center relative z-10 group hover:border-[#800000]/50 transition-colors border`}>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-red-300' : 'text-[#800000]'} mb-2`}>{b.title}</h3>
                  <p className={`${isDark ? 'text-red-100/80' : 'text-slate-600'} text-[15px]`}>{b.desc}</p>
                </div>
                {i < slide.bullets!.length - 1 && (
                  <div className={`h-8 w-px ${isDark ? 'bg-red-500/30' : 'bg-[#800000]/30'} my-2 relative`}>
                     <ArrowDown className={`w-4 h-4 ${isDark ? 'text-red-400/50' : 'text-[#800000]/50'} absolute -bottom-4 -left-[7px]`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 14. REFLECTION ACCORDION (Slide 13)
    if (slide.id === 'slide-13') {
      return (
        <div className="w-full max-w-3xl mx-auto space-y-6 animate-slideUpFade">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-8`}>{slide.title}</h2>
          <p className={`text-lg ${isDark ? 'text-red-200' : 'text-slate-600'} mb-12`}>{slide.subtitle}</p>
          <div className="space-y-4">
            {slide.bullets?.map((b: any, i: number) => {
              const isOpen = openAccordion === `${slide.id}-${i}`;
              return (
                <div key={i} className={`${isDark ? 'bg-red-900/30 border-red-800/50' : 'bg-white border-[#e8e4db]'} rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md border`}>
                  <button 
                    onClick={() => setOpenAccordion(isOpen ? null : `${slide.id}-${i}`)}
                    className={`w-full flex items-center justify-between p-6 text-left ${isDark ? 'hover:bg-red-900/50' : 'hover:bg-[#fdfbf7]'} transition-colors`}
                  >
                    <span className={`font-bold text-lg ${isDark ? 'text-red-100' : 'text-slate-900'} pr-8`}>{b.title}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#800000] text-white border-[#800000] rotate-180' : 'border-slate-200 text-slate-400'}`}>
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className={`px-6 pb-6 ${isDark ? 'text-red-200/80 bg-red-900/20' : 'text-slate-600 bg-[#f7f5f0]/50'} leading-relaxed text-[15px]`}>
                      <div className={`h-px w-full ${isDark ? 'bg-red-800/50' : 'bg-slate-200'} mb-6`}></div>
                      <p className="mb-4">{b.desc}</p>
                      {b.details && <p className="italic opacity-80">"{b.details}"</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // 15. HISTORICAL TIMELINE WITH MODAL OVERLAYS (Slide 14 / Page 16)
    if (slide.id === 'slide-14') {
      return (
        <HistoricalTimelineSlide isDark={isDark} />
      );
    }

    // 16. MINIGAME: WORD SEARCH / RECOGNITION (slide-minigame)
    if (slide.id === 'slide-minigame' || slide.layout === 'minigame') {
      return (
        <div className="w-full max-w-5xl mx-auto animate-slideUpFade">
          <MinigameWordSearch />
        </div>
      );
    }

    return null;
  };

  const isMinigame = slide.id === 'slide-minigame' || slide.layout === 'minigame';

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${isDark ? 'bg-red-950 text-slate-100' : 'bg-[#fdfbf7] text-slate-900'}`}>
      {/* MAIN CONTENT AREA */}
      <div className={`flex-1 w-full flex items-center justify-center ${isMinigame ? 'py-2 px-3 pb-16' : 'py-12 px-6 pb-32'} overflow-y-auto`}>
        {renderSlideContent()}
      </div>

      {/* BOTTOM CONTROL BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/10 px-4 md:px-8 py-3 flex items-center justify-between z-50 gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 ${
            currentSlideIndex === 0
              ? 'text-slate-600 cursor-not-allowed'
              : 'text-white hover:bg-white/10 active:scale-95'
          }`}
          title="Trang trước (Mũi tên Trái)"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold text-sm hidden md:inline">Trang trước</span>
        </button>

        {/* Center: Bullets Navigation & Page Counter (Hidden on Minigame) */}
        {!isMinigame ? (
          <div className="flex items-center gap-3 sm:gap-5 overflow-hidden max-w-2xl px-2">
            {/* Bullets row */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1.5 px-2 max-w-full scrollbar-none">
              {PRESENTATION_SLIDES.map((s, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={s.id || idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`transition-all duration-300 rounded-full shrink-0 ${
                      isActive
                        ? 'w-7 h-2.5 bg-red-500 shadow-sm'
                        : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-300 hover:scale-125'
                    }`}
                    title={`Trang ${idx + 1}: ${s.title}`}
                    aria-label={`Chuyển đến trang ${idx + 1}`}
                  />
                );
              })}
            </div>

            {/* Page count text */}
            <div className="text-slate-400 text-xs sm:text-sm font-medium shrink-0 whitespace-nowrap">
              <span className="text-white font-bold">{currentSlideIndex + 1}</span> / {totalSlides}
            </div>
          </div>
        ) : (
          <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
            CỦNG CỐ KIẾN THỨC
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 ${
            currentSlideIndex === totalSlides - 1
              ? 'text-slate-600 cursor-not-allowed'
              : 'text-white hover:bg-white/10 active:scale-95'
          }`}
          title="Trang sau (Mũi tên Phải / Phím Cách)"
        >
          <span className="font-semibold text-sm hidden md:inline">Trang sau</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
