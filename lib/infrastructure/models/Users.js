const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { connectionDB } = require('../database/connectionDB')
connectionDB()

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  document: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  cellPhone: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  rol: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
})

module.exports = mongoose.model('Users', userSchema)
