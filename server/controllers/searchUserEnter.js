const loadUserData = require('../../database/userEnter')

const searchUser = async (req, res) => {
    try {
        const info = {
            password: req.params.password,
            mail: req.params.mail
        }
        const findUserData = await loadUserData(info)
        if (findUserData == "nobody") {
            res.status(404).send(`Помилка. Користувач не знайден`)
        } else {
            res.status(200).send(findUserData)
        }
    } catch (err) {
        res.status(504).send(false)
    }
}

module.exports = {
    searchUser
}