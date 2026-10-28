# PROMPT — Website Cherry Studio (clone thiết kế studio.design)

## 1. Mục tiêu

Xây dựng website giới thiệu + catalog + liên hệ cho **Cherry Studio** (studio chụp ảnh mẹ bầu) bằng cách
**clone lại bố cục, nhịp điệu, hiệu ứng và tương tác của https://studio.design/**.
Chỉ được thay đổi **nội dung, màu sắc, hình ảnh**. Giữ nguyên cấu trúc section, tỉ lệ, khoảng cách,
kiểu chữ (cỡ / độ đậm / letter-spacing), kiểu nút, sticky header, các chuyển động khi cuộn.

## 2. Ràng buộc bắt buộc

- **KHÔNG dùng font Be Vietnam Pro.** Dùng đúng họ font của bản gốc: `Inter Tight` (tiêu đề) + `Inter`
  (nội dung) — cả hai có subset tiếng Việt trên Google Fonts. Font serif trang trí: `Cormorant Garamond`.
- **Dùng React**: Vite + React 18 (JavaScript, function components + hooks), CSS thuần đặt cạnh từng component.
  Không dùng UI kit / thư viện animation — mọi hiệu ứng viết bằng CSS + hooks.
- **KHÔNG lưu gì ở ổ C**: mã nguồn, ảnh, `node_modules`, npm cache, file tạm đều nằm trên ổ D.
  File `web/.npmrc` đặt `cache=D:/TaiLieu/Code/Intern/Cherry-studio/.npm-cache`; khi chạy lệnh đặt
  `TEMP`/`TMP` về `D:/TaiLieu/Code/Intern/Cherry-studio/.tmp`. Không cài package toàn cục.
- Ngôn ngữ: **Tiếng Việt**.
- Không bịa đánh giá khách hàng, giá, số liệu. Chỉ dùng thông tin trong `docs.md`.
- Ảnh nằm ở `web/public/img/<concept>/` (bản nén ≤1400px + thumbnail ≤640px). Các thư mục ảnh gốc 2048px đã được xoá khỏi dự án.

## 3. Thông tin thương hiệu (từ docs.md)

| Mục | Nội dung |
|---|---|
| Tên | Cherry Studio — Studio / Photobooth |
| Slogan | Tôn vinh vẻ đẹp, ghi dấu khoảnh khắc |
| Chủ studio | Đỗ Thị Hồng Nhung |
| CS1 | 62 ngõ 19 Trần Quang Diệu, Đống Đa, Hà Nội |
| CS2 | 236 Tân Thành – Hùng Vương – TX Phú Thọ |
| Hotline | 0967 682 622 – 0932 342 622 |
| Facebook | https://www.facebook.com/chupanhbauxinhhanoi |
| Bản đồ | https://maps.app.goo.gl/SVri3sAAURubbUqR7 |
| Catalog B2B | https://drive.google.com/drive/folders/1w9nD1IqXaAbiPosTaI7lGazmM2g7eDwo · https://drive.google.com/drive/folders/1FSwKDw3FiF1k-tG89dPj9kmHAHpIr46t |
| Khách hàng | Phụ nữ mang thai — chụp mẹ bầu |
| Điểm mạnh | Đa dạng concept, có sẵn trang phục & phụ kiện · Phục vụ tận tâm, ưu tiên mẹ bầu · Kinh nghiệm tạo dáng, chọn góc giúp mẹ tự tin |
| Tinh thần | Trẻ trung, chuyên nghiệp |

## 4. Màu sắc (thay bảng màu gốc)

Tông **trắng – xám – đen** theo brief; một màu nhấn cherry dùng rất tiết kiệm (dấu “／”, chấm REC, hover).

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--bg` | `#EFEDEB` | nền trang (gốc `#EEEEEE`, chuyển sang xám ấm) |
| `--paper` | `#FFFFFF` | card |
| `--ink` | `#1C1B1A` | chữ chính, nút đen |
| `--ink-2` | `#55524F` | chữ phụ |
| `--line` | `#DAD6D2` | viền |
| `--night` | `#121111` | section tối |
| `--footer` | `#242322` | footer |
| `--cherry` | `#9E1B32` | màu nhấn duy nhất |

## 5. Cấu trúc trang (map 1–1 với studio.design)

| # | Section gốc | Cherry Studio |
|---|---|---|
| 0 | Header sticky: logo “／Studio.Design”, menu Features ▾ / Pricing / Templates ↗ / Updates / Discord / Learn, nút đen “Login ／ Sign Up”; khi cuộn có nền mờ | Logo chữ **CHERRY**STUDIO, menu **Concept ▾ / Giới thiệu / Catalog ↗ / Hậu trường / Facebook ↗ / Liên hệ**, nút **“Đặt lịch ／ Tư vấn”**. Mobile: nút hamburger mở menu toàn màn hình |
| 1 | Hero 100vh: “Say Hello To Your New Site.” góc trên trái; cầu thang ảnh chạy chéo liên tục; đoạn mô tả + nút “Start For Free ↗” góc dưới phải | **“Tôn Vinh Vẻ Đẹp, Ghi Dấu Khoảnh Khắc.”**; cầu thang = cặp (ảnh concept + ô màu có sọc chéo “／” + tên concept); mô tả studio + nút **“Đặt lịch chụp ↗”** |
| 2 | Section tối sticky: khung editor phóng to dần theo cuộn, chữ lớn “Splash your Colors” | Khung **kính ngắm máy ảnh** (thanh REC, ISO, khẩu độ) phóng to dần; chữ serif lớn **“Capture your beauty”**; dải ảnh concept bên trong |
| 3 | “Start your site.” + lưới card tính năng (1 card ngang + 6 card 2 cột), mỗi card có ảnh và nút “Learn more ↗” | **“Bắt đầu hành trình của mẹ.”** + 7 card điểm mạnh; nút **“Xem bộ ảnh ↗”** mở lightbox |
| 4 | Các dải template chạy ngang (marquee) + huy hiệu “Created in ／S” | 4 dải ảnh concept chạy ngược chiều nhau + huy hiệu **“Chụp tại ／Cherry”** |
| 5 | “#BehindthePixels” — 2 cột so le, ảnh đen trắng, nhãn nghề, tên, trích dẫn “／…”, “Read Story ↗” | **“#KhoảnhKhắcCherry”** — 6 concept, ảnh đen trắng (hover hiện màu), nhãn, tên concept, mô tả “／…”, **“Xem bộ ảnh ↗”** |
| 6 | Banner bo góc “Spark your start” trên nền lưới ảnh xoay chéo, nút trắng “Find your template ↗” | **“Catalog cho đối tác”** (B2B) trên lưới ảnh xoay chéo, nút **“Xem catalog ↗”** + **“Bộ ảnh mẫu ↗”** (2 link Drive) |
| 7 | “Create your site in Studio” + nút; thanh thông báo trắng | **Bỏ** — thay bằng section **form liên hệ** cuối trang: cột trái tiêu đề + hotline / 2 cơ sở / Facebook, cột phải card form (họ tên, SĐT, concept, ngày chụp, cơ sở, lời nhắn → soạn SMS tới hotline) |
| 8 | Footer tối: logo, slogan, mạng xã hội, cột Features / Resources / Pricing…, © | Logo, slogan, icon Facebook / Bản đồ / Điện thoại, cột **Concept / Cherry Studio / Liên hệ**, © Cherry Studio |
| 9 | Huy hiệu cố định “Created in ／S” góc dưới trái; modal Contact | Huy hiệu cố định **hotline**; modal **Liên hệ** (thông tin 2 cơ sở + form soạn tin nhắn gửi SMS) |

## 6. Tương tác bắt buộc (phải chạy thật, không phải hình tĩnh)

1. Dropdown **Concept ▾** (hover trên desktop, click trên mobile/bàn phím).
2. Header đổi sang nền mờ khi cuộn; ẩn/hiện mượt.
3. Menu mobile (hamburger) mở / đóng, khoá cuộn trang khi mở.
4. Cầu thang ảnh hero chạy chéo vô hạn (CSS animation, tạm dừng khi `prefers-reduced-motion`).
5. Khung kính ngắm phóng to theo vị trí cuộn (sticky + JS `requestAnimationFrame`).
6. Nền section 3 chuyển từ tối sang sáng khi cuộn tới lưới card.
7. Marquee ảnh chạy vô hạn, dừng khi hover.
8. Lightbox bộ ảnh concept: mở từ card / dropdown, nút trước / sau, phím ← → Esc, vuốt trên mobile.
9. Modal Liên hệ: mở / đóng (nút ✕, Esc, click nền), form soạn tin → mở `sms:` tới hotline.
10. Hiệu ứng xuất hiện (fade-up) khi phần tử vào khung nhìn.

## 7. Responsive

Breakpoint như bản gốc: ≥1200 (desktop), 840–1199 (tablet), <840 (mobile).
Mobile: tiêu đề hero 44px, card 1 cột, hai cột “#KhoảnhKhắcCherry” thành 1 cột, footer xếp dọc, lề 16–20px,
không cuộn ngang.

## 8. Cấu trúc thư mục

```
Cherry-studio/
├── PROMPT.md                 ← file này
├── docs.md                   ← brief gốc
├── logo.jpg                  ← logo gốc
└── web/                      ← dự án Vite + React
    ├── .npmrc                ← cache npm trên ổ D
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/img/<concept>/NN.jpg (≤1400px), NN-s.jpg (≤640px), logo.jpg
    └── src/
        ├── main.jsx, App.jsx, index.css (token màu, font, reset)
        ├── data/site.js      ← thông tin studio, concept, điểm mạnh
        ├── data/images.js    ← danh sách ảnh theo concept (tự sinh)
        ├── hooks/            ← useScrollProgress, useReveal
        ├── context/UIContext.jsx  ← mở lightbox / modal liên hệ
        └── components/       ← Header, Hero, Showcase, Features, Marquee, Stories,
                                Catalog, Cta, Footer, Lightbox, ContactModal, FloatingBadge
```

Lệnh (PowerShell, từ thư mục `web/`):

```
$env:TEMP="D:\TaiLieu\Code\Intern\Cherry-studio\.tmp"; $env:TMP=$env:TEMP
npm install
npm run dev      # http://localhost:5173
npm run build    # xuất ra web/dist
```

## 9. Tiêu chí nghiệm thu

- `npm run build` thành công, `npm run dev` / `npm run preview` hiển thị đầy đủ trang.
- Đặt cạnh studio.design: cùng thứ tự section, cùng bố cục, cùng nhịp cuộn; khác ở nội dung, màu, ảnh.
- Không có chữ “Be Vietnam Pro” trong mã nguồn; mọi dấu tiếng Việt hiển thị đúng.
- Tất cả link (tel, Facebook, Maps, Drive) đúng như bảng ở mục 3.
- 10 tương tác ở mục 6 đều hoạt động ở desktop và mobile.
