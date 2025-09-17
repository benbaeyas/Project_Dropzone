import React from 'react'
import {DataIcons} from '../Data/DataIcons';
import { useState } from 'react';
import icon1 from '../Assets/Icons/Item.png';
import icon2 from '../Assets/Icons/Top up.png';

const Icons = () => {

      const [activeTab, setActiveTab] = useState('profile');
  
      const tabs = [
          { id: 'Item', name: 'Item', content: 'This is some placeholder content for the Item tab.' },
          { id: 'Top up', name: 'Top up', content: 'This is some placeholder content for the Top up tab.' },
      ];
  
      const activeTabStyle = "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500";
      const inactiveTabStyle = "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
  
  return (
    <>
      <section className="w-full flex flex-col items-center">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                {tabs.map((tab) => (
                    <li key={tab.id} className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id ? activeTabStyle : inactiveTabStyle}`}
                            onClick={() => setActiveTab(tab.id)}
                            type="button"
                            role="tab"
                            aria-controls={tab.id}
                            aria-selected={activeTab === tab.id}
                        >
                            {tab.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div id="tab-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === tab.id ? '' : 'hidden'}`}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">{tab.content}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Icons Section */}
        <div className="p-4 -mt-4 shadow-xl rounded-lg text-center bg-white">
          <div className='flex items-center gap-2 mb-12 mx-8 sm:mx-4 md:mx-12  p-4'>
            <img src={icon1} alt="Item" className="w-10 h-10 md:w-14 md:h-14" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Item</h2>
          </div>
          <div className='flex flex-col items-center'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 w-full max-w-5xl'>
              {DataIcons.map((icon, idx) => (
                <div key={idx} className="relative group cursor-pointer">
                  {/* Background Card */}
                  <div className="relative rounded-md pt-16 pb-4 px-2 shadow-md overflow-hidden">
                      <img src={icon.src} alt="" className="absolute inset-0 w-full h-full object-cover blur-[2px]" />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,181,36,0.24)_0%,rgba(252,181,36,0.94)_56.97%)]"></div>
                      <span className="relative z-10 text-white font-semibold text-center block h-12 px-6 mt-2">{icon.alt}</span>
                  </div>
                  {/* Image */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-28 h-28 p-1 group-hover:-translate-y-2 transition-transform duration-300">
                    <img src={icon.src} alt={icon.alt} className="w-full h-full object-cover rounded-md" loading="lazy"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Icons