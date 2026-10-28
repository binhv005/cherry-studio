import { useEffect } from 'react';
import ContactForm from './ContactForm.jsx';
import { Close, Facebook, Phone, Pin } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { STUDIO } from '../data/site.js';
import './ContactModal.css';

export default function ContactModal() {
  const { contactOpen, closeContact } = useUI();

  useEffect(() => {
    if (!contactOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeContact();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [contactOpen, closeContact]);

  if (!contactOpen) return null;

  return (
    <div className="cm" role="dialog" aria-modal="true" aria-labelledby="cm-title" onClick={closeContact}>
      <div className="cm__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="cm__close" onClick={closeContact} aria-label="Đóng">
          <Close />
        </button>

        <h2 id="cm-title">Liên hệ</h2>
        <p className="cm__lead">Đặt lịch chụp hoặc cần tư vấn concept? Gọi hotline, nhắn Facebook hoặc để lại lời nhắn bên dưới.</p>

        <div className="cm__quick">
          {STUDIO.hotlines.map((h) => (
            <a key={h.tel} href={`tel:${h.tel}`}>
              <Phone /> {h.label}
            </a>
          ))}
          <a href={STUDIO.facebook} target="_blank" rel="noreferrer">
            <Facebook /> Facebook
          </a>
        </div>

        <ul className="cm__branches">
          {STUDIO.branches.map((b) => (
            <li key={b.code}>
              <a href={STUDIO.map} target="_blank" rel="noreferrer">
                <Pin />
                <span>
                  <b>
                    {b.code} · {b.city}
                  </b>
                  {b.address}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="cm__form">
          <ContactForm autoFocus />
        </div>
      </div>
    </div>
  );
}
