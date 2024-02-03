const express = require('express')
const router = express.Router()

const {
    getProductIDHandler
} = require('../controllers/productHandlers/productIDHandler')

const {
    rootBasket
} = require('../controllers/rootBasketHandler')

const {
    getProductToBasketHandler
} = require('../controllers/productToBasketHandler')

const {
    deleteProductFromBasketHandler
} = require('../controllers/productDeleteFromBasketHandler')

const {
    deleteAllProductsFromBasketHandler
} = require('../controllers/productsAllDeleteFromBasketHandler')

router.post('/:userID/add', getProductToBasketHandler)
router.delete('/:userID/delete/:productID', deleteProductFromBasketHandler)
router.delete('/:userID/clear', deleteAllProductsFromBasketHandler)
router.get('/:userID/:productID', getProductIDHandler)
router.get('/:userID', rootBasket)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router