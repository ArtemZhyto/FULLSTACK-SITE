const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function findID(ID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: ID })

        //* Закрыть соединение с базой данных
        client.close()
        if (!result) {
            console.log('ID уникален')
            return true
        } else {
            console.log('ID НЕ уникален')
            return false
        }
    } catch (err) {
        console.error('Ошибка при добавлении данных:', err)
        return false
    }
}

module.exports = findID