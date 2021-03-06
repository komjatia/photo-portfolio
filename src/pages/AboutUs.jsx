import React from 'react';

// Import components
import AboutSection from '../components/AboutSection';
import SericesSecion from '../components/ServicesSection';
import FaqSection from '../components/faqSection';

import {motion} from 'framer-motion';
import {FullPageAnimations} from '../components/animations'

export default function AboutUs() {
    return (
        <motion.div exit='exit' variants={FullPageAnimations} initial='hidden' animate='show'>
            <AboutSection />
            <SericesSecion />
            <FaqSection />
        </motion.div>
    )
}