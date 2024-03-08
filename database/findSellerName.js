const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function loadUser(sellerName) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ name: sellerName}, { projection: {_id: 0, mail: 0, password: 0, allowNotifications: 0, products: 0} })
        
        console.log('Дані успішно отримані')
        client.close()
        if (result) {
            console.log('Користувач знайден')
            return result
        } else {
            console.log('Користувач не знайден')
            return "nobody"
        }
    } catch (err) {
        console.log('Помилка при отримані даних')
        return false
    }
}

module.exports = loadUser