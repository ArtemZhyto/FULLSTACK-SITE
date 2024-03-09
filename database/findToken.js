const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function findToken(token) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: token })

        console.log('Дані успішно отримані')
        client.close()
        if (!result) {
            console.log('Токен унікальний')
            return true
        } else {
            console.log('Токен не унікальний')
            return false
        }
    } catch (err) {
        console.log('Помилка при отримані даних')
        return false
    }
}

module.exports = findToken