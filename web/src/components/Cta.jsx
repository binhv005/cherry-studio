import { Arrow, Pin } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { STUDIO } from '../data/site.js';
import './Cta.css';

export default function Cta() {
  const { openContact } = useUI();
  return (
    <section className="cta" id="lien-he">
      <h2 className="cta__title reveal">Đặt lịch chụp tại Cherry</h2>
      <div className="cta__actions reveal">
        <a className="btn" href={`tel:${STUDIO.hotlines[0].tel}`}>
          Gọi {STUDIO.hotlines[0].label} <Arrow />
        </a>
        <button type="button" className="cta__link" onClick={openContact}>
          Gửi lời nhắn <Arrow />
        </button>
      </div>

      <a className="cta__notice reveal" href={STUDIO.map} target="_blank" rel="noreferrer">
        <Pin />
        {STUDIO.branches.map((b) => (
          <span key={b.code}>
            <b>{b.code}:</b> {b.address}
          </span>
        ))}
        <span className="cta__notice-go">
          Chỉ đường <Arrow />
        </span>
      </a>
    </section>
  );
}
