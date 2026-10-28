import { Arrow } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { HERO_STEPS, conceptName, img } from '../data/site.js';
import './Hero.css';

/** Các dải cầu thang song song: độ lệch ngang (đơn vị ô) và số bước xoay vòng danh sách concept. */
const BANDS = [
  { offset: -3.5, shift: 3 },
  { offset: 0, shift: 0 },
  { offset: 3.5, shift: 5 },
];

export default function Hero() {
  const { openGallery, openContact } = useUI();

  return (
    <section className="hero" id="top">
      <div className="hero__stairs" style={{ '--n': HERO_STEPS.length }} aria-hidden="true">
        {BANDS.map((band) => {
          const order = [...HERO_STEPS.slice(band.shift), ...HERO_STEPS.slice(0, band.shift)];
          // Nhân đôi danh sách để vòng lặp chéo liền mạch
          const steps = [...order, ...order];
          return (
            <div className="hero__track" key={band.offset} style={{ '--d': band.offset }}>
              {steps.map((s, k) => (
                <div className="step" key={k} style={{ '--k': k }}>
                  <img src={img(s.slug, s.n)} alt="" />
                  <button type="button" tabIndex={-1} className={`step__tile step__tile--${s.tone}`} onClick={() => openGallery(s.slug)}>
                    <span>{conceptName(s.slug)}</span>
                  </button>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <h1 className="hero__title">
        Tôn Vinh Vẻ Đẹp,
        <br />
        Ghi Dấu Khoảnh Khắc.
      </h1>

      <div className="hero__aside">
        <p>
          Cherry Studio là studio ／ photobooth chụp ảnh mẹ bầu tại Hà Nội và Phú Thọ. Đa dạng concept, có sẵn trang phục —
          mẹ chỉ cần mang theo nụ cười.
        </p>
        <button type="button" className="btn" onClick={openContact}>
          Đặt lịch chụp <Arrow />
        </button>
      </div>
    </section>
  );
}
