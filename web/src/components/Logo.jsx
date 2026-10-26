import './Logo.css';

/** Logo chữ dựng lại từ logo.jpg: CHERRY đậm + STUDIO mảnh. */
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo__slash">／</span>
      <b>CHERRY</b>
      <span className="logo__light">STUDIO</span>
    </span>
  );
}
