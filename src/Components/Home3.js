import React from 'react';
import './Home1.css';

const Home3 = () => {
  return (
    <div className="mt-40">
      <section className="section info-text">
        <div className="container">
          <div className="col-sm-7 mx-auto">
            <h3
              className="text-center fw-800 mb-0"
              data-aos="fade-up"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '800',
                fontSize: '30px',
              }}
            >
              Add{' '}
              <span className="color-primary" style={{ color: '#04459d' }}>
                Unlimited{' '}
              </span>
              Information.&nbsp;{' '}
              <span className="color-secondary" style={{ color: '#f9d572' }}>
                No apps
              </span>{' '}
              required to <br/>receive.&nbsp;{' '}
              <span className="color-secondary" style={{ color: '#f9d572' }}>
                Secured
              </span>{' '}
              data sharing.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home3;
