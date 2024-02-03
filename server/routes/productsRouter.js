const express = require('express')
const router = express.Router()

const {
    getProductsRootHandler
} = require('../controllers/productHandlers/productsRootHandler')

const {
    getProductIDHandler
} = require('../controllers/productHandlers/productIDHandler')

const {
    postProductCreateHandler
} = require('../controllers/productHandlers/productCreateHandler')

router.use(express.json())

router.post(`/create`, postProductCreateHandler)
router.get('/:productID', getProductIDHandler)
router.get('/', getProductsRootHandler)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router