const express = require('express')
const { getAll, addBanner, deleteBanner } = require('../controllers/bannerController')

const router = express.Router()

router.get('/getAll', getAll)
router.post('/add', addBanner)
router.delete('/delete', deleteBanner)

module.exports = router