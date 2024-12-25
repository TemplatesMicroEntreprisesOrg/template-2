import React from 'react';
import './App.css';

// Import all components
import Preloader from './components/Preloader/Preloader';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import About from './components/About/About';
import SpecialDish from './components/SpecialDish/SpecialDish';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Reservation from './components/Reservation/Reservation';
import Features from './components/Features/Features';
import Event from './components/Event/Event';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

const App: React.FC = () => {
  return (
    <>
      <Preloader />
      <TopBar />
      <Header />
      <Hero />
      <Service />
      <About />
      <SpecialDish />
      <Menu />
      <Testimonials />
      <Reservation />
      <Features />
      <Event />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
