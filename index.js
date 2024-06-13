const express = require('express')
const mongoose = require('mongoose')
const Character = require('./models/character')
const charactersRoute = require('./routes/charactersRoutes')

const app = express()
// middleware
app.use(express.json())
app.use(express.urlencoded())

// routes
app.use("/api/characters", charactersRoute)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})

app.get('/', (req, res) => {
  res.send('Response')
});

app.put('/api/characters/edit/:id', async (req, res) => {
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

      res.status(200).json({ message: character })
      character.save()
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

mongoose.connect("mongodb+srv://alvinwong523:GPBZnDXqFFZVu6Dq@backend.yfxgmdl.mongodb.net/")