import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';
import Features from './components/Features.jsx';
import Marquee from './components/Marquee.jsx';
import Stories from './components/Stories.jsx';
import Catalog from './components/Catalog.jsx';
import Cta from './components/Cta.jsx';
import Footer from './components/Footer.jsx';
import Lightbox from './components/Lightbox.jsx';
import ContactModal from './components/ContactModal.jsx';
import FloatingBadge from './components/FloatingBadge.jsx';
import { useReveal } from './hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Showcase />
        <Features />
        <Marquee />
        <Stories />
        <Catalog />
        <Cta />
      </main>
      <Footer />
      <FloatingBadge />
      <Lightbox />
      <ContactModal />
    </>
  );
}
