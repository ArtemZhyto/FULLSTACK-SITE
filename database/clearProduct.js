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

        await collection.updateMany({ ID: userID }, { $set: { products: [] } })
        
        console.log('Продукти видалені')
        client.close()  
        return true
    } catch (err) {
        console.log('Помилка при видаленні даних')
        return false
    }
}

module.exports = deleteAllProducts