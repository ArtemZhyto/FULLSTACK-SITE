const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName = 'users'

//* Функция для добавления данных в коллекцию
async function loadUser(userID) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успешное подключение к MongoDB')

        const db = client.db(dbName)
        const collection = db.collection(collectionName)

        const result = await collection.findOne({ ID: userID }, { projection: { ID: 0, _id: 0, mail: 0, password: 0, allowNotifications: 0} })
        console.log('Данные успешно получены')

        //* Закрыть соединение с базой данных
        client.close()
        if (result) {
            console.log('Пользователь найден')
            return result
        } else {
            console.log('Пользователь НЕ найден')
            return "nobody"
        }
    } catch (err) {
        console.error('Ошибка при получение данных:', err)
        return false
    }
}

module.exports = loadUser