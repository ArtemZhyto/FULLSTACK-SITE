const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'products'

async function findProductID(productID) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: productID }, { projection: { name: 0, code: 0, ID: 0, price: 0, seller: 0, country: 0, type: 0, date: 0, sorting: 0, category: 0} })

        console.log('Дані успішно опрацьовані')
        client.close()
        if (!result) {
            console.log('ID унікальний')
            return true
        } else {
            console.log('ID не унікальний')
            return false
        }
    } catch (err) {
        console.log('Помилка при перевірці даних')
        return false
    }
}

module.exports = findProductID