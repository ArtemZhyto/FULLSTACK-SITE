const loadUser = require('../../database/findUser')
const deleteAllProducts = require('../../database/clearProduct')

const deleteAllProductsFromBasketHandler = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.userID)
        if (findUser == "nobody") {
            res.status(404).send(`Error. User not found`)
        } else {
            await deleteAllProducts(findUser.ID)
            res.status(202).send(true)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    deleteAllProductsFromBasketHandler
}