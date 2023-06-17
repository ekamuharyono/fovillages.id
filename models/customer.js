import mongoose, { Schema } from "mongoose"
import connectToDB from "@/utils/db"
import dotenv from 'dotenv'
dotenv.config()

connectToDB()

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  nik: {
    type: String,
    unique: true,
    required: true
  },
  nohp: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  paket: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    default: 'belum bayar'
  },
  ktpImage: {
    type: String,
    unique: true,
    required: true
  },
  homeImage: {
    type: String,
    unique: true,
    required: true
  },
  registeredAt: {
    type: Date,
    required: true
  },
  activeAt: {
    type: Date,
  },
  lastPayment: {
    type: Date,
  },
});

// Membuat model dari schema
const Customer = mongoose.models.Customer || mongoose.model('Customer', customerSchema)

export default Customer


// {
//   name:
//   email:
//   nik:
//   nohp:
//   address:
//   gender:
//   paket:
//   paymentStatus:
//   ktpImage:
//   registeredAt:
//   homeImage:
//   activeAt:
//   lastPayment:
// }