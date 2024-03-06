const loadUser = require('../../database/findUser')
const deleteAllProducts = require('../../database/deleteProduct')

const deleteProductFromBasketHandler = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.userID)
        if (findUser == "nobody") {
            res.status(404).send(`Помилка. Користувач не знайден`) //@ Користувача з переданим ID не існує
            return
        } else {
            await deleteAllProducts(findUser.ID, req.params.productID)
            res.status(202).send(true) //@ Товар з кошика користувача за ID було видалено
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    deleteProductFromBasketHandler
}