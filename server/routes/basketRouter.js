const express = require('express')
const router = express.Router()

const {
    getProductIDHandler
} = require('../controllers/productHandlers/productIDHandler')

const {
    rootBasket
} = require('../controllers/rootBasketHandler')

const {
    postProductToBasketHandler
} = require('../controllers/productToBasketHandler')

const {
    deleteProductFromBasketHandler
} = require('../controllers/productDeleteFromBasketHandler')

const {
    deleteAllProductsFromBasketHandler
} = require('../controllers/productsAllDeleteFromBasketHandler')

router.post('/:userID/add/:productID', postProductToBasketHandler)
router.delete('/:userID/delete/:productID', deleteProductFromBasketHandler)
router.delete('/:userID/clear', deleteAllProductsFromBasketHandler)
router.get('/:userID/:productID', getProductIDHandler)
router.get('/:userID', rootBasket)
router.use((req, res) => {
    res.status(404).send(`Помилка. Маршрут не знайдено`) //@ Такого шляху не існує
})

module.exports = router