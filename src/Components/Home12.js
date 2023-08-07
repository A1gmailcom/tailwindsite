import React from 'react';
import './Home12.css'; // Make sure to import your CSS file

const Home12 = () => {
  return (
    <section className="section bg-black">
      <div className="container slider-section2">
        <div className="text-len" data-aos="fade-up" style={{marginLeft:'70px'}}>
          <h2 className="text-left">Let’s hear what people say</h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-3" data-aos="fade-up" data-aos-delay="100" style={{marginLeft:'134px'}}>
            <img
              src={require('../assets/images/client-testmonial.jpg')}
              alt="Client Testimonial"
              className="mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-up" style={{color:'white'}}>
            <h5 className="text-left">Great Design & Solution!</h5>
            <p className="text-left">
              Easy to use and the best way to share your information with your potential client. It has worked great when I had to share information with them
            </p>
            <div className="flex items-center mt-4">
              <div className="w-12">
                <img
                  src={require('../assets/images/testi-user-pic.png')}
                  className="mx-auto"
                  alt="User"
                />
              </div>
              <div className="ml-2 text-left">
                <h5>Emad</h5>
                <p className="text-sm">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home12;
