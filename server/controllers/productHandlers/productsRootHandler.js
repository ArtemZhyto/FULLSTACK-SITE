const loadAllProducts = require('../../../database/loadAllProducts.js')

const getProductsRootHandler = async (req, res) => {
    try {
        const products = await loadAllProducts()
        res.send(products)
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    getProductsRootHandler
}