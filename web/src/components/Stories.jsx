import { Arrow } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { STORIES, conceptName, img } from '../data/site.js';
import './Stories.css';

function Story({ s }) {
  const { openGallery } = useUI();
  return (
    <article className="story reveal">
      <button type="button" className="story__photo" onClick={() => openGallery(s.slug, s.n - 1)} aria-label={`Xem bộ ảnh ${conceptName(s.slug)}`}>
        <img src={img(s.slug, s.n)} alt={`${conceptName(s.slug)} – Cherry Studio`} loading="lazy" />
      </button>
      <p className="story__label">{s.label}</p>
      <h3 className="story__name">{conceptName(s.slug)}</h3>
      <p className="story__quote">
        <span className="slash">／</span>
        {s.quote}
      </p>
      <button type="button" className="story__more" onClick={() => openGallery(s.slug)}>
        Xem bộ ảnh <Arrow />
      </button>
    </article>
  );
}

export default function Stories() {
  const left = STORIES.filter((_, i) => i % 2 === 0);
  const right = STORIES.filter((_, i) => i % 2 === 1);
  return (
    <section className="stories" id="khoanh-khac">
      <div className="stories__inner">
        <h2 className="stories__title reveal">#KhoảnhKhắcCherry</h2>
        <div className="stories__col">
          {left.map((s) => (
            <Story key={s.slug} s={s} />
          ))}
        </div>
        <div className="stories__col stories__col--right">
          {right.map((s) => (
            <Story key={s.slug} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
