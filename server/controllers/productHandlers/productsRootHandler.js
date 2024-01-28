const loadAllProducts = require('../../../database/loadAllProducts.js')

const getProductsRootHandler = async (req, res) => {
    try {
        const products = await loadAllProducts()
        res.status(200).send(products)
    } catch (err) {
        res.status(504).send(false)
    }
}

module.exports = {
    getProductsRootHandler
}