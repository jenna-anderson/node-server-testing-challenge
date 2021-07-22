const db = require('../../data/dbConfig')

async function insert(dog) {
    const id = await db('dogs').insert(dog)
    return await db('dogs').where('id', id).first()
}

async function remove(dog) {

}

module.exports = {
    insert,
    remove
}