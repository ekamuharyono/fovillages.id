import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="bg-blue-400 text-white pt-32 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
          <div
            className="md:w-1/2 mb-6 md:mb-0 grid place-items-start lg:place-items-center"
            data-aos="fade-up"
          >
            <img
              src="./image/hero.png"
              alt="Hero Image"
              className="w-96 h-auto border-b-2 border rounded-t-full shadow-lg -z-50"
            />
          </div>
          <div className="md:w-1/2" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4">
              Internet Super Cepat dengan FOVillage .NET
            </h1>
            <p className="text-lg mb-6">
              Sekali berlangganan bisa akses dimana saja!
            </p>
            <a
              href="#paket"
              className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero