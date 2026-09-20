import React, { useState, useEffect } from 'react';
import { PRESENTATION_SLIDES } from '../data/curriculumData';
import { CreativeFormula } from './CreativeFormula';
import { TimelineView } from './TimelineView';
import { ImagePlaceholder } from './ImagePlaceholder';
import {
  ChevronLeft, ChevronRight, Maximize2, Minimize2, FileText, X, ChevronDown, ChevronUp, ArrowRight,
  Award, Scale, UserCheck, Heart, Star, Target, Shield, BookOpen, 
  CheckCircle2, Sparkles, Flag, HeartHandshake, ArrowRightCircle, 
  AlertTriangle, AlertOctagon, ShieldAlert,
  Search, TrendingUp, CheckCircle, UserX, EyeOff, Eye, Users
} from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  Award, Scale, UserCheck, Heart, FileText, Star, Target, Shield, BookOpen, 
  CheckCircle2, Sparkles, Flag, HeartHandshake, ArrowRightCircle, 
  AlertTriangle, AlertOctagon, ShieldAlert,
  Search, TrendingUp, CheckCircle, UserX, EyeOff, Eye, Users
};

export const PresentationDeck: React.FC = () => {
  const getInitialIndex = () => {
    const hash = window.location.hash.replace('#slide-', '');
    const idx = parseInt(hash) - 1;
    return !isNaN(idx) && idx >= 0 && idx < PRESENTATION_SLIDES.length ? idx : 0;
  };
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(getInitialIndex());
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [openDiscussionId, setOpenDiscussionId] = useState<number | null>(0);

  // Sync hash
  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${currentSlideIndex + 1}`);
    setOpenDiscussionId(0); // Reset accordion state on slide change
  }, [currentSlideIndex]);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slide = PRESENTATION_SLIDES[currentSlideIndex];

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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, totalSlides]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const isIntro = slide.layout === 'intro';

  // THEME CLASSES (HCM_SPST PALETTE & RED COVER FIX)
  const themeClasses = {
    wrapper: isIntro ? 'bg-red-950 text-slate-100' : 'bg-[#FDFBF7] text-[#1A2530]',
    title: isIntro ? 'text-white' : 'text-[#800000]', 
    subtitleBadge: isIntro ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-[#800000]/5 text-[#800000] border-[#800000]/20',
    desc: isIntro ? 'text-white/80' : 'text-[#1A2530]/80',
    card: isIntro ? 'bg-black/20 border-white/10' : 'bg-white border-[#800000]/10 shadow-[0_10px_30px_rgb(0,0,0,0.04)]',
    cardTitle: isIntro ? 'text-white' : 'text-[#800000]',
    iconBox: isIntro ? 'bg-white/10 text-white' : 'bg-[#FDFBF7] border border-[#D4AF37]/40 text-[#800000]',
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col select-none overflow-hidden transition-colors duration-500 ${themeClasses.wrapper}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      
      {/* THIN PROGRESS BAR */}
      <div className="h-1 bg-black/10 w-full z-50 absolute top-0 shrink-0">
        <div
          className="h-full bg-[#D4AF37] transition-all duration-300"
          style={{ width: `${(currentSlideIndex / (totalSlides - 1)) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex relative min-h-0">
        {/* MAIN SLIDE AREA */}
        <div className="flex-1 flex flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24 overflow-y-auto min-h-0">
          <div className="w-full max-w-6xl mx-auto my-auto">
            
            {/* INTRO LAYOUT (RED COVER) */}
            {slide.layout === 'intro' && (
              <div className="text-center space-y-6 animate-slideUpFade">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                  {slide.sectionCode} - {slide.sectionTitle}
                </span>
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-sm text-white`}>
                  {slide.title}
                </h1>
                <p className={`text-lg md:text-2xl font-medium max-w-3xl mx-auto text-amber-400`}>
                  {slide.subtitle}
                </p>
              </div>
            )}

            {/* QUOTE LAYOUT */}
            {slide.layout === 'quote' && (
              <div className="max-w-4xl mx-auto animate-slideUpFade">
                <div className="mb-10 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.title}
                  </span>
                </div>
                <div className="relative pl-8 md:pl-12 border-l-8 border-[#D4AF37] py-4 bg-white/40 rounded-r-2xl shadow-sm">
                  <div className="space-y-8">
                    <p className={`font-serif-quote italic text-2xl md:text-4xl leading-relaxed font-medium text-[#800000]`}>
                      "{slide.quote?.text || slide.content?.[0]}"
                    </p>
                    {slide.quote?.author && (
                      <div className="pt-4 flex items-center gap-4">
                        <div className={`w-12 h-[2px] bg-[#800000]/30`}></div>
                        <div>
                          <p className={`font-bold text-xl text-[#1A2530]`}>{slide.quote.author}</p>
                          {slide.quote.work && <p className={`text-base font-serif-quote italic mt-1 text-[#1A2530]/60`}>{slide.quote.work}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* MANIFESTATIONS LAYOUT (Image 3 UI) */}
            {slide.layout === 'manifestations' && (
              <div className="space-y-10 animate-slideUpFade">
                <div className="space-y-3 mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-[#800000]">
                    <Award className="w-7 h-7 text-[#800000]" />
                    {slide.subtitle}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {slide.bullets?.map((bullet, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col h-full">
                      <div className="flex-1">
                        <span className="text-lg font-bold text-[#800000] uppercase block mb-3">
                          ({idx + 1}) {bullet.title}
                        </span>
                        <p className="text-[15px] font-medium text-slate-900 leading-relaxed">
                          {bullet.desc}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <p className="text-[14px] text-slate-600 leading-relaxed">
                          {bullet.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRINCIPLES LAYOUT (Image 1 UI) */}
            {slide.layout === 'principles' && (
              <div className="space-y-10 animate-slideUpFade">
                <div className="space-y-3 mb-8 text-center">
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                  <p className="text-lg text-slate-600">{slide.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  {slide.bullets?.map((bullet, idx) => {
                    const icons = [Users, Shield, Eye, Scale, HeartHandshake];
                    const IconComp = icons[idx] || Users;
                    const isLastOdd = idx === slide.bullets!.length - 1 && slide.bullets!.length % 2 !== 0;

                    return (
                      <div
                        key={idx}
                        className={`p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col h-full ${
                          isLastOdd ? 'md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto w-full' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 pb-3 border-b border-slate-100 shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-red-50 text-red-800 flex items-center justify-center shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[13px] font-extrabold uppercase tracking-wider text-[#800000] block">
                              Nguyên tắc {idx + 1}
                            </span>
                            <h4 className="font-bold text-slate-900 text-lg">{bullet.title}</h4>
                          </div>
                        </div>

                        <div className="flex-1 mt-4">
                          <p className="text-[15px] font-semibold text-slate-800 leading-relaxed bg-[#f8f6f0] p-4 rounded-xl">
                            {bullet.desc}
                          </p>
                          <div className="space-y-2 pl-2 mt-4">
                            {bullet.points?.map((pt: string, pIdx: number) => (
                              <div key={pIdx} className="flex items-start gap-2 text-[15px] text-slate-700">
                                <span className="text-[#800000] font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto pt-5">
                          <div className="p-4 rounded-xl bg-[#e6f4ea] border border-[#ceead6] text-[15px] text-[#0d652d] font-medium flex items-center gap-3">
                            <ArrowRight className="w-5 h-5 text-[#0d652d] shrink-0" />
                            <span>{bullet.details}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STANDARDS LAYOUT (Image 2 UI) */}
            {slide.layout === 'standards' && (
              <div className="space-y-10 animate-slideUpFade">
                <div className="space-y-3 mb-8 text-center">
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
                  {slide.bullets?.map((bullet, idx) => {
                    const isLastOdd = idx === slide.bullets!.length - 1 && slide.bullets!.length % 2 !== 0;

                    return (
                      <div
                        key={idx}
                        className={`p-6 rounded-2xl bg-[#f7f5f0] border border-[#e8e4db] flex flex-col h-full shadow-sm hover:shadow-md transition-shadow ${
                          isLastOdd ? 'md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto w-full' : ''
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <span className="w-8 h-8 rounded-lg bg-white border border-[#e8e4db] text-[#800000] font-bold text-[15px] flex items-center justify-center shrink-0 shadow-sm">
                              {idx + 1}
                            </span>
                            <span className="text-[16px] font-bold text-[#800000] leading-snug pt-1">
                              {bullet.title}
                            </span>
                          </div>
                          <p className="text-[15px] text-slate-700 leading-relaxed pl-12">
                            {bullet.desc}
                          </p>
                        </div>

                        {bullet.details && (
                          <div className="mt-auto pt-5">
                            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                              <p className="font-serif-quote italic text-[14px] text-slate-600 leading-relaxed">
                                {bullet.details}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* FLIP LAYOUT */}
            {slide.layout === 'flip' && (
              <div className="space-y-10 animate-slideUpFade">
                <div className="space-y-3 mb-10 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {slide.bullets?.map((bullet, idx) => {
                    const Icon = bullet.icon && IconMap[bullet.icon] ? IconMap[bullet.icon] : Sparkles;
                    return (
                      <div
                        key={idx}
                        className="flip-card w-[320px] h-[380px] opacity-0 animate-slideUpFade"
                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                      >
                        <div className="flip-card-inner">
                          <div className={`flip-card-front rounded-[20px] flex flex-col items-center justify-center p-8 text-center shadow-[0_15px_35px_rgba(0,0,0,0.1)] border-2 bg-[#800000] border-[#D4AF37]`}>
                            <Icon className="w-16 h-16 text-[#D4AF37] mb-6" />
                            <h3 className="text-2xl font-bold text-white leading-tight">{bullet.title}</h3>
                            <div className="mt-8 px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white/80 flex items-center gap-2">
                              <span>Trỏ chuột lật thẻ</span>
                            </div>
                          </div>
                          <div className={`flip-card-back rounded-[20px] border-2 flex flex-col items-center justify-center p-8 text-center shadow-xl bg-[#D4AF37] border-[#800000]`}>
                            <p className="text-lg font-bold leading-relaxed text-[#1A2530]">{bullet.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* PILLAR LAYOUT */}
            {slide.layout === 'pillar' && (
              <div className="space-y-10 animate-slideUpFade">
                <div className="space-y-3 mb-12 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {slide.bullets?.map((bullet, idx) => {
                    const Icon = bullet.icon && IconMap[bullet.icon] ? IconMap[bullet.icon] : Sparkles;
                    return (
                      <div
                        key={idx}
                        className={`flex-1 min-w-[220px] p-8 rounded-2xl rounded-b-md border-b-[6px] border-b-[#800000] transition-all hover:-translate-y-3 opacity-0 animate-slideUpFade ${themeClasses.card} text-center flex flex-col items-center`}
                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                      >
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm border-2 border-[#D4AF37] bg-[#FDFBF7]`}>
                          <Icon className={`w-8 h-8 text-[#800000]`} />
                        </div>
                        <h3 className={`text-lg font-bold mb-4 ${themeClasses.cardTitle}`}>{bullet.title}</h3>
                        <p className={`text-sm leading-relaxed ${themeClasses.desc}`}>{bullet.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* DISCUSSION LAYOUT */}
            {slide.layout === 'discussion' && (
              <div className="space-y-10 animate-slideUpFade max-w-4xl mx-auto">
                <div className="space-y-3 mb-10 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>

                <div className="space-y-4">
                  {slide.bullets?.map((bullet, idx) => {
                    const Icon = bullet.icon && IconMap[bullet.icon] ? IconMap[bullet.icon] : Sparkles;
                    const isOpen = openDiscussionId === idx;
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl border overflow-hidden transition-all duration-300 opacity-0 animate-slideUpFade bg-white border-[#800000]/20`}
                        style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both', boxShadow: isOpen ? '0 10px 30px rgba(128,0,0,0.08)' : 'none' }}
                      >
                        <button
                          onClick={() => setOpenDiscussionId(isOpen ? null : idx)}
                          className={`w-full flex items-center justify-between p-5 text-left cursor-pointer transition-colors ${isOpen ? 'bg-[#FDFBF7]' : 'hover:bg-black/5'}`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-[#D4AF37]/40 ${isOpen ? 'bg-[#800000] text-[#D4AF37]' : 'bg-[#FDFBF7] text-[#800000]'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className={`font-bold text-lg pr-4 ${themeClasses.cardTitle}`}>{bullet.title}</h3>
                          </div>
                          {isOpen ? <ChevronUp className={`w-5 h-5 shrink-0 ${themeClasses.cardTitle}`} /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                        </button>
                        
                        {isOpen && (
                          <div className={`p-6 pt-2 pl-[88px] animate-fadeIn ${themeClasses.desc}`}>
                            <div className={`w-8 h-1 bg-[#D4AF37] rounded-full mb-3`}></div>
                            <p className="text-lg leading-relaxed">{bullet.desc}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* GRID LAYOUT (GENERIC WITH VARIANTS) */}
            {slide.layout === 'grid' && (
              <div className="space-y-10 animate-slideUpFade">
                <div className="space-y-3 mb-10 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>

                <div
                  className={`grid gap-6 items-stretch ${
                    slide.bullets?.length === 2
                      ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                      : slide.bullets?.length === 4
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : slide.bullets?.length === 5
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : slide.bullets?.length === 7
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                      : 'grid-cols-1 md:grid-cols-3'
                  }`}
                >
                  {slide.bullets?.map((bullet, idx) => {
                    const Icon = bullet.icon && IconMap[bullet.icon] ? IconMap[bullet.icon] : Sparkles;
                    const variant = slide.cardVariant || 'feature';
                    
                    return (
                      <div
                        key={idx}
                        className={`p-6 rounded-3xl transition-all duration-300 flex flex-col relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg opacity-0 animate-slideUpFade h-full ${themeClasses.card}`}
                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                      >
                        {variant === 'principle' && (
                          <div className="flex-1 flex flex-col">
                            <h3 className={`text-xl font-bold mb-3 leading-snug ${themeClasses.title}`}>{bullet.title}</h3>
                            <p className={`text-[15px] leading-relaxed ${themeClasses.desc}`}>{bullet.desc}</p>
                          </div>
                        )}

                        {variant === 'info' && (
                          <div className="flex-1 flex flex-col">
                            <div className="flex items-start gap-3 mb-2">
                              <div className={`mt-0.5 shrink-0 ${themeClasses.title}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <h3 className={`text-lg font-bold leading-snug ${themeClasses.cardTitle}`}>{bullet.title}</h3>
                            </div>
                            <p className={`text-[15px] leading-relaxed pl-8 ${themeClasses.desc}`}>{bullet.desc}</p>
                          </div>
                        )}

                        {variant === 'feature' && (
                          <div className="flex-1 flex flex-col">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shrink-0 shadow-sm transition-transform group-hover:scale-110 ${themeClasses.iconBox}`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${themeClasses.cardTitle}`}>{bullet.title}</h3>
                            <p className={`text-[14px] leading-relaxed ${themeClasses.desc}`}>{bullet.desc}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CONTENT LAYOUT */}
            {slide.layout === 'content' && (
              <div className="space-y-6 animate-slideUpFade">
                <div className="space-y-3 mb-10 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>
                <div className="space-y-4 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                  {slide.content?.map((text, idx) => (
                    <p key={idx} className={themeClasses.desc}>{text}</p>
                  ))}
                </div>
              </div>
            )}

            {/* FORMULA LAYOUT */}
            {slide.layout === 'formula' && (
              <div className="space-y-6 animate-slideUpFade">
                <div className="text-center mb-10 space-y-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>
                <div className={`p-8 rounded-3xl ${themeClasses.card}`}>
                  <CreativeFormula />
                </div>
              </div>
            )}

            {/* COMPARISON LAYOUT */}
            {slide.layout === 'comparison' && (
              <div className={`animate-slideUpFade ${slide.imagePlaceholder ? 'grid grid-cols-1 md:grid-cols-12 gap-12 items-center' : 'space-y-10'}`}>
                <div className={slide.imagePlaceholder ? 'md:col-span-7 space-y-8' : 'space-y-10'}>
                  <div className="space-y-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                      {slide.subtitle}
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                  </div>

                  <div className={slide.imagePlaceholder ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
                    {slide.bullets?.map((b, idx) => {
                      const Icon = b.icon && IconMap[b.icon] ? IconMap[b.icon] : Sparkles;
                      return (
                        <div 
                          key={idx} 
                          className={`p-6 rounded-3xl flex gap-4 justify-start relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl transition-all opacity-0 animate-slideUpFade ${themeClasses.card}`}
                          style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                        >
                          <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center shadow-sm ${themeClasses.iconBox}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className={`text-sm font-bold uppercase tracking-wider mb-2 relative z-10 text-[#800000]`}>
                              {b.title}
                            </div>
                            <p className={`text-sm leading-relaxed relative z-10 ${themeClasses.desc}`}>{b.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {slide.imagePlaceholder && (
                  <div className="md:col-span-5 opacity-0 animate-fadeInScale" style={{ animationDelay: '300ms' }}>
                    <ImagePlaceholder
                      label={slide.imagePlaceholder.label}
                      prompt={slide.imagePlaceholder.prompt}
                      imageUrl={slide.imagePlaceholder.imageUrl}
                      aspectRatio="landscape"
                      className="bg-white border-[#800000]/10 rounded-3xl"
                    />
                  </div>
                )}
              </div>
            )}

            {/* TIMELINE LAYOUT */}
            {slide.layout === 'timeline' && (
              <div className="space-y-8 animate-slideUpFade">
                <div className="text-center mb-8 space-y-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${themeClasses.subtitleBadge}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>
                <div className={`p-6 md:p-8 rounded-3xl ${themeClasses.card}`}>
                  <TimelineView />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SPEAKER NOTES DRAWER */}
        {showNotes && (
          <div className="absolute right-6 top-6 w-80 bg-[#FDFBF7]/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(128,0,0,0.15)] border border-[#800000]/20 p-6 flex flex-col justify-between animate-fadeInScale z-50 text-[#1A2530]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#800000]/10 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#800000] flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Ghi chú
                </span>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-[#1A2530]/50 hover:text-[#800000] hover:bg-[#800000]/5 p-1 rounded-md transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm leading-relaxed space-y-3 font-medium">
                <p>{slide.notes || 'Không có ghi chú riêng cho trang này.'}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM SLIDE CONTROLS (OLD DESIGN RESTORED) */}
      <div className="h-16 px-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              currentSlideIndex === 0
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Trang trước</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-slate-300">
            {currentSlideIndex + 1} <span className="text-slate-600">/</span> {totalSlides}
          </span>
          <div className="hidden sm:flex gap-1">
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlideIndex === idx ? 'w-6 bg-red-600' : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Trang ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${showNotes ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
            title="Ghi chú"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            title="Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer sm:ml-2 ${
              currentSlideIndex === totalSlides - 1
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-red-700 hover:bg-red-600 text-white shadow-md'
            }`}
          >
            <span className="hidden sm:inline">Trang kế</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
