import React, { useState, useRef } from 'react'
import Alert from '../Alert/Alert';

const Footer = () => {

  const [isSubmit, setIsSubmit] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzk-H_RIHz8xHlWvNM8fVHUqEDq-vXLEYEO17kOzUS0gQy4NjWMQEFxC8zP3Fm-PsV4ew/exec'
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmit(true);


    fetch(scriptURL, { method: 'POST', body: new FormData(formRef.current) })
      .then((response) => {
        setShowAlert(true)
        setIsSubmit(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 4000);
        formRef.current.reset();
      })
      .catch((error) => {
        setIsSubmit(false);
      });
  };

  return (
    <section id="/" className="bg-gray-900 text-white" >
      <footer className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tentang Kami</h3>
              <p className="mb-4 text-gray-500">
                FOVillage.NET adalah layanan internet wifi yang memberikan koneksi
                cepat, stabil, dan tanpa batasan kuota dengan harga terjangkau
                bagi masyarakat. Sekali berlangganan bisa akses dimana saja.
              </p>
              <p className="mb-4 text-gray-500">
                Kontak kami untuk informasi lebih lanjut:
              </p>
              <ul className="list-none">
                <li className="flex items-center mb-2">
                  <i className="fas fa-phone mr-2" />
                  <a href="https://wa.me/6285750278549">+62 857-5027-8549</a>
                </li>
                <li className="flex items-center mb-2">
                  <i className="fas fa-envelope mr-2" />
                  <a href="mailto:cs@fovillage.net.id">cs@fovillage.net.id</a>
                </li>
              </ul>
            </div>
            <div className="md:ml-7">
              <div>
                <h3 className="text-2xl font-bold mb-4">Layanan</h3>
                <ul className="list-none">
                  <li>
                    <a href="https://forms.gle/Tv3uunYsJsxr4uNP6" className="block py-1 text-gray-500"                    >
                      Paket Hemat
                    </a>
                  </li>
                  <li>
                    <a href="https://forms.gle/Tv3uunYsJsxr4uNP6" className="block py-1 text-gray-500"                    >
                      Paket Reguler
                    </a>
                  </li>
                  <li>
                    <a href="https://forms.gle/Tv3uunYsJsxr4uNP6" className="block py-1 text-gray-500"                    >
                      Paket Premium
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" my-4">
                <h3 className="text-2xl font-bold cursor-pointer">
                  Kebijakan Privasi
                </h3>
                <h3 className="text-2xl font-bold cursor-pointer">
                  Syarat &amp; Ketentuan
                </h3>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
              <p className="mb-4 text-gray-500">
                Hubungi customer service kami melalui live chat untuk mendapatkan
                bantuan lebih lanjut.
              </p>
              <form name="submit-to-google-sheet" className="text-slate-900" onSubmit={handleSubmit} ref={formRef}>
                <div className="block md:flex items-center">
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full mb-4 py-2 px-3 border border-gray-400 rounded-lg mr-2"
                    name="nama"
                    required=""
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 py-2 px-3 border border-gray-400 rounded-lg"
                    name="email"
                    required=""
                  />
                </div>
                <textarea
                  placeholder="Pesan"
                  className="w-full py-2 px-3 border border-gray-400 rounded-lg mb-4"
                  name="pesan"
                  required=""
                  defaultValue={""}
                />
                <button type="submit" className={`${isSubmit ? 'hidden' : ''} btn-submit bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg`}               >
                  Kirim
                </button>
                <button type="button" className={`${isSubmit ? '' : 'hidden'} btn-loading py-2 px-4 bg-blue-500 text-white rounded-lg inline-flex items-center`}                >
                  <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"                  >
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 3.042 1.135 5.824 3 7.938l-.707.707A9.503 9.503 0 000 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-.34-.023-.675-.05-1.008l-.904.904A7.963 7.963 0 0112 20a7.962 7.962 0 01-7.291-4.709z"                    ></path>
                  </svg>
                  Loading
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 py-2 text-center">
        <p className=" text-gray-500">
          © 2023 FOVillage.NET. All rights reserved.
        </p>
      </div>
      {showAlert && <Alert />}
      {/* <Alert /> */}
    </section>
  )
}

export default Footer