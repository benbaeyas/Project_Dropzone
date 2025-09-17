import React from 'react';
import {DataTopup} from '../Data/DataIcons';

const TopUpSection = () => (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 w-full max-w-5xl'>
        {DataTopup.map((icon, idx) => (
            <div key={idx} className="relative group cursor-pointer">
                <div className="relative rounded-md pt-16 pb-4 px-2 shadow-md overflow-hidden">
                    <img src={icon.src} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px]" loading="lazy"/>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,181,36,0.24)_0%,rgba(252,181,36,0.94)_56.97%)]"></div>
                    <span className="relative z-10 text-white font-semibold text-center block h-12 px-6 mt-2">{icon.alt}</span>
                </div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 p-1 group-hover:-translate-y-2 transition-transform duration-300">
                    <img src={icon.src} alt={icon.alt} className="w-full h-full object-cover rounded-md" loading="lazy"/>
                </div>
            </div>
        ))}
    </div>
);

export default TopUpSection;
