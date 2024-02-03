const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

async function findProductCode(productCode) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ code: productCode }, { projection: { name: 0, ID: 0, code: 0, price: 0, seller: 0, country: 0, type: 0, date: 0, sorting: 0, category: 0} })
        console.log('Данные успешно получены')

        //* Закрыть соединение с базой данных
        client.close()
        if (result) {
            console.log('Код НЕ уникален')
            return false
        } else {
            console.log('Код уникален')
            return true
        }
    } catch (err) {
        console.error('Ошибка при получение данных:', err)
        return false
    }
}

module.exports = findProductCode