const router = require('express').Router()

router.post('/', (req, res, next) => {
    console.log('POST successfully wired')
})

router.delete('/:id', (req, res, next) => {
    console.log('DELETE successfully wired')
})

module.exports = router