import React from 'react';
import delivery from '../Assets/Icons/Instant delivery.png'
import rating from '../Assets/Icons/rating.png'

// Komponen Card sekarang menerima prop 'offer'
const CardOffers = ({ offer }) => {
  return (
    // Mengubah lebar tetap menjadi responsif
    <div className="flex flex-col flex-shrink-0 w-48 sm:w-56 bg-white rounded-md shadow-lg overflow-hidden">
      {/* Pastikan gambar utama juga tidak memiliki loading="lazy" */}
      <img className="w-full h-22 md:h28 object-cover" src={offer.src} alt={offer.title} />
      <div className="p-4 flex flex-col flex-grow justify-between">
        {/* Top part of the card */}
        <div>
          <h3 className="text-md font-bold text-[#222222]">{offer.title}</h3>
        </div>
        
        {/* Bottom part of the card */}
        <div>
          <p className="font-bold text-sm text-[#909090] truncate">{offer.jenisgame}</p>
          <div className="text-xl my-4 font-bold text-[#EF6000]">{offer.price}</div>
          {/* Menghapus loading='lazy' dari sini */}
          <img src={delivery} alt="Instant Delivery" className="w-22 h-5 mt-2" />
          <div className='flex'>
            <p className="text-sm text-[#909090] mt-2">{offer.toko}</p>
            {/* Menghapus loading='lazy' dari sini */}
            <img src={rating} alt="Rating" className="w-4 h-4 mt-2.5 ml-4"/>
            <p className="text-sm text-[#909090] mt-2 ml-1">{offer.rating}</p>
          </div>
          {offer.unitterjual === null ? (
            <div className="inline-block bg-[#E1EEFF] rounded-md mt-2">
              <div className="text-[#307FE2] text-xs p-1 justify-items-center">New</div>
            </div>
          ) : (
            <p className="text-sm text-[#909090] mt-2">{offer.unitterjual}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardOffers;