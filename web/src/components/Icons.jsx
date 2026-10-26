const base = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round' };

export const Arrow = (props) => (
  <svg className="arrow" viewBox="0 0 12 12" aria-hidden="true" {...base} strokeWidth="1.4" {...props}>
    <path d="M2 10 10 2M4 2h6v6" />
  </svg>
);

export const Chevron = (props) => (
  <svg viewBox="0 0 10 10" width="8" height="8" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="m2 3.5 3 3 3-3" />
  </svg>
);

export const Close = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Menu = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const Prev = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const Next = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const Phone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const Pin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...base} strokeWidth="1.6" {...props}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
  </svg>
);
