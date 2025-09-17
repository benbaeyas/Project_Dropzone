import React, { useRef } from 'react';
import { DataOffers } from '../Data/DataOffers';
import Card from './CardOffers';
import '../index.css'
import WDP from '../Assets/Icons/WDP Background.png';

const SpecialOffers = () => {
  const scrollContainer = useRef(null);

  return (
    <section className="bg-[#F2FEFF] mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mx-5 mb-2">Top Up Diamond Mobile legends Pengiriman Instant</h2>
      <div className="w-full mx-auto relative py-10">
          <img 
            src={WDP} 
            alt="Background" 
            className="absolute inset-0 w-object h-full object-cover"
          />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
            </div>
            <div 
              ref={scrollContainer} 
              className="flex space-x-6 overflow-x-auto pl-72 md:pl-80 no-scrollbar"
            >
              {DataOffers.map((offer, index) => (
                <Card key={index} offer={offer} />
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
