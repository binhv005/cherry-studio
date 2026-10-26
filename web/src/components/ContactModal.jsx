import { useEffect, useState } from 'react';
import { Arrow, Close, Facebook, Phone, Pin } from './Icons.jsx';
import { useUI } from '../context/UIContext.jsx';
import { STUDIO } from '../data/site.js';
import './ContactModal.css';

export default function ContactModal() {
  const { contactOpen, closeContact } = useUI();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    if (!contactOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeContact();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [contactOpen, closeContact]);

  if (!contactOpen) return null;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Không có máy chủ: soạn sẵn tin nhắn SMS gửi tới hotline
  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Cherry Studio ơi, mình là ${form.name} (${form.phone}). ${form.message}`.trim();
    window.location.href = `sms:${STUDIO.hotlines[0].tel}?&body=${encodeURIComponent(body)}`;
  };

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

        <form className="cm__form" onSubmit={onSubmit}>
          <label>
            Họ tên
            <input required value={form.name} onChange={set('name')} autoComplete="name" autoFocus />
          </label>
          <label>
            Số điện thoại
            <input required type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
          </label>
          <label className="cm__full">
            Lời nhắn
            <textarea rows="3" value={form.message} onChange={set('message')} placeholder="Ví dụ: Mình muốn chụp concept Tone hồng, bầu tháng thứ 7…" />
          </label>
          <button type="submit" className="btn cm__full">
            Gửi tin nhắn <Arrow />
          </button>
        </form>
      </div>
    </div>
  );
}
