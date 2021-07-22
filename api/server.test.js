const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')

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

describe('[POST] /dogs', () => {
    test('responds with status code 201', async () => {
        const res = await request(server).post('/dogs').send({ name: 'Sandy' })
        expect(res.status).toBe(201)
    })
    test('responds with newly created dog', async () => {
        const res = await request(server).post('/dogs').send({ name: 'Sandy' })
        expect(res.body).toMatchObject({ name: 'Sandy' })
    })
})

describe('[DELETE] /dogs/:id', () => {
    test('responds with status code 200', async () => {
        const res = await request(server).delete('/dogs/1')
        expect(res.status).toBe(200)
    })
    test('responds with deleted dog', async () => {
        const res = await request(server).delete('/dogs/1')
        expect(res.body).toMatchObject({ name: 'Kali' })
    })
})