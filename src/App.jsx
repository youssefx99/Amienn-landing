import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import EncryptedPhotos from './components/EncryptedPhotos';
import BentoVariant from './components/BentoVariant';
import LiveCounter from './components/LiveCounter';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
import RefundPolicy from './components/RefundPolicy';
import TermsOfService from './components/TermsOfService';

const path = window.location.pathname;

function App() {
  if (path === '/privacy' || path === '/privacy/') {
    return <PrivacyPolicy />;
  }

  if (path === '/about' || path === '/about/') {
    return <AboutUs />;
  }

  if (path === '/refund' || path === '/refund/') {
    return <RefundPolicy />;
  }

  if (path === '/terms' || path === '/terms/') {
    return <TermsOfService />;
  }

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gradient-to-b from-primary via-primary-container to-surface">
          <EncryptedPhotos />
          {/* <Stats /> */}
        </div>
        <BentoVariant />
        {/* <LiveCounter /> */}
        <Comparison />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
