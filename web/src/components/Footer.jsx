import Logo from './Logo.jsx';
import { Arrow, Facebook, Phone, Pin } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { CONCEPT_ORDER, STUDIO, conceptName } from '../data/site.js';
import './Footer.css';

export default function Footer() {
  const { openGallery, openContact } = useUI();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#top" aria-label="Về đầu trang">
            <Logo />
          </a>
          <p className="footer__tagline">{STUDIO.tagline}.</p>
          <div className="footer__social">
            <a href={STUDIO.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href={STUDIO.map} target="_blank" rel="noreferrer" aria-label="Bản đồ">
              <Pin />
            </a>
            <a href={`tel:${STUDIO.hotlines[0].tel}`} aria-label="Gọi hotline">
              <Phone />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <p className="footer__head">Concept</p>
          {CONCEPT_ORDER.map((slug) => (
            <button key={slug} type="button" onClick={() => openGallery(slug)}>
              {conceptName(slug)}
            </button>
          ))}
        </div>

        <div className="footer__col">
          <p className="footer__head">Cherry Studio</p>
          <a href="#gioi-thieu">Giới thiệu</a>
          <a href="#khoanh-khac">#KhoảnhKhắcCherry</a>
          <a href={STUDIO.catalogs[0]} target="_blank" rel="noreferrer">
            Catalog B2B <Arrow />
          </a>
          <a href={STUDIO.catalogs[1]} target="_blank" rel="noreferrer">
            Bộ ảnh mẫu <Arrow />
          </a>
          <a href={STUDIO.facebook} target="_blank" rel="noreferrer">
            Facebook <Arrow />
          </a>
          <button type="button" onClick={openContact}>
            Liên hệ
          </button>
        </div>

        <div className="footer__col footer__col--contact">
          <p className="footer__head">Liên hệ</p>
          {STUDIO.hotlines.map((h) => (
            <a key={h.tel} href={`tel:${h.tel}`}>
              {h.label}
            </a>
          ))}
          {STUDIO.branches.map((b) => (
            <a key={b.code} className="footer__addr" href={STUDIO.map} target="_blank" rel="noreferrer">
              <b>{b.code}</b> {b.address}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Cherry Studio. All Rights Reserved.</span>
        <span>Tiếng Việt</span>
      </div>
    </footer>
  );
}
