const express = require('express')
const router = express.Router()

const rootRouter = require('./rootRouter')
const profileRouter = require('./profileRouter')
const registRouter = require('./registRouter')
const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')

router.use('/profile', profileRouter)
router.use('/registration', registRouter)
router.use('/products', productsRouter)
router.use('/users', userRouter)
router.use('/basket', basketRouter)
router.use('/', rootRouter)

module.exports = router