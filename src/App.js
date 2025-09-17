import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Tabs from './components/Tabs';
import SpecialOffers from './components/SpecialOffers';
import ForYou from './components/ForYou';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="Dropzone">
      <Navbar />
      <div className='mt-[70px] md:mt-[80px]'>
        <Slider />
        <Tabs />
        <SpecialOffers />
        <ForYou />
        <Footer />
      </div>
    </div>
  );
}

export default App;
