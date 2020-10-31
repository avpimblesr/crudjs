const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async (req, res) => {
  try {
    const aliens = await Alien.find()
    res.json(aliens)
  } catch (err) {
    res.send('Error ' + err)
  }
})

router.get('/:id', async (req, res) => {
  let id = req.params.id
  try {
    const alien = await Alien.findById(id)
    res.json(alien)
  } catch (err) {
    res.send('Error ' + err)
  }
})

router.post('/', async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub
  })
  try {
    const a1 = await alien.save()
    res.json(a1)
  }
  catch (err) {
    res.send('Error')
  }
})

// Edit just the sub (subscription) for now
// TODO: Edit any change request
router.patch('/:id', async (req, res) => {
  let id = req.params.id
  try {
    const alien = await Alien.findById(id)
    alien.sub = req.body.sub
    const a1 = await alien.save()
    res.json(a1)
  }
  catch (err) {
    res.send('Error ' + err)
  }
})

// Delete a user
router.delete('/:id', async (req, res) => {
  let id = req.params.id
  try {
    const alien = await Alien.findById(id)
    alien.sub = req.body.sub
    const a1 = await alien.remove()
    res.json(a1)
  }
  catch (err) {
    res.send('Error ' + err)
  }
})

module.exports = router