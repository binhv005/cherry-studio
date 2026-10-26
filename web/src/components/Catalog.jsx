import { Arrow } from './Icons.jsx';
import { CATALOG_GRID, STUDIO, img } from '../data/site.js';
import './Catalog.css';

export default function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="catalog__banner reveal">
        <div className="catalog__grid" aria-hidden="true">
          {CATALOG_GRID.map(([slug, n], i) => (
            <img key={i} src={img(slug, n, 's')} alt="" loading="lazy" />
          ))}
        </div>
        <div className="catalog__content">
          <p className="catalog__eyebrow">Catalog sản phẩm B2B</p>
          <h2>Catalog cho đối tác</h2>
          <p>
            Trọn bộ concept chụp mẹ bầu của Cherry Studio — trang phục, phụ kiện, bối cảnh và ảnh mẫu — sẵn sàng cho
            các đơn vị hợp tác.
          </p>
          <div className="catalog__actions">
            <a className="btn btn--light" href={STUDIO.catalogs[0]} target="_blank" rel="noreferrer">
              Xem catalog <Arrow />
            </a>
            <a className="catalog__ghost" href={STUDIO.catalogs[1]} target="_blank" rel="noreferrer">
              Bộ ảnh mẫu <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
