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
    presenter: 'Ngân & Nhiên',
    badge: 'Trọng tâm',
    description: 'Gồm 3 nội dung: Đảng là đạo đức/văn minh (Ngân), các nguyên tắc hoạt động và xây dựng đội ngũ cán bộ, đảng viên (Nhiên).',
    subsections: [
      { id: '4.1.2-a', title: 'a) Đảng là đạo đức, là văn minh (Ngân)' },
      { id: '4.1.2-b', title: 'b) Những vấn đề nguyên tắc trong hoạt động của Đảng' },
      { id: '4.1.2-c', title: 'c) Xây dựng đội ngũ cán bộ, đảng viên (Nhiên)' },
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

export const CONTENT_412 = {
  partA: {
    title: 'a) Đảng là đạo đức, là văn minh',
    presenter: 'Ngân',
    quote: {
      text: 'Đảng ta là đạo đức, là văn minh.',
      author: 'Chủ tịch Hồ Chí Minh',
      context: 'Lời khẳng định tại Lễ kỷ niệm 30 năm ngày thành lập Đảng (1960)',
      foundation: 'Đạo đức cách mạng là nền tảng để Đảng giữ vững vai trò lãnh đạo và hoàn thành nhiệm vụ cách mạng.',
    },
    manifestations: [
      {
        number: '(1)',
        title: 'Mục đích hoạt động',
        content: 'Lãnh đạo đấu tranh vì độc lập dân tộc, giải phóng xã hội, giải phóng giai cấp và giải phóng con người.',
        details: 'Mục tiêu cuối cùng là đem lại ấm no, tự do, hạnh phúc cho nhân dân và đoàn kết, hữu nghị với các dân tộc.',
      },
      {
        number: '(2)',
        title: 'Đường lối và hoạt động',
        content: 'Cương lĩnh, đường lối, chủ trương và hoạt động của Đảng phải vì lợi ích của dân tộc và nhân dân.',
        details: 'Đảng không có lợi ích riêng, sự tồn tại và phát triển của Đảng gắn với lợi ích của đất nước và nhân dân.',
      },
      {
        number: '(3)',
        title: 'Đội ngũ cán bộ, đảng viên',
        content: 'Phải thường xuyên tu dưỡng, rèn luyện đạo đức cách mạng.',
        details: 'Có các phẩm chất: cần, kiệm, liêm, chính, chí công vô tư. Trung thành với Đảng, với Tổ quốc; hiếu với dân, đoàn kết, yêu thương đồng chí. Phải là những người tiên phong, gương mẫu, không bị tiền tài, khó khăn hay quyền lực khuất phục.',
      },
    ],
    sixContents: [
      'Đại diện cho lương tâm, trí tuệ và danh dự của dân tộc.',
      'Sự ra đời và hoạt động của Đảng phù hợp với quy luật phát triển của dân tộc và nhân loại, đặt lợi ích dân tộc lên hàng đầu.',
      'Luôn trong sạch, vững mạnh, hoàn thành sứ mệnh lãnh đạo đất nước, đồng thời phòng chống các biểu hiện tiêu cực trong Đảng.',
      'Khi cầm quyền, Đảng phải hoạt động trong khuôn khổ Hiến pháp và pháp luật, không đứng trên dân tộc.',
      'Cán bộ, đảng viên phải tiên phong, gương mẫu, từ người giữ chức vụ lãnh đạo đến đảng viên bình thường.',
      'Có quan hệ quốc tế trong sáng, bảo vệ lợi ích, độc lập và chủ quyền của Việt Nam; hướng tới hòa bình, hữu nghị và hợp tác giữa các dân tộc.',
    ],
    whyCleanAndStrong: {
      question: 'Vì sao phải xây dựng Đảng trong sạch, vững mạnh?',
      explanation: 'Nếu Đảng không có đạo đức, không văn minh, Đảng có nguy cơ:',
      risks: [
        'Mất vai trò lãnh đạo.',
        'Trở nên không trong sạch, vững mạnh.',
        'Cán bộ, đảng viên thoái hóa, biến chất.',
        'Những thành quả cách mạng có thể bị mất.',
      ],
    },
  },
  partB: {
    title: 'b) Những vấn đề nguyên tắc trong hoạt động của Đảng',
    intro: 'Theo tư tưởng Hồ Chí Minh, để Đảng luôn giữ được sự trong sạch, vững mạnh và bảo đảm sự thống nhất trong lãnh đạo, hoạt động của Đảng phải tuân thủ một số nguyên tắc cơ bản.',
    principles: [
      {
        number: 1,
        name: 'Nguyên tắc tập trung dân chủ',
        definition: 'Tập trung dân chủ là nguyên tắc cơ bản trong tổ chức và hoạt động của Đảng.',
        points: [
          'Dân chủ nhằm phát huy trí tuệ, trách nhiệm và quyền tham gia của các tổ chức, cán bộ, đảng viên.',
          'Tập trung nhằm bảo đảm sự thống nhất về tư tưởng, tổ chức và hành động.',
          'Các vấn đề quan trọng cần được thảo luận dân chủ, nhưng khi đã có quyết định thì phải thống nhất thực hiện.',
        ],
        conclusion: 'Nguyên tắc này giúp Đảng vừa phát huy dân chủ, vừa bảo đảm sự thống nhất trong hoạt động.',
      },
      {
        number: 2,
        name: 'Nguyên tắc tập thể lãnh đạo, cá nhân phụ trách',
        definition: 'Hồ Chí Minh đề cao sự kết hợp giữa tập thể lãnh đạo và cá nhân phụ trách.',
        points: [
          'Tập thể lãnh đạo giúp huy động trí tuệ của nhiều người và hạn chế quyết định chủ quan.',
          'Cá nhân phụ trách giúp xác định rõ người chịu trách nhiệm và bảo đảm công việc được thực hiện cụ thể.',
          'Hai yếu tố này phải đi đôi với nhau, tránh tình trạng dựa dẫm vào tập thể hoặc độc đoán, cá nhân quyết định mọi việc.',
        ],
        conclusion: 'Mục đích là bảo đảm công việc có sự bàn bạc tập thể nhưng vẫn có người chịu trách nhiệm rõ ràng.',
      },
      {
        number: 3,
        name: 'Nguyên tắc tự phê bình và phê bình',
        definition: 'Hồ Chí Minh coi tự phê bình và phê bình là nguyên tắc quan trọng để xây dựng và chỉnh đốn Đảng.',
        points: [
          'Tự phê bình là mỗi tổ chức, cán bộ và đảng viên phải chủ động nhìn nhận khuyết điểm của mình.',
          'Phê bình là góp ý, chỉ ra những hạn chế, sai sót của đồng chí và tổ chức.',
          'Mục đích của phê bình không phải để công kích cá nhân mà nhằm sửa chữa khuyết điểm, giúp nhau tiến bộ và củng cố đoàn kết.',
          'Đảng phải có tinh thần thẳng thắn nhìn nhận khuyết điểm và tự sửa chữa, thay vì che giấu khuyết điểm.',
        ],
        conclusion: 'Đảng phải có tinh thần thẳng thắn tự nhìn nhận và sửa chữa để không ngừng tiến bộ và củng cố đoàn kết.',
      },
      {
        number: 4,
        name: 'Nguyên tắc kỷ luật nghiêm minh và tự giác',
        definition: 'Đảng phải có kỷ luật nghiêm minh và tự giác.',
        points: [
          'Mọi tổ chức và đảng viên phải chấp hành các nguyên tắc, quy định và quyết định chung của Đảng.',
          'Kỷ luật phải được thực hiện nghiêm túc, thống nhất.',
          'Đồng thời, mỗi cán bộ, đảng viên phải có ý thức tự giác chấp hành kỷ luật, chứ không chỉ thực hiện khi bị kiểm tra hoặc nhắc nhở.',
        ],
        conclusion: 'Kỷ luật giúp bảo đảm sự thống nhất trong tổ chức và hành động của Đảng.',
      },
      {
        number: 5,
        name: 'Nguyên tắc đoàn kết, thống nhất trong Đảng',
        definition: 'Hồ Chí Minh đặc biệt coi trọng đoàn kết, thống nhất trong Đảng.',
        points: [
          'Đoàn kết phải được xây dựng trên cơ sở mục tiêu, lý tưởng và nguyên tắc chung.',
          'Mỗi cán bộ, đảng viên cần đặt lợi ích chung lên trên lợi ích cá nhân.',
          'Phải giữ gìn sự thống nhất về tư tưởng và hành động.',
          'Đồng thời, cần tránh những biểu hiện mất đoàn kết, cục bộ, bè phái.',
        ],
        conclusion: 'Đoàn kết, thống nhất là điều kiện quan trọng để Đảng có đủ sức mạnh thực hiện vai trò lãnh đạo.',
      },
    ],
  },
  partC: {
    title: 'c) Xây dựng đội ngũ cán bộ, đảng viên',
    presenter: 'Nhiên',
    standards: [
      {
        number: 1,
        title: 'Phải Tuyệt Đối Trung Thành Với Đảng',
        desc: 'Lợi ích của Đảng luôn phải đặt lên trước lợi ích cá nhân — kể cả khi phải hy sinh tính mạng.',
        quote: 'Vô luận lúc nào, vô luận việc gì, đảng viên và cán bộ phải đặt lợi ích của Đảng ra trước, lợi ích của cá nhân lại sau… Khi cần đến tính mệnh của mình cũng phải vui lòng hy sinh cho Đảng.',
      },
      {
        number: 2,
        title: 'Phải nghiêm Chỉnh Thực Hiện Cương Lĩnh, Đường Lối Của Đảng',
        desc: 'Mọi chủ trương, nghị quyết, nguyên tắc xây dựng Đảng phải được chấp hành đầy đủ, không ngoại lệ.',
      },
      {
        number: 3,
        title: 'Phải luôn luôn Tu Dưỡng Đạo Đức Cách Mạng',
        desc: 'Rèn luyện đạo đức là việc làm suốt đời, không phải thành tích một lần.',
        quote: 'Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư.',
      },
      {
        number: 4,
        title: 'Phải luôn luôn Học Tập Nâng Cao Trình Độ',
        desc: 'Cán bộ phải liên tục nâng cao hiểu biết về mọi mặt để không bị tụt hậu.',
        quote: 'Nếu không chịu khó học thì không tiến bộ được. Không tiến bộ là thoái bộ.',
      },
      {
        number: 5,
        title: 'Phải Có Mối Liên Hệ Mật Thiết Với Nhân Dân',
        desc: 'Cán bộ phải là "đầy tớ thật trung thành" của nhân dân — chịu khổ trước, hưởng sau.',
        quote: 'Đảng viên đi trước, làng nước theo sau.',
      },
      {
        number: 6,
        title: 'Phải Luôn Chịu Trách Nhiệm, Năng Động, Sáng Tạo',
        desc: 'Không thụ động, không lười biếng — phải dám chịu trách nhiệm trước Đảng và nhân dân.',
        quote: 'Thắng không kiêu, bại không nản.',
      },
      {
        number: 7,
        title: 'Phải Phòng Và Chống Các Tiêu Cực',
        desc: 'Tham ô, lãng phí, quan liêu được Hồ Chí Minh coi là "giặc nội xâm" — nguy hiểm hơn cả kẻ thù bên ngoài.',
        quote: 'Mỗi kẻ địch bên trong là một bạn đồng minh của kẻ địch bên ngoài. Địch bên ngoài không đáng sợ. Địch bên trong đáng sợ hơn, vì nó phá hoại từ trong phá ra.',
      },
    ],
    degradationManifestations: {
      title: 'Những Biểu Hiện Suy Thoái Cần Tránh',
      desc: 'Hồ Chí Minh chỉ đích danh những cán bộ "đạo đức, phẩm chất còn thấp kém":',
      items: [
        'Đặt lợi ích cá nhân lên trên hết',
        'Tham ô, hủ hoá, lãng phí, xa hoa',
        'Độc đoán, chuyên quyền, quan liêu',
        'Mất đoàn kết, thiếu kỷ luật, kém trách nhiệm',
      ],
      corePrincipleQuote: 'Đảng không che giấu những khuyết điểm của mình, không sợ phê bình. Đảng phải nhận khuyết điểm của mình mà tự sửa chữa.',
    },
    cadreWork: {
      title: 'Công Tác Cán Bộ (Yếu Tố Quyết Định Thành Bại)',
      famousQuote: 'Cán bộ là cái gốc của mọi công việc. Muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém.',
      requirements: [
        {
          title: 'Hiểu và đánh giá đúng cán bộ',
          desc: 'Tránh dùng người sai chỗ; đánh giá công tâm, khách quan.',
        },
        {
          title: 'Huấn luyện thiết thực, có hiệu quả',
          desc: 'Không huấn luyện hình thức, gắn chặt lý luận với thực hành.',
        },
        {
          title: 'Đề bạt đúng người',
          desc: 'Dựa trên năng lực và phẩm chất, tuyệt đối không dựa trên quan hệ.',
        },
        {
          title: 'Kết hợp cán bộ trẻ với cán bộ cũ',
          desc: 'Truyền kinh nghiệm quý báu, tránh đứt gãy thế hệ.',
        },
        {
          title: 'Chống bệnh địa phương cục bộ',
          desc: 'Không ưu tiên người thân quen, bè phái, dòng tộc.',
        },
        {
          title: 'Thường xuyên kiểm tra và hỗ trợ',
          desc: 'Không bỏ mặc cán bộ sau khi bổ nhiệm, kịp thời uốn nắn.',
        },
      ],
    },
    deepDiveQuestions: [
      {
        question: '1/ Tại sao cán bộ lại quan trọng đến vậy?',
        answer:
          'Cán bộ chính là "cầu nối" giữa Đảng và nhân dân. Họ là người trực tiếp đưa chính sách vào thực tiễn và phản ánh tình hình thực tế ngược lại cho lãnh đạo. Nếu không có đội ngũ cán bộ tốt, dù đường lối có đúng đắn đến đâu cũng không thể thực hiện được. Hồ Chí Minh ví von rõ ràng: "Muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém" — tức là cán bộ không chỉ là người thừa hành, mà là nhân tố quyết định kết quả của toàn bộ sự nghiệp.',
      },
      {
        question: '2/ Hồ Chí Minh mong muốn xây dựng điều gì qua những yêu cầu cho đảng viên và cán bộ?',
        answer:
          'Người hướng đến một Đảng vừa trong sạch vừa vững mạnh — không chỉ mạnh về tổ chức và chính sách, mà còn mạnh về đạo đức và uy tín trước nhân dân. Mục tiêu sâu xa hơn là xây dựng một lớp cán bộ vừa "hồng" vừa "chuyên": có lý tưởng cách mạng (hồng) và có năng lực thực tiễn (chuyên). Trong Di Chúc, Người gửi gắm: "Đảng cần phải chăm lo giáo dục đạo đức cách mạng cho họ, đào tạo họ thành những người thừa kế xây dựng chủ nghĩa xã hội vừa \'hồng\' vừa \'chuyên\'." — đây chính là tầm nhìn cho thế hệ tương lai.',
      },
      {
        question: '3/ Bối cảnh lịch sử nào đã dẫn đến những tư tưởng này?',
        answer:
          'Những yêu cầu này không xuất hiện trong chân không — chúng là phản ứng trực tiếp trước thực tế lịch sử khắc nghiệt mà Việt Nam đang trải qua:',
        historicalStages: [
          {
            period: 'Giai đoạn 1930–1945',
            context:
              'Đảng Cộng sản Việt Nam còn non trẻ, hoạt động bí mật dưới sự đàn áp của thực dân Pháp. Cần cán bộ trung thành tuyệt đối vì một người phản bội có thể xóa sổ cả tổ chức.',
          },
          {
            period: 'Giai đoạn 1945–1954 (Kháng chiến chống Pháp)',
            context:
              'Nhà nước mới thành lập, thiếu nhân lực có năng lực lẫn phẩm chất. Tham nhũng và quan liêu bắt đầu xuất hiện ngay trong hàng ngũ — đây là lý do Người viết tác phẩm "Sửa đổi lối làm việc" (1947) nêu rõ 5 tiêu chuẩn: Nhân, Nghĩa, Dũng, Trí, Liêm.',
          },
          {
            period: 'Giai đoạn 1954–1969 (Xây dựng miền Bắc, kháng chiến chống Mỹ)',
            context:
              'Đất nước bị chia cắt, miền Bắc vừa xây dựng chủ nghĩa xã hội vừa chi viện cho miền Nam. Áp lực kép này đòi hỏi bộ máy cán bộ không được có điểm yếu nào — sự suy thoái của một cá nhân có thể gây hậu quả dây chuyền cho cả hệ thống.',
          },
          {
            period: 'Bài báo cuối đời (1969)',
            context:
              'Chỉ vài tháng trước khi mất, Người vẫn viết "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân" — cho thấy đây là vấn đề Người lo lắng đến tận cuối đời, không phải lý thuyết suông mà là cảnh báo thực tiễn.',
          },
        ],
      },
    ],
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
    subtitle: 'Nền tảng giữ vững vai trò lãnh đạo và hoàn thành nhiệm vụ cách mạng',
    presenter: 'Ngân & Nhiên',
    layout: 'grid',
    bullets: [
      {
        title: 'a) Đảng là đạo đức, là văn minh',
        desc: 'Mục đích đấu tranh vì dân; đường lối không vụ lợi riêng; cán bộ cần kiệm liêm chính; 6 nội dung văn minh.',
        icon: 'Award',
      },
      {
        title: 'b) 5 Nguyên tắc trong hoạt động của Đảng',
        desc: 'Tập trung dân chủ; Tập thể lãnh đạo cá nhân phụ trách; Tự phê bình và phê bình; Kỷ luật tự giác; Đoàn kết thống nhất.',
        icon: 'Scale',
      },
      {
        title: 'c) Xây dựng đội ngũ cán bộ, đảng viên',
        desc: '7 tiêu chuẩn rèn luyện; phòng chống "giặc nội xâm"; 6 yêu cầu công tác cán bộ; bồi dưỡng thế hệ "vừa hồng vừa chuyên".',
        icon: 'UserCheck',
      },
    ],
    notes: 'Giới thiệu tổng quan cấu trúc 3 nội dung trọng tâm của mục 4.1.2 do bạn Ngân và Nhiên phụ trách.',
  },
  {
    id: 'slide-8',
    sectionCode: '4.1.2-a',
    sectionTitle: 'Đảng là đạo đức, là văn minh',
    title: 'a) Đảng là đạo đức, là văn minh',
    subtitle: '3 Biểu hiện nền tảng của một Đảng có đạo đức cách mạng',
    presenter: 'Ngân',
    layout: 'grid',
    bullets: [
      {
        title: '(1) Mục đích hoạt động',
        desc: 'Đấu tranh vì độc lập dân tộc, giải phóng giai cấp và con người; đem lại ấm no, tự do, hạnh phúc cho nhân dân và hòa bình hữu nghị quốc tế.',
        icon: 'Heart',
      },
      {
        title: '(2) Đường lối và hoạt động',
        desc: 'Cương lĩnh, chủ trương phụng sự Tổ quốc. Đảng không có lợi ích riêng, toàn bộ sứ mệnh gắn chặt với lợi ích của nhân dân.',
        icon: 'FileText',
      },
      {
        title: '(3) Đội ngũ cán bộ, đảng viên',
        desc: 'Thường xuyên tu dưỡng: Cần, Kiệm, Liêm, Chính, Chí công vô tư. Trung với Đảng, hiếu với dân; tiên phong gương mẫu trước mọi cám dỗ.',
        icon: 'Star',
      },
    ],
    notes: 'Nhấn mạnh: Đạo đức cách mạng là nền tảng để Đảng giữ vững vai trò lãnh đạo và niềm tin của quần chúng.',
  },
  {
    id: 'slide-9',
    sectionCode: '4.1.2-a',
    sectionTitle: 'Đảng là đạo đức, là văn minh',
    title: '6 Nội dung Đảng văn minh & Nguy cơ suy thoái',
    subtitle: 'Xây dựng tổ chức liêm chính, hoạt động trong khuôn khổ Hiến pháp và pháp luật',
    presenter: 'Ngân',
    layout: 'comparison',
    bullets: [
      {
        title: '6 Nội dung xây dựng Đảng văn minh',
        desc: '1. Đại diện lương tâm, trí tuệ dân tộc. 2. Hoạt động phù hợp quy luật phát triển. 3. Luôn trong sạch, chống tiêu cực. 4. Hoạt động trong khuôn khổ Hiến pháp & pháp luật. 5. Cán bộ gương mẫu từ trên xuống dưới. 6. Quan hệ quốc tế trong sáng, hòa bình.',
        icon: 'Shield',
      },
      {
        title: 'Nguy cơ nghiêm trọng nếu thiếu đạo đức',
        desc: 'Nếu không có đạo đức, văn minh: Mất vai trò lãnh đạo độc tôn → Trở nên không trong sạch, suy yếu tổ chức → Cán bộ đảng viên thoái hóa, biến chất → Toàn bộ thành quả cách mạng xương máu có thể bị đánh mất.',
        icon: 'AlertTriangle',
      },
    ],
    notes: 'Cảnh báo của Hồ Chí Minh mang tính tiên tri và có ý nghĩa thời đại sâu sắc đối với công tác chỉnh đốn Đảng ngày nay.',
  },
  {
    id: 'slide-10',
    sectionCode: '4.1.2-b',
    sectionTitle: 'Nguyên tắc hoạt động của Đảng',
    title: 'b) 5 Nguyên tắc tổ chức & hoạt động của Đảng',
    subtitle: 'Bảo đảm Đảng luôn trong sạch, vững mạnh và thống nhất ý chí lãnh đạo',
    layout: 'grid',
    bullets: [
      {
        title: '1. Tập trung dân chủ',
        desc: 'Nguyên tắc cơ bản nhất: Dân chủ phát huy trí tuệ; Tập trung bảo đảm thống nhất hành động. Thảo luận dân chủ, quyết định thống nhất thực hiện.',
        icon: 'Users',
      },
      {
        title: '2. Tập thể lãnh đạo, cá nhân phụ trách',
        desc: 'Tập thể huy động trí tuệ tập thể, tránh chủ quan độc đoán; Cá nhân chịu trách nhiệm rõ ràng, khắc phục tình trạng ỷ lại dựa dẫm.',
        icon: 'Shield',
      },
      {
        title: '3. Tự phê bình và phê bình',
        desc: 'Quy luật phát triển và vũ khí sắc bén. Chủ động nhận khuyết điểm, góp ý chân thành giúp nhau tiến bộ, không che giấu lỗi lầm.',
        icon: 'Eye',
      },
      {
        title: '4. Kỷ luật nghiêm minh & tự giác',
        desc: 'Chấp hành nghiêm túc mọi quy chế của Đảng. Kỷ luật thống nhất kết hợp với ý thức tự giác tuân thủ của mỗi cán bộ, đảng viên.',
        icon: 'Scale',
      },
      {
        title: '5. Đoàn kết, thống nhất trong Đảng',
        desc: 'Đoàn kết trên nền tảng mục tiêu lý tưởng chung; đặt việc công lên trên việc tư; giữ gìn đoàn kết như giữ gìn con ngươi của mắt mình.',
        icon: 'HeartHandshake',
      },
    ],
    notes: '5 nguyên tắc này gắn kết hữu cơ với nhau, tạo thành bộ khung kỷ luật và sức mạnh chiến đấu của Đảng Cộng sản.',
  },
  {
    id: 'slide-11',
    sectionCode: '4.1.2-c',
    sectionTitle: 'Xây dựng đội ngũ cán bộ, đảng viên',
    title: 'c) 7 Tiêu chuẩn rèn luyện của cán bộ, đảng viên',
    subtitle: 'Chuẩn mực đạo đức cách mạng suốt đời của người chiến sĩ cộng sản',
    presenter: 'Nhiên',
    layout: 'grid',
    bullets: [
      {
        title: '1. Tuyệt đối trung thành',
        desc: 'Đặt lợi ích Đảng lên trước; khi cần đến tính mệnh cũng vui lòng hy sinh cho sự nghiệp cách mạng.',
        icon: 'ShieldAlert',
      },
      {
        title: '2. Nghiêm chỉnh thực hiện',
        desc: 'Chấp hành đầy đủ Cương lĩnh, đường lối, nghị quyết và nguyên tắc của Đảng không ngoại lệ.',
        icon: 'FileText',
      },
      {
        title: '3. Tu dưỡng đạo đức suốt đời',
        desc: 'Thật sự thấm nhuần cần kiệm liêm chính, chí công vô tư — việc rèn luyện là thường xuyên suốt đời.',
        icon: 'Star',
      },
      {
        title: '4. Học tập nâng cao',
        desc: 'Liên tục học tập lý luận và chuyên môn: "Nếu không chịu khó học thì không tiến bộ. Không tiến bộ là thoái bộ".',
        icon: 'BookOpen',
      },
      {
        title: '5. Mật thiết với nhân dân',
        desc: 'Là người "đầy tớ thật trung thành" của nhân dân; chịu khổ trước, hưởng sau: "Đảng viên đi trước, làng nước theo sau".',
        icon: 'Users',
      },
      {
        title: '6. Năng động, sáng tạo',
        desc: 'Không thụ động, không lười biếng; dám nghĩ dám làm dám chịu trách nhiệm: "Thắng không kiêu, bại không nản".',
        icon: 'Target',
      },
      {
        title: '7. Phòng chống tiêu cực',
        desc: 'Kiên quyết chống tham ô, lãng phí, quan liêu — coi đó là "giặc nội xâm" phá hoại từ bên trong nguy hiểm nhất.',
        icon: 'AlertTriangle',
      },
    ],
    notes: '7 tiêu chuẩn toàn diện từ tư tưởng, phẩm chất chính trị, quan hệ quần chúng đến năng lực hành động.',
  },
  {
    id: 'slide-12',
    sectionCode: '4.1.2-c',
    sectionTitle: 'Chống giặc nội xâm & Công tác cán bộ',
    title: 'Chống "Giặc nội xâm" & 6 Yêu cầu trong công tác cán bộ',
    subtitle: '"Cán bộ là cái gốc của mọi công việc. Muôn việc thành công hoặc thất bại đều do cán bộ tốt hoặc kém"',
    presenter: 'Nhiên',
    layout: 'comparison',
    bullets: [
      {
        title: 'Nhận diện Suy thoái & "Giặc nội xâm"',
        desc: 'Bác cảnh báo: Địch bên ngoài không đáng sợ, địch bên trong đáng sợ hơn vì nó phá hoại từ trong ra. Cần tránh 4 biểu hiện: (1) Đặt lợi ích cá nhân lên trên hết; (2) Tham ô, hủ hoá, lãng phí; (3) Độc đoán, chuyên quyền, quan liêu; (4) Mất đoàn kết, thiếu kỷ luật. Đảng không giấu khuyết điểm, thẳng thắn nhận và tự sửa chữa.',
        icon: 'AlertOctagon',
      },
      {
        title: '6 Yêu cầu trong Công tác cán bộ',
        desc: '1. Hiểu và đánh giá đúng cán bộ (tránh dùng sai chỗ). 2. Huấn luyện thiết thực, có hiệu quả. 3. Đề bạt đúng người dựa trên phẩm chất và năng lực. 4. Kết hợp cán bộ trẻ với cán bộ cũ. 5. Chống bệnh địa phương cục bộ, bè phái dòng tộc. 6. Thường xuyên kiểm tra và hỗ trợ uốn nắn.',
        icon: 'Briefcase',
      },
    ],
    notes: 'Công tác cán bộ được coi là khâu then chốt của then chốt, quyết định sự thành bại của đường lối cách mạng.',
  },
  {
    id: 'slide-13',
    sectionCode: '4.1.2-c',
    sectionTitle: 'Đào sâu lý luận cán bộ',
    title: 'Tại sao cán bộ là "cái gốc" & Lớp người "vừa hồng vừa chuyên"',
    subtitle: 'Giải đáp 2 câu hỏi cốt lõi về vị trí cầu nối của cán bộ và mục tiêu bồi dưỡng thế hệ mai sau',
    presenter: 'Nhiên',
    layout: 'comparison',
    bullets: [
      {
        title: '1/ Tại sao cán bộ lại quan trọng đến vậy?',
        desc: 'Cán bộ là "cầu nối" trực tiếp giữa Đảng và nhân dân: truyền đạt chủ trương vào thực tiễn và phản ánh ý nguyện dân sinh lên cấp lãnh đạo. Dù đường lối có đúng đắn đến đâu, nếu thiếu đội ngũ cán bộ tốt thì không thể thành hiện thực. Cán bộ không chỉ là người thừa hành mà là nhân tố quyết định kết quả toàn cục.',
        icon: 'HeartHandshake',
      },
      {
        title: '2/ Tầm nhìn đào tạo thế hệ "Vừa hồng vừa chuyên"',
        desc: 'Hồ Chí Minh mong muốn xây dựng một Đảng vừa trong sạch vừa vững mạnh, uy tín trước nhân dân. Mục tiêu sâu xa là đào tạo lớp người kế tục vừa "hồng" (lý tưởng cách mạng, đạo đức trong sáng) vừa "chuyên" (trình độ chuyên môn giỏi, năng lực thực tiễn sâu sắc), như lời căn dặn thiêng liêng trong Di chúc.',
        icon: 'Sparkles',
      },
    ],
    notes: 'Làm rõ sự kết hợp hữu cơ giữa Đức và Tài, giữa Hồng và Chuyên trong quan điểm dùng người của Bác.',
  },
  {
    id: 'slide-14',
    sectionCode: '4.1.2-c',
    sectionTitle: 'Bối cảnh lịch sử thực tiễn',
    title: '3/ Bối cảnh lịch sử tôi rèn tư tưởng Hồ Chí Minh về cán bộ',
    subtitle: 'Tư tưởng cán bộ không xuất hiện trong chân không mà được tôi luyện qua 4 giai đoạn lịch sử',
    presenter: 'Nhiên',
    layout: 'grid',
    bullets: [
      {
        title: '1930 – 1945: Hoạt động bí mật',
        desc: 'Đảng non trẻ trước khủng bố khốc liệt của Pháp. Cần cán bộ trung thành tuyệt đối vì một người phản bội có thể xóa sổ cả tổ chức.',
        icon: 'Shield',
      },
      {
        title: '1945 – 1954: Kháng chiến chống Pháp',
        desc: 'Nhà nước non trẻ thiếu nhân lực; tham nhũng quan liêu xuất hiện. Bác viết "Sửa đổi lối làm việc" (1947) nêu chuẩn mực: Nhân, Nghĩa, Dũng, Trí, Liêm.',
        icon: 'FileText',
      },
      {
        title: '1954 – 1969: Nhiệm vụ kép 2 miền',
        desc: 'Miền Bắc xây dựng CNXH, chi viện miền Nam đánh Mỹ. Áp lực kép đòi hỏi bộ máy liêm chính tuyệt đối, tránh hậu quả dây chuyền.',
        icon: 'Target',
      },
      {
        title: 'Năm 1969: Di huấn thiêng liêng',
        desc: 'Viết bài "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân" và Di chúc thiêng liêng — trăn trở đến cuối đời về đạo đức người cầm quyền.',
        icon: 'Award',
      },
    ],
    notes: 'Tổng kết hoàn chỉnh toàn bộ bối cảnh lịch sử thực tiễn hình thành nên quan điểm cán bộ của Bác.',
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
    id: 'slide-15',
    sectionCode: 'LỊCH SỬ',
    sectionTitle: 'Tiến trình lịch sử tư tưởng',
    title: 'Bối cảnh lịch sử qua các mốc thời gian',
    subtitle: 'Sự hình thành và phát triển tư tưởng Hồ Chí Minh về Đảng (1927 – 1969)',
    layout: 'timeline',
    notes: 'Tổng kết dòng thời gian các dấu mốc thực tiễn lịch sử tôi rèn nên tư tưởng Hồ Chí Minh.',
  },
];
