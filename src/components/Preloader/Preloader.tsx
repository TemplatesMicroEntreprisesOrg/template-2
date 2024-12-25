import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader: React.FC = () => {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.querySelector("[data-preaload]");
      if (preloader) {
        preloader.classList.add("loaded");
      }
      document.body.classList.add("loaded");
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="preload" data-preaload>
      <div className="circle"></div>
      <p className="text">Grilli</p>
    </div>
  );
};

export default Preloader;
