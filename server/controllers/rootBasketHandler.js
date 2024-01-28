const loadUser = require('../../database/findUserBasket')
const loadProducts = require('../../database/findProductsBasket')

const rootBasket = async (req, res) => {
    try {
        const findUserBasket = await loadUser(req.params.userID)
        if (findUserBasket == "nothing") {
            res.status(201).send('nothing')
        } else if (findUserBasket == "nobody") {
            res.status(404).send('nobody')
        } else {
            const findProductsBasket = await loadProducts(findUserBasket)
            res.status(200).send(findProductsBasket)
        }
    } catch (err) {
        console.log(err)
        res.status(404).send(false)
    }
}

module.exports = {
    rootBasket
}