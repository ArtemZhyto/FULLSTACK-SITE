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
        if (result) {
            console.log('Товар знайден')
            return result
        } else {
            console.log('Товар знайден')
            return "nothing"
        }
    } catch (err) {
        console.error('Помилка при отриманні даних', err)
        return false
    }
}

module.exports = loadProduct