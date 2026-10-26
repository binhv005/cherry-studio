import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [gallery, setGallery] = useState(null); // { slug, index }
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openGallery = useCallback((slug, index = 0) => {
    setMenuOpen(false);
    setGallery({ slug, index });
  }, []);
  const closeGallery = useCallback(() => setGallery(null), []);
  const openContact = useCallback(() => {
    setMenuOpen(false);
    setContactOpen(true);
  }, []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  // Khoá cuộn trang khi có lớp phủ
  useEffect(() => {
    document.body.classList.toggle('is-locked', Boolean(gallery || contactOpen || menuOpen));
  }, [gallery, contactOpen, menuOpen]);

  const value = useMemo(
    () => ({ gallery, setGallery, openGallery, closeGallery, contactOpen, openContact, closeContact, menuOpen, setMenuOpen }),
    [gallery, openGallery, closeGallery, contactOpen, openContact, closeContact, menuOpen],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export const useUI = () => useContext(UIContext);
