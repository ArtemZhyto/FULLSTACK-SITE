const loadProduct = require('../../../database/loadProduct')

const getProductIDHandler = async (req, res) => {
    try {
        const findProduct = await loadProduct(req.params.productID)
        if (findProduct == "nothing") {
            res.status(404).send(`Error. Product not found`)
        } else {
            res.status(200).send(findProduct)
        }
    } catch (err) {
        res.status(504).send(false)
    }
}

module.exports = {
    getProductIDHandler
}