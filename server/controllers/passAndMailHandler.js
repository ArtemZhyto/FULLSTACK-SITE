const generateToken = require('../middleware/tokenGenerate')
const findToken = require('../../database/findToken')
const generateID = require('../middleware/idGenerate')
const findID = require('../../database/findID')
const findMail = require('../../database/findMail')
const userServices = require('../services/userServices')
const loadData = require('../../database/loadUser')

const getPassAndMail = async (req, res) => {
    let checkIDRes
    let checkTokenRes
    let checkMailRes

    try {
        checkMailRes = await findMail(req.params.mail)
        if (checkMailRes) {
            try {
                let attempts = 15

                for (let i = 0; i < attempts; i++) {
                    const checkToken = generateToken()
                    const checkID = generateID()

                    let currentDate = new Date()
                    let finaleDate = currentDate.getFullYear()

                    checkTokenRes = await findToken(checkToken)
                    checkIDRes = await findID(checkID)
        
                    if (checkTokenRes && checkIDRes) {
                        const user = await userServices.createUser(`user_${checkID}`, req.params.mail, req.params.password, checkToken, finaleDate, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
                        await loadData(user)
                        res.status(200).send(user.ID) //@ Користувача було створено
                        return
                    } else {
                        attempts--
                    }
                }   
            } catch (err) {
                res.status(504).send(false) //@ Помилка на сервері
                return
            }
        } else {
            res.status(404).send('Помилка. Почта вже використовується') //@ Почта, яку ввів користувач, вже використовується 
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    getPassAndMail
}