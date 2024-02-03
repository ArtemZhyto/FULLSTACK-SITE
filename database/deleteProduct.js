const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function deleteAllProducts(userID, deleteProductID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.updateMany({ ID: userID }, { $pull: { products: deleteProductID} })

        console.log('Продукты удалены')

        //* Закрыть соединение с базой данных
        client.close()  
        return result
    } catch (err) {
        console.error('Ошибка при получение данных:', err)
        return false
    }
}

module.exports = deleteAllProducts