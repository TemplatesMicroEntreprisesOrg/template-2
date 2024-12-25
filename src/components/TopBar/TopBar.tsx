import './TopBar.css';
import { IonIcon } from '@ionic/react';
import { callOutline, locationOutline, mailOutline, timeOutline } from 'ionicons/icons';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <IonIcon icon={locationOutline} aria-hidden="true" />
          </div>
          <span className="span">Restaurant St, Delicious City, London 9578, UK</span>
        </address>
        <div className="separator"></div>
        <div className="topbar-item item-2">
          <div className="icon">
            <IonIcon icon={timeOutline} aria-hidden="true" />
          </div>
          <span className="span">Daily : 8.00 am to 10.00 pm</span>
        </div>
        <a href="tel:+11234567890" className="topbar-item link">
          <div className="icon">
            <IonIcon icon={callOutline} aria-hidden="true" />
          </div>
          <span className="span">+1 123 456 7890</span>
        </a>
        <div className="separator"></div>
        <a href="mailto:booking@restaurant.com" className="topbar-item link">
          <div className="icon">
            <IonIcon icon={mailOutline} aria-hidden="true" />
          </div>
          <span className="span">booking@restaurant.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
