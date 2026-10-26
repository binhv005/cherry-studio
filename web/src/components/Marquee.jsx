import { useUI } from '../context/UIContext.jsx';
import { MARQUEE_ROWS, conceptName, img } from '../data/site.js';
import './Marquee.css';

function Row({ items, reverse, speed }) {
  const { openGallery } = useUI();
  // Lặp lại 2 lần để dải chạy liền mạch (dịch -50%)
  const loop = [...items, ...items];
  return (
    <div className={`mq__row ${reverse ? 'mq__row--rev' : ''}`} style={{ '--speed': `${speed}s` }}>
      <div className="mq__track">
        {loop.map(([slug, n], i) => (
          <button
            type="button"
            key={i}
            className="mq__tile"
            onClick={() => openGallery(slug, n - 1)}
            tabIndex={i < items.length ? 0 : -1}
            aria-hidden={i >= items.length}
          >
            <img src={img(slug, n, 's')} alt={`${conceptName(slug)} – ảnh ${n}`} loading="lazy" />
            <span>{conceptName(slug)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  const [a, b, c, d] = MARQUEE_ROWS;
  return (
    <section className="mq" aria-label="Thư viện concept">
      <Row items={a} speed={70} />
      <Row items={b} speed={80} reverse />
      <div className="mq__badge-wrap">
        <p className="mq__badge reveal">
          Chụp tại <span className="mq__badge-slash">／</span>Cherry
        </p>
      </div>
      <Row items={c} speed={75} />
      <Row items={d} speed={85} reverse />
    </section>
  );
}
