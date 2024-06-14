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

router.get('/getAll', getCharacters)
router.get('/getByName', getCharacterByName)
router.get('/getByPath', getCharacterByPath)
router.get('/getByRole', getCharacterByRole)

router.post('/add', addCharacter)

router.delete('/delete/:id', deleteCharacter)

router.put('/edit/:id', editCharacter)

module.exports = router