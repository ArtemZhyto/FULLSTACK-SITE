const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function loadData(info) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ password: info.password, mail: info.mail}, { projection: { _id: 0 } })
        console.log('Дані успішно додані')

        client.close()
        if (result) {
            console.log('Користувач знайден')
            return result
        } else {
            console.log('Користувач не знайден')
            return "nobody"
        }
    } catch (err) {
        console.error('Помилка при отриманні даних:', err)
        return false
    }
}

module.exports = loadData