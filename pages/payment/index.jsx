import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'

const PaymentPage = () => {

  const [scrollY, setScrollY] = useState(0)
  const isScrolled = scrollY > 0
  // const { isShowPopup } = useZustandState(state => state)

  const bankPaymentList = [
    {
      'name': 'Bank BCA',
      'channel': 'bca',
      'icon': 'bca.png'
    },
    {
      'name': 'Bank Mandiri',
      'channel': 'mandiri',
      'icon': 'mandiri.png'
    },
    {
      'name': 'Bank BNI',
      'channel': 'bni',
      'icon': 'bni.png'
    },
    {
      'name': 'Bank BRI',
      'channel': 'bri',
      'icon': 'bri.png'
    },
    {
      'name': 'Bank Syariah Indonesia (BSI)',
      'channel': 'bsi',
      'icon': 'bsi.png'
    },
    {
      'name': 'Bank Permata',
      'channel': 'permata',
      'icon': 'permata.png'
    },
    {
      'name': 'Bank Danamon',
      'channel': 'danamon',
      'icon': 'danamon.png'
    },
    {
      'name': 'Bank Muamalat',
      'channel': 'bmi',
      'icon': 'bmi.png'
    },
    {
      'name': 'Cimb Niaga',
      'channel': 'cimb',
      'icon': 'cimb.png'
    },
  ]

  const geraiPaymentList = [
    {
      'name': 'Alfamart',
      'channel': 'alfamart',
      'icon': 'alfamart.png'
    },
    {
      'name': 'Indomaret',
      'channel': 'indomaret',
      'icon': 'indomaret.png'
    }
  ]

  const [showContent, setShowContent] = useState({
    bank: false,
    gerai: false,
  });

  const [paymentMethod, setPaymentMethod] = useState('')
  const [showPaymentMethod, setShowPaymentMethod] = useState(false)

  const handleShowContent = (content) => {
    setShowContent((prevState) => ({
      ...prevState,
      [content]: !prevState[content],
    }));
  };


  return (
    <div className=''>
      <Navbar isScrolled={isScrolled} />
      <div className='text-center pt-20'>
        <h1 className='text-lg font-semibold text-blue-400'>Cek Pembayaran</h1>
        <p className='text-xs text-slate-600 opacity-50'>Bayar dan nikmati internet tanpa batas!</p>

        {/* Input user ID pelanggan */}
        <div className='flex flex-col w-9/12 mx-auto mt-2'>
          <label htmlFor="IDPel" className='text-left text-md text-blue-400'>ID Pelanggan</label>
          <input
            type="text"
            id='IDPel'
            className='text-sm border rounded-md py-1 px-2 outline-blue-200'
            placeholder='Nomor ID pelanggan' />
        </div>

        {/* List metode pembayaran */}
        <div className='text-left w-9/12 mx-auto mt-3 text-sm'>
          <h1 className='mb-1 text-md text-blue-400'>Metode Pembayaran</h1>
          <hr className='p-1' />
          <div className='w-full border rounded-lg overflow-hidden h-max px-2 py-1 my-1 transition-all duration-300 ease-in-out'>
            <div className='flex justify-between items-center' onClick={() => setShowPaymentMethod(!showPaymentMethod)}>
              <h1 className=''>{paymentMethod ? paymentMethod : 'Pilih Metode Pembayaran'}</h1>
              <svg className={`${showPaymentMethod ? 'rotate-180' : ''} w-6 h-6 text-gray-400 transform transition-transform duration-300`} viewBox="0 0 24 24"        >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className={!showPaymentMethod ? 'hidden' : 'border-t mt-1'}>
              {/* payment method VA */}
              <div className='w-full border-b overflow-hidden h-max px-2 py-1 transition-all duration-300 ease-in-out' onClick={() => handleShowContent('bank')}>
                <div className='flex justify-between items-center'>
                  <h1 className=''>Transfer Bank</h1>
                  <svg className={`${showContent.bank ? 'rotate-180' : ''} w-6 h-6 text-gray-400 transform transition-transform duration-300`} viewBox="0 0 24 24"        >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={!showContent.bank ? 'max-h-0 overflow-hidden' : 'max-h-full'}>
                  <ul className='border-b mt-1'>
                    {bankPaymentList.map((payment) => (
                      <li key={payment.name} className='flex text-xs items-center border-t py-2 px-1 transition-opacity duration-300' onClick={() => {
                        setPaymentMethod(payment.name)
                        setShowPaymentMethod(false)
                      }}>
                        <Image src={`/image/${payment.icon}`} alt={payment.icon} width='30' height='10' />
                        <span className='ml-3'>{payment.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* payment method gerai */}
              <div className='w-full border-b relative px-2 py-1' onClick={() => handleShowContent('gerai')}>
                <div className='flex justify-between items-center'>
                  <h1>Alfamart / Indomaret</h1>
                  <svg className={`${showContent.gerai ? 'rotate-180' : ''} w-6 h-6 text-gray-400 transform transition-transform duration-300`} viewBox="0 0 24 24"        >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={!showContent.gerai ? 'max-h-0 overflow-hidden' : 'max-h-full'}>
                  <ul className='border-b mt-1'>
                    {geraiPaymentList.map((payment) => (
                      <li key={payment.name} className='flex text-xs items-center border-t py-2 px-1 transition-opacity duration-300' onClick={() => {
                        setPaymentMethod(payment.name)
                        setShowPaymentMethod(false)
                      }}>
                        <Image src={`/image/${payment.icon}`} alt={payment.icon} width='30' height='10' />
                        <span className='ml-3'>{payment.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* payment method QRIS */}
              <div className='w-full border-b relative px-2 py-1 flex justify-between' onClick={() => {
                setPaymentMethod('QRIS')
                setShowPaymentMethod(false)
              }}>
                <span>QRIS</span>
                <Image src='/image/qris.png' alt='qris' width='50' height='0' />
              </div>
            </div>
          </div>
        </div>

        {/* Detail Pembayaran */}
        <div className='text-left w-9/12 mx-auto mt-3 text-sm'>
          <h1 className='mb-1 text-blue-400'>Detail Pembayaran</h1>
          <hr className='p-1' />
          <div className='opacity-50'>
            <div className='flex justify-between text-xs items-center'>
              <div id="left">
                ID Pelanggan
              </div>
              <div id="right">082153393216</div>
            </div>
            <div className='flex justify-between text-xs items-center'>
              <div id="left">
                Nama Pelanggan
              </div>
              <div id="right">Eka Muharyono</div>
            </div>
            <div className='flex justify-between text-xs items-center'>
              <div id="left">
                Paket Langganan
              </div>
              <div id="right">Reguler</div>
            </div>
            <div className='flex justify-between text-xs items-center'>
              <div id="left">
                Harga Langganan
              </div>
              <div id="right">Rp. 150.000</div>
            </div>
            <div className='flex justify-between text-xs items-center'>
              <div id="left">
                PPN 11%
              </div>
              <div id="right">Rp. 0</div>
            </div>
            <hr className='mt-2 mb-1' />
            <div className='flex justify-between text-xs items-center'>
              <div id="left">
                Total Pembayaran
              </div>
              <div id="right">Rp. 150.000</div>
            </div>
          </div>
        </div>
        <button type='submit' className='bg-blue-300 w-9/12 mt-3 px-3 py-2 rounded-md'>
          <span className='text-white drop-shadow-md'>Bayar Sekarang</span>
        </button>
      </div>
    </div >
  )
}

export default PaymentPage