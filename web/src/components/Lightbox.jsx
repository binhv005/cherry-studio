import { useCallback, useEffect, useRef } from 'react';
import { Close, Next, Prev } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { conceptName, img, photosOf } from '../data/site.js';
import './Lightbox.css';

export default function Lightbox() {
  const { gallery, setGallery, closeGallery } = useUI();
  const touchX = useRef(null);
  const thumbsRef = useRef(null);
  const photos = gallery ? photosOf(gallery.slug) : [];
  const count = photos.length;

  const go = useCallback(
    (delta) => setGallery((g) => g && { ...g, index: (g.index + delta + count) % count }),
    [setGallery, count],
  );

  useEffect(() => {
    if (!gallery) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [gallery, go, closeGallery]);

  // Giữ ảnh thu nhỏ đang chọn trong tầm nhìn
  useEffect(() => {
    thumbsRef.current?.querySelector('.is-active')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [gallery?.index]);

  if (!gallery || !count) return null;
  const index = Math.min(gallery.index, count - 1);
  const current = photos[index];

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`Bộ ảnh ${conceptName(gallery.slug)}`} onClick={closeGallery}>
      <div className="lb__top" onClick={(e) => e.stopPropagation()}>
        <p>
          <b>{conceptName(gallery.slug)}</b>
          <span>
            {String(index + 1).padStart(2, '0')} ／ {String(count).padStart(2, '0')}
          </span>
        </p>
        <button type="button" className="lb__close" onClick={closeGallery} aria-label="Đóng" autoFocus>
          <Close />
        </button>
      </div>

      <div
        className="lb__stage"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <button type="button" className="lb__nav lb__nav--prev" onClick={() => go(-1)} aria-label="Ảnh trước">
          <Prev />
        </button>
        <img key={current.n} className="lb__img" src={img(gallery.slug, current.n)} alt={`${conceptName(gallery.slug)} – ảnh ${current.n}`} />
        <button type="button" className="lb__nav lb__nav--next" onClick={() => go(1)} aria-label="Ảnh sau">
          <Next />
        </button>
      </div>

      <div className="lb__thumbs" ref={thumbsRef} onClick={(e) => e.stopPropagation()}>
        {photos.map((p, i) => (
          <button
            type="button"
            key={p.n}
            className={i === index ? 'is-active' : ''}
            onClick={() => setGallery({ slug: gallery.slug, index: i })}
            aria-label={`Ảnh ${i + 1}`}
          >
            <img src={img(gallery.slug, p.n, 's')} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
