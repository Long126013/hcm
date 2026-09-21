import React from 'react';
import { HelpCircle, Sparkles, Users, HeartHandshake, Award } from 'lucide-react';

interface Props {
  isDark?: boolean;
}

export const CqQuestionSlide: React.FC<Props> = ({ isDark = false }) => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-slideUpFade px-2 sm:px-4 py-2">
      {/* 1. HEADER & QUESTION BANNER */}
      <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-7 border shadow-md transition-all ${
        isDark 
          ? 'bg-slate-900 border-red-900/60 text-white' 
          : 'bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 border-slate-800 text-white'
      }`}>
        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-800 text-red-100 border border-red-700/80 shadow-xs flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              CÂU HỎI CQ (CRITICAL QUESTION)
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-amber-300 border border-slate-700">
              Góc Thảo Luận & Phản Biện Chuyên Đề
            </span>
          </div>

          {/* Main Question */}
          <div className="pt-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-amber-300 leading-snug tracking-tight">
              "Hồ Chí Minh chú trọng xây dựng Đảng Cộng sản Việt Nam thành đảng kiểu mới, vậy đảng này theo Bác khác gì với các đảng chính trị khác trên thế giới?"
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Theo Chủ tịch Hồ Chí Minh, sự khác biệt căn bản mang tính đột phá của Đảng ta thể hiện tập trung ở <strong className="text-white">3 bình diện cốt lõi</strong>:
            </p>
          </div>
        </div>
      </div>

      {/* 2. THREE CORE PILLARS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* PILLAR 1 */}
        <div className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md ${
          isDark 
            ? 'bg-red-900/20 border-red-800/50 hover:border-red-600' 
            : 'bg-white border-[#e8e4db] hover:border-red-800/40'
        }`}>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center border shadow-2xs ${
                isDark 
                  ? 'bg-red-950 text-red-300 border-red-800' 
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}>
                01
              </span>
              <div className={`p-2 rounded-xl ${isDark ? 'bg-red-950/60 text-amber-400' : 'bg-amber-50 text-amber-700'}`}>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <h3 className={`text-base font-black ${isDark ? 'text-white' : 'text-slate-900'} leading-tight`}>
              Nền tảng hình thành độc đáo
            </h3>

            <div className={`p-3 rounded-xl text-xs space-y-1.5 leading-relaxed ${
              isDark ? 'bg-slate-900/60 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-600 border border-slate-200'
            }`}>
              <span className="font-bold text-slate-500 uppercase text-[10px] block">Quy luật thế giới:</span>
              <p>Chủ nghĩa Mác – Lênin + Phong trào công nhân</p>
            </div>

            <div className={`p-3.5 rounded-xl border text-xs leading-relaxed font-medium ${
              isDark 
                ? 'bg-red-950/40 border-red-800/70 text-red-100' 
                : 'bg-red-50/70 border-red-200 text-red-950'
            }`}>
              <span className="font-bold text-red-700 uppercase text-[10px] block mb-1">Sáng tạo Hồ Chí Minh:</span>
              Bổ sung yếu tố thứ 3 quyết định: <strong className="text-red-700 font-bold">Phong trào yêu nước</strong>. Đảng là kết tinh tinh hoa ý chí tự cường của toàn thể dân tộc Việt Nam.
            </div>
          </div>
        </div>

        {/* PILLAR 2 */}
        <div className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md ${
          isDark 
            ? 'bg-red-900/20 border-red-800/50 hover:border-red-600' 
            : 'bg-white border-[#e8e4db] hover:border-red-800/40'
        }`}>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center border shadow-2xs ${
                isDark 
                  ? 'bg-slate-800 text-slate-200 border-slate-700' 
                  : 'bg-slate-100 text-slate-800 border-slate-200'
              }`}>
                02
              </span>
              <div className={`p-2 rounded-xl ${isDark ? 'bg-slate-800 text-red-300' : 'bg-red-50 text-red-700'}`}>
                <Users className="w-5 h-5" />
              </div>
            </div>

            <h3 className={`text-base font-black ${isDark ? 'text-white' : 'text-slate-900'} leading-tight`}>
              Lợi ích đại diện rộng lớn
            </h3>

            <div className={`p-3 rounded-xl text-xs space-y-1.5 leading-relaxed ${
              isDark ? 'bg-slate-900/60 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-600 border border-slate-200'
            }`}>
              <span className="font-bold text-slate-500 uppercase text-[10px] block">Các đảng phái khác:</span>
              <p>Đại diện cho một nhóm thiểu số, phe phái hoặc nhóm lợi ích giai cấp biệt lập.</p>
            </div>

            <div className={`p-3.5 rounded-xl border text-xs leading-relaxed font-medium ${
              isDark 
                ? 'bg-red-950/40 border-red-800/70 text-red-100' 
                : 'bg-red-50/70 border-red-200 text-red-950'
            }`}>
              <span className="font-bold text-red-700 uppercase text-[10px] block mb-1">Bản chất Đảng ta:</span>
              Đảng <strong className="text-red-700 font-bold">không có lợi ích tư riêng</strong>, đại diện trọn vẹn cho lợi ích của giai cấp công nhân, nhân dân lao động và <strong className="text-red-700 font-bold">toàn thể dân tộc Việt Nam</strong>.
            </div>
          </div>
        </div>

        {/* PILLAR 3 */}
        <div className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md ${
          isDark 
            ? 'bg-red-900/20 border-red-800/50 hover:border-red-600' 
            : 'bg-white border-[#e8e4db] hover:border-red-800/40'
        }`}>
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <span className={`w-9 h-9 rounded-xl font-black text-sm flex items-center justify-center border shadow-2xs ${
                isDark 
                  ? 'bg-amber-950 text-amber-300 border-amber-800' 
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}>
                03
              </span>
              <div className={`p-2 rounded-xl ${isDark ? 'bg-amber-950/60 text-amber-300' : 'bg-amber-50 text-amber-700'}`}>
                <HeartHandshake className="w-5 h-5" />
              </div>
            </div>

            <h3 className={`text-base font-black ${isDark ? 'text-white' : 'text-slate-900'} leading-tight`}>
              Mối quan hệ máu thịt với dân
            </h3>

            <div className={`p-3 rounded-xl text-xs space-y-1.5 leading-relaxed ${
              isDark ? 'bg-slate-900/60 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-600 border border-slate-200'
            }`}>
              <span className="font-bold text-slate-500 uppercase text-[10px] block">Thực trạng nhiều đảng cầm quyền:</span>
              <p>Dễ tự biến mình thành tầng lớp quan liêu, xa cách và đứng trên nhân dân để cai trị.</p>
            </div>

            <div className={`p-3.5 rounded-xl border text-xs leading-relaxed font-medium ${
              isDark 
                ? 'bg-red-950/40 border-red-800/70 text-red-100' 
                : 'bg-red-50/70 border-red-200 text-red-950'
            }`}>
              <span className="font-bold text-red-700 uppercase text-[10px] block mb-1">Đặc trưng "Đảng ta":</span>
              Đảng vừa là <strong className="text-red-700 font-bold">người lãnh đạo</strong>, vừa là <strong className="text-red-700 font-bold">người đầy tớ thật trung thành</strong> của nhân dân; gắn bó mật thiết "như cá với nước".
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONCLUSION BOX */}
      <div className={`p-4 sm:p-5 rounded-2xl border shadow-xs space-y-1.5 ${
        isDark 
          ? 'bg-slate-900/80 border-slate-800 text-slate-200' 
          : 'bg-[#f7f5f0] border-[#e8e4db] text-slate-800'
      }`}>
        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-red-700">
          <Award className="w-4 h-4 text-red-700" />
          <span className="uppercase tracking-wide">Kết luận & Ý nghĩa thực tiễn:</span>
        </div>
        <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600">
          Sự sáng tạo của Hồ Chí Minh khi gắn lý luận Mác – Lênin với phong trào yêu nước đã giúp Đảng Cộng sản Việt Nam huy động được sức mạnh đại đoàn kết toàn dân tộc, vượt qua mọi kẻ thù xâm lược, đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác.
        </p>
      </div>
    </div>
  );
};
