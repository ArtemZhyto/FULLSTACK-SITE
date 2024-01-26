const express = require('express')
const router = express.Router()

const {
    getProductBuyHandler
} = require('../controllers/productHandlers/productBuyHandler')

const {
    getProductIDHandler
} = require('../controllers/productHandlers/productIDHandler')

const {
    getBuyProductHandler
} = require('../controllers/productHandlers/buyProductHandler')

const {
    rootBasket
} = require('../controllers/rootBasketHandler')

router.get('/:userID/:buy&:productID', getBuyProductHandler)
router.get('/:userID/:productID/buy', getProductBuyHandler)
router.get('/:userID/:productID', getProductIDHandler)
router.get('/:userID', rootBasket)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router