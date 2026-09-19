import React from 'react';
import { Plus, Equal, Sparkles, Info, CheckCircle2 } from 'lucide-react';

import { CONTENT_411 } from '../data/curriculumData';

export const CreativeFormula: React.FC = () => {
  const formulaData = CONTENT_411.part2;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-7 shadow-2xs space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-bold bg-red-50 text-red-800 border border-red-200 mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-red-700" />
          Quy luật ra đời sáng tạo
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          Sự phát triển sáng tạo của Hồ Chí Minh về Quy luật thành lập Đảng
        </h3>
        <p className="text-xs md:text-sm text-slate-600 mt-1">
          So sánh quan điểm kinh điển của chủ nghĩa Mác – Lênin với mô hình 3 thành tố đặc thù tại Việt Nam
        </p>
      </div>

      {/* 1. SO SÁNH HAI CÔNG THỨC */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Quan điểm kinh điển */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Quan điểm kinh điển Mác – Lênin (Phương Tây)
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
              2 Thành tố
            </span>
          </div>
          <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex flex-wrap items-center gap-2">
            <span>Chủ nghĩa xã hội khoa học</span>
            <Plus className="w-3.5 h-3.5 text-slate-400" />
            <span>Phong trào công nhân</span>
            <Equal className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded">
              Đảng Cộng sản kiểu mới
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Áp dụng ở các nước tư bản phát triển, nơi mâu thuẫn đối kháng giai cấp chủ yếu là giữa vô sản và tư sản.
          </p>
        </div>

        {/* Sáng tạo của Hồ Chí Minh */}
        <div className="p-4 rounded-xl bg-red-50/40 border border-red-200 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-red-900">
              Quy luật sáng tạo Hồ Chí Minh (Việt Nam)
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-red-800 text-white font-semibold">
              3 Thành tố
            </span>
          </div>
          <div className="p-3 rounded-lg bg-white border border-red-200 text-xs font-semibold text-slate-800 flex flex-wrap items-center gap-1.5">
            <span>CN Mác – Lênin</span>
            <Plus className="w-3.5 h-3.5 text-red-400" />
            <span>PT Công nhân</span>
            <Plus className="w-3.5 h-3.5 text-red-400" />
            <span className="text-red-900 font-bold bg-red-100 px-2 py-0.5 rounded border border-red-200">
              + Phong trào yêu nước
            </span>
            <Equal className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-red-900 font-extrabold bg-red-50 px-2 py-0.5 rounded">
              Đảng CSVN (1930)
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Hồ Chí Minh đã kết hợp chủ nghĩa Mác – Lênin với phong trào công nhân và <strong>phong trào yêu nước</strong> nồng nàn của nhân dân Việt Nam.
          </p>
        </div>
      </div>

      {/* 2. NỘI DUNG 3 THÀNH TỐ */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Chi tiết 3 thành tố cấu thành:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {formulaData.hcmCreativeLaw.threeElements.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${
                item.highlight
                  ? 'bg-red-50/50 border-red-300'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase">
                  Thành tố {idx + 1}
                </span>
                {item.highlight && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                    Điểm sáng tạo đặc thù
                  </span>
                )}
              </div>
              <h5 className="text-sm font-bold text-slate-900 mb-1">{item.name}</h5>
              <div className="text-xs font-semibold text-red-800 mb-2">{item.role}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CƠ SỞ KHOA HỌC & THỰC TIỄN */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Info className="w-4 h-4 text-slate-600" />
          <span>Cơ sở khoa học và thực tiễn của việc bổ sung "Phong trào yêu nước":</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {formulaData.scientificBasis.reasons.map((reason, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-800 shrink-0" />
                <span>{reason.title}</span>
              </div>
              <p className="text-slate-600 leading-relaxed pl-5">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
