const loadUser = require('../../database/findUser')
const addAllProducts = require('../../database/addProduct')

const postProductToBasketHandler = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.userID)
        if (findUser == "nobody") {
            res.status(404).send(`Помилка. Користувач не знайден`) //@ Користувача з переданим ID не існує
            return
        } else {
            await addAllProducts(findUser.ID, req.params.productID)
            res.status(202).send(true) //@ Продукт був доданий до кошика
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    postProductToBasketHandler
}