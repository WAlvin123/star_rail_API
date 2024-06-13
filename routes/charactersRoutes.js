const express = require('express')
const {
  getCharacters,
  getCharacterByName,
  getCharacterByRole,
  getCharacterByPath,
  addCharacter,
  deleteCharacter,
  editCharacter
} = require('../controllers/charactersController')

const router = express.Router()

router.get('/', getCharacters)
router.get('/name=:name', getCharacterByName)
router.get('/path=:path', getCharacterByPath)
router.get('/role=:role', getCharacterByRole)
router.post('/add', addCharacter)
router.delete('/delete/:id', deleteCharacter)
router.put('/edit/:id', editCharacter)

module.exports = router