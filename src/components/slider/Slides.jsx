import React, { useState, useEffect, useRef } from 'react';
import { slides } from './SliderData'; 

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slides.length;

  const autoScroll = true;
  const intervalTime = 100000;
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoScroll) {
      slideInterval.current = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(slideInterval.current);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'current' : ''}`}
          style={{
            backgroundImage: `url(${slide.background})`,
          }}
        >
          <div className="content">
            {slide.nav}
            {slide.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slides;
