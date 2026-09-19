import type { TimelineEvent, SlideItem } from '../types/content';

export const CHAPTER_INFO = {
  id: 'chuong-4',
  code: 'CHƯƠNG 4',
  title: 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân',
  subject: 'Triết học & Tư tưởng Hồ Chí Minh',
  academicYear: 'Học phần Lý luận Chính trị',
};

export const SECTIONS_LIST = [
  {
    id: '4.1.1',
    code: '4.1.1',
    parent: '4.1',
    parentTitle: '4.1. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam',
    title: 'Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam',
    status: 'completed' as const,
    presenter: 'Nhóm Thuyết trình',
    badge: 'Trọng tâm',
    description: 'Nghiên cứu tính tất yếu lịch sử, hình tượng người cầm lái, quy luật sáng tạo 3 thành tố và ý nghĩa thời đại.',
  },
  {
    id: '4.1.2',
    code: '4.1.2',
    parent: '4.1',
    parentTitle: '4.1. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam',
    title: 'Đảng phải trong sạch, vững mạnh',
    status: 'completed' as const,
    badge: 'Trọng tâm',
    description: 'Gồm 3 nội dung: Đảng là đạo đức/văn minh, các nguyên tắc hoạt động và xây dựng đội ngũ cán bộ, đảng viên.',
    subsections: [
      { id: '4.1.2-a', title: 'a) Đảng là đạo đức, là văn minh' },
      { id: '4.1.2-b', title: 'b) Những vấn đề nguyên tắc trong hoạt động của Đảng' },
      { id: '4.1.2-c', title: 'c) Xây dựng đội ngũ cán bộ, đảng viên' },
    ],
  },
  {
    id: 'faq-new-party',
    code: 'FAQ',
    parent: '4.1',
    parentTitle: '4.1. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam',
    title: 'Đảng Kiểu Mới của Hồ Chí Minh có gì khác biệt?',
    status: 'completed' as const,
    badge: 'Thảo luận',
    description: 'Giải đáp: Hồ Chí Minh chú trọng xây dựng Đảng Cộng sản Việt Nam thành đảng kiểu mới, vậy đảng này theo Bác khác gì với các đảng chính trị khác trên thế giới?',
  },

  {
    id: '4.2.1',
    code: '4.2.1',
    parent: '4.2',
    parentTitle: '4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân',
    title: 'Nhà nước dân chủ',
    status: 'placeholder' as const,
    presenter: 'Chưa phân công',
    badge: 'Đầu mục',
    description: 'Bản chất dân chủ của Nhà nước Việt Nam mới: quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ.',
  },
  {
    id: '4.2.2',
    code: '4.2.2',
    parent: '4.2',
    parentTitle: '4.2. Tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân',
    title: 'Nhà nước pháp quyền',
    status: 'placeholder' as const,
    presenter: 'Chưa phân công',
    badge: 'Đầu mục',
    description: 'Nhà nước quản lý xã hội bằng Hiến pháp và pháp luật, thượng tôn pháp luật gắn liền với đạo đức cách mạng.',
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '1927',
    year: '1927',
    title: 'Tác phẩm "Đường cách mệnh"',
    subtitle: 'Quảng Châu, Trung Quốc',
    badge: 'Khởi nguồn kim chỉ nam',
    description:
      'Nguyễn Ái Quốc đặt nền tảng lý luận đầu tiên về sự cần thiết phải thành lập một chính đảng cách mạng của giai cấp công nhân và nhân dân lao động Việt Nam.',
    quote: 'Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi.',
    keyPoints: [
      'Khẳng định cách mệnh trước hết phải có Đảng',
      'Đưa ra hình tượng kinh điển: "Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy"',
      'Chuẩn bị toàn diện về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng',
    ],
    suggestedImagePrompt: 'Gợi ý ảnh: Bìa cuốn sách lịch sử "Đường Kách Mệnh" (1927) xuất bản tại Quảng Châu do Bộ Chính trị / Bảo tàng Lịch sử Quốc gia lưu giữ',
  },
  {
    id: '1930',
    year: '1930',
    title: 'Thành lập Đảng Cộng sản Việt Nam',
    subtitle: '3/2/1930 - Cửu Long, Hương Cảng',
    badge: 'Mốc son lịch sử',
    description:
      'Hội nghị hợp nhất các tổ chức cộng sản dưới sự chủ trì của đồng chí Nguyễn Ái Quốc, thông qua Chánh cương vắn tắt, Sách lược vắn tắt.',
    quote: 'Đảng ta là con nòi của giai cấp công nhân, sinh ra từ phong trào yêu nước của nhân dân Việt Nam.',
    keyPoints: [
      'Chấm dứt cuộc khủng hoảng sâu sắc về đường lối cứu nước và tổ chức lãnh đạo kéo dài từ cuối thế kỷ XIX',
      'Minh chứng sống động cho quy luật sáng tạo 3 thành tố: Chủ nghĩa Mác – Lênin + Phong trào công nhân + Phong trào yêu nước',
      'Được toàn dân tộc thừa nhận và giao phó sứ mệnh lịch sử cầm lái con thuyền dân tộc',
    ],
    suggestedImagePrompt: 'Gợi ý ảnh: Tranh sơn dầu hoặc tư liệu lịch sử tái hiện Hội nghị thành lập Đảng Cộng sản Việt Nam 3/2/1930 tại Hương Cảng',
  },
  {
    id: '1930-1945',
    year: '1930 – 1945',
    title: 'Lãnh đạo đấu tranh giành chính quyền',
    subtitle: 'Thời kỳ bí mật & Khởi nghĩa Tháng Tám',
    badge: 'Khẳng định vai trò lãnh đạo',
    description:
      'Đảng còn non trẻ, hoạt động bí mật dưới sự khủng bố tàn bạo của thực dân Pháp. Đội ngũ cán bộ phải tuyệt đối kiên trung, sẵn sàng hy sinh bảo vệ tổ chức.',
    keyPoints: [
      'Tập dượt qua cao trào Xô Viết Nghệ Tĩnh 1930-1931 và Mặt trận Dân chủ 1936-1939',
      'Đảng viên giữ vững khí tiết kiên cường trước ngục tù thực dân',
      'Đỉnh cao là thắng lợi Cách mạng Tháng Tám 1945, lập nên nước Việt Nam Dân chủ Cộng hòa',
    ],
    suggestedImagePrompt: 'Gợi ý ảnh: Quảng trường Ba Đình ngày 2/9/1945 hoặc hình ảnh đoàn quân khởi nghĩa Cách mạng Tháng Tám',
  },
  {
    id: '1945-1954',
    year: '1945 – 1954',
    title: 'Kháng chiến chống Pháp & "Sửa đổi lối làm việc"',
    subtitle: 'Xây dựng chỉnh đốn Đảng khi nắm chính quyền',
    badge: 'Tác phẩm kinh điển',
    description:
      'Nhà nước mới thành lập đối mặt thù trong giặc ngoài. Nguy cơ quan liêu, tham nhũng bắt đầu manh nha khi cán bộ có chức có quyền.',
    quote: 'Cán bộ là cái gốc của mọi công việc. Muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém.',
    keyPoints: [
      'Tháng 10/1947: Bác Hồ viết tác phẩm bất hủ "Sửa đổi lối làm việc" với bút danh X.Y.Z',
      'Định ra 5 tiêu chuẩn đạo đức cách mạng của người cán bộ: Nhân, Nghĩa, Dũng, Trí, Liêm',
      'Khẳng định cuộc đấu tranh chống quan liêu, lãng phí, tham ô là "giặc nội xâm"',
    ],
    suggestedImagePrompt: 'Gợi ý ảnh: Bác Hồ làm việc tại chiến khu Việt Bắc hoặc bìa tác phẩm "Sửa đổi lối làm việc" (1947)',
  },
  {
    id: '1954-1969',
    year: '1954 – 1969',
    title: 'Xây dựng CNXH miền Bắc & Kháng chiến chống Mỹ',
    subtitle: 'Thực hiện đồng thời 2 nhiệm vụ chiến lược',
    badge: 'Vừa hồng vừa chuyên',
    description:
      'Áp lực kép: Xây dựng miền Bắc làm hậu phương lớn xã hội chủ nghĩa, đồng thời chi viện cho chiến trường miền Nam kháng chiến chống Mỹ.',
    quote: 'Đảng cần phải chăm lo giáo dục đạo đức cách mạng cho họ, đào tạo họ thành những người thừa kế xây dựng chủ nghĩa xã hội vừa "hồng" vừa "chuyên".',
    keyPoints: [
      'Yêu cầu người cán bộ phải có lý tưởng cách mạng (hồng) và có năng lực khoa học thực tiễn (chuyên)',
      'Không ngừng củng cố khối đại đoàn kết toàn dân và mối liên hệ mật thiết giữa Đảng với dân',
      'Nêu cao nguyên tắc: "Đảng viên đi trước, làng nước theo sau"',
    ],
    suggestedImagePrompt: 'Gợi ý ảnh: Bác Hồ nói chuyện với các đại biểu tại Đại hội Đảng toàn quốc lần thứ III (1960) hoặc Bác thăm nông dân, công nhân miền Bắc',
  },
  {
    id: '1969',
    year: '1969',
    title: 'Lời dặn dò cuối đời & Bản Di chúc thiêng liêng',
    subtitle: 'Nâng cao đạo đức, quét sạch chủ nghĩa cá nhân',
    badge: 'Di sản vô giá',
    description:
      'Chỉ vài tháng trước khi đi xa, Người vẫn không ngừng trăn trở về việc giữ gìn sự trong sạch, đoàn kết thống nhất của Đảng như giữ gìn con ngươi của mắt mình.',
    quote: 'Trước hết nói về Đảng - Phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình. Phải thật sự cần kiệm liêm chính, chí công vô tư.',
    keyPoints: [
      '3/2/1969: Đăng bài báo quan trọng "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân"',
      'Khẳng định chủ nghĩa cá nhân là kẻ thù nguy hiểm nhất phá hoại từ bên trong',
      'Bản Di chúc để lại muôn vàn tình thân yêu và chỉ dẫn mang tầm chiến lược cho tương lai đất nước',
    ],
    suggestedImagePrompt: 'Gợi ý ảnh: Bản thảo Di chúc của Chủ tịch Hồ Chí Minh (1965-1969) hoặc ảnh Bác Hồ ngồi đánh máy tại nhà sàn Ba Đình',
  },
];

export const CONTENT_411 = {
  part1: {
    title: 'I. Tính tất yếu của sự ra đời và vai trò hạt nhân của Đảng',
    prerequisite: {
      title: '1. Đảng – Điều kiện tiên quyết của cách mạng',
      work: 'Tác phẩm "Đường cách mệnh" (1927)',
      quote1: 'Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi.',
      coreMetaphor: 'Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.',
      explanation:
        'Hồ Chí Minh đã dùng hình tượng chiếc thuyền vượt sóng gió và người cầm lái để nhấn mạnh: phong trào cách mạng của quần chúng nếu không có một bộ tham mưu sáng suốt, kiên định dẫn đường thì sẽ mất phương hướng, tan rã trước phong ba bão táp.',
    },
    nuclearRole: {
      title: '2. Vai trò hạt nhân xuyên suốt của Đảng',
      points: [
        {
          heading: 'Tính tất yếu khách quan',
          content: 'Sự lãnh đạo của Đảng là tất yếu khách quan, bắt nguồn trực tiếp từ yêu cầu giải phóng dân tộc khỏi ách nô lệ và khát vọng phát triển của non sông đất nước.',
          tag: 'Khách quan',
        },
        {
          heading: 'Quyết định cả hai giai đoạn cách mạng',
          content: 'Đảng giữ vai trò nhân tố quyết định thắng lợi trong cả hai bước ngoặt vĩ đại: Cách mạng dân tộc dân chủ nhân dân (giành độc lập) và Cách mạng xã hội chủ nghĩa (xây dựng đất nước tự do, phồn vinh).',
          tag: 'Quyết định',
        },
        {
          heading: 'Mục tiêu cốt lõi bất biến',
          content: 'Bảo đảm sự phát triển của đất nước theo mục tiêu "Độc lập dân tộc gắn liền với chủ nghĩa xã hội" là nguyên tắc vận hành cốt lõi và ngọn cờ xuyên suốt từ ngày đầu thành lập.',
          tag: 'Cốt lõi',
        },
      ],
    },
  },
  part2: {
    title: 'II. Quy luật ra đời mang tính sáng tạo của Đảng Cộng sản Việt Nam',
    classicTheory: {
      source: 'Quan điểm kinh điển của chủ nghĩa Mác – Lênin',
      formula: 'Chủ nghĩa xã hội khoa học + Phong trào công nhân = Đảng Cộng sản (Kiểu mới vô sản phương Tây)',
      explanation:
        'Ở các nước tư bản phương Tây phát triển, mâu thuẫn cơ bản là đối kháng giai cấp giữa giai cấp vô sản và tư sản. Khi lý luận Mác thâm nhập vào phong trào công nhân, đảng vô sản kiểu mới ra đời.',
    },
    hcmCreativeLaw: {
      source: 'Sự phát triển sáng tạo của Hồ Chí Minh (Quy luật 3 thành tố)',
      formula: 'Chủ nghĩa Mác – Lênin + Phong trào công nhân + Phong trào yêu nước = Đảng Cộng sản Việt Nam',
      explanation:
        'Hồ Chí Minh xuất phát từ thực tiễn một nước thuộc địa nửa phong kiến để bổ sung "Phong trào yêu nước" - một cội nguồn sức mạnh ngàn năm của dân tộc Việt Nam.',
      threeElements: [
        {
          name: 'Chủ nghĩa Mác – Lênin',
          role: 'Cơ sở lý luận & Thế giới quan',
          desc: 'Ánh sáng soi đường chỉ lối, cung cấp phương pháp luận cách mạng khoa học, chỉ rõ con đường cứu nước duy nhất đúng đắn thời đại mới.',
          color: 'from-red-500 to-rose-600',
        },
        {
          name: 'Phong trào công nhân',
          role: 'Cơ sở giai cấp & Lực lượng tiên phong',
          desc: 'Giai cấp tiên tiến nhất, đại diện cho phương thức sản xuất tiến bộ, có tinh thần kỷ luật và triệt để cách mạng.',
          color: 'from-amber-500 to-orange-600',
        },
        {
          name: 'Phong trào yêu nước',
          role: 'Yếu tố sáng tạo độc đáo của Việt Nam',
          desc: 'Dòng chảy lịch sử hàng ngàn năm dựng nước và giữ nước, là chất keo kết dính toàn thể nhân dân đứng dưới ngọn cờ của Đảng.',
          color: 'from-emerald-500 to-teal-600',
          highlight: true,
        },
      ],
    },
    scientificBasis: {
      title: 'Cơ sở khoa học và thực tiễn của việc bổ sung "Phong trào yêu nước"',
      reasons: [
        {
          title: 'Bối cảnh xã hội thuộc địa nửa phong kiến',
          desc: 'Mâu thuẫn hàng đầu và cấp bách nhất không phải là mâu thuẫn nội bộ giai cấp vô sản - tư sản thuần túy, mà là mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân xâm lược và bè lũ tay sai phản động.',
          icon: 'Landmark',
        },
        {
          title: 'Sự gắn kết tự nhiên giữa Công nhân và Yêu nước',
          desc: 'Giai cấp công nhân Việt Nam sinh ra từ lòng một dân tộc có truyền thống nồng nàn yêu nước, chịu chung nỗi đau mất nước nên tinh thần đấu tranh giai cấp luôn hòa quyện sâu sắc với khát vọng độc lập dân tộc.',
          icon: 'Users',
        },
        {
          title: 'Sự chuyển hóa tư tưởng của trí thức, thanh niên yêu nước',
          desc: 'Nhiều chí sĩ yêu nước, tầng lớp thanh niên trí thức cấp tiến (điển hình qua Hội Việt Nam Cách mạng Thanh niên do Nguyễn Ái Quốc sáng lập) đã nhanh chóng tiếp thu chủ nghĩa Mác – Lênin để tìm thấy con đường giải phóng chân chính.',
          icon: 'Compass',
        },
      ],
    },
  },
  part3: {
    title: 'III. Giá trị lý luận và ý nghĩa thực tiễn',
    theoreticalValue: {
      title: '1. Giá trị lý luận',
      badge: 'Cống hiến vĩ đại',
      content:
        'Luận điểm của Hồ Chí Minh đã làm phong phú và phát triển sáng tạo kho tàng lý luận Mác – Lênin về chính đảng vô sản; chứng minh rằng ở các nước thuộc địa, kinh tế nông nghiệp lạc hậu, giai cấp công nhân số lượng chưa đông vẫn hoàn toàn có thể xây dựng một Đảng Cộng sản chân chính mang bản chất giai cấp công nhân nhờ hòa quyện sức mạnh dân tộc và thời đại.',
    },
    practicalSignificance: {
      title: '2. Ý nghĩa thực tiễn',
      badge: 'Bước ngoặt lịch sử',
      points: [
        'Chấm dứt hoàn toàn thời kỳ đen tối khủng hoảng sâu sắc về đường lối cứu nước và tổ chức lãnh đạo kéo dài từ cuối thế kỷ XIX sang đầu năm 1930.',
        'Đảng Cộng sản Việt Nam ngay từ khi chào đời đã được toàn dân tộc thừa nhận là người đại biểu trung thành cho lợi ích của mình và trao cho sứ mệnh lịch sử độc tôn lãnh đạo cách mạng Việt Nam.',
      ],
    },
  },
};

export const PRESENTATION_SLIDES: SlideItem[] = [
  {
    id: 'slide-1',
    sectionCode: 'CHƯƠNG 4',
    sectionTitle: 'TỔNG QUAN HỌC PHẦN',
    title: 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam',
    subtitle: 'Và Nhà nước của nhân dân, do nhân dân, vì nhân dân',
    layout: 'intro',
    notes: 'Lời mở đầu: Giới thiệu chuyên đề Chương 4 môn Tư tưởng Hồ Chí Minh, trọng tâm nghiên cứu về Đảng cầm quyền và Nhà nước pháp quyền xã hội chủ nghĩa.',
  },
  {
    id: 'slide-2',
    sectionCode: '4.1.1',
    sectionTitle: 'Tính tất yếu và vai trò lãnh đạo của Đảng',
    title: 'I. Tính tất yếu & Người cầm lái con thuyền cách mạng',
    subtitle: 'Luận điểm trong tác phẩm "Đường cách mệnh" (1927)',
    layout: 'quote',
    quote: {
      text: 'Cách mạng trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.',
      author: 'Nguyễn Ái Quốc',
      work: 'Đường cách mệnh (1927)',
    },
    imagePlaceholder: {
      label: 'Ảnh minh họa tư liệu',
      prompt: 'Gợi ý ảnh: Bìa sách Đường Kách Mệnh 1927 hoặc tượng đài Bác Hồ với con thuyền cách mạng',
    },
    notes: 'Nhấn mạnh 2 vế: Vận động tổ chức dân chúng bên trong và đoàn kết quốc tế bên ngoài. Ẩn dụ người cầm lái vững tay chèo.',
  },
  {
    id: 'slide-3',
    sectionCode: '4.1.1',
    sectionTitle: 'Tính tất yếu và vai trò lãnh đạo của Đảng',
    title: 'Vai trò hạt nhân xuyên suốt của Đảng',
    subtitle: '3 luận điểm cốt lõi khẳng định vai trò lãnh đạo',
    layout: 'grid',
    bullets: [
      {
        title: 'Tất yếu khách quan',
        desc: 'Bắt nguồn từ đòi hỏi sống còn giải phóng dân tộc và khát vọng vươn lên của dân tộc Việt Nam.',
        icon: 'Sparkles',
      },
      {
        title: 'Quyết định 2 giai đoạn',
        desc: 'Lãnh đạo thắng lợi Cách mạng Dân tộc Dân chủ Nhân dân và Cách mạng Xã hội Chủ nghĩa.',
        icon: 'Target',
      },
      {
        title: 'Mục tiêu độc lập & CNXH',
        desc: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội là ngọn cờ xuyên suốt, bất biến của Đảng.',
        icon: 'Flag',
      },
    ],
    notes: 'Phân tích vai trò hạt nhân là yếu tố then chốt, không lực lượng nào khác có thể thay thế trong lịch sử hiện đại Việt Nam.',
  },
  {
    id: 'slide-4',
    sectionCode: '4.1.1',
    sectionTitle: 'Quy luật ra đời mang tính sáng tạo',
    title: 'II. Quy luật sáng tạo: Mô hình 3 thành tố',
    subtitle: 'So sánh bước đột phá lý luận của Hồ Chí Minh so với quan điểm kinh điển Mác – Lênin',
    layout: 'formula',
    notes: 'Điểm khác biệt cốt tử: Bổ sung Phong trào yêu nước. Giải thích tại sao chỉ có ở Việt Nam và ý nghĩa của việc bổ sung này.',
  },
  {
    id: 'slide-5',
    sectionCode: '4.1.1',
    sectionTitle: 'Quy luật ra đời mang tính sáng tạo',
    title: 'Cơ sở khoa học bổ sung "Phong trào yêu nước"',
    subtitle: '3 yếu tố thực tiễn lịch sử sâu sắc',
    layout: 'grid',
    bullets: [
      {
        title: 'Bối cảnh thuộc địa nửa phong kiến',
        desc: 'Mâu thuẫn hàng đầu là toàn thể dân tộc chống thực dân, không phải mâu thuẫn giai cấp vô sản - tư sản đơn thuần.',
        icon: 'Shield',
      },
      {
        title: 'Sự gắn kết tự nhiên',
        desc: 'Giai cấp công nhân sinh ra từ lòng dân tộc yêu nước, chia sẻ chung một mục tiêu thiêng liêng giành độc lập.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Sự chuyển hóa tư tưởng',
        desc: 'Sĩ phu, trí thức, thanh niên yêu nước (qua Hội VN CMTN) nhanh chóng tiếp nhận chủ nghĩa Mác để cứu nước.',
        icon: 'ArrowRightCircle',
      },
    ],
    notes: 'Lý giải vì sao phong trào yêu nước và phong trào công nhân ở Việt Nam tự nhiên quyện chặt vào nhau.',
  },
  {
    id: 'slide-6',
    sectionCode: '4.1.1',
    sectionTitle: 'Giá trị lý luận và thực tiễn',
    title: 'III. Giá trị lý luận & Ý nghĩa thực tiễn',
    subtitle: 'Đóng góp to lớn cho phong trào cách mạng thế giới và vận mệnh dân tộc',
    layout: 'comparison',
    bullets: [
      {
        title: 'Về mặt Lý luận',
        desc: 'Bổ sung sáng tạo vào kho tàng Mác – Lênin mô hình thành lập Đảng vô sản ở một nước thuộc địa, nông nghiệp lạc hậu.',
        icon: 'BookOpen',
      },
      {
        title: 'Về mặt Thực tiễn',
        desc: 'Chấm dứt hoàn toàn khủng hoảng đường lối cứu nước kéo dài gần một thế kỷ; được toàn dân trao sứ mệnh lãnh đạo độc tôn.',
        icon: 'CheckCircle2',
      },
    ],
    imagePlaceholder: {
      label: 'Ảnh tư liệu lịch sử',
      prompt: 'Gợi ý ảnh: Quảng trường Ba Đình 1945 hoặc Hội nghị thành lập Đảng 3/2/1930',
    },
    notes: 'Tổng kết mục 4.1.1 trước khi chuyển tiếp sang mục 4.1.2 về công tác xây dựng Đảng.',
  },
  {
    id: 'slide-7',
    sectionCode: '4.1.2',
    sectionTitle: 'Đảng phải trong sạch, vững mạnh',
    title: '4.1.2. Đảng phải trong sạch, vững mạnh',
    subtitle: 'Nền tảng giữ vững vai trò cầm quyền của Đảng',
    layout: 'grid',
    bullets: [
      {
        title: 'a) Đảng là đạo đức, là văn minh',
        desc: 'Mục đích vì dân, đường lối phụng sự, đảng viên gương mẫu, 6 nội dung văn minh.',
        icon: 'Award',
      },
      {
        title: 'b) Nguyên tắc hoạt động của Đảng',
        desc: 'Tập trung dân chủ, tự phê bình và phê bình, kỷ luật nghiêm minh, đoàn kết thống nhất.',
        icon: 'Scale',
      },
      {
        title: 'c) Xây dựng đội ngũ cán bộ, đảng viên',
        desc: '7 tiêu chuẩn đạo đức, chống giặc nội xâm, công tác cán bộ "vừa hồng vừa chuyên".',
        icon: 'UserCheck',
      },
    ],
    notes: 'Giới thiệu tổng quan cấu trúc 3 nội dung trọng tâm của mục 4.1.2.',
  },
  {
    id: 'slide-8',
    sectionCode: '4.1.2-a',
    sectionTitle: 'Đảng là đạo đức, là văn minh',
    title: 'a) Đảng là đạo đức, là văn minh',
    subtitle: 'Đạo đức cách mạng - Nền tảng lãnh đạo',
    layout: 'grid',
    bullets: [
      {
        title: 'Mục đích hoạt động',
        desc: 'Giải phóng dân tộc, giải phóng giai cấp và con người; đem lại độc lập, tự do, ấm no cho nhân dân.',
        icon: 'Heart',
      },
      {
        title: 'Đường lối & Hoạt động',
        desc: 'Đảng không có lợi ích riêng, toàn bộ chủ trương gắn liền với quyền lợi của Tổ quốc và nhân dân.',
        icon: 'FileText',
      },
      {
        title: 'Đội ngũ cán bộ, đảng viên',
        desc: 'Thường xuyên tu dưỡng: Cần, Kiệm, Liêm, Chính, Chí công vô tư. Tiên phong, gương mẫu trước quần chúng.',
        icon: 'Star',
      },
    ],
    notes: 'Trình bày nguy cơ nếu Đảng không có đạo đức: Mất vai trò lãnh đạo, thoái hóa biến chất, đánh mất thành quả cách mạng.',
  },
  {
    id: 'slide-9',
    sectionCode: '4.1.2-c',
    sectionTitle: 'Xây dựng đội ngũ cán bộ, đảng viên',
    title: 'c) 7 Tiêu chuẩn & Chống "Giặc nội xâm"',
    subtitle: 'Cán bộ là cái gốc của mọi công việc',
    layout: 'grid',

    bullets: [
      {
        title: '1. Tuyệt đối trung thành',
        desc: 'Đặt lợi ích của Đảng và nhân dân lên trên hết, sẵn sàng hy sinh vì lý tưởng.',
        icon: 'ShieldAlert',
      },
      {
        title: '2. "Giặc nội xâm" nguy hiểm',
        desc: 'Tham ô, lãng phí, quan liêu là bạn đồng minh của giặc ngoại xâm, phá hoại từ bên trong ra.',
        icon: 'AlertTriangle',
      },
      {
        title: '3. Công tác cán bộ sống còn',
        desc: 'Hiểu đúng người, huấn luyện thiết thực, đề bạt chuẩn xác, kết hợp cán bộ trẻ với cán bộ cũ.',
        icon: 'Briefcase',
      },
    ],
    notes: 'Nhấn mạnh câu nói của Bác: "Địch bên ngoài không đáng sợ. Địch bên trong đáng sợ hơn vì nó phá hoại từ trong phá ra".',
  },
  {
    id: 'slide-faq',
    sectionCode: 'FAQ',
    sectionTitle: 'Đảng Kiểu Mới',
    title: 'Đảng Kiểu Mới có gì khác biệt?',
    subtitle: 'Sự sáng tạo của Hồ Chí Minh so với các đảng chính trị khác',
    layout: 'comparison',
    bullets: [
      {
        title: 'Bản chất giai cấp & Dân tộc',
        desc: 'Không chỉ đại biểu cho lợi ích giai cấp công nhân mà còn của nhân dân lao động và của toàn dân tộc (Kết hợp 3 yếu tố: Chủ nghĩa Mác - Lênin, PT Công nhân, PT Yêu nước).',
        icon: 'Users',
      },
      {
        title: 'Mục đích & Mối quan hệ',
        desc: 'Đảng không có lợi ích tư riêng. Vừa là người lãnh đạo, vừa là người "đầy tớ" thật trung thành của nhân dân. Mối quan hệ máu thịt, không đứng trên nhân dân.',
        icon: 'HeartHandshake',
      },
    ],
    notes: 'Đây là điểm sáng tạo cốt lõi của Hồ Chí Minh khi vận dụng chủ nghĩa Mác - Lênin vào thực tiễn một nước thuộc địa.',
  },
  {
    id: 'slide-10',
    sectionCode: 'LỊCH SỬ',
    sectionTitle: 'Tiến trình lịch sử tư tưởng',
    title: 'Bối cảnh lịch sử qua các mốc thời gian',
    subtitle: 'Sự hình thành và phát triển tư tưởng Hồ Chí Minh về Đảng (1927 – 1969)',
    layout: 'timeline',
    notes: 'Tổng kết dòng thời gian các dấu mốc thực tiễn lịch sử tôi rèn nên tư tưởng Hồ Chí Minh.',
  },
];
