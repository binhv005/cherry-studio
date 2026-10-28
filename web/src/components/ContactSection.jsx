import ContactForm from './ContactForm.jsx';
import { Arrow, Facebook, Phone, Pin } from './Icons.jsx';
import { STUDIO, img } from '../data/site.js';
import './ContactSection.css';

/** Section form liên hệ cuối trang, ngay trên footer. */
export default function ContactSection() {
  return (
    <section className="contact" id="form-lien-he" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__info reveal">
          <p className="contact__eyebrow">Liên hệ ／ Đặt lịch</p>
          <h2 id="contact-title">
            Để lại lời nhắn,
            <br />
            Cherry gọi lại ngay.
          </h2>
          <p className="contact__lead">
            Chia sẻ concept mẹ thích và thời gian dự kiến — ekip sẽ tư vấn trang phục, bối cảnh và lịch chụp phù hợp
            nhất cho mẹ bầu.
          </p>

          <ul className="contact__list">
            {STUDIO.hotlines.map((h) => (
              <li key={h.tel}>
                <a href={`tel:${h.tel}`}>
                  <Phone />
                  <span>
                    <small>Hotline</small>
                    {h.label}
                  </span>
                </a>
              </li>
            ))}
            {STUDIO.branches.map((b) => (
              <li key={b.code}>
                <a href={STUDIO.map} target="_blank" rel="noreferrer">
                  <Pin />
                  <span>
                    <small>
                      {b.code} · {b.city}
                    </small>
                    {b.address}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={STUDIO.facebook} target="_blank" rel="noreferrer">
                <Facebook />
                <span>
                  <small>Facebook</small>
                  facebook.com/chupanhbauxinhhanoi <Arrow />
                </span>
              </a>
            </li>
          </ul>

          <img className="contact__photo" src={img('true-love-grows', 17)} alt="Mẹ bầu chụp tại Cherry Studio" loading="lazy" />
        </div>

        <div className="contact__card reveal">
          <h3>Gửi lời nhắn cho Cherry</h3>
          <ContactForm variant="full" />
        </div>
      </div>
    </section>
  );
}
