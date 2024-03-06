const loadUser = require('../../database/findUserBasket')
const loadProducts = require('../../database/findProductsBasket')

const rootBasket = async (req, res) => {
    try {
        const findUserBasket = await loadUser(req.params.userID)
        if (findUserBasket == "nothing") {
            res.status(201).send('nothing') //@ Кошик користувача порожній
            return
        } else if (findUserBasket == "nobody") {
            res.status(404).send('nobody') //@ Користувача з переданим ID не існує
            return
        } else {
            const findProductsBasket = await loadProducts(findUserBasket)
            res.status(200).send(findProductsBasket) //@ Відправити інформацію про товари з кошика користувача
            return
        }
    } catch (err) {
        res.status(404).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    rootBasket
}