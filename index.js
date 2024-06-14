const express = require('express')
const mongoose = require('mongoose')
const charactersRoute = require('./routes/charactersRoutes')
const {loginKey} = require('./config')


const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace with your front-end URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

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