import React from 'react';
import { DataForYou } from '../Data/DataForYou';
import Card from './CardForYou';
import '../index.css';

const ForYou = () => {
  return (
    <section className="mb-8">
        {/* Judul yang akan menjadi sticky */}
        <h2 className="
          text-2xl font-bold border-b-2 border-[#FCB524] text-[#FCB524] p-2 mx-16 mb-4
          sticky top-[70px] md:top-[80px] 
        bg-white
          z-10
        ">
          Penawaran Terbaik Untukmu
        </h2>
      {/* Kontainer utama yang terpusat */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid untuk menampilkan produk */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {DataForYou.map((foryou, index) => (
            <Card key={index} foryou={foryou} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYou;
