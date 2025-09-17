import React, { useState, useEffect } from 'react';
import logoputih from '../Assets/Logo Dropzone Putih.png';
import logobiru from '../Assets/Logo Dropzone Biru.png';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set state menjadi true jika scroll lebih dari 50px, jika tidak false
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Tambahkan event listener saat komponen dimuat
        window.addEventListener('scroll', handleScroll);

        // Hapus event listener saat komponen akan di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Array kosong memastikan efek ini hanya berjalan sekali saat mount dan unmount

    return (
        <nav className="sticky top-0 z-50">
            {/* Terapkan perubahan background dan shadow di sini */}
            <div className={`
                flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 md:gap-0 
                transition-all duration-300
                ${isScrolled ? 'bg-white' : 'bg-[#FCB524]'}
            `}>
                {/* Ganti logo berdasarkan state scroll */}
                <img 
                    src={isScrolled ? logobiru : logoputih} 
                    alt="Logo" 
                    className="h-14 w-object transition-all duration-300"
                    loading='lazy' 
                />
                <form className="w-full md:flex-1 mx-auto md:mx-8 order-3 md:order-none" autoComplete="off">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
                            </svg>
                        </span>
                        <input
                            type="search"
                            className="block w-full py-2 pl-10 pr-2 text-sm rounded-lg border border-gray-300 focus:ring-black-500 focus:border-black-500 bg-white placeholder-gray-400"
                            placeholder="Search products..."
                            required
                        />
                    </div>
                </form>
                <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end py-2">
                    {/* Ganti style tombol Login berdasarkan state scroll */}
                    <button
                        className={`
                            font-semibold px-4 py-1 rounded-lg border transition-all duration-300
                            ${isScrolled 
                                ? 'bg-white text-[#FCB524] border-[#FCB524] hover:bg-[#FCB524] hover:text-white' 
                                : 'bg-white text-[#FCB524] border-[#FCB524] hover:bg-transparent hover:text-white hover:border-white'
                            }
                        `}
                        onClick={() => alert('Login clicked')}
                    >
                        Login
                    </button>
                    {/* Ganti style tombol Sign In berdasarkan state scroll */}
                    <button
                        className={`
                            font-semibold px-4 py-1 rounded-lg border transition-all duration-300
                            ${isScrolled 
                                ? 'bg-[#FCB524] text-white border-[#FCB524] hover:bg-amber-500' 
                                : 'bg-transparent text-white border-white hover:bg-white hover:text-[#FCB524]'
                            }
                        `}
                        onClick={() => alert('Sign In clicked')}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
