import React from 'react';
import { Bookmark, Clock, ArrowLeft } from 'lucide-react';

import { ImagePlaceholder } from './ImagePlaceholder';

interface SectionPlaceholderProps {
  code: string;
  title: string;
  parentTitle: string;
  description: string;
  onBackTo411: () => void;
}

export const SectionPlaceholder: React.FC<SectionPlaceholderProps> = ({
  code,
  title,
  parentTitle,
  description,
  onBackTo411,
}) => {
  const isDemocracy = code === '4.2.1';

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-800 via-slate-900 to-red-950 text-white p-8 md:p-10 shadow-lg">
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm border border-white/30 text-amber-200">
              Mục {code}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-400/20 text-blue-200 border border-blue-400/30">
              Khung đề mục chuẩn bị
            </span>
          </div>

          <div className="text-xs text-slate-300 font-medium mb-1">{parentTitle}</div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
            {description}
          </p>

          <div className="mt-6">
            <button
              onClick={onBackTo411}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại Mục trọng tâm 4.1.1</span>
            </button>
          </div>
        </div>
      </div>

      {/* OUTLINE CARD */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
          <Bookmark className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-slate-900">
            Dự thảo các đề mục nội dung chính cần triển khai cho {code}
          </h3>
        </div>

        {isDemocracy ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-red-700 uppercase">Đề mục 1</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">Bản chất "của nhân dân"</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tất cả quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân. Nhân dân thực hiện quyền lực thông qua Quốc hội và HĐND các cấp do dân bầu ra.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-amber-700 uppercase">Đề mục 2</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">Bản chất "do nhân dân"</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhà nước do nhân dân xây dựng, ủng hộ, giúp đỡ và đóng thuế để bộ máy vận hành. Dân có quyền phê bình, giám sát và bãi miễn đại biểu không xứng đáng.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-emerald-700 uppercase">Đề mục 3</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">Bản chất "vì nhân dân"</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhà nước phục vụ lợi ích và nguyện vọng chính đáng của nhân dân, không có đặc quyền đặc lợi; cán bộ từ Chủ tịch nước đến cán bộ xã đều là công bộc của dân.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-blue-700 uppercase">Đề mục 1</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">Nhà nước hợp hiến, hợp pháp</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hồ Chí Minh đặc biệt coi trọng Hiến pháp và pháp luật. Ngay sau cách mạng, Người chủ trì xây dựng Hiến pháp 1946 (bản Hiến pháp đầu tiên của nước ta).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-purple-700 uppercase">Đề mục 2</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">Thượng tôn pháp luật</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Quản lý xã hội bằng pháp luật, đưa pháp luật vào đời sống nhân dân với khẩu hiệu: "Trăm điều phải có thần linh pháp quyền".
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-rose-700 uppercase">Đề mục 3</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1 mb-2">Pháp quyền gắn với Đạo đức</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pháp luật mang tính nhân văn sâu sắc, nghiêm trị kẻ ngoan cố nhưng khoan hồng với người lầm lỡ biết hối cải.
              </p>
            </div>
          </div>
        )}

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-700 shrink-0" />
          <p className="text-xs text-amber-900">
            Nội dung chi tiết của phần <strong>{code}</strong> đã được thiết lập sẵn khung đề mục. Bạn có thể gửi thêm tư liệu chi tiết bất cứ lúc nào để bổ sung!
          </p>
        </div>

        <ImagePlaceholder
          label={`Ảnh tư liệu chuẩn bị cho mục ${code}`}
          prompt={
            isDemocracy
              ? 'Gợi ý ảnh: Nhân dân đi bầu cử Quốc hội khóa I ngày 6/1/1946 hoặc Bác Hồ bỏ phiếu thực hiện quyền công dân'
              : 'Gợi ý ảnh: Bản thảo Hiến pháp năm 1946 nước Việt Nam Dân chủ Cộng hòa do Chủ tịch Hồ Chí Minh ký sắc lệnh ban hành'
          }
          aspectRatio="landscape"
        />
      </div>
    </div>
  );
};
