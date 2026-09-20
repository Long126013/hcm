import React, { useState, useEffect } from 'react';
import { PRESENTATION_SLIDES } from '../data/curriculumData';
import { CreativeFormula } from './CreativeFormula';
import { TimelineView } from './TimelineView';
import { ImagePlaceholder } from './ImagePlaceholder';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  X
} from 'lucide-react';

export const PresentationDeck: React.FC = () => {
  const getInitialIndex = () => {
    const hash = window.location.hash.replace('#slide-', '');
    const idx = parseInt(hash) - 1;
    return !isNaN(idx) && idx >= 0 && idx < PRESENTATION_SLIDES.length ? idx : 0;
  };
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(getInitialIndex());
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Sync hash
  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${currentSlideIndex + 1}`);
  }, [currentSlideIndex]);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slide = PRESENTATION_SLIDES[currentSlideIndex];
  const isDark = slide.theme === 'dark' || slide.layout === 'intro' || slide.layout === 'quote';

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

  const themeClasses = {
    wrapper: isDark ? 'bg-red-950 text-slate-100' : 'bg-stone-50 text-slate-900',
    title: isDark ? 'text-white' : 'text-slate-900',
    subtitle: isDark ? 'text-amber-400' : 'text-red-800',
    desc: isDark ? 'text-slate-300' : 'text-slate-700',
    card: isDark ? 'bg-red-900/40 border-red-800' : 'bg-white border-slate-200 shadow-sm',
    cardTitle: isDark ? 'text-white' : 'text-slate-900',
    numberBadge: isDark ? 'bg-red-800/80 text-red-100' : 'bg-red-100 text-red-800',
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
          className="h-full bg-amber-500 transition-all duration-300"
          style={{ width: `${(currentSlideIndex / (totalSlides - 1)) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex relative min-h-0">
        {/* MAIN SLIDE AREA */}
        <div className="flex-1 flex flex-col items-center p-4 sm:p-8 md:p-12 lg:p-24 overflow-y-auto min-h-0">
          <div className="w-full max-w-5xl mx-auto my-auto">
            
            {slide.layout === 'intro' && (
              <div className="text-center space-y-6 animate-fadeIn">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${isDark ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-red-100 text-red-800 border-red-200'}`}>
                  {slide.sectionCode} - {slide.sectionTitle}
                </span>
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-sm ${themeClasses.title}`}>
                  {slide.title}
                </h1>
                <p className={`text-lg md:text-2xl font-medium max-w-3xl mx-auto ${themeClasses.subtitle}`}>
                  {slide.subtitle}
                </p>
              </div>
            )}

            {slide.layout === 'quote' && (
              <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn text-center relative z-10">
                <div className="absolute -top-16 -left-8 md:-left-16 text-9xl font-serif text-amber-500/20 pointer-events-none select-none">"</div>
                <h2 className={`text-sm font-bold uppercase tracking-widest ${themeClasses.subtitle}`}>
                  {slide.title}
                </h2>
                <div className="space-y-6 relative z-10">
                  {slide.content?.map((text, idx) => (
                    <p key={idx} className={`font-serif-quote italic text-2xl md:text-4xl leading-relaxed ${themeClasses.title}`}>
                      {text}
                    </p>
                  ))}
                  {slide.quote?.author && (
                    <div className="pt-6">
                      <p className={`font-bold text-lg md:text-xl ${themeClasses.title}`}>{slide.quote.author}</p>
                      {slide.quote.work && <p className={`text-sm ${themeClasses.desc}`}>{slide.quote.work}</p>}
                    </div>
                  )}
                </div>
              </div>
            )}

            {slide.layout === 'content' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-2 mb-8">
                  <span className={`text-xs font-bold uppercase tracking-wider ${themeClasses.subtitle}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>
                <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                  {slide.content?.map((text, idx) => (
                    <p key={idx} className={themeClasses.desc}>{text}</p>
                  ))}
                </div>
              </div>
            )}

            {slide.layout === 'formula' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center mb-6 space-y-2">
                  <h2 className={`text-3xl md:text-4xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                  <p className={`text-sm font-medium ${themeClasses.subtitle}`}>{slide.subtitle}</p>
                </div>
                <div className={`p-6 rounded-2xl border ${isDark ? 'bg-red-900/40 border-red-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <CreativeFormula />
                </div>
              </div>
            )}

            {slide.layout === 'grid' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-2 mb-8">
                  <span className={`text-xs font-bold uppercase tracking-wider ${themeClasses.subtitle}`}>
                    {slide.subtitle}
                  </span>
                  <h2 className={`text-3xl md:text-5xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                </div>

                <div
                  className={`grid gap-5 ${
                    slide.bullets?.length === 2
                      ? 'grid-cols-1 md:grid-cols-2'
                      : slide.bullets?.length === 4
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                      : slide.bullets?.length === 5
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : slide.bullets?.length === 7
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                      : 'grid-cols-1 md:grid-cols-3'
                  }`}
                >
                  {slide.bullets?.map((bullet, idx) => (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border transition-all flex flex-col justify-start relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg animate-fadeIn ${themeClasses.card}`}
                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                      >
                      {/* Giant Number Watermark */}
                      <div className="absolute -bottom-6 -right-4 text-9xl font-black opacity-5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4 relative z-10 ${themeClasses.numberBadge}`}>
                        {idx + 1}
                      </div>
                      <h3 className={`text-lg font-bold mb-2 relative z-10 ${themeClasses.cardTitle}`}>{bullet.title}</h3>
                      <p className={`text-sm leading-relaxed relative z-10 ${themeClasses.desc}`}>{bullet.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slide.layout === 'comparison' && (
              <div className={`animate-fadeIn ${slide.imagePlaceholder ? 'grid grid-cols-1 md:grid-cols-12 gap-10 items-center' : 'space-y-6'}`}>
                <div className={slide.imagePlaceholder ? 'md:col-span-7 space-y-6' : 'space-y-6'}>
                  <div className="space-y-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${themeClasses.subtitle}`}>
                      {slide.subtitle}
                    </span>
                    <h2 className={`text-3xl md:text-4xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                  </div>

                  <div className={slide.imagePlaceholder ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                    {slide.bullets?.map((b, idx) => (
                      <div 
                        key={idx} 
                        className={`p-5 rounded-2xl border flex flex-col justify-start relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all animate-fadeIn ${themeClasses.card}`}
                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
                      >
                        <div className={`text-sm font-bold uppercase tracking-wider mb-2 relative z-10 ${themeClasses.subtitle}`}>
                          {b.title}
                        </div>
                        <p className={`text-sm leading-relaxed relative z-10 ${themeClasses.desc}`}>{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {slide.imagePlaceholder && (
                  <div className="md:col-span-5">
                    <ImagePlaceholder
                      label={slide.imagePlaceholder.label}
                      prompt={slide.imagePlaceholder.prompt}
                      imageUrl={slide.imagePlaceholder.imageUrl}
                      aspectRatio="landscape"
                      className={isDark ? 'bg-red-900/40 border-red-800' : 'bg-slate-100 border-slate-200'}
                    />
                  </div>
                )}
              </div>
            )}

            {slide.layout === 'timeline' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="text-center mb-4 space-y-1">
                  <h2 className={`text-3xl md:text-4xl font-extrabold ${themeClasses.title}`}>{slide.title}</h2>
                  <p className={`text-sm font-medium ${themeClasses.subtitle}`}>{slide.subtitle}</p>
                </div>
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-red-900/40 border-red-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <TimelineView />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SPEAKER NOTES DRAWER */}
        {showNotes && (
          <div className="w-80 bg-stone-100 border-l border-slate-200 p-6 flex flex-col justify-between animate-fadeIn z-10 text-slate-800">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-300 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> Ghi chú
                </span>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm leading-relaxed space-y-3 font-medium">
                <p>{slide.notes || 'Không có ghi chú riêng cho trang này.'}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-300 text-[11px] text-slate-500 font-medium">
              Phím tắt: [→] Trang kế, [←] Trang trước
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM SLIDE CONTROLS */}
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
