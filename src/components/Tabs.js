import React, { useState } from 'react';
import TopUpSection from './TopUpSection';
import ItemsSection from './ItemsSection';
import iconTopUp from '../Assets/Icons/Top up.png';
import iconItems from '../Assets/Icons/Item.png';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('topup');

    return (
        <section className="p-4 -mt-4 mb-8 shadow-xl rounded-lg text-center bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-24">
            <div className="flex justify-center border-b border-gray-300">
                <button
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors duration-300 ${activeTab === 'topup' ? 'border-b-2 border-[#FCB524] text-[#FCB524]' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('topup')}
                >
                    <img src={iconTopUp} alt="Top Up" className="w-8 h-8" />
                    Top Up
                </button>
                <button
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors duration-300 ${activeTab === 'items' ? 'border-b-2 border-[#FCB524] text-[#FCB524]' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('items')}
                >
                    <img src={iconItems} alt="Items" className="w-8 h-8" />
                    Items
                </button>
            </div>
            <div className="py-16 flex justify-center">
                {activeTab === 'topup' ? <TopUpSection /> : <ItemsSection />}
            </div>
        </section>
    );
};

export default Tabs;
