const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

async function loadProduct(productArr) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = []

        for (const productId of productArr) {
            const product = await collection.findOne({ ID: productId })
            if (product) {
                result.push(product)
            } else {
                console.warn(`Товар с ID ${productId} не найден`)
            }
        }

        console.log('Данные успешно получены')

        //* Закрыть соединение с базой данных
        client.close()
        
        return result
    } catch (err) {
        console.error('Ошибка при получение данных:', err)
        return false
    }
}

module.exports = loadProduct