const express = require('express')
const router = express.Router()

const {
    getProductIDHandler
} = require('../controllers/productHandlers/productIDHandler')

const {
    rootBasket
} = require('../controllers/rootBasketHandler')

router.get('/:userID/:productID', getProductIDHandler)
router.get('/:userID', rootBasket)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router