const db = require('../../data/dbConfig')

async function insert(dog) {
    const id = await db('dogs').insert(dog)
    return await db('dogs').where('id', id).first()
}

async function remove(id) {
    const removedDog = await db('dogs').where('id', id).first()
    await db('dogs').del().where('id', id)
    return removedDog
}

module.exports = {
    insert,
    remove
}