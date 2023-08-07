import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Home7 = () => {
  return (
    <div className="flex flex-col md:flex-row" style={{marginTop:'70px',backgroundColor:'rgba(4,69,157,.03)'}}>
      <div className="md:w-1/2" style={{marginTop:'50px'}}>
        {/* Left side GIF */}
        <img
          src={require('../assets/images/share-ready.gif')}
          className="img-fluid image-lg mx-auto block max-w-xs md:max-w-full"
          alt="Share-Ready Profile"
          style={{ width: '70%' }}
        />
      </div>
      <div className="md:w-1/2 p-8" style={{marginTop:'50px'}}>
        {/* Right side column */}
        <h2>Track your connections in real-time</h2>
        <br />
        <h3>Real-time auto-saving ensures you never lose anyone you connect with.</h3>
        <br />
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Track your customers</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Connect with prospects anytime</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Download & Integrate to CRM for conversion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home7;
