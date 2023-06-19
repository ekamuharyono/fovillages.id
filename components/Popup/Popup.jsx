import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Popup = () => {
  const [customer, setCustomer] = useState()
  const [isRegistered, setIsRegistered] = useState(true)

  const FormInput = () => {
    const [inputValue, setInputValue] = useState('')

    const handleGetCustomer = (e) => {
      e.preventDefault()
      axios.get(`/api/get-user?userId=${inputValue}`)
        .then((respon) => {
          setCustomer(respon.data.data)
          setIsRegistered(true)
        })
        .catch((err) => {
          setIsRegistered(false)
        })
    }

    return (
      <div>
        <h1 className='text-center font-semibold text-lg'>Cek Pembayaran</h1>
        <p className='text-xs text-slate-600 opacity-50 text-center'>Masukan No. Hp yang Terdaftar!</p>
        <form action="">
          <input
            className='w-full border rounded-md px-2 py-1 mt-5 outline-none'
            type="text"
            onChange={e => setInputValue(e.target.value)}
            placeholder='Nomor HP' />
          <button
            className='bg-blue-500 px-3 py-2 w-full mt-5 rounded-md'
            type='submit'
            onClick={handleGetCustomer}
          >Kirim</button>
        </form>
      </div>
    )
  }

  const NotRegistered = () => {
    return (
      <div>
        <h1>anda belum terdaftar,</h1>
        <b>Daftar Sekarang!</b>
      </div>
    )
  }

  const StatusPaid = () => {
    return (
      <div className='text-center'>
        <span className='mt-3'><i className="fa-solid fa-regular fa-circle-check text-4xl text-green-300"></i></span>
        <div className='mb-3 mt-2'>
          <h1 className='font-semibold text-lg'>Terima Kasih!</h1>
          <h1 className='font-semibold'>Tagihan anda sudah dibayar.</h1>
          <h1 className='text-sm text-slate-600 opacity-50'>Periksa lagi setiap tanggal 1.</h1>
        </div>
        <button type='submit' className='bg-green-300 px-3 py-2 rounded-md my-2'>
          <span className='mr-1 text-white'>{`<-`}</span>
          <span className='text-white'>Back Home</span>
        </button>
      </div>
    )
  }

  const StatusUnpaid = () => {
    return (
      <div className='text-center'>
        <span className='mt-3'><i className="fa-solid fa-regular fa-circle-xmark text-4xl text-red-300"></i></span>
        <div className='mb-3 mt-2'>
          <h1 className='font-semibold text-lg'>{`Maaf :(`}</h1>
          <h1 className='font-semibold'>Tagihan anda belum dibayar.</h1>
          <h1 className='text-sm text-slate-600 opacity-50'>Segera lakukan pembayaran sebelum tanggal 10.</h1>
        </div>
        <Link href='/payment' type='submit' className='bg-red-300 px-3 py-2 rounded-md mb-2'>
          <span className='text-white'>Bayar Sekarang</span>
          <span className='ml-1 text-white'>{`->`}</span>
        </Link>
      </div>
    )
  }

  return (
    <div className='bg-white w-full h-full p-3 border border-blue-400 drop-shadow-lg shadow-blue-400 rounded-2xl grid items-center'>
      {!customer ? (
        <FormInput />
      ) : (
        customer.paymentStatus === 'belum bayar' ? (
          <StatusUnpaid />
        ) : (
          <StatusPaid />
        )
      )}
      {!isRegistered && (
        <NotRegistered />
      )}
    </div>
  )
}

export default Popup