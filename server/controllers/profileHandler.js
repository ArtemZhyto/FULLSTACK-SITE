const findData = require('../../database/findProfile')

const getProfileID = async (req, res) => {
    try {
        const findUser = await findData(req.params.profileID)
        if (findUser == "nobody") {
            res.status(404).send(`Помилка. Ви не зареєстровані`) //@ Користувача з переданим ID не існує
            return
        } else {
            res.status(200).send(findUser) //@ Відправити інформацію про користувача
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    getProfileID
}