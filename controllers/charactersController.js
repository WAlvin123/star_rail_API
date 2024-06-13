const Character = require('../models/character')

// get all characters
const getCharacters = async (req, res) => {
  try {
    const Characters = await Character.find({})
    res.status(200).json({ Characters })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// get character by field
const getCharacterByName = async (req, res) => {
  try {
    const { name } = req.params;
    const character = await Character.find({ name: name })
    if (!character) {
      res.status(404).json({ message: "Character not found" })
    } else {
      res.status(200).json(character)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getCharacterByPath = async (req, res) => {
  try {
    const { path } = req.params;
    const character = await Character.find({ path: path })
    if (!character) {
      res.status(404).json({ message: "Character not found" })
    } else {
      res.status(200).json(character)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getCharacterByRole = async (req, res) => {
  try {
    const { role } = req.params;
    const character = await Character.find({ role: role })
    if (!character) {
      res.status(404).json({ message: "Character not found" })
    } else {
      res.status(200).json(character)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body)
    res.status(200).json({ character })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params
    const character = await Character.findByIdAndDelete(id)
    if (!character) {
      return res.status(404).json({ message: 'Character not found' })
    }
    res.status(200).json({ message: 'Character deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const editCharacter = async (req, res) => {
  try {
    const { id } = req.params
    const updatedCharacter = req.body
    const character = await Character.findById(id)

    if (!character) {
      res.status(404).json({ message: "Character not found" })
    } else {
      if (updatedCharacter.name !== '' && updatedCharacter.name !== undefined) {
        character.name = updatedCharacter.name
      }

      if (updatedCharacter.path !== '' && updatedCharacter.path !== undefined) {
        character.path = updatedCharacter.path
      }

      if (updatedCharacter.role !== '' && updatedCharacter.role !== undefined) {
        character.role = updatedCharacter.role
      }

      if (updatedCharacter.element !== '' && updatedCharacter.element !== undefined) {
        character.element = updatedCharacter.element
      }

      if (updatedCharacter.rarity !== '' && updatedCharacter.rarity !== undefined) {
        character.rarity = updatedCharacter.rarity
      }


      if (updatedCharacter.trace_materials !== '' && updatedCharacter.trace_materials !== undefined) {
        character.trace_materials = updatedCharacter.trace_materials
      }


      if (updatedCharacter.ascension_materials !== '' && updatedCharacter.ascension_materials !== undefined) {
        character.ascension_materials = updatedCharacter.ascension_materials
      }

      if (updatedCharacter.boss_materials !== '' && updatedCharacter.boss_materials !== undefined) {
        character.boss_materials = updatedCharacter.boss_materials
      }

      if (updatedCharacter.weekly_materials !== '' && updatedCharacter.weekly_materials !== undefined) {
        character.weekly_materials = updatedCharacter.weekly_materials
      }

      res.status(200).json({ message: character })
      character.save()
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getCharacters,
  getCharacterByName,
  getCharacterByRole,
  getCharacterByPath,
  addCharacter,
  deleteCharacter,
  editCharacter
}
