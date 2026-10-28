import { useId, useState } from 'react';
import { Arrow } from './Icons.jsx';
import { CONCEPT_ORDER, STUDIO, conceptName } from '../data/site.js';
import './ContactForm.css';

const EMPTY = { name: '', phone: '', concept: '', branch: STUDIO.branches[0].code, date: '', message: '' };

/**
 * Form liên hệ dùng chung cho modal (compact) và section cuối trang (full).
 * Không có máy chủ: khi gửi sẽ soạn sẵn tin nhắn SMS tới hotline.
 */
export default function ContactForm({ variant = 'compact', autoFocus = false }) {
  const uid = useId();
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const full = variant === 'full';

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const branch = STUDIO.branches.find((b) => b.code === form.branch);
    const lines = [
      `Cherry Studio ơi, mình là ${form.name} (${form.phone}).`,
      full && form.concept && `Concept quan tâm: ${conceptName(form.concept)}.`,
      full && branch && `Cơ sở: ${branch.code} – ${branch.city}.`,
      full && form.date && `Ngày muốn chụp: ${form.date.split('-').reverse().join('/')}.`,
      form.message,
    ].filter(Boolean);
    window.location.href = `sms:${STUDIO.hotlines[0].tel}?&body=${encodeURIComponent(lines.join('\n'))}`;
    setSent(true);
  };

  return (
    <form className={`cform cform--${variant}`} onSubmit={onSubmit}>
      <label>
        Họ tên
        <input required value={form.name} onChange={set('name')} autoComplete="name" autoFocus={autoFocus} />
      </label>
      <label>
        Số điện thoại
        <input required type="tel" pattern="[0-9 +.]{9,15}" value={form.phone} onChange={set('phone')} autoComplete="tel" />
      </label>

      {full && (
        <>
          <label>
            Concept quan tâm
            <select value={form.concept} onChange={set('concept')}>
              <option value="">Chưa chọn — cần tư vấn</option>
              {CONCEPT_ORDER.filter((s) => s !== 'hau-truong').map((slug) => (
                <option key={slug} value={slug}>
                  {conceptName(slug)}
                </option>
              ))}
            </select>
          </label>
          <label>
            Ngày muốn chụp
            <input type="date" value={form.date} onChange={set('date')} />
          </label>
          <fieldset className="cform__full cform__branches">
            <legend>Cơ sở</legend>
            {STUDIO.branches.map((b) => (
              <label key={b.code} className={`cform__radio ${form.branch === b.code ? 'is-checked' : ''}`}>
                <input type="radio" name={`${uid}-branch`} value={b.code} checked={form.branch === b.code} onChange={set('branch')} />
                <b>
                  {b.code} · {b.city}
                </b>
                <span>{b.address}</span>
              </label>
            ))}
          </fieldset>
        </>
      )}

      <label className="cform__full">
        Lời nhắn
        <textarea
          rows={full ? 4 : 3}
          value={form.message}
          onChange={set('message')}
          placeholder="Ví dụ: Mình bầu tháng thứ 7, muốn chụp cùng chồng…"
        />
      </label>

      <button type="submit" className="btn cform__full cform__submit">
        Gửi tin nhắn <Arrow />
      </button>
      <p className="cform__full cform__note" aria-live="polite">
        {sent
          ? 'Đã mở ứng dụng tin nhắn với nội dung soạn sẵn — bấm gửi để hoàn tất.'
          : `Form sẽ mở ứng dụng tin nhắn gửi tới hotline ${STUDIO.hotlines[0].label}.`}
      </p>
    </form>
  );
}
