const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function loadUser(userID) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: userID }, { projection: {_id: 0, mail: 0, password: 0, allowNotifications: 0} })

        console.log('Дані успішно отримані')
        client.close()
        if (!result) {
            console.log('Користувач не знайден')
            return "nobody"
        } else {
            console.log('Користувач знайден')
            return result
        }
    } catch (err) {
        console.log('Помилка при отримані даних')
        return false
    }
}

module.exports = loadUser