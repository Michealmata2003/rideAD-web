import React from 'react';
import Slides from '../components/slider/Slides';
import About from '../components/about/About';
import Brands from '../components/brands/Brands';
import HowItWorks from '../components/works/HowItWorks';
import FAQs from '../components/faqs/FAQs';
import Chat from '../components/chat/Chat';
import NewsLetter from '../components/newsletter/NewsLetter';
import Footer from '../components/footer/Footer';
import Policy from '../components/policy/Policy';


const Hero = () => {
  return (
    <div>
      <Slides />
      <About />
      <Brands />
      <HowItWorks />
      <FAQs />
      <Chat />
      <NewsLetter />
      <Footer />
      <Policy />
    </div>
  )
}

export default Hero
