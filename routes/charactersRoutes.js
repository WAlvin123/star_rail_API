const express = require('express')
const {
  getCharacters,
  getCharacterByField,
  addCharacter,
  deleteCharacter,
  editCharacter
} = require('../controllers/charactersController')

const router = express.Router()

router.get('/getAll', getCharacters)
router.get('', getCharacterByField)

router.post('/add', addCharacter)

router.delete('/delete/:id', deleteCharacter)

router.put('/edit/:id', editCharacter)

module.exports = router