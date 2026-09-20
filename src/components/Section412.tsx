import React, { useState } from 'react';
import { CONTENT_412 } from '../data/curriculumData';
import {
  Shield,
  Award,
  UserCheck,
  AlertTriangle,
  Users,
  Quote,
  BookOpen,
  HeartHandshake,
  Eye,
  Bookmark,
  Scale,
  Calendar,
  AlertOctagon,
  ArrowRight,
} from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Section412: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'a' | 'b' | 'c'>('all');
  const { partA, partB, partC } = CONTENT_412;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER BANNER - CLEAN PROFESSIONAL THEME */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-7 md:p-8 border border-slate-800 shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-red-950 text-red-300 border border-red-800/80">
              Mục 4.1.2
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              Nội dung học phần
            </span>

          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
            Đảng phải trong sạch, vững mạnh
          </h2>

          <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
            Đạo đức cách mạng là nền tảng, hệ thống các nguyên tắc tổ chức là kỷ cương cốt lõi, và công tác cán bộ là nhân tố quyết định thành bại của toàn bộ sự nghiệp cách mạng.
          </p>

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
              Xem toàn bộ (a, b, c)
            </button>
            <button
              onClick={() => setActiveSubTab('a')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'a'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <span>a) Đảng là đạo đức, văn minh</span>
            </button>
            <button
              onClick={() => setActiveSubTab('b')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeSubTab === 'b'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              b) Nguyên tắc hoạt động
            </button>
            <button
              onClick={() => setActiveSubTab('c')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSubTab === 'c'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <span>c) Đội ngũ cán bộ, đảng viên</span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SUB-SECTION A: ĐẢNG LÀ ĐẠO ĐỨC, VĂN MINH */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === 'a') && (
        <section className="space-y-6 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                a
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{partA.title}</h3>
                <p className="text-xs text-slate-500">
                  {partA.quote.foundation}
                </p>
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-5 rounded-xl bg-slate-100/90 border-l-4 border-red-800 text-slate-800">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-red-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-serif-quote italic text-slate-900 text-lg md:text-xl font-bold">
                  "{partA.quote.text}"
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  — {partA.quote.author} ({partA.quote.context}). {partA.quote.foundation}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Biểu hiện của một Đảng có đạo đức */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-red-800" />
              Biểu hiện của một Đảng có đạo đức:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {partA.manifestations.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <span className="text-xs font-bold text-red-800 uppercase tracking-wide block">
                    {m.number} {m.title}
                  </span>
                  <p className="text-xs font-medium text-slate-900 leading-relaxed">
                    {m.content}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                    {m.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Nội dung xây dựng Đảng văn minh */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-800" />
                Xây dựng Đảng có đạo đức cũng chính là xây dựng một Đảng văn minh, trong sạch và vững mạnh:
              </h4>
              <p className="text-xs text-slate-500 mt-1">Gồm có 6 nội dung chính:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {partA.sixContents.map((text, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cảnh báo: Vì sao phải xây dựng Đảng trong sạch? */}
          <div className="p-5 rounded-xl bg-stone-100 border border-stone-300 space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0" />
              <h5 className="font-bold text-stone-900 text-sm">
                {partA.whyCleanAndStrong.question}
              </h5>
            </div>
            <p className="text-xs text-slate-700 font-medium">
              {partA.whyCleanAndStrong.explanation}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {partA.whyCleanAndStrong.risks.map((risk, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-stone-200 text-stone-800 text-xs font-semibold flex items-center gap-2 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span>{risk}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION B: NGUYÊN TẮC HOẠT ĐỘNG CỦA ĐẢNG */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === 'b') && (
        <section className="space-y-6 pt-4">
          <div className="pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                b
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{partB.title}</h3>
                <p className="text-xs text-slate-500">
                  Hệ thống các nguyên tắc tổ chức và sinh hoạt bảo đảm sự lãnh đạo thống nhất
                </p>
              </div>
            </div>
          </div>

          {/* Lời dẫn nhập */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium leading-relaxed">
            {partB.intro}
          </div>

          {/* 5 NGUYÊN TẮC CHI TIẾT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partB.principles.map((principle) => {
              const icons = [Users, Shield, Eye, Scale, HeartHandshake];
              const IconComp = icons[principle.number - 1] || Users;
              const isLastSpan = principle.number === 5;

              return (
                <div
                  key={principle.number}
                  className={`p-5 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3 ${
                    isLastSpan ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-800 block">
                          Nguyên tắc {principle.number}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{principle.name}</h4>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-800 leading-relaxed bg-slate-50 p-2 rounded-lg">
                      {principle.definition}
                    </p>

                    <div className="space-y-1.5 pl-1">
                      {principle.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="text-red-700 font-bold">•</span>
                          <span className="leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-900 font-medium flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{principle.conclusion}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION C: XÂY DỰNG ĐỘI NGŨ CÁN BỘ, ĐẢNG VIÊN */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === 'c') && (
        <section className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                c
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{partC.title}</h3>
                <p className="text-xs text-slate-500">
                  Cán bộ là cái gốc của mọi công việc — nhân tố quyết định thành bại của cách mạng
                </p>
              </div>
            </div>
          </div>

          {/* Câu châm ngôn kinh điển */}
          <div className="p-5 rounded-xl bg-slate-100/90 border-l-4 border-red-800 text-slate-800">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-red-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-serif-quote italic text-slate-900 text-lg md:text-xl font-bold">
                  "{partC.cadreWork.famousQuote}"
                </p>
                <span className="text-xs text-slate-600 mt-1 block">
                  — Chủ tịch Hồ Chí Minh, tác phẩm <em>"Sửa đổi lối làm việc" (1947)</em>
                </span>
              </div>
            </div>
          </div>

          {/* 7 TIÊU CHUẨN CỐT LÕI */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-red-800" />
                7 Tiêu chuẩn & Yêu cầu đối với người cán bộ, đảng viên:
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Bộ chuẩn mực đạo đức cách mạng và trách nhiệm hành động suốt đời
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {partC.standards.map((item) => (
                <div
                  key={item.number}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-2"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-red-100 text-red-800 font-bold text-xs flex items-center justify-center shrink-0">
                        {item.number}
                      </span>
                      <span className="text-xs font-bold text-red-950 leading-tight">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>

                  {item.quote && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 mt-2">
                      <p className="font-serif-quote italic text-[11px] text-slate-800 leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* GIẶC NỘI XÂM & BIỂU HIỆN SUY THOÁI CẦN TRÁNH */}
          <div className="p-5 rounded-xl bg-stone-100 border border-stone-300 space-y-3.5">
            <div>
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-amber-800" />
                {partC.degradationManifestations.title}
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                {partC.degradationManifestations.desc}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-white border border-stone-200">
              <p className="font-serif-quote italic text-xs md:text-sm text-slate-800 leading-relaxed font-medium">
                "{partC.standards[6].quote}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              {partC.degradationManifestations.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white border border-stone-200 text-stone-900 font-semibold flex items-center gap-2 shadow-2xs"
                >
                  <span className="text-red-600 font-bold">❌</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/80">
              <p className="font-serif-quote italic text-xs text-amber-950 font-semibold leading-relaxed">
                "{partC.degradationManifestations.corePrincipleQuote}"
              </p>
            </div>
          </div>

          {/* CÔNG TÁC CÁN BỘ (YẾU TỐ QUYẾT ĐỊNH THÀNH BẠI) */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3.5">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-red-800" />
                {partC.cadreWork.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Hồ Chí Minh đặt ra 6 yêu cầu cụ thể trong công tác cán bộ:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {partC.cadreWork.requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-800 font-bold text-[11px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 leading-tight">
                      {req.title}
                    </span>
                  </div>
                  <p className="text-slate-600 pl-7 leading-relaxed">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 CÂU HỎI ĐÀO SÂU TRỌNG TÂM */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 shadow-2xs space-y-5">
            <div>
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-800" />
                3 Câu hỏi đào sâu trọng tâm & Phân tích bối cảnh lịch sử:
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Làm rõ lý luận cốt lõi, tầm nhìn tương lai và căn nguyên thực tiễn tôi rèn nên tư tưởng
              </p>
            </div>

            <div className="space-y-4">
              {/* Câu hỏi 1 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-red-900 text-xs md:text-sm">
                  {partC.deepDiveQuestions[0].question}
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {partC.deepDiveQuestions[0].answer}
                </p>
              </div>

              {/* Câu hỏi 2 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-red-900 text-xs md:text-sm">
                  {partC.deepDiveQuestions[1].question}
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {partC.deepDiveQuestions[1].answer}
                </p>
              </div>

              {/* Câu hỏi 3: Kèm Timeline 4 giai đoạn */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <h5 className="font-bold text-red-900 text-xs md:text-sm">
                    {partC.deepDiveQuestions[2].question}
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed mt-1">
                    {partC.deepDiveQuestions[2].answer}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {partC.deepDiveQuestions[2].historicalStages?.map((stage, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1.5"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-red-800">
                        <Calendar className="w-3.5 h-3.5 text-red-700" />
                        <span>{stage.period}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {stage.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ImagePlaceholder
            label="Ảnh tư liệu: Bác Hồ với cán bộ, đảng viên"
            prompt="Gợi ý ảnh: Bác Hồ giản dị trò chuyện với các cán bộ, chiến sĩ hoặc phát biểu chỉ đạo tại các hội nghị chỉnh đốn Đảng"
            aspectRatio="landscape"
          />
        </section>
      )}
    </div>
  );
};
