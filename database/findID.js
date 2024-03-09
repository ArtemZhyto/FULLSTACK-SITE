const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function findID(ID) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: ID })

        console.log('Дані успішно опрацьовані')
        client.close()
        if (!result) {
            console.log('ID унікальний')
            return true
        } else {
            console.log('ID не унікальний')
            return false
        }
    } catch (err) {
        console.log('Помилка при перевірці даних')
        return false
    }
}

module.exports = findID