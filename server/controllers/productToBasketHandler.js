const loadUser = require('../../database/findUser')
const addAllProducts = require('../../database/addProduct')

const postProductToBasketHandler = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.userID)
        if (findUser == "nobody") {
            res.status(404).send(`Помилка. Користувач не знайден`)
        } else {
            await addAllProducts(findUser.ID, req.params.productID)
            res.status(202).send(true)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    postProductToBasketHandler
}