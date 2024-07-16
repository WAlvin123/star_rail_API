const mongoose = require('mongoose')

const bannerSchema = mongoose.Schema({
  name: {
    type: String
  },
  rateupFive: {
    type: Array
  },
  rateupFour: {
    type: Array
  },
  version: {
    type: Number
  }
}, { versionKey: false })

const Banner = mongoose.model('Banner', bannerSchema)

module.exports = Banner

