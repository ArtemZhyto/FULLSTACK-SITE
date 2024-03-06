const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

async function loadUser(userID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: userID }, { projection: {name: 0, mail: 0, password: 0, ID: 0, regist_data: 0, role: 0, status: 0, sold: 0, rating: 0, contactMail: 0, phone: 0, region: 0, allowNotifications: 0, instagram: 0, telegram: 0} })
        console.log('Дані успішно отримані')

        client.close()
        if (result) {
            if (result.products.length === 0) {
                console.log('Кошик користувача порожний')
                return 'nothing'
            } else {
                console.log('Кошик користувача не порожний')
                return result.products
            }
        } else {
            console.log('Користувач не знайден')
            return "nobody"
        }
    } catch (err) {
        console.error('Помилка при отриманні даних:', err)
        return false
    }
}

module.exports = loadUser