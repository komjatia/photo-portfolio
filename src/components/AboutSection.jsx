import React from "react";


// Import images
import guyWithGiutar from '../img/home1.png';

// Import Style 
import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span> come</h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Contact us for eny photography or videography idea you have. We have professionals with amazing skills.</p>
        <button>Contact Us</button>
        </Description>
      <div>
        <Image>
            <img src={guyWithGiutar} alt="guy with guitar"/>
        </Image>   
      </div>
      </About>
  )
};
export default AboutSection;
