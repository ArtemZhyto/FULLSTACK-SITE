const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function loadData(dataToInsert) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        await collection.insertOne(dataToInsert)
        
        console.log('Дані успішно додані')
        client.close()
        return true
    } catch (err) {
        console.log('Помилка при додавані даних')
        return false
    }
}

module.exports = loadData