const loadProduct = require('../../../database/loadProduct')

const getProductIDHandler = async (req, res) => {
    try {
        const findProduct = await loadProduct(req.params.productID)
        if (findProduct == "nothing") {
            res.status(404)
            res.send(`Error. Product not found`)
        } else {
            res.send(findProduct)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    getProductIDHandler
}