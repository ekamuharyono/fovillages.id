import Customer from '../../models/customer'

export default async function handler(req, res) {
  try {
    // Data baru yang akan disimpan
    const customers = await Customer.find()

    res.status(200).json({ data: customers })
  } catch (error) {
    console.error('Gagal menyimpan data:', error)
    res.status(500).json({ message: 'Gagal menyimpan data' })
  }
}