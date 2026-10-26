import { IMAGES } from './images.js';

export const STUDIO = {
  name: 'Cherry Studio',
  tagline: 'Tôn vinh vẻ đẹp, ghi dấu khoảnh khắc',
  owner: 'Đỗ Thị Hồng Nhung',
  hotlines: [
    { label: '0967 682 622', tel: '0967682622' },
    { label: '0932 342 622', tel: '0932342622' },
  ],
  branches: [
    { code: 'CS1', city: 'Hà Nội', address: '62 ngõ 19 Trần Quang Diệu, Đống Đa, Hà Nội' },
    { code: 'CS2', city: 'Phú Thọ', address: '236 Tân Thành – Hùng Vương – TX Phú Thọ' },
  ],
  facebook: 'https://www.facebook.com/chupanhbauxinhhanoi',
  map: 'https://maps.app.goo.gl/SVri3sAAURubbUqR7',
  catalogs: [
    'https://drive.google.com/drive/folders/1w9nD1IqXaAbiPosTaI7lGazmM2g7eDwo?usp=drive_link',
    'https://drive.google.com/drive/folders/1FSwKDw3FiF1k-tG89dPj9kmHAHpIr46t?usp=drive_link',
  ],
};

/** Ảnh: size 'l' (≤1400px) hoặc 's' (≤640px). */
export const img = (slug, n, size = 'l') =>
  `/img/${slug}/${String(n).padStart(2, '0')}${size === 's' ? '-s' : ''}.jpg`;

export const conceptName = (slug) => IMAGES[slug]?.name ?? slug;

/** Danh sách ảnh của một concept, theo thứ tự tên file. */
export const photosOf = (slug) => (IMAGES[slug]?.imgs ?? []).map(([n, ratio]) => ({ n, ratio, slug }));

/** Concept hiển thị trong menu, marquee, footer (thứ tự ưu tiên). */
export const CONCEPT_ORDER = [
  'quy-toc',
  'true-love-grows',
  'girl-to-mom',
  'tone-hong',
  'tone-tim',
  'tone-xanh',
  'capture-your-beauty',
  'chup-voi-ngua',
  'cao-boi',
  'me-bau-va-chong',
  'hau-truong',
];

/** Cầu thang ảnh ở hero: ảnh + ô màu + tên. */
export const HERO_STEPS = [
  { slug: 'quy-toc', n: 5, tone: 'ink' },
  { slug: 'tone-hong', n: 4, tone: 'stone' },
  { slug: 'true-love-grows', n: 10, tone: 'cherry' },
  { slug: 'tone-xanh', n: 6, tone: 'mist' },
  { slug: 'chup-voi-ngua', n: 2, tone: 'ink' },
  { slug: 'tone-tim', n: 2, tone: 'stone' },
  { slug: 'girl-to-mom', n: 11, tone: 'mist' },
];

export const FEATURES = [
  {
    title: ['Đa dạng concept.', 'Đúng gu của mẹ.'],
    text: 'Từ quý tộc cổ điển, tone hồng ngọt ngào đến chụp cùng ngựa trắng — hơn mười concept chụp bầu được dựng sẵn, mỗi bộ một câu chuyện riêng để mẹ chọn.',
    slug: 'girl-to-mom',
    shots: [4, 12, 9],
    wide: true,
  },
  {
    title: ['Trang phục có sẵn.'],
    text: 'Váy, áo, khăn voan và phụ kiện được chuẩn bị theo từng concept. Mẹ chỉ cần đến, mọi thứ còn lại Cherry lo.',
    slug: 'tone-hong',
    shots: [8, 2],
  },
  {
    title: ['Ưu tiên mẹ bầu.'],
    text: 'Phục vụ tận tâm, lịch chụp linh hoạt, nghỉ ngơi bất cứ lúc nào. Sự thoải mái của mẹ luôn được đặt lên đầu.',
    slug: 'me-bau-va-chong',
    shots: [2, 5],
  },
  {
    title: ['Tạo dáng tự tin.'],
    text: 'Ekip có kinh nghiệm chụp mẹ bầu, hướng dẫn từng dáng đứng, dáng ngồi để mẹ tự nhiên và tự tin trước ống kính.',
    slug: 'tone-xanh',
    shots: [9, 3],
  },
  {
    title: ['Góc máy tôn dáng.'],
    text: 'Chọn góc, chọn ánh sáng giúp vóc dáng mẹ mềm mại và rạng rỡ nhất trong từng khung hình.',
    slug: 'quy-toc',
    shots: [3, 9],
  },
  {
    title: ['Chụp cùng gia đình.'],
    text: 'Bố cùng vào khung hình, cùng chờ đón thành viên mới — những khoảnh khắc ấm áp được ghi lại trọn vẹn.',
    slug: 'true-love-grows',
    shots: [8, 15],
  },
  {
    title: ['Studio ／ Photobooth.', 'Hà Nội & Phú Thọ.'],
    text: 'Hai cơ sở tại Đống Đa, Hà Nội và TX Phú Thọ, đầy đủ phông nền và đạo cụ cho mọi concept.',
    slug: 'chup-voi-ngua',
    shots: [7, 10],
  },
];

export const STORIES = [
  {
    slug: 'quy-toc',
    n: 8,
    label: 'Concept · Cổ điển',
    quote: 'Mũ voan, ghế gỗ và ánh nắng chiều — vẻ đẹp kiêu sa của người mẹ trong khung hình quý tộc.',
  },
  {
    slug: 'true-love-grows',
    n: 4,
    label: 'Concept · Tinh khôi',
    quote: 'Tông trắng kem nhẹ nhàng, hoa cầm tay và nụ cười chờ đợi — tình yêu lớn dần mỗi ngày.',
  },
  {
    slug: 'tone-tim',
    n: 6,
    label: 'Concept · Tone màu',
    quote: 'Sắc tím lãng mạn cùng hoa tươi, cho bộ ảnh “Beautiful Memories” đầy cảm xúc.',
  },
  {
    slug: 'cao-boi',
    n: 6,
    label: 'Concept · Ngoại cảnh',
    quote: 'Cao bồi miền Tây giữa hoàng hôn và chú ngựa nâu — cá tính, phóng khoáng và rất khác biệt.',
  },
  {
    slug: 'girl-to-mom',
    n: 13,
    label: 'Concept · Chân dung',
    quote: 'Hành trình từ một cô gái trở thành mẹ, kể bằng ánh sáng mềm và những đoá hoa trắng.',
  },
  {
    slug: 'me-bau-va-chong',
    n: 5,
    label: 'Concept · Cặp đôi',
    quote: 'Mẹ bầu chụp cùng chồng — những cái ôm, ánh nhìn và lời hẹn chờ con chào đời.',
  },
];

/** Các dải marquee: [slug, số ảnh] — chỉ dùng ảnh dọc không có chữ. */
export const MARQUEE_ROWS = [
  [['tone-hong', 1], ['quy-toc', 2], ['true-love-grows', 2], ['tone-xanh', 2], ['chup-voi-ngua', 3], ['cao-boi', 3], ['tone-tim', 6], ['girl-to-mom', 5]],
  [['girl-to-mom', 7], ['tone-xanh', 5], ['quy-toc', 4], ['true-love-grows', 6], ['tone-hong', 5], ['chup-voi-ngua', 4], ['cao-boi', 4], ['tone-tim', 9]],
  [['true-love-grows', 9], ['tone-hong', 9], ['cao-boi', 7], ['girl-to-mom', 8], ['quy-toc', 11], ['tone-xanh', 7], ['chup-voi-ngua', 8], ['tone-tim', 2]],
  [['tone-xanh', 11], ['true-love-grows', 14], ['girl-to-mom', 14], ['quy-toc', 12], ['tone-hong', 10], ['cao-boi', 8], ['chup-voi-ngua', 9], ['true-love-grows', 19]],
];

export const SHOWCASE = [
  ['capture-your-beauty', 2],
  ['capture-your-beauty', 3],
  ['capture-your-beauty', 9],
  ['capture-your-beauty', 10],
];

export const CATALOG_GRID = [
  ['tone-hong', 3], ['quy-toc', 7], ['true-love-grows', 1], ['tone-xanh', 8], ['girl-to-mom', 3], ['tone-tim', 2],
  ['chup-voi-ngua', 1], ['cao-boi', 2], ['tone-hong', 12], ['quy-toc', 13], ['true-love-grows', 16], ['tone-xanh', 13],
  ['girl-to-mom', 10], ['tone-tim', 9], ['chup-voi-ngua', 12], ['cao-boi', 5], ['true-love-grows', 22], ['tone-hong', 14],
];
