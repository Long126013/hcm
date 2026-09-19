import React, { useState } from 'react';
import { Clock, Quote, CheckCircle2, Bookmark } from 'lucide-react';

import { TIMELINE_DATA } from '../data/curriculumData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const TimelineView: React.FC = () => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('1927');

  const selectedMilestone = TIMELINE_DATA.find((m) => m.id === selectedMilestoneId) || TIMELINE_DATA[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-7 shadow-2xs space-y-6">
      <div className="pb-4 border-b border-slate-200">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 mb-1.5">
          <Clock className="w-3.5 h-3.5 text-slate-700" />
          Tiến trình lịch sử
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          Các mốc thời gian lịch sử trọng yếu (1927 – 1969)
        </h3>
        <p className="text-xs md:text-sm text-slate-600 mt-1">
          Bối cảnh thực tiễn qua các thời kỳ tôi rèn tư tưởng Hồ Chí Minh về Đảng và cán bộ
        </p>
      </div>

      {/* Horizontal Milestone Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {TIMELINE_DATA.map((milestone) => {
          const isSelected = selectedMilestoneId === milestone.id;
          return (
            <button
              key={milestone.id}
              onClick={() => setSelectedMilestoneId(milestone.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              <span className={`text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-red-900'}`}>
                {milestone.year}
              </span>
              <span className="text-[11px] line-clamp-1 mt-1 opacity-90">
                {milestone.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Milestone Card */}
      <div className="p-5 md:p-6 rounded-xl bg-slate-50 border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Text details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-800 text-white">
                Mốc {selectedMilestone.year}
              </span>
              {selectedMilestone.badge && (
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                  {selectedMilestone.badge}
                </span>
              )}
              {selectedMilestone.subtitle && (
                <span className="text-xs text-slate-500">
                  📍 {selectedMilestone.subtitle}
                </span>
              )}
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              {selectedMilestone.title}
            </h4>

            <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
              {selectedMilestone.description}
            </p>

            {/* Quote if exists */}
            {selectedMilestone.quote && (
              <div className="p-3.5 rounded-lg bg-white border-l-4 border-red-800 text-slate-800">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-red-800 shrink-0 mt-0.5" />
                  <p className="font-serif-quote italic text-xs md:text-sm leading-relaxed text-slate-900">
                    "{selectedMilestone.quote}"
                  </p>
                </div>
              </div>
            )}

            {/* Key bullet points */}
            {selectedMilestone.keyPoints && (
              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Bookmark className="w-3.5 h-3.5 text-slate-600" />
                  Ý nghĩa & Nội dung trọng tâm:
                </div>
                <div className="space-y-1.5">
                  {selectedMilestone.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Image placeholder with search prompt */}
          <div className="lg:col-span-5 space-y-2">
            <ImagePlaceholder
              label={`Tư liệu mốc ${selectedMilestone.year}`}
              prompt={selectedMilestone.suggestedImagePrompt || `Ảnh tư liệu lịch sử về ${selectedMilestone.title}`}
              aspectRatio="landscape"
            />
            <div className="text-[11px] text-slate-500 text-center">
              💡 Khung đề xuất ảnh: Bạn có thể sao chép từ khóa để tìm ảnh hoặc dán URL ảnh vào hiển thị.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
