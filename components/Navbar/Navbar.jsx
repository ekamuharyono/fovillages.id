import React from 'react'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react';
import { useZustandState } from '@/state/state';

const Navbar = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isShowPopup, setShowPopup } = useZustandState(state => state)

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetEl = document.querySelector(e.currentTarget.getAttribute('href'));
      const targetElTop = targetEl.getBoundingClientRect().top + window.pageYOffset - 64; // tambahkan offset -100px
      window.scrollTo({
        top: targetElTop,
        behavior: "smooth"
      });
    };
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll)
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll)
      })
    }
  }, [])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='bg-white'>
      <nav className={`${isScrolled ? 'backdrop-blur-md' : ''} shadow-md fixed w-screen ${styles.primary__header}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="navLogo text-white font-bold text-2xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}              >
                FOVillage .NET
              </a>
            </div>
            <div className="relative menu-toggle" onClick={handleMenuToggle}>
              <div className={`${menuOpen ? 'hidden' : ''} md:hidden menu-icon transform translate-y-5 -translate-x-1`}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M3 12H21" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  <path d="M3 6H21" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  <path d="M3 18H21" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
              <div className={`${menuOpen ? '' : 'hidden'} md:hidden menu-icon-close transform translate-y-5 -translate-x-1`}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M18 6L6 18" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                  <path d="M6 6L18 18" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className={`${isScrolled ? '' : 'text-white'} text-center transition-all top-14 md:top-0 absolute bg-blur md:bg-transparent py-3 flex w-full transform ${menuOpen ? '' : '-translate-x-96'} md:translate-x-0 md:w-max flex-col md:relative md:flex md:flex-row items-center list-link`}>
              <a href="#home" className="border-b md:w-max w-full md:border-none py-2 hover:text-gray-600 font-medium text-lg mr-4 blur-none" >
                Home
              </a>
              <a href="#paket" className="w-full border-b md:w-max md:border-none py-2 hover:text-gray-600 font-medium text-lg mr-4" >
                Produk &amp; Promo
              </a>
              <a href="#testimonials" className="border-b md:w-max w-full md:border-none py-2 hover:text-gray-600 font-medium text-lg mr-4" >
                Testimoni
              </a>
              <a href="#faq" className="border-b md:w-max w-full md:border-none py-2 hover:text-gray-600 font-medium text-lg mr-4 md:mr-0" >
                FAQ
              </a>
              <span className="hover:bg-blue-900 border transition-all duration-100 px-3 rounded-full cursor-pointer md:w-max w-full py-2 hover:border-blue-900 hover:text-gray-300 drop-shadow-md font-medium ml-3 mr-4 md:mr-0" onClick={setShowPopup}>
                Cek Pembayaran
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar