const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function addAllProducts(userID, addProductID) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        await collection.updateMany({ ID: userID }, { $push: { products: addProductID} })
        
        console.log('Продукт доданий')
        client.close()  
        return true
    } catch (err) {
        console.log('Помилка при додаванні даних')
        return false
    }
}

module.exports = addAllProducts