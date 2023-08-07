import React from 'react';
import './Home1.css';

const Home1 = () => {
  return (
    <section className="hero-banner" style={{marginTop:'90px'}}>
      <div className="container">
        <div className="wrap">
          <div className="row">
            <div className="col-12" style={{ display: 'flex', alignItems: 'center', marginLeft: '110px' }}>
              <div>
                <h1 className="text-black" data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '52px' }}>The most powerful business card you will ever own!</h1><br/>
                <div className="tagline">
                  <span className="color-primary font-semibold inline-block pb-3" data-aos="fade-up" data-aos-delay="100" style={{ fontWeight: 600, fontSize: '22px', color: '#04459d' }}>Paperless<strong>.</strong></span>&nbsp;
                  <span className="color-secondary font-semibold inline-block pb-3" data-aos="fade-up" data-aos-delay="200" style={{ fontWeight: 600, fontSize: '22px', color: '#f9d572' }}>Seamless<strong>.</strong></span>&nbsp;
                  <span className="font-semibold inline-block pb-3" data-aos="fade-up" data-aos-delay="250" style={{ fontWeight: 600, fontSize: '22px' }}>Timeless<strong>.</strong></span>
                </div><br/>
                <div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <div className="connect-button-container">
  <button className="custom-button">
    Click to Connect
    <span className="handshake-emoji">🤝</span>
  </button>
</div>

    <div style={{ marginLeft: '20px' }}>
      <img
        src={require('../assets/images/header-img1.png')}
        alt="Logo23"
        className="logo-image"
      />
    </div>
  </div>
</div>

              </div>        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;
