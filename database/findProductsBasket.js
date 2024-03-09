const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

async function loadProduct(productArr) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = []

        for (const productId of productArr) {
            const product = await collection.findOne({ ID: productId })
            if (product) {
                result.push(product)
            } else {
                console.log(`Товар з ID ${productId} не знайден`)
            }
        }

        console.log('Дані успішно отримані')
        client.close()
        return result
    } catch (err) {
        console.log('Помилка при отримані даних')
        return false
    }
}

module.exports = loadProduct