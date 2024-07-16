const banner = require('../models/banner')

const getAll = async (req, res) => {
  try {
    const allBanners = await banner.find({})
    res.status(200).json(allBanners)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addBanner = async (req, res) => {
  try {
    const bannerToAdd = await banner.create(req.body)
    res.status(200).json(bannerToAdd)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteBanner = async (req, res) => {
  try {
    const { id } = req.query
    const bannerToDelete = await banner.findByIdAndDelete(id)
    if (!bannerToDelete) {
      res.status(404).json({ message: 'Banner does not exist' })
    } else {
      res.status(200).json(bannerToDelete)
    }
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

module.exports = {
  getAll,
  addBanner,
  deleteBanner
}