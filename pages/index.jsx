import Accordion from '@/components/Accordion/Accordion'
import Alert from '@/components/Alert/Alert'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Product from '@/components/Product/Product'
import Testimoni from '@/components/Testimoni/Testimoni'
import Popup from '@/components/Popup/Popup'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useZustandState } from '@/state/state'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const { isShowPopup } = useZustandState(state => state)

  const products = [
    {
      "title": 'Hemat',
      "description": "Cocok untuk pengguna internet ringan.",
      "price": "100.000",
      "benefit1": "2",
      "benefit2": "10Mbps",
      "benefit3": "Unlimited",
      "benefit4": "Free",
    },
    {
      "title": 'Reguler',
      "description": "Cocok untuk pengguna internet umum.",
      "price": "150.000",
      "benefit1": "5",
      "benefit2": "20Mbps",
      "benefit3": "Unlimited",
      "benefit4": "Free",
    },
    {
      "title": 'Premium',
      "description": "Cocok untuk streaming video & music.",
      "price": "230.000",
      "benefit1": "8",
      "benefit2": "30Mbps",
      "benefit3": "Unlimited",
      "benefit4": "Free",
    }
  ]

  const testimonis = [
    {
      "username": "John Doe",
      "profesi": "Pengusaha",
      "feedback": "Saya sangat puas dengan layanan internet dari FOVillage.NET.Koneksi internetnya stabil dan cepat, serta bisa diakses di mana saja."
    },
    {
      "delay": "300",
      "username": "Jane Doe",
      "profesi": "Freelancer",
      "feedback": "FOVillage.NET membantu saya untuk tetap terhubung dengan dunia digital kapan saja dan di mana saja. Layanan yang sangat direkomendasikan."
    },
    {
      "delay": "600",
      "username": "Joe Smith",
      "profesi": "Pengajar",
      "feedback": "FOVillage.NET membantu saya mengatasi masalah koneksi internet di rumah dengan cepat dan mudah. Saya sangat puas dengan layanan ini."
    },
  ]

  const accordions = [
    {
      "title": "Apa itu FOVillage.net?",
      "content": "FOVillage.net adalah penyedia layanan internet yang menawarkan tiga paket: Hemat, Reguler, dan Premium. Setiap paket memiliki kecepatan dan batasan perangkat yang berbeda, namun semua paket memungkinkan Anda untuk mengakses internet di mana saja hanya dengan satu langganan."
    },
    {
      "title": "Apa itu DesaLink Voucher?",
      "content": "DesaLink Voucher adalah voucher yang didapatkan setelah berlangganan dengan FOVillage .NET. Voucher ini digunakan untuk anda agar tetap terhubung ke internet dimana saja selama masih mendapatkan WiFi dengan SSID FOVi Hotspot. Satu voucher DesaLink dapat digunakan lebih dari 1 device."
    },
    {
      "title": "Apakah FOVillage.net berlaku FUP?",
      "content": "Tidak, saat berlangganan di FOVillage .NET anda tidak dikenakan FUP atau batasan kuota apapun alias Unlimited Kuota."
    },
    {
      "title": "Berapa biaya pemasangan FOVillage.net?",
      "content": "Untuk berlangganan dengan FOVillage .Net anda tidak perlu mengeluarkan uang lebih untuk biaya pemasangan atau dengan kata lain Gratis Biaya Pasang. Anda hanya perlu membayar untuk tagihan bulan pertama setelah pemasangan selesai dan Internet di rumah anda sudah aktif."
    },
  ]

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <>
      {/* Navbar Section */}
      <Navbar isScrolled={isScrolled} />

      {/* Add Hero Section */}
      <Hero />

      {/* Add Features Section */}
      <section id="paket" className={`${styles.packages} py-20`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Paket Internet</h2>
          <div className={styles.table}>
            {products.map((product, index) => (
              <Product key={index} title={product.title} description={product.description} price={product.price} benefit1={product.benefit1} benefit2={product.benefit2} benefit3={product.benefit3} benefit4={product.benefit4} />
            ))}
          </div>
        </div>
      </section >

      {/* Testimonial Section */}
      <section id="testimonials" className="testimonials py-20 bg-gray-100" >
        <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Testimoni Pelanggan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonis.map((testimoni, index) => (
              <Testimoni key={index} username={testimoni.username} profesi={testimoni.profesi} feedback={testimoni.feedback} delay={testimoni.delay} />
            ))}
          </div>
        </div>
      </section>

      {/* Add FAQ Section */}
      <section id="faq" >
        <div className="w-full py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
            <div className="accordion">
              {accordions.map((accordion, index) => (
                <Accordion key={index} title={accordion.title} content={accordion.content} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add Footer Section */}
      <Footer />

      {isShowPopup && (
        <div className='w-11/12 md:w-2/6 h-72 rounded-2xl fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
          <Popup />
        </div>
      )}

      {/* alert */}
      {/* <Alert /> */}

    </>
  )
}
