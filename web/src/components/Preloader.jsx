import { useEffect, useRef, useState } from 'react';
import { HERO_STEPS, img } from '../data/site.js';
import './Preloader.css';

const MIN_DURATION = 2200; // ms — để hình vẽ kịp “hiện dần” như mẫu
const SLASHES = Array.from({ length: 24 }, (_, i) => i * 15);

/** Tải trước font + ảnh hero, trả về tỉ lệ đã tải (0 → 1). */
function useAssetProgress() {
  const [ratio, setRatio] = useState(0);
  useEffect(() => {
    const urls = [...new Set(HERO_STEPS.map((s) => img(s.slug, s.n)))];
    const total = urls.length + 1;
    let done = 0;
    let alive = true;
    const tick = () => alive && setRatio(++done / total);
    urls.forEach((src) => {
      const im = new Image();
      im.onload = im.onerror = tick;
      im.src = src;
    });
    (document.fonts?.ready ?? Promise.resolve()).then(tick);
    return () => {
      alive = false;
    };
  }, []);
  return ratio;
}

export default function Preloader() {
  const assets = useAssetProgress();
  const assetsRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading → leaving → gone
  const dotRef = useRef(null);

  assetsRef.current = assets;

  // Bộ đếm: không vượt quá tiến độ tải thật, cũng không nhanh hơn thời gian tối thiểu
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minDuration = reduce ? 300 : MIN_DURATION;
    const start = performance.now();
    let frame;
    const loop = (now) => {
      const byTime = Math.min(1, (now - start) / minDuration);
      const target = Math.min(byTime, assetsRef.current);
      setProgress((p) => {
        const next = p + (target - p) * 0.12;
        return target - next < 0.002 ? target : next;
      });
      if (byTime < 1 || assetsRef.current < 1) frame = requestAnimationFrame(loop);
      else setProgress(1);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Đủ 100% → dừng một nhịp rồi trượt lên; trượt xong thì gỡ khỏi trang
  useEffect(() => {
    if (progress < 1 || phase !== 'loading') return undefined;
    const t = setTimeout(() => setPhase('leaving'), 450);
    return () => clearTimeout(t);
  }, [progress, phase]);

  useEffect(() => {
    if (phase !== 'leaving') return undefined;
    const t = setTimeout(() => setPhase('gone'), 1100);
    return () => clearTimeout(t);
  }, [phase]);

  // Khoá cuộn trang khi đang tải
  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', phase !== 'gone');
    return () => document.documentElement.classList.remove('is-loading');
  }, [phase]);

  // Chấm trắng đi theo con trỏ (có độ trễ mềm)
  useEffect(() => {
    if (phase === 'gone') return undefined;
    const pos = { x: window.innerWidth * 0.57, y: window.innerHeight * 0.88 };
    const target = { ...pos };
    let frame;
    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const loop = () => {
      pos.x += (target.x - pos.x) * 0.15;
      pos.y += (target.y - pos.y) * 0.15;
      if (dotRef.current) dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      frame = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [phase]);

  if (phase === 'gone') return null;

  const pct = Math.round(progress * 100);
  const draw = { strokeDashoffset: 1 - progress };

  return (
    <div className={`preloader ${phase === 'leaving' ? 'is-leaving' : ''}`} role="status" aria-live="polite" aria-label={`Đang tải ${pct}%`}>
      <div className="preloader__inner">
        <svg className="preloader__emblem" viewBox="0 0 200 200" aria-hidden="true">
          <g className="preloader__ring">
            {SLASHES.map((deg) => (
              <path key={deg} d="M97 8 103 0" transform={`rotate(${deg} 100 100)`} pathLength="1" style={draw} />
            ))}
          </g>
          <circle cx="100" cy="100" r="80" pathLength="1" style={draw} />
          {/* Cặp cherry vẽ nét */}
          <g className="preloader__cherry">
            <path d="M78 106C82 80 98 62 112 50" pathLength="1" style={draw} />
            <path d="M124 116C122 90 116 66 112 50" pathLength="1" style={draw} />
            <path d="M112 50C128 34 152 36 160 44C148 58 126 60 112 50Z" pathLength="1" style={draw} />
            <path d="M112 50C130 48 146 46 160 44" pathLength="1" style={draw} />
            <circle cx="78" cy="128" r="22" pathLength="1" style={draw} />
            <circle cx="124" cy="136" r="20" pathLength="1" style={draw} />
            <path d="M65 121a14 14 0 0 1 8-9" pathLength="1" style={draw} />
            <path d="M113 129a12 12 0 0 1 7-7" pathLength="1" style={draw} />
          </g>
        </svg>

        <div className="preloader__bar">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
        <p className="preloader__count">{String(pct).padStart(2, '0')}</p>
        <p className="preloader__caption">Ghi dấu khoảnh khắc</p>
      </div>
      <span className="preloader__dot" ref={dotRef} aria-hidden="true" />
    </div>
  );
}
