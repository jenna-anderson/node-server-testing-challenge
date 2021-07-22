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

router.delete('/:id', async (req, res, next) => {
    try{
        const dog = await Dogs.remove(req.params.id)
        res.status(200).json(dog)
    } catch(err) {
        next(err)
    }
})

module.exports = router