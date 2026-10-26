import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import { Arrow, Chevron, Close, Menu } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { CONCEPT_ORDER, STUDIO, conceptName, img, photosOf } from '../data/site.js';
import './Header.css';

const LINKS = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Catalog', href: STUDIO.catalogs[0], external: true },
  { label: 'Hậu trường', gallery: 'hau-truong' },
  { label: 'Facebook', href: STUDIO.facebook, external: true },
];

export default function Header() {
  const { openGallery, openContact, menuOpen, setMenuOpen } = useUI();
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Đóng dropdown khi click ra ngoài hoặc bấm Esc
  useEffect(() => {
    if (!dropOpen) return undefined;
    const onDown = (e) => !dropRef.current?.contains(e.target) && setDropOpen(false);
    const onKey = (e) => e.key === 'Escape' && setDropOpen(false);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [dropOpen]);

  const pickConcept = (slug) => {
    setDropOpen(false);
    openGallery(slug);
  };

  const renderLink = (l, onDone) =>
    l.gallery ? (
      <button type="button" className="nav__link" onClick={() => { onDone?.(); openGallery(l.gallery); }}>
        {l.label}
      </button>
    ) : (
      <a
        className="nav__link"
        href={l.href}
        onClick={onDone}
        {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {l.label}
        {l.external && <Arrow width="9" height="9" />}
      </a>
    );

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__bar">
        <a href="#top" className="header__logo" aria-label="Cherry Studio – về đầu trang">
          <Logo />
        </a>

        <nav className="nav" aria-label="Điều hướng chính">
          <div
            className={`nav__drop ${dropOpen ? 'is-open' : ''}`}
            ref={dropRef}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              type="button"
              className="nav__link"
              aria-expanded={dropOpen}
              aria-controls="concept-menu"
              onClick={() => setDropOpen((v) => !v)}
            >
              Concept <Chevron />
            </button>
            <div className="drop" id="concept-menu" role="menu">
              <div className="drop__grid">
                {CONCEPT_ORDER.map((slug) => (
                  <button key={slug} type="button" role="menuitem" className="drop__item" onClick={() => pickConcept(slug)}>
                    <img src={img(slug, photosOf(slug)[1]?.n ?? 1, 's')} alt="" loading="lazy" />
                    <span>{conceptName(slug)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {LINKS.map((l) => (
            <span key={l.label}>{renderLink(l)}</span>
          ))}
          <button type="button" className="nav__link" onClick={openContact}>
            Liên hệ
          </button>
        </nav>

        <button type="button" className="btn btn--sm header__cta" onClick={openContact}>
          Đặt lịch <span className="header__cta-slash">／</span> Tư vấn
        </button>

        <button
          type="button"
          className="header__burger"
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`mnav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <p className="mnav__label">Concept</p>
        <div className="mnav__concepts">
          {CONCEPT_ORDER.map((slug) => (
            <button key={slug} type="button" onClick={() => openGallery(slug)} tabIndex={menuOpen ? 0 : -1}>
              {conceptName(slug)}
            </button>
          ))}
        </div>
        <div className="mnav__links">
          {LINKS.map((l) => (
            <span key={l.label}>{renderLink(l, () => setMenuOpen(false))}</span>
          ))}
        </div>
        <button type="button" className="btn mnav__cta" onClick={openContact} tabIndex={menuOpen ? 0 : -1}>
          Đặt lịch ／ Tư vấn <Arrow />
        </button>
      </div>
    </header>
  );
}
