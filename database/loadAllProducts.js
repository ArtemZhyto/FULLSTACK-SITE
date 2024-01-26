const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

//* Функция для добавления данных в коллекцию
async function loadData() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const productsCursor = await collection.find({}, { projection: { _id: 0 } })
        const products = await productsCursor.toArray()
        console.log('Данные успешно получены')

        //* Закрыть соединение с базой данных
        client.close()
        return products
    } catch (err) {
        console.error('Ошибка при получение данных:', err)
        return false
    }
}

module.exports = loadData