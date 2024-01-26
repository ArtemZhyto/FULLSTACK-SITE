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

        const result = await collection.findOne({ ID: userID }, { projection: {name: 0, mail: 0, password: 0, ID: 0, regist_data: 0, role: 0, status: 0, sold: 0, rating: 0, contactMail: 0, phone: 0, region: 0, allowNotifications: 0, instagram: 0, telegram: 0} })
        console.log('Данные успешно получены')

        //* Закрыть соединение с базой данных
        client.close()
        if (result) {
            if (result.products.length === 0) {
                console.log('Корзина пользователя пуста')
                return 'nothing'
            } else {
                console.log('Корзина пользователя НЕ пуста')
                return result.products
            }
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