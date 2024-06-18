const mongoose = require("mongoose")

const characterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  element: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: true
  },
  trace_materials: {
    type: String,
  },
  ascension_materials: {
    type: String,
  },
  boss_materials: {
    type: String,
  },
  weekly_materials: {
    type: String,
  },
  icon: {
    type: String,
  }
}, { versionKey: false });

const Character = mongoose.model("Character", characterSchema)

module.exports = Character
