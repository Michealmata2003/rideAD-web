import React from 'react';
import Slides from '../components/slider/Slides';
import About from '../components/about/About';
import Brands from '../components/brands/Brands';
import HowItWorks from '../components/works/HowItWorks';
import FAQs from '../components/faqs/FAQs';


const Hero = () => {
  return (
    <div>
      <Slides />
      <About />
      <Brands />
      <HowItWorks />
      <FAQs />
    </div>
  )
}

export default Hero
