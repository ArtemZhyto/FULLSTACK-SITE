const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

//* Функция для добавления данных в коллекцию
async function loadProduct(productID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: productID}, { projection: { _id: 0 } })
        console.log('Данные успешно получены')

        //* Закрыть соединение с базой данных
        client.close()
        if (result) {
            console.log('Товар найден')
            return result
        } else {
            console.log('Товар НЕ найден')
            return "nothing"
        }
    } catch (err) {
        console.error('Ошибка при получение данных:', err)
        return false
    }
}

module.exports = loadProduct