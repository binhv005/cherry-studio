import { Arrow } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { HERO_STEPS, conceptName, img } from '../data/site.js';
import './Hero.css';

export default function Hero() {
  const { openGallery, openContact } = useUI();
  // Nhân đôi danh sách để vòng lặp chéo liền mạch
  const steps = [...HERO_STEPS, ...HERO_STEPS];

  return (
    <section className="hero" id="top">
      <div className="hero__stairs" style={{ '--n': HERO_STEPS.length }} aria-hidden="true">
        <div className="hero__track">
          {steps.map((s, k) => (
            <div className="step" key={k} style={{ '--k': k }}>
              <img src={img(s.slug, s.n)} alt="" />
              <button type="button" tabIndex={-1} className={`step__tile step__tile--${s.tone}`} onClick={() => openGallery(s.slug)}>
                <span>{conceptName(s.slug)}</span>
              </button>
            </div>
          ))}
        </div>
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
