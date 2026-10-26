import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress.js';
import { useUI } from '../context/UIContext.jsx';
import { SHOWCASE, img } from '../data/site.js';
import './Showcase.css';

const clamp01 = (v) => Math.min(1, Math.max(0, v));

/** Section tối: khung kính ngắm phóng to dần theo cuộn (thay cho khung editor của bản gốc). */
export default function Showcase() {
  const ref = useRef(null);
  const { openGallery } = useUI();
  const p = useScrollProgress(ref);

  const grow = clamp01(p / 0.7);
  const eased = 1 - (1 - grow) ** 3;
  const scale = 0.58 + 0.42 * eased;
  const radius = 18 * (1 - eased);
  const shift = clamp01((p - 0.35) / 0.65);

  return (
    <section className="showcase" ref={ref} aria-label="Capture your beauty">
      <div className="showcase__sticky">
        <div className="viewfinder" style={{ transform: `scale(${scale})`, borderRadius: radius }}>
          <div className="viewfinder__bar">
            <span className="viewfinder__rec">
              <i /> REC
            </span>
            <span>ISO 200</span>
            <span>1/125</span>
            <span>f/2.8</span>
            <span className="viewfinder__hide-sm">85mm</span>
            <span className="viewfinder__bar-end">CHERRY ／ STUDIO</span>
          </div>

          <div className="viewfinder__body">
            <span className="viewfinder__corner viewfinder__corner--tl" />
            <span className="viewfinder__corner viewfinder__corner--tr" />
            <span className="viewfinder__corner viewfinder__corner--bl" />
            <span className="viewfinder__corner viewfinder__corner--br" />

            <h2 className="viewfinder__title">
              Capture <em>your</em> beauty.
            </h2>

            <div className="viewfinder__strip" style={{ transform: `translateX(${-shift * 18}%)` }}>
              {SHOWCASE.map(([slug, n], i) => (
                <button type="button" key={i} className="viewfinder__shot" onClick={() => openGallery(slug, n - 1)}>
                  <img src={img(slug, n)} alt="Bộ ảnh Capture Your Beauty" loading="lazy" />
                </button>
              ))}
            </div>

            <span className="viewfinder__count">{String(Math.round(12 + p * 24)).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
