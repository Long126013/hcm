import { Award } from 'lucide-react';

export function SectionFAQ() {
  return (
    <div className="space-y-8 animate-fadeIn pb-16">
      {/* SECTION HEADER BANNER - MATCHING SECTION 4.1.1 & 4.1.2 DESIGN */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-7 md:p-8 border border-slate-800 shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-red-950 text-red-300 border border-red-800/80">
              Góc Thảo Luận
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
              Câu hỏi chuyên đề mở rộng
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
            Đảng Kiểu Mới của Hồ Chí Minh có gì khác biệt?
          </h2>

          <div className="mt-3 p-3.5 rounded-xl bg-slate-800/80 border-l-4 border-red-600 text-slate-200">
            <p className="text-sm md:text-base font-medium leading-relaxed">
              "Hồ Chí Minh chú trọng xây dựng Đảng Cộng sản Việt Nam thành đảng kiểu mới, vậy đảng này theo Bác khác gì với các đảng chính trị khác trên thế giới?"
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            Sự ra đời của Đảng Cộng sản Việt Nam là một bước ngoặt vĩ đại trong lịch sử cách mạng nước ta. Điểm làm nên sức sống mãnh liệt và thắng lợi của Đảng chính là tư tưởng của <strong>Hồ Chí Minh</strong> về việc xây dựng một <strong>"Đảng kiểu mới"</strong> phù hợp với hoàn cảnh một nước thuộc địa nửa phong kiến. 
          </p>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed mt-2.5">
            Theo Chủ tịch Hồ Chí Minh, sự khác biệt căn bản của Đảng ta so với các đảng chính trị khác trên thế giới thể hiện tập trung ở <strong>3 bình diện cốt lõi</strong>:
          </p>
        </div>

        {/* 3 Key Differences Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Item 1 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-800 flex items-center justify-center font-bold text-base mb-4 border border-red-100">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Nền tảng hình thành độc đáo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Ở các nước tư bản phát triển, Đảng Cộng sản ra đời từ 2 yếu tố kinh điển: <em>Chủ nghĩa Mác – Lênin</em> + <em>Phong trào công nhân</em>.
              </p>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
                Hồ Chí Minh bổ sung yếu tố thứ 3 quyết định: <strong className="text-red-800">Phong trào yêu nước</strong>. Đảng là kết tinh ý chí quật cường của toàn thể dân tộc Việt Nam.
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-base mb-4 border border-slate-200">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Lợi ích đại diện rộng lớn
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Các đảng phái tư sản hay chính trị thông thường đại diện cho một nhóm thiểu số, phe phái hoặc lợi ích giai cấp biệt lập.
              </p>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
                Đảng ta <strong className="text-red-800">không có lợi ích tư riêng</strong>. Đảng đại diện cho lợi ích của giai cấp công nhân, nhân dân lao động và <em>toàn thể dân tộc Việt Nam</em>.
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-base mb-4 border border-amber-200/80">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Mối quan hệ máu thịt với dân
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Nhiều chính đảng cầm quyền tự biến mình thành tầng lớp quan liêu, đứng trên nhân dân để cai trị.
              </p>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed font-medium">
                Theo Bác, Đảng vừa là <strong>người lãnh đạo</strong>, vừa là <strong>người đày tớ thật trung thành</strong> của nhân dân, gắn bó máu thịt như cá với nước.
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion / Summary */}
        <div className="bg-slate-100/80 rounded-xl p-6 border border-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <Award className="w-4 h-4 text-red-800" />
            <span>Kết luận & Ý nghĩa thực tiễn</span>
          </div>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Chính sự sáng tạo này của Chủ tịch Hồ Chí Minh đã giúp Đảng Cộng sản Việt Nam huy động được sức mạnh đại đoàn kết toàn dân tộc, vượt qua mọi kẻ thù xâm lược và lãnh đạo đất nước giành thắng lợi trọn vẹn trong công cuộc giải phóng dân tộc và kiến thiết đất nước.
          </p>
        </div>
      </div>
    </div>
  );
}
