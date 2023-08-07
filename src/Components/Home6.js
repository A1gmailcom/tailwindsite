import React from 'react';

const Home6 = () => {
  return (
    <section className="mt-4 section">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="text-center mx-auto">
            <h2 data-aos="fade-up"style={{fontFamily: "'Poppins', sans-serif",fontWeight:'600',fontSize:'34px'}}>Share-Ready Profile within seconds</h2>
            <div data-aos="fade-up" data-aos-delay="100">
              <img
                src={require('../assets/images/share-ready.gif')}
                className="img-fluid image-lg mx-auto block max-w-xs md:max-w-full"
                alt="Share-Ready Profile"
                style={{width:'40%',height:'60%'}}
              />
            </div>
            <h6 data-aos="fade-up" className="pt-2"style={{fontFamily: "'Poppins', sans-serif",fontWeight:'600',fontSize:'15px'}}>
              <a href="#/upgrade-to-pro" style={{color:'#0d6efd'}}>Upgrade</a> to the pro version for the ultimate experience with Connct pro.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home6;
