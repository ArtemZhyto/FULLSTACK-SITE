const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

async function loadProduct(productID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: productID}, { projection: { _id: 0 } })
        
        console.log('Дані успішно отримані')
        client.close()
        if (!result) {
            console.log('Товар не знайден')
            return "nothing"
        } else {
            console.log('Товар знайден')
            return result
        }
    } catch (err) {
        console.log('Помилка при отриманні даних')
        return false
    }
}

module.exports = loadProduct