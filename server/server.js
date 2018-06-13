const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3001

const colors = JSON.parse(fs.readFileSync(path.join(__dirname, 'colors.json')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '..', 'build')))

app.post('/api/palette', (req, res) => {
  let palettes = []

  if (req.body.gender === 'male') {
    palettes.push(colors.male)
  } else {
    palettes.push(colors.female)
  }

  if (req.body.favSeason === 'winter') {
    palettes.push(colors.winter)
  }

  res.json(palettes[Math.floor(Math.random() * palettes.length)])
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT)

console.log('[INFO] > Server running on port: ' + PORT)
