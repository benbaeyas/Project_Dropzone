import React, { useState, useEffect } from 'react';
import slider1 from '../Assets/Slider 1.1.png';
import slider2 from '../Assets/Slider 2.2.png';
import slider3 from '../Assets/Slider 3.3.png';

const images = [slider1, slider2, slider3];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 8000); // Change slide every 8 seconds
    return () => clearTimeout(timer);
  }, [current]);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <section className="w-full flex flex-col items-center bg-white py-4 px-4 -mt-16 md:-mt-20">
      <div className="group relative w-[360px] h-[80px] sm:w-[640px] sm:h-[160px] md:w-[780px] md:h-[190px] lg:w-[960px] lg:h-[240px] xl:w-[1200px] xl:h-[300px] overflow-hidden rounded-lg">
        {/* Slides */}
        <div className="w-full h-full">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slider image ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{}}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white rounded-full p-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-white rounded-full p-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Navigation */}
        <div className="absolute left-4 bottom-4 z-20 flex flex-row gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-1 h-1 sm:w-2 sm:h-3 md:w-3 md:h-3 rounded-full transition-colors ${current === idx ? 'bg-[#FCB524]' : 'bg-gray-400 hover:bg-gray-200'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;