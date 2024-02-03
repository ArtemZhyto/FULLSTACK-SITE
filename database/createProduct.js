const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

//* Функция для добавления данных в коллекцию
async function loadData(dataToInsert) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.insertOne(dataToInsert)
        console.log('Данные успешно добавлены')

        //* Закрыть соединение с базой данных
        client.close()
        return true
    } catch (err) {
        console.error('Ошибка при добавлении данных:', err)
        return false
    }
}

module.exports = loadData