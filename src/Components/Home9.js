import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Home9 = () => {
  return (
    <div className="flex flex-col md:flex-row" style={{marginTop:'70px'}}>
      <div className="md:w-1/2 p-8" style={{marginTop:'50px',marginLeft:'110px'}}>
        {/* Right side column */}
        <h2>Share your profile with a link</h2>
        <br />
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Update your email signature with the your custom URL</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Share with anyone as a text</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6">
              <FontAwesomeIcon icon={faCheckCircle} className="text-white" style={{ color: '#f9d572' }} />
            </div>
            <span>Add on your website</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2" style={{marginTop:'50px'}}>
        {/* Left side GIF */}
        <img
          src={require('../assets/images/groupy.png')}
          className="img-fluid image-lg mx-auto block max-w-xs md:max-w-full"
          alt="Share-Ready Profile"
       
        />
      </div>
    </div>
  );
};

export default Home9;
