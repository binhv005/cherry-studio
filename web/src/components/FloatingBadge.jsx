import { STUDIO } from '../data/site.js';
import './FloatingBadge.css';

/** Huy hiệu cố định góc dưới trái (thay cho “Created in ／S”). */
export default function FloatingBadge() {
  return (
    <a className="fbadge" href={`tel:${STUDIO.hotlines[0].tel}`}>
      Hotline <span>／</span>
      {STUDIO.hotlines[0].label}
    </a>
  );
}
