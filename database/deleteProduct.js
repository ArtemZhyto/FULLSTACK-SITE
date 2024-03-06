const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function deleteAllProducts(userID, deleteProductID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        await collection.updateMany({ ID: userID }, { $pull: { products: deleteProductID} })
        
        console.log('Продукт видален')
        client.close()  
        return true
    } catch (err) {
        console.lor('Помилка при видаленні даних')
        return false
    }
}

module.exports = deleteAllProducts