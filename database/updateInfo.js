const MongoClient = require('../server/node_modules/mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'shopSite'
const collectionName1 = 'products'
const collectionName2 = 'users'

async function loadUpdate(dataToUpdate) {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Успішне підключення до MongoDB')

        const db = client.db(dbName)
        const collection1 = db.collection(collectionName1)
        const collection2 = db.collection(collectionName2)

        const oldNameUserData = await collection2.findOne({ ID: dataToUpdate[0] })
        const oldName = oldNameUserData.name

        const coll2Res = await collection2.updateMany( { ID: dataToUpdate[0] }, { $set: { name: dataToUpdate[1], mail: dataToUpdate[2], password: dataToUpdate[3], sold: dataToUpdate[4], contactMail: dataToUpdate[5], phone: dataToUpdate[6], region: dataToUpdate[7], allowNotifications: dataToUpdate[8], instagram: dataToUpdate[9], telegram: dataToUpdate[10]} } )
        console.log('Дані користувача успішно оновлені')

        const coll1Res = await collection1.updateMany( { seller: oldName }, { $set: { seller: dataToUpdate[1]} } )
        console.log('Дані користувача у інформації про товар успішно оновлені')

        const res = await collection2.findOne({ ID: dataToUpdate[0] }, { projection: { _id: 0 } } )

        console.log('Дані успішно оновлені')
        client.close()
        return res
    } catch (err) {
        console.log('Помилка при оновлені даних')
        return false
    }
}

module.exports = loadUpdate