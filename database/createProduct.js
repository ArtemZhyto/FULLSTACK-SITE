const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName1 = 'products'
const collectionName2 = 'users'

async function loadData(dataToInsert, userName) {
    try {
        const client = await MongoClient.connect(url)
        console.log()
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection1 = db.collection(collectionName1)
        const collection2 = db.collection(collectionName2)

        try {
            await collection2.updateMany({ name: userName }, { $inc: { sold: 1 } })
            await collection1.insertOne(dataToInsert)
            console.log('Дані успішно додані та оновлені')
            client.close()
            return true
        } catch (err) {
            console.log('Помилка при додаванні даних')
            client.close()
            return false
        }
    } catch (err) {
        console.log('Помилка при додаванні даних')
        return false
    }
}

module.exports = loadData