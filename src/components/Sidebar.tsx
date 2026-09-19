import React from 'react';
import { SECTIONS_LIST } from '../data/curriculumData';
import { Sparkles, Clock, BookOpen, Layers } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onSelectTimeline: () => void;
  onSelectFormula: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  onSelectTimeline,
  onSelectFormula,
}) => {
  return (
    <aside className="w-full h-full flex flex-col justify-between py-5 px-3.5 bg-white border-r border-slate-200">
      <div className="space-y-5">
        {/* Course Header Widget */}
        <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200">
          <div className="text-[11px] font-bold uppercase tracking-wider text-red-900">
            Môn học: Tư tưởng Hồ Chí Minh
          </div>
          <div className="font-bold text-slate-900 text-xs mt-0.5">
            Chương 4: Về Đảng & Nhà nước
          </div>
        </div>

        {/* Sections Tree */}
        <div className="space-y-4">
          <div className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mục lục bài học</span>
          </div>

          {/* Group 4.1 */}
          <div className="space-y-1">
            <div className="px-2 text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-800" />
              <span>4.1. Về Đảng Cộng sản Việt Nam</span>
            </div>

            <div className="pl-2 space-y-1 pt-1">
              {SECTIONS_LIST.filter((s) => s.parent === '4.1').map((sec) => {
                const isSelected = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => onSelectSection(sec.id)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all cursor-pointer flex flex-col gap-0.5 ${
                      isSelected
                        ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${isSelected ? 'text-amber-300' : 'text-red-900'}`}>
                        {sec.code}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {sec.badge}
                      </span>
                    </div>
                    <span className="line-clamp-2 leading-relaxed">
                      {sec.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Group 4.2 */}
          <div className="space-y-1 pt-2">
            <div className="px-2 text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>4.2. Về Nhà nước của dân, do dân, vì dân</span>
            </div>

            <div className="pl-2 space-y-1 pt-1">
              {SECTIONS_LIST.filter((s) => s.parent === '4.2').map((sec) => {
                const isSelected = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => onSelectSection(sec.id)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all cursor-pointer flex flex-col gap-0.5 ${
                      isSelected
                        ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-bold ${isSelected ? 'text-amber-300' : 'text-slate-600'}`}>
                        {sec.code}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {sec.badge}
                      </span>
                    </div>
                    <span className="line-clamp-2 leading-relaxed">
                      {sec.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Tools */}
        <div className="pt-2 space-y-1 border-t border-slate-100">
          <div className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            <span>Xem nhanh trực quan</span>
          </div>

          <button
            onClick={onSelectFormula}
            className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
              activeSection === 'formula'
                ? 'bg-slate-900 text-white'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Sơ đồ 3 thành tố</span>
            </div>
          </button>

          <button
            onClick={onSelectTimeline}
            className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
              activeSection === 'timeline'
                ? 'bg-slate-900 text-white'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Dòng thời gian (1927 – 1969)</span>
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};
