import React from 'react';
import './Home11.css';

const Home11 = () => {
  return (
    <section className="section user-types bg-black" style={{marginTop:'290px'}}>
      <div className="container slider-section1">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          <div className="col-span-2 md:col-span-2 mt-[-140px]">
            <img
              src={require('../assets/images/bottom-curved-image.png')}
              className="img-fluid first-img"
              alt="Curved bottom design element"
              style={{marginLeft:'60px'}}
            />
          </div>
          <div className="col-span-2 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="img-block mt-[-90px]" style={{marginLeft:'60px'}}>
                  <img
                    src={require('../assets/images/professionals.png')}
                    className="img-fluid"
                    alt="The modern professional’s choice of sharing information"
                    style={{width:'80%'}}
                  />
                  <div className="img-caption">
                    The modern professional’s choice of<br/> sharing information
                  </div>
                </div>
                <h6 className="mt-2" style={{marginLeft:'70px'}}>.Professionals</h6>
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="150">
                <div className="img-block mt-[-90px]">
                  <img
                    src={require('../assets/images/freelancer.png')}
                    className="img-fluid"
                    alt="Share your portfolio, social links & more with your potential clients"
                    style={{width:'80%'}}
                  />
                  <div className="img-caption">
                    Share your portfolio, social links &<br/> more with your potential clients
                  </div>
                </div>
                <h6 className="mt-2">.Freelancer</h6>
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block mt-[-90px]"style={{marginLeft:'-60px'}}>
                  <img
                    src={require('../assets/images/events.jpg')}
                    className="img-fluid"
                    alt="Extract the full potential of networking at your event with the ultimate digital visiting card"
                    style={{width:'80%'}}
                  />
                  <div className="img-caption">
                    Extract the full potential of <br/>networking at your event with the<br/> ultimate digital visiting card.
                  </div>
                </div>
                <h6 className="mt-2">.Events</h6>
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block" style={{marginLeft:'60px'}}>
                  <img
                    src={require('../assets/images/founders.jpg')}
                    className="img-fluid"
                    alt="Share all your business information with your potential clients, investors & all the stakeholders"
                    style={{width:'80%'}}
                  />
                  <div className="img-caption">
                    Share all your business information <br/>with your potential clients, investors<br/> & all the stakeholders.
                  </div>
                </div>
                <h6 className="mt-2"style={{marginLeft:'70px'}}>.Founders</h6>
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block">
                  <img
                    src={require('../assets/images/content-creators.jpg')}
                    className="img-fluid"
                    alt="Showcase your social links & your proof of work and score potential brand deals"
                    style={{width:'80%'}}
                  />
                  <div className="img-caption">
                    Showcase your social links & your <br/>proof of work and score potential<br/> brand deals.
                  </div>
                </div>
                <h6 className="mt-2">.Content Creators</h6>
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="img-block"style={{marginLeft:'-50px'}}>
                  <img
                    src={require('../assets/images/retail.jpg')}
                    className="img-fluid"
                    alt="Share your business info with all your walk-ins with Connct NFC card"
                    style={{width:'80%'}}
                  />
                  <div className="img-caption">
                    Share your business info with all your<br/> walk-ins with Connct NFC card.
                  </div>
                </div>
                <h6 className="mt-2">.Retail</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home11;
