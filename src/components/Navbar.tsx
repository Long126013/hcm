import React from 'react';
import { BookOpen, Presentation, Menu, X, Eye, Moon, Sun } from 'lucide-react';
import { CHAPTER_INFO } from '../data/curriculumData';

export type ThemeMode = 'eye-care' | 'dark' | 'light';

interface NavbarProps {
  onOpenPresentation: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  theme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPresentation,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  theme,
  onSelectTheme,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between">
        {/* Left: Branding & Chapter Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider">
              HCM
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-900 bg-red-50 px-1.5 py-0.2 rounded">
                  {CHAPTER_INFO.code}
                </span>
                <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                  {CHAPTER_INFO.subject}
                </span>
              </div>
              <h1 className="text-xs sm:text-sm font-bold text-slate-900 truncate max-w-xs sm:max-w-md md:max-w-xl">
                Tư tưởng Hồ Chí Minh về Đảng & Nhà nước
              </h1>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Selector Pill */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => onSelectTheme('eye-care')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                theme === 'eye-care'
                  ? 'bg-amber-100/90 text-amber-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Chế độ Giấy ấm dịu mắt (Bảo vệ thị lực)"
            >
              <Eye className="w-3.5 h-3.5 text-amber-800" />
              <span className="hidden md:inline text-[11px]">Dịu mắt</span>
            </button>

            <button
              onClick={() => onSelectTheme('dark')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                theme === 'dark'
                  ? 'bg-slate-800 text-amber-300 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Chế độ Trầm tối (Đêm)"
            >
              <Moon className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Trầm tối</span>
            </button>

            <button
              onClick={() => onSelectTheme('light')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                theme === 'light'
                  ? 'bg-white text-slate-900 font-bold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Chế độ Sáng tiêu chuẩn"
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px]">Sáng</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Mục: {activeSection}</span>
          </div>

          <button
            onClick={onOpenPresentation}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-800 hover:bg-red-700 text-white font-semibold text-xs transition-all cursor-pointer active:scale-95 shadow-2xs"
            title="Bật chế độ trình chiếu slide"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Chế độ Thuyết trình</span>
            <span className="sm:hidden">Trình chiếu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
