import { useEffect, useRef, useState } from 'react';
import { Arrow } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { FEATURES, conceptName, img } from '../data/site.js';
import './Features.css';

function FeatureCard({ f }) {
  const { openGallery } = useUI();
  return (
    <article className={`fcard reveal ${f.wide ? 'fcard--wide' : ''}`}>
      <div className="fcard__text">
        <h3>
          {f.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h3>
        <p>{f.text}</p>
      </div>
      <div className="fcard__media">
        {f.shots.map((n, i) => (
          <img key={n} className={`fcard__shot fcard__shot--${i}`} src={img(f.slug, n, f.wide && i === 0 ? 'l' : 's')} alt={`${conceptName(f.slug)} – ảnh ${n}`} loading="lazy" />
        ))}
        <span className="fcard__tag">{conceptName(f.slug)}</span>
        <button type="button" className="btn btn--sm fcard__btn" onClick={() => openGallery(f.slug)}>
          Xem bộ ảnh <Arrow />
        </button>
      </div>
    </article>
  );
}

export default function Features() {
  const gridRef = useRef(null);
  const [light, setLight] = useState(false);

  // Nền chuyển từ tối sang sáng khi lưới card chiếm phần lớn màn hình
  useEffect(() => {
    const onScroll = () => {
      const r = gridRef.current?.getBoundingClientRect();
      if (r) setLight(r.top < window.innerHeight * 0.25);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={`features ${light ? 'is-light' : ''}`} id="gioi-thieu">
      <h2 className="features__title reveal">Bắt đầu hành trình của mẹ.</h2>
      <div className="features__grid" ref={gridRef}>
        {FEATURES.map((f) => (
          <FeatureCard key={f.slug} f={f} />
        ))}
      </div>
    </section>
  );
}
