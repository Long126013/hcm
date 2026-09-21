import React from 'react';

interface Props {
  isDark?: boolean;
  onRestart?: () => void;
}

export const AiDisclosureSlide: React.FC<Props> = ({ isDark = false }) => {
  const disclosureData = [
    {
      stt: 1,
      toolName: 'GEMINI',
      toolBadgeStyle: 'bg-[white] text-slate-900 border border-amber-500 shadow-xs font-black',
      purpose: 'Gợi ý thiết kế minigame',
      studentAction: 'Đối chiếu nội dung minigame với nội dung trình bày trong báo cáo, chỉnh sửa và tối ưu hóa trò chơi',
    },
    {
      stt: 2,
      toolName: 'ANTIGRAVITY',
      toolBadgeStyle: 'bg-[white] text-[blue] border border-stone-700 shadow-xs font-black',
      purpose: 'Hỗ trợ code frontend (CSS, JS) và sửa lỗi hiển thị',
      studentAction: 'Điều chỉnh màu sắc, tối ưu responsive, căn chỉnh độ tương phản',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 animate-slideUpFade px-2 sm:px-4 py-2">
      {/* 1. TOP BADGE & TITLE */}
      <div className="text-center space-y-2.5 max-w-4xl mx-auto">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-tight leading-tight uppercase`}>
          PHỤ LỤC MINH BẠCH AI
        </h2>
      </div>

      {/* 2. DISCLOSURE TABLE */}
      <div className="rounded-2xl border-2 border-slate-900 overflow-hidden shadow-md bg-white">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#991b1b] text-white text-xs sm:text-sm font-black uppercase tracking-wider">
                <th className="py-3.5 px-4 text-center w-16 border-r border-red-800/60">STT</th>
                <th className="py-3.5 px-4 text-center sm:text-left w-36 sm:w-44 border-r border-red-800/60">CÔNG CỤ AI</th>
                <th className="py-3.5 px-5 w-5/12 border-r border-red-800/60">MỤC ĐÍCH SỬ DỤNG</th>
                <th className="py-3.5 px-5 w-5/12">CHỈNH SỬA CỦA SINH VIÊN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-800">
              {disclosureData.map((item) => (
                <tr key={item.stt} className="hover:bg-amber-50/30 transition-colors">
                  <td className="py-4 px-4 text-center font-bold text-slate-900 border-r border-slate-200">
                    {item.stt}
                  </td>
                  <td className="py-4 px-4 border-r border-slate-200 text-center sm:text-left">
                    <span className={`inline-block px-3 py-1 rounded-md text-[11px] sm:text-xs tracking-wider ${item.toolBadgeStyle}`}>
                      {item.toolName}
                    </span>
                  </td>
                  <td className="py-4 px-5 border-r border-slate-200 leading-relaxed font-medium">
                    {item.purpose}
                  </td>
                  <td className="py-4 px-5 leading-relaxed text-slate-700">
                    {item.studentAction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. ACADEMIC INTEGRITY COMMITMENT BOX */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#fef7e0] border-2 border-amber-600/90 shadow-sm text-slate-900 space-y-1.5">
        <h4 className="text-xs sm:text-sm font-black text-amber-900 uppercase tracking-wide">
          CAM KẾT LIÊM CHÍNH HỌC THUẬT:
        </h4>
        <p className="text-xs sm:text-[13.5px] leading-relaxed text-amber-950/90">
          Nhóm 2 cam kết sử dụng AI minh bạch với vai trò hỗ trợ kỹ thuật; toàn bộ nội dung học thuật và quyết định cuối cùng đều do sinh viên trực tiếp nghiên cứu, thực hiện và chịu trách nhiệm.
        </p>
      </div>
    </div>
  );
};
