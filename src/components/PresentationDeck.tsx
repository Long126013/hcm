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
  X,
  FileText,
  Quote,
  Sparkles,
} from 'lucide-react';



interface PresentationDeckProps {
  onClose: () => void;
  initialSlideIndex?: number;
}

export const PresentationDeck: React.FC<PresentationDeckProps> = ({
  onClose,
  initialSlideIndex = 0,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(initialSlideIndex);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

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

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
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

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col select-none overflow-hidden">
      {/* TOP BAR */}
      <div className="h-14 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-red-600 text-white">
            {slide.sectionCode}
          </span>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            {slide.sectionTitle}
          </span>
        </div>


        {/* Slide Counter & Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              showNotes ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title="Ghi chú người thuyết trình"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Ghi chú</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            title="Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white transition-colors cursor-pointer ml-2"
            title="Thoát trình chiếu (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="h-1 bg-slate-800 w-full">
        <div
          className="h-full bg-red-600 transition-all duration-300"
          style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* SLIDE CANVAS (MAIN CONTENT) */}
      <div className="flex-1 flex overflow-hidden relative">
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
          <div className="max-w-5xl w-full mx-auto">
            {/* SLIDE TYPE: INTRO */}
            {slide.layout === 'intro' && (
              <div className="text-center space-y-6 animate-fadeIn py-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-red-900/60 border border-red-700/60 text-red-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  MÔN HỌC: TƯ TƯỞNG HỒ CHÍ MINH
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-amber-300/90 font-medium max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="pt-8 flex justify-center gap-3">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg cursor-pointer active:scale-95 flex items-center gap-2"
                  >
                    <span>Bắt đầu thuyết trình</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* SLIDE TYPE: QUOTE */}
            {slide.layout === 'quote' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fadeIn">
                <div className="md:col-span-7 space-y-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {slide.subtitle}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white">
                    {slide.title}
                  </h2>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border-l-4 border-red-500 shadow-xl space-y-4">
                    <Quote className="w-8 h-8 text-red-500" />
                    <p className="font-serif-quote italic text-lg md:text-xl text-slate-100 leading-relaxed">
                      "{slide.quote?.text}"
                    </p>
                    <div className="text-right text-xs text-amber-300 font-semibold">
                      — {slide.quote?.author} ({slide.quote?.work})
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5">
                  {slide.imagePlaceholder && (
                    <ImagePlaceholder
                      label={slide.imagePlaceholder.label}
                      prompt={slide.imagePlaceholder.prompt}
                      aspectRatio="portrait"
                      className="bg-slate-900 border-slate-700"
                    />
                  )}
                </div>
              </div>
            )}

            {/* SLIDE TYPE: FORMULA */}
            {slide.layout === 'formula' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="text-center max-w-2xl mx-auto space-y-2 mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">{slide.title}</h2>
                  <p className="text-sm text-slate-300">{slide.subtitle}</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <CreativeFormula />
                </div>
              </div>
            )}

            {/* SLIDE TYPE: GRID BULLETS */}
            {slide.layout === 'grid' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {slide.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white">{slide.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {slide.bullets?.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-red-500/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-sm mb-4">
                          {idx + 1}
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">{bullet.title}</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">{bullet.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDE TYPE: COMPARISON */}
            {slide.layout === 'comparison' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fadeIn">
                <div className="md:col-span-7 space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {slide.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white">{slide.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {slide.bullets?.map((b, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                        <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                          {b.title}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">{b.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5">
                  {slide.imagePlaceholder && (
                    <ImagePlaceholder
                      label={slide.imagePlaceholder.label}
                      prompt={slide.imagePlaceholder.prompt}
                      aspectRatio="landscape"
                      className="bg-slate-900 border-slate-700"
                    />
                  )}
                </div>
              </div>
            )}

            {/* SLIDE TYPE: TIMELINE */}
            {slide.layout === 'timeline' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="text-center mb-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">{slide.title}</h2>
                  <p className="text-xs text-slate-400">{slide.subtitle}</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                  <TimelineView />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SPEAKER NOTES DRAWER */}
        {showNotes && (
          <div className="w-80 bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between animate-fadeIn z-10">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Ghi chú người nói
                </span>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed space-y-3">
                <p>{slide.notes || 'Không có ghi chú riêng cho trang này.'}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
              Phím tắt: [→] Trang kế, [←] Trang trước, [Esc] Thoát
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM SLIDE CONTROLS */}
      <div className="h-16 px-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between z-20">
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
          <span>Trước</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-300">
            {currentSlideIndex + 1} <span className="text-slate-600">/</span> {totalSlides}
          </span>
          <div className="hidden sm:flex gap-1">
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlideIndex === idx ? 'w-6 bg-red-500' : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Nhảy tới trang ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            currentSlideIndex === totalSlides - 1
              ? 'opacity-30 cursor-not-allowed text-slate-500'
              : 'bg-red-600 hover:bg-red-700 text-white shadow-md'
          }`}
        >
          <span>Tiếp theo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
