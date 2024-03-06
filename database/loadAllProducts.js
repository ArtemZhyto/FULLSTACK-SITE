const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

async function loadData() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const productsCursor = await collection.find({}, { projection: { _id: 0 } })
        const products = await productsCursor.toArray()
        
        console.log('Дані успішно отримані')
        client.close()
        return products
    } catch (err) {
        console.log('Помилка при отримані даних')
        return false
    }
}

module.exports = loadData