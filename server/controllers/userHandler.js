const loadUser = require('../../database/findSellerName')

const getUserName = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.sellerName)
        if (findUser == "nobody") {
            res.status(404).send(`Помилка. Користувач не знайден`) //@ Користувача з переданим ID не існує
            return
        } else {
            res.status(200).send(findUser) //@ Відправити дані про користувача 
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    getUserName
}