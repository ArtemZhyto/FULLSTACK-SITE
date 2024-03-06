const MongoClient = require('../server/node_modules/mongodb/').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function findToken(mailForCheck) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ mail: mailForCheck })

        console.log('Дані успішно опрацьовані')
        client.close()
        if (!result) {
            console.log('Почта не використовується')
            return true
        } else {
            console.log('Почта вже використовується')
            return false
        }
    } catch (err) {
        console.log('Помилка при перевірці даних')
        return false
    }
}

module.exports = findToken