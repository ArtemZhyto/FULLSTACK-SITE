const express = require('express')
const router = express.Router()

const {
    getProductsRootHandler
} = require('../controllers/productHandlers/productsRootHandler')

const {
    getProductBuyHandler
} = require('../controllers/productHandlers/productBuyHandler')

const {
    getProductIDHandler
} = require('../controllers/productHandlers/productIDHandler')

router.get('/:productID/buy', getProductBuyHandler)
router.get('/:productID', getProductIDHandler)
router.get('/', getProductsRootHandler)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router