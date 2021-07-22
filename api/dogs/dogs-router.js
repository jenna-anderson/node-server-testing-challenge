const router = require('express').Router()
const Dogs = require('./dogs-model')

router.post('/', async (req, res, next) => {
    try {
        const dog = await Dogs.insert(req.body)
        res.status(201).json(dog)
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', (req, res, next) => {
    console.log('DELETE successfully wired')
})

module.exports = router