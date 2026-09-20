import { useState, useEffect } from 'react';
import { Navbar, type ThemeMode } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Section411 } from './components/Section411';
import { Section412 } from './components/Section412';
import { SectionFAQ } from './components/SectionFAQ';

import { TimelineView } from './components/TimelineView';
import { CreativeFormula } from './components/CreativeFormula';
import { PresentationDeck } from './components/PresentationDeck';
import { SECTIONS_LIST } from './data/curriculumData';
import { Presentation } from 'lucide-react';


export function App() {
  const [activeSection, setActiveSection] = useState<string>('4.1.1');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('hcm_theme') as ThemeMode) || 'eye-care';
  });

  useEffect(() => {
    localStorage.setItem('hcm_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentSectionMeta = SECTIONS_LIST.find((s) => s.id === activeSection);

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col antialiased">
      {/* FULL-SCREEN PRESENTATION SLIDE DECK */}
      {isPresentationMode && (
        <PresentationDeck onClose={() => setIsPresentationMode(false)} />
      )}

      {/* TOP NAVBAR */}
      <Navbar
        onOpenPresentation={() => setIsPresentationMode(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        theme={theme}
        onSelectTheme={setTheme}
      />

      {/* BODY LAYOUT */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-72 lg:w-80 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <Sidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            onSelectTimeline={() => handleSelectSection('timeline')}
            onSelectFormula={() => handleSelectSection('formula')}
          />
        </div>

        {/* MOBILE SIDEBAR DRAWER */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl z-10 overflow-y-auto">
              <Sidebar
                activeSection={activeSection}
                onSelectSection={handleSelectSection}
                onSelectTimeline={() => handleSelectSection('timeline')}
                onSelectFormula={() => handleSelectSection('formula')}
              />
            </div>
          </div>
        )}

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          {/* Top Quick Bar */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Chương 4</span>
              <span>/</span>
              <span className="font-bold text-red-700">
                {activeSection === 'timeline'
                  ? 'Mốc thời gian lịch sử'
                  : activeSection === 'formula'
                  ? 'Sơ đồ sáng tạo 3 thành tố'
                  : currentSectionMeta?.title || activeSection}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPresentationMode(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 font-semibold transition-colors cursor-pointer"
              >
                <Presentation className="w-3.5 h-3.5 text-red-600" />
                <span>Trình chiếu bài học</span>
              </button>
            </div>
          </div>

          {/* RENDER CURRENT SECTION */}
          {activeSection === '4.1.1' && (
            <div className="space-y-12">
              <Section411 onNavigateToSlideMode={() => setIsPresentationMode(true)} />

              {/* Tích hợp trực tiếp Timeline vào dưới bài 4.1.1 để người học tiện theo dõi liên tục */}
              <div className="pt-6 border-t-2 border-dashed border-slate-200">
                <TimelineView />
              </div>
            </div>
          )}

          {activeSection === '4.1.2' && <Section412 />}

          {activeSection === 'faq-new-party' && <SectionFAQ />}


          {activeSection === 'timeline' && <TimelineView />}

          {activeSection === 'formula' && <CreativeFormula />}

          {/* BOTTOM FOOTER */}
          <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-500 space-y-1.5">
            <p className="font-semibold text-slate-700">
              Môn học: Triết học & Tư tưởng Hồ Chí Minh — Chương 4
            </p>
            <p>
              Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
