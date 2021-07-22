const db = require('../../data/dbConfig')
const { notify } = require('../server')
const Dogs = require('./dogs-model')

test('is the correct environment', () => {
    expect(process.env.DB_ENV).toBe('testing')
})
beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
})

describe('dogs model', () => {
    describe('insert', () => {
        test('it adds a new record to the db', async () => {
            const dog = { name: 'Kiana' }
            await Dogs.insert(dog)
            expect(await db('dogs')).toHaveLength(4)
        })
        test('it returns the new dog', async () => {
            const dog = { name: 'Kiana' }
            const actual = await Dogs.insert(dog)
            expect(actual).toMatchObject(dog)
        })
    })
})