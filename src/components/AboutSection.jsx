import React from "react";


// Import images
import guyWithGiutar from '../img/home1.png';

// Import Style 
import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';

// Framer Motion
import {motion} from 'framer-motion';


const AboutSection = () => {

  const titleAnimation = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: .8}},
  };

  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: {duration: .6, staggerChildren: .5, when: 'afterChildren'}},
  }

  return (
    <About>
      <Description>
        <motion.div  variants={container} initial='hidden' animate='show' className="title">
          <Hide>
            <motion.h2 
            variants={titleAnimation}>
              We work to make
              </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
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
