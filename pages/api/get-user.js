import Customer from "@/models/customer"

export default async function getUser(req, res) {
  const { userId } = req.query
  // Lakukan operasi atau pemrosesan sesuai kebutuhan dengan nilai userId
  // ...
  // Mengembalikan respons dengan data yang diinginkan
  try {
    const customer = await Customer.findOne({ nohp: userId })

    if (customer == null) {
      res.status(404).json({
        code: '404',
        status: 'Not Found',
        message: 'No HP Pelanggan Tidak ditemukan'
      })
    }

    res.status(200).json({
      code: '200',
      status: 'Success',
      data: customer
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      code: '500',
      status: 'Server Error',
    })
  }
}