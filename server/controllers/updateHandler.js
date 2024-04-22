const findData = require('../../database/findProfile')
const loadUpdate = require('../../database/updateInfo')

const updateInfo = async (req, res) => {
    try {
        const findUser = await findData(req.params.ID)
        if (findUser == "nobody") {
            res.status(404).send(`Помилка. Користувач не знайден`) //@ Користувача з переданим ID не існує
            return
        } else {
            const { image } = req.body
            const data = [
                req.params.ID,
                req.params.name,
                req.params.mail,
                req.params.password,
                parseInt(req.params.sold),
                req.params.contactMail,
                req.params.phone,
                req.params.region,
                req.params.allowNotifications,
                req.params.instagram,
                req.params.telegram,
                image
            ]
            const result = await loadUpdate(data)
            res.status(200).send(result) //@ Зміни до профіля були зроблені
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    updateInfo
}