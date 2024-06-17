const express = require('express')
const mongoose = require('mongoose')
const charactersRoute = require('./routes/charactersRoutes')
require("dotenv").config()

const app = express()
const loginKey = process.env.LOGIN_KEY

// middleware
app.use(express.json())
app.use(express.urlencoded())

// routes
app.use("/api/characters", charactersRoute)



app.get('/', (req, res) => {
  res.send('API')
});

// connection 
app.listen(3000, () => {
  console.log('Server running on port 3000')
})
mongoose.connect(loginKey)