import React, { useEffect, useState } from 'react';
import './BackToTop.css';
import { IonIcon } from '@ionic/react';
import { chevronUp } from 'ionicons/icons';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="#top"
      className={`back-top-btn ${isVisible ? 'active' : ''}`}
      aria-label="back to top"
      data-back-top-btn
    >
      <IonIcon icon={chevronUp} aria-hidden="true" />
    </a>
  );
};

export default BackToTop;
