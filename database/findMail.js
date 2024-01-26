const MongoClient = require('../server/node_modules/mongodb/').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function findToken(mailForCheck) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ mail: mailForCheck })

        //* Закрыть соединение с базой данных
        client.close()
        if (!result) {
            console.log('Почта НЕ используется')
            return true
        } else {
            console.log('Почта УЖЕ используется')
            return false
        }
    } catch (err) {
        console.error('Ошибка при добавлении данных:', err)
        return false
    }
}

module.exports = findToken