import React, { useState } from 'react'
import axios from 'axios'

const FormInput = ({ sendDataToParent }) => {

  const [inputValue, setInputValue] = useState('')

  const handleGetCustomer = (e) => {
    e.preventDefault()
    axios.get(`/api/get-user?userId=${inputValue}`)
      .then((respon) => sendDataToParent(respon.data.data))
      .catch((err) => console.log(err))
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
      <button type='submit' className='bg-red-300 px-3 py-2 rounded-md mb-2'>
        <span className='text-white'>Bayar Sekarang</span>
        <span className='ml-1 text-white'>{`->`}</span>
      </button>
    </div>
  )
}

const FormBayar = () => {
  return (
    <div className='text-center'>
      <h1 className='text-lg font-semibold'>Metode Pembayaran</h1>
      <p className='text-xs text-slate-600 opacity-50'>Pilih salah satu metode pembayaran!</p>
      <div className='text-center min-w-max w-9/12 mx-auto'>
        <ul className='text-sm w-full grid grid-cols-2 my-3'>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="BCA" id="BCA" />
            <label htmlFor="BCA">BCA</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="BNI" id="BNI" />
            <label htmlFor="BNI">BNI</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="BRI" id="BRI" />
            <label htmlFor="BRI">BRI</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="KalBar" id="KalBar" />
            <label htmlFor="KalBar">KalBar</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="Mandiri" id="Mandiri" />
            <label htmlFor="Mandiri">Mandiri</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="Indomaret" id="Indomaret" />
            <label htmlFor="Indomaret">Indomaret</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="Alfamart" id="Alfamart" />
            <label htmlFor="Alfamart">Alfamart</label>
          </li>
          <li className='mb-1 flex items-center'>
            <input type="radio" name="paymentMethode" value="Qris" id="Qris" />
            <label htmlFor="Qris">Qris</label>
          </li>
        </ul>
      </div>
      <button type='submit' className='bg-red-300 px-3 py-2 rounded-md'>
        <span className='text-white'>Checkout</span>
      </button>
    </div>
  )
}

const Popup = () => {
  const [customer, setCustomer] = useState()

  const handleGetDataCustomer = (data) => {
    setCustomer(data)
  }

  return (
    <div className='bg-white w-full h-full p-3 border rounded-2xl grid items-center'>
      {!customer ? (
        <FormInput sendDataToParent={handleGetDataCustomer} />
      ) : (
        customer.paymentStatus === 'belum bayar' ? (
          <StatusUnpaid />
        ) : (
          <StatusPaid />
        )
      )}
    </div>
  )
}

export default Popup