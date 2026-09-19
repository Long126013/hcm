import React, { useState } from 'react';
import { Shield, Award, UserCheck, AlertTriangle, Users, Quote, CheckCircle2, BookOpen, HeartHandshake, Eye, Bookmark } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Section412: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'a' | 'b' | 'c'>('all');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER BANNER - SOFTER, PROFESSIONAL THEME */}
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
            Đạo đức cách mạng là nền tảng, các nguyên tắc tổ chức là kỷ cương cốt lõi, và công tác cán bộ là nhân tố quyết định thành bại của toàn bộ sự nghiệp cách mạng.
          </p>

          {/* Clean Sub-navigation */}
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
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeSubTab === 'a'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              a) Đảng là đạo đức, văn minh
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
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                activeSubTab === 'c'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              c) Đội ngũ cán bộ, đảng viên
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SUB-SECTION A: ĐẢNG LÀ ĐẠO ĐỨC, VĂN MINH */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === 'a') && (
        <section className="space-y-5 pt-2">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
              a
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Đảng là đạo đức, là văn minh</h3>
              <p className="text-xs text-slate-500">Đạo đức cách mạng là nền tảng để Đảng giữ vững vai trò lãnh đạo và hoàn thành sứ mệnh</p>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-5 rounded-xl bg-slate-100/90 border-l-4 border-red-800 text-slate-800">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-red-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-serif-quote italic text-slate-900 text-base md:text-lg font-semibold">
                  "Đảng ta là đạo đức, là văn minh."
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  — Lời khẳng định của Chủ tịch Hồ Chí Minh tại Lễ kỷ niệm 30 năm ngày thành lập Đảng (1960). Đạo đức cách mạng là nền tảng sống còn để Đảng giữ trọn niềm tin yêu của nhân dân.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Biểu hiện của một Đảng có đạo đức */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-red-800" />
              3 Biểu hiện của một Đảng có đạo đức:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-red-800 uppercase tracking-wide block mb-1">
                  (1) Mục đích hoạt động
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Lãnh đạo đấu tranh vì độc lập dân tộc, giải phóng xã hội, giai cấp và con người. Mục tiêu cao nhất là đem lại ấm no, tự do, hạnh phúc cho nhân dân và đoàn kết hữu nghị với các dân tộc trên thế giới.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-red-800 uppercase tracking-wide block mb-1">
                  (2) Đường lối và hoạt động
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Cương lĩnh, chủ trương và hoạt động phải xuất phát từ quyền lợi của dân tộc và nhân dân. Đảng <strong>không có lợi ích riêng</strong>, sự tồn tại và phát triển của Đảng gắn chặt với sự hưng thịnh của non sông.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-red-800 uppercase tracking-wide block mb-1">
                  (3) Đội ngũ cán bộ, đảng viên
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Phải thường xuyên tu dưỡng, rèn luyện các phẩm chất: <em>Cần, kiệm, liêm, chính, chí công vô tư</em>. Trung thành với Đảng, hiếu với dân, tiên phong gương mẫu, không bị tiền tài danh vọng khuất phục.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Nội dung xây dựng Đảng văn minh */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-800" />
              6 Nội dung chính xây dựng Đảng văn minh, trong sạch và vững mạnh:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {[
                'Đại diện cho lương tâm, trí tuệ và danh dự của toàn thể dân tộc Việt Nam.',
                'Sự ra đời và hoạt động của Đảng phù hợp với quy luật phát triển, đặt lợi ích dân tộc lên hàng đầu.',
                'Luôn trong sạch, vững mạnh, hoàn thành sứ mệnh lãnh đạo, đồng thời phòng chống các biểu hiện tiêu cực.',
                'Khi cầm quyền, Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật, không đứng trên dân tộc.',
                'Cán bộ, đảng viên phải luôn tiên phong, gương mẫu từ người lãnh đạo cao nhất đến đảng viên cơ sở.',
                'Có quan hệ quốc tế trong sáng, bảo vệ độc lập chủ quyền và hướng tới hòa bình hữu nghị giữa các dân tộc.',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cảnh báo: Vì sao phải xây dựng Đảng trong sạch? */}
          <div className="p-4 rounded-xl bg-stone-100 border border-stone-300 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-slate-900 text-xs mb-1">
                Vì sao phải kiên quyết xây dựng Đảng trong sạch, vững mạnh?
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed">
                Nếu Đảng không có đạo đức, không văn minh thì sẽ đối diện với nguy cơ: <strong>Mất vai trò lãnh đạo</strong> → <strong>Trở nên không trong sạch, vững mạnh</strong> → <strong>Cán bộ đảng viên thoái hóa biến chất</strong> → <strong>Những thành quả cách mạng có thể bị đánh mất</strong>.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION B: NGUYÊN TẮC HOẠT ĐỘNG */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === 'b') && (
        <section className="space-y-5 pt-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
              b
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Những vấn đề nguyên tắc trong hoạt động của Đảng</h3>
              <p className="text-xs text-slate-500">Hệ thống các nguyên tắc tổ chức và hoạt động bảo đảm sức mạnh chiến đấu của Đảng</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: '1. Tập trung dân chủ',
                desc: 'Là nguyên tắc tổ chức cơ bản nhất của Đảng. Tập trung trên cơ sở dân chủ, và dân chủ dưới sự chỉ đạo tập trung. Thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên, toàn Đảng phục tùng Trung ương.',
                icon: Users,
              },
              {
                title: '2. Tập thể lãnh đạo, cá nhân phụ trách',
                desc: 'Tập thể lãnh đạo nhằm phát huy trí tuệ nhiều người, tránh độc đoán chuyên quyền; cá nhân phụ trách để đề cao trách nhiệm cá nhân, khắc phục tư tưởng ỷ lại, vô trách nhiệm.',
                icon: Shield,
              },
              {
                title: '3. Tự phê bình và phê bình',
                desc: 'Là quy luật phát triển của Đảng, vũ khí sắc bén để củng cố và phát triển nội bộ. Phải tiến hành thường xuyên như việc rửa mặt hàng ngày, với động cơ trong sáng và tình thương yêu đồng chí.',
                icon: Eye,
              },
              {
                title: '4. Kỷ luật nghiêm minh, tự giác & Đoàn kết thống nhất',
                desc: 'Kỷ luật Đảng là kỷ luật sắt, tự giác; không ai đứng ngoài hay đứng trên kỷ luật. Đoàn kết là sức mạnh cốt tử, phải giữ gìn sự đoàn kết thống nhất như giữ gìn con ngươi của mắt mình.',
                icon: HeartHandshake,
              },
            ].map((principle, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center mb-2.5">
                  <principle.icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{principle.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* SUB-SECTION C: XÂY DỰNG ĐỘI NGŨ CÁN BỘ */}
      {/* ======================================================== */}
      {(activeSubTab === 'all' || activeSubTab === 'c') && (
        <section className="space-y-5 pt-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
            <span className="w-8 h-8 rounded-lg bg-red-800 text-white font-bold flex items-center justify-center text-sm shadow-xs">
              c
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Xây dựng đội ngũ cán bộ, đảng viên</h3>
              <p className="text-xs text-slate-500">Cán bộ là cái gốc của mọi công việc, nhân tố quyết định thành bại</p>
            </div>
          </div>

          {/* Câu châm ngôn kinh điển */}
          <div className="p-5 rounded-xl bg-slate-100/90 border-l-4 border-red-800 text-slate-800">
            <div className="flex items-start gap-3">
              <Quote className="w-6 h-6 text-red-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-serif-quote italic text-slate-900 text-base md:text-lg font-bold">
                  "Cán bộ là cái gốc của mọi công việc. Muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém."
                </p>
                <span className="text-xs text-slate-600 mt-1 block">Tác phẩm "Sửa đổi lối làm việc" (1947)</span>
              </div>
            </div>
          </div>

          {/* 7 TIÊU CHUẨN CỐT LÕI */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-red-800" />
              7 Tiêu chuẩn & Yêu cầu đối với người cán bộ, đảng viên:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { title: '1. Tuyệt đối trung thành với Đảng', quote: 'Lợi ích của Đảng luôn đặt lên trước cá nhân; khi cần tính mệnh cũng vui lòng hy sinh.' },
                { title: '2. Nghiêm chỉnh thực hiện cương lĩnh', quote: 'Mọi chủ trương, nghị quyết, nguyên tắc xây dựng Đảng phải được chấp hành đầy đủ, không ngoại lệ.' },
                { title: '3. Thường xuyên tu dưỡng đạo đức', quote: 'Thấm nhuần đạo đức cách mạng, cần kiệm liêm chính, chí công vô tư — việc rèn luyện là suốt đời.' },
                { title: '4. Không ngừng học tập nâng cao', quote: 'Nếu không chịu khó học thì không tiến bộ được. Không tiến bộ là thoái bộ.' },
                { title: '5. Mật thiết với nhân dân', quote: 'Đảng viên đi trước, làng nước theo sau — là đầy tớ thật trung thành của nhân dân.' },
                { title: '6. Năng động, dám chịu trách nhiệm', quote: 'Thắng không kiêu, bại không nản — không thụ động, không lười biếng trước gian khó.' },
                { title: '7. Phòng và chống các tiêu cực', quote: 'Tham ô, lãng phí, quan liêu là giặc nội xâm nguy hiểm hơn giặc ngoại xâm.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-red-900 mb-1">{item.title}</div>
                  <p className="font-serif-quote italic text-xs text-slate-700 leading-relaxed">"{item.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* GIẶC NỘI XÂM & SUY THOÁI */}
          <div className="p-5 rounded-xl bg-stone-100 border border-stone-300 space-y-3">
            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-800" />
              Phòng chống "Giặc nội xâm" & Những biểu hiện suy thoái cần tránh
            </h4>
            <div className="p-3 rounded-lg bg-white border border-stone-200">
              <p className="font-serif-quote italic text-xs md:text-sm text-slate-800 leading-relaxed font-medium">
                "Mỗi kẻ địch bên trong là một bạn đồng minh của kẻ địch bên ngoài. Địch bên ngoài không đáng sợ. Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra."
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-md bg-white border border-stone-200 text-stone-800 font-medium">❌ Đặt lợi ích cá nhân lên trên</div>
              <div className="p-2.5 rounded-md bg-white border border-stone-200 text-stone-800 font-medium">❌ Tham ô, hủ hoá, lãng phí</div>
              <div className="p-2.5 rounded-md bg-white border border-stone-200 text-stone-800 font-medium">❌ Độc đoán, chuyên quyền, quan liêu</div>
              <div className="p-2.5 rounded-md bg-white border border-stone-200 text-stone-800 font-medium">❌ Mất đoàn kết, thiếu kỷ luật</div>
            </div>
          </div>

          {/* CÔNG TÁC CÁN BỘ */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-red-800" />
              Yêu cầu cụ thể trong Công tác Cán bộ (Yếu tố quyết định thành bại):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Hiểu và đánh giá đúng cán bộ</span>
                <span className="text-slate-600">Tránh định kiến hẹp hòi, đặt đúng người đúng việc phát huy tối đa năng lực.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Huấn luyện thiết thực & Đề bạt đúng</span>
                <span className="text-slate-600">Dựa trên năng lực thực tiễn và phẩm chất liêm chính, không dựa trên quan hệ thân quen.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Kết hợp thế hệ & Kiểm tra hỗ trợ</span>
                <span className="text-slate-600">Kết hợp cán bộ trẻ với cán bộ cũ để truyền kinh nghiệm; thường xuyên kiểm tra, không bỏ mặc.</span>
              </div>
            </div>
          </div>

          {/* 3 CÂU HỎI ĐÀO SÂU TRỌNG TÂM */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-slate-700" />
              3 Câu hỏi đào sâu trọng tâm:
            </h4>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <h5 className="font-bold text-slate-900 text-xs mb-1">
                  1/ Tại sao cán bộ lại quan trọng đến vậy?
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cán bộ là "cầu nối" giữa Đảng và nhân dân, trực tiếp hiện thực hóa đường lối chính sách vào đời sống. Nếu không có đội ngũ cán bộ tốt, dù chủ trương đúng đắn đến đâu cũng không thể thực hiện được.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <h5 className="font-bold text-slate-900 text-xs mb-1">
                  2/ Hồ Chí Minh mong muốn xây dựng điều gì qua những yêu cầu này?
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Xây dựng một Đảng vừa trong sạch vừa vững mạnh, đào tạo lớp cán bộ <strong>vừa "hồng" vừa "chuyên"</strong>: có lý tưởng cách mạng kiên định (hồng) và có năng lực khoa học thực tiễn vững vàng (chuyên).
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <h5 className="font-bold text-slate-900 text-xs mb-1">
                  3/ Bối cảnh lịch sử nào đã dẫn đến những tư tưởng này?
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trải qua 4 thời kỳ thực tiễn: 1930–1945 (hoạt động bí mật cần lòng trung thành tuyệt đối), 1945–1954 (kháng chiến chống Pháp, chống quan liêu mới nảy sinh qua "Sửa đổi lối làm việc"), 1954–1969 (áp lực kép xây dựng miền Bắc & chi viện miền Nam), và năm 1969 (bài báo cảnh báo quét sạch chủ nghĩa cá nhân trước khi Bác qua đời).
                </p>
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
