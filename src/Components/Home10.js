import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Home10 = () => {
  return (
    <div className="flex flex-col md:flex-row" style={{marginTop:'70px',backgroundColor:'rgba(4,69,157,.03)'}}>
      <div className="md:w-1/2" style={{marginTop:'20px'}}>
        {/* Left side GIF */}
        <img
          src={require('../assets/images/qr-scan.gif')}
          className="img-fluid image-lg mx-auto block max-w-xs md:max-w-full"
          alt="Share-Ready Profile"
          style={{ width: '20%' }}
        />
      </div>
      <div className="md:w-1/2 p-8" style={{marginTop:'50px'}}>
        {/* Right side column */}
        <h2>Share your profile with QR code</h2>
        <br />
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>For older phones without NFC share your profile with QR</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Add in zoom meeting background</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Download & Display anywhere</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home10;
