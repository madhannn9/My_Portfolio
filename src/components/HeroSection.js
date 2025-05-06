import React from 'react';
import profileImg from '../assets/madhan-img.jpg'; // Make sure this image is added to assets

function HeroSection() {
  return (
    <div className="container-fluid" style={{ marginTop: '80px' }}>
      <div className="row text-center align-items-center my-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={profileImg}
            alt="Madhan Abbineni"
          />
        </div>
        <div className="col-12 col-md-6 pt-5" style={{ fontSize: '40px' }}>
          Hi, I am <span className="text-info">Madhan Abbineni</span>
          <div style={{ fontSize: '20px' }}>
            I'm a freelancer from India.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
