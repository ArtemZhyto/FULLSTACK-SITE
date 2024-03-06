const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function deleteAllProducts(userID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.updateMany({ ID: userID }, { $set: { products: [] } })
        console.log('Продукти видалені')

        client.close()  
        return result
    } catch (err) {
        console.error('Помилка при отриманні даних:', err)
        return false
    }
}

module.exports = deleteAllProducts