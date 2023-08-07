import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faAddressCard, faLink } from '@fortawesome/free-solid-svg-icons';

const Home2 = () => {
  return (
    <section className="section bg-blue" style={{ marginTop: '80px',backgroundColor:'rgba(4,69,157,.03)' }}>
      <div className="container feature-list mt-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:order-1 order-2 flex flex-col justify-center" style={{marginLeft:'130px'}}>
            <h2 className="color-primary text-left text-blue-700 font-semibold text-3xl md:text-4xl" style={{color:'#04459d',fontWeight:'600'}}>
              Share all your contact details & more<br /> in three easy steps:
            </h2>
            <div className="mt-4" style={{marginLeft:'11px'}}>
              <div className="flex items-center space-x-4 step">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <div className="step-content text-left">
                  <h6 className="mt-4 font-semibold text-xl">
                    Download the app
                  </h6>
                  <p className="mb-0 text-gray-600 text-md">
                    Android, ios, we are everywhere!
                  </p>
                  <div className="mt-3 download-app flex flex-col md:flex-row md:items-center md:space-x-4">
  <a
    href="https://apps.apple.com/app/connct-app/id1625064091"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={require('../assets/images/Store Button.png')}
      className="img-fluid w-32"
      alt="App Store"
    />
  </a>
  <a
    href="https://play.google.com/store/apps/details?id=com.connct.waves_app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={require('../assets/images/Store Button2.png')}
      className="img-fluid w-32 mt-4 md:mt-0"
      alt="Play Store"
    />
  </a>
</div>

                </div>
              </div>

              <div className="mt-8 flex items-center space-x-4 step">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <div className="step-content text-left">
                  <h6 className="font-semibold text-xl">Create your profile</h6>
                  <p>Showcase your business by adding your contact details, social media & other important business info.</p>
                </div>
              </div>

              <div className="mt-8 flex items-center space-x-4 step">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div className="step-content text-left">
                  <h6 className="font-semibold text-xl">Link your profile to the digital business card</h6>
                  <p>Connect your profile with the ultimate digital business card & be one-tap ready</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:order-2 order-1">
            <img
              src={require('../assets/images/share-contact.gif')}
              className="mx-auto object-contain h-96 md:h-auto md:max-h-full"
              alt="Contact GIF"
           
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
