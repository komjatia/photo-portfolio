import React from "react";


// Import images
import guyWithGiutar from '../img/home1.png';

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span> come</h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
      </div>
      <p>Contact us for eny photography or videography idea you have. We have professionals with amazing skills.</p>
      <button>Contact Us</button>
      <div className="">
        <div className="image">
            <img src={guyWithGiutar} alt="guy with guitar"/>
        </div>
      </div>
    </div>
  )
};

export default AboutSection;
