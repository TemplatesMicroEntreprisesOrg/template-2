import React, { useEffect, useState } from 'react';
import './Hero.css';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderItems = [
    {
      bgImage: '/assets/hero-slider-1.jpg',
      subtitle: 'Tradational & Hygine',
      title: 'For the love of delicious food',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      bgImage: '/assets/hero-slider-2.jpg',
      subtitle: 'Delightful Experience',
      title: 'Flavors Inspired by the Seasons',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      bgImage: '/assets/hero-slider-3.jpg',
      subtitle: 'Amazing & Delicious',
      title: 'Where every flavor tells a story',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliderItems.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 7000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {sliderItems.map((item, index) => (
          <li
            key={index}
            className={`slider-item ${currentSlide === index ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img
                src={item.bgImage}
                width="1880"
                height="950"
                alt=""
                className="img-cover"
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal">
              {item.subtitle}
            </p>
            <h1 className="display-1 hero-title slider-reveal">{item.title}</h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={prevSlide}
      >
        <IonIcon icon={chevronBackOutline} />
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={nextSlide}
      >
        <IonIcon icon={chevronForwardOutline} />
      </button>
      <a href="#" className="hero-btn has-after">
        <img src="/assets/hero-icon.png" width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
};

export default Hero;
