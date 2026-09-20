import React, { useState } from 'react';
import { CONTENT_411 } from '../data/curriculumData';
import { CreativeFormula } from './CreativeFormula';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Quote, Compass, Anchor, BookOpen, ShieldCheck, Award, ArrowRight } from 'lucide-react';

interface Section411Props {
  onNavigateToSlideMode?: () => void;
}

export const Section411: React.FC<Section411Props> = ({ onNavigateToSlideMode }) => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | '1' | '2' | '3'>('all');
  const { part1, part3 } = CONTENT_411;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* SECTION HEADER BANNER - CLEAN SLATE THEME */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-7 md:p-8 border border-slate-800 shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-red-950 text-red-300 border border-red-800/80">
              Mục 4.1.1
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              Nội dung trọng tâm
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
            Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam
          </h2>

          <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
            Phân tích cội nguồn lý luận, tính tất yếu khách quan của Đảng, hình tượng người cầm lái con thuyền cách mạng, quy luật 3 thành tố và sứ mệnh lãnh đạo của Đảng trong cách mạng Việt Nam.
          </p>

          {onNavigateToSlideMode && (
            <div className="mt-5 mb-5">
              <button
                onClick={onNavigateToSlideMode}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-700 hover:bg-red-600 text-white font-semibold text-xs transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>Mở Chế độ Trình chiếu Slide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Sub-navigation tabs */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setActiveSubTab('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeSubTab === 'all'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              Xem toàn bộ (I, II, III)
            </button>
            <button
              onClick={() => setActiveSubTab('1')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === '1'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <span>I. Tính tất yếu</span>
            </button>
            <button
              onClick={() => setActiveSubTab('2')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === '2'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <span>II. Quy luật</span>
            </button>
            <button
              onClick={() => setActiveSubTab('3')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === '3'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <span>III. Ý nghĩa</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* PHẦN I: TÍNH TẤT YẾU VÀ VAI TRÒ HẠT NHÂN */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === '1') && (
      <section className="space-y-5 pt-2">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            I
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Tính tất yếu của sự ra đời và vai trò hạt nhân của Đảng
            </h3>
            <p className="text-xs text-slate-500">Đảng là điều kiện tiên quyết của cách mạng và là người cầm lái con thuyền dân tộc</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main textual column */}
          <div className="lg:col-span-7 space-y-4">
            {/* 1. Đảng - Điều kiện tiên quyết */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-red-900 font-bold text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-red-800" />
                <span>1. Đảng – Điều kiện tiên quyết của cách mạng</span>
              </div>

              {/* Quote từ Đường cách mệnh */}
              <div className="p-4 rounded-lg bg-slate-100/90 border-l-4 border-red-800">
                <div className="text-xs text-slate-600 font-medium mb-1">
                  Trong tác phẩm <em>Đường cách mệnh (1927)</em>, Người nêu rõ:
                </div>
                <div className="flex items-start gap-2.5">
                  <Quote className="w-5 h-5 text-red-800 shrink-0 mt-0.5" />
                  <p className="font-serif-quote italic text-slate-900 text-sm md:text-base leading-relaxed">
                    "{part1.prerequisite.quote1}"
                  </p>
                </div>
              </div>

              {/* Hình tượng cốt lõi */}
              <div className="p-3.5 rounded-lg bg-stone-100 border border-stone-200 space-y-1">
                <div className="flex items-center gap-1.5 text-stone-800 font-bold text-xs">
                  <Compass className="w-3.5 h-3.5 text-amber-800" />
                  <span>Hình tượng cốt lõi: Người cầm lái con thuyền cách mạng</span>
                </div>
                <p className="font-serif-quote italic text-slate-900 text-sm font-semibold">
                  "{part1.prerequisite.coreMetaphor}"
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {part1.prerequisite.explanation}
                </p>
              </div>
            </div>

            {/* 2. Vai trò hạt nhân xuyên suốt */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                <Anchor className="w-4 h-4 text-red-800" />
                <span>2. Vai trò hạt nhân xuyên suốt của Đảng</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {part1.nuclearRole.points.map((point, index) => (
                  <div key={index} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-800">
                      {point.tag}
                    </span>
                    <h5 className="font-bold text-slate-900 text-xs mt-1.5 mb-1">{point.heading}</h5>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{point.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gợi ý khung ảnh tư liệu */}
          <div className="lg:col-span-5 space-y-3">
            <ImagePlaceholder
              label="Ảnh bìa tác phẩm Đường Kách Mệnh (1927)"
              prompt="Gợi ý ảnh: Bìa cuốn sách lịch sử Đường Kách Mệnh xuất bản năm 1927 tại Quảng Châu, tài liệu lưu giữ tại Bảo tàng Lịch sử Quốc gia"
              aspectRatio="portrait"
            />
            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <strong>Tóm lược:</strong> <em>Đường cách mệnh (1927)</em> đã chuẩn bị chu đáo cả 3 mặt: <em>Tư tưởng, Chính trị và Tổ chức</em>, mở đường trực tiếp cho việc thành lập Đảng ngày 3/2/1930.
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ======================================================== */}
      {/* PHẦN II: QUY LUẬT RA ĐỜI MANG TÍNH SÁNG TẠO */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === '2') && (
      <section className="space-y-5 pt-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            II
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Quy luật ra đời mang tính sáng tạo của Đảng Cộng sản Việt Nam
            </h3>
            <p className="text-xs text-slate-500">Mô hình 3 thành tố: Bổ sung Phong trào yêu nước vào lý luận thành lập Đảng</p>
          </div>
        </div>

        {/* Sơ đồ quy luật 3 thành tố */}
        <CreativeFormula />
      </section>
      )}

      {/* ======================================================== */}
      {/* PHẦN III: GIÁ TRỊ LÝ LUẬN VÀ Ý NGHĨA THỰC TIỄN */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === '3') && (
      <section className="space-y-5 pt-4">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
          <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
            III
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Giá trị lý luận và ý nghĩa thực tiễn
            </h3>
            <p className="text-xs text-slate-500">Đóng góp cho lý luận cách mạng giải phóng dân tộc và bước ngoặt cứu nước</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Giá trị lý luận */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {part3.theoreticalValue.badge}
                </span>
                <BookOpen className="w-4 h-4 text-slate-500" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {part3.theoreticalValue.title}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {part3.theoreticalValue.content}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-red-800" />
              <span>Phát triển sáng tạo học thuyết Mác – Lênin ở các nước thuộc địa</span>
            </div>
          </div>

          {/* Ý nghĩa thực tiễn */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {part3.practicalSignificance.badge}
                </span>
                <Award className="w-4 h-4 text-red-800" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {part3.practicalSignificance.title}
              </h4>
              <div className="space-y-2">
                {part3.practicalSignificance.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                    <span className="w-4 h-4 rounded-full bg-red-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-red-800" />
              <span>Chấm dứt thời kỳ bế tắc về đường lối cứu nước (1858 – 1930)</span>
            </div>
          </div>
        </div>

        {/* Khung ảnh tư liệu lịch sử */}
        <div className="pt-2">
          <ImagePlaceholder
            label="Ảnh tư liệu: Hội nghị thành lập Đảng 3/2/1930"
            prompt="Gợi ý ảnh: Tranh sơn dầu lịch sử hoặc tư liệu tái hiện Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 3/2/1930 tại Hương Cảng do đồng chí Nguyễn Ái Quốc chủ trì"
            aspectRatio="landscape"
          />
        </div>
      </section>
      )}
    </div>
  );
};
