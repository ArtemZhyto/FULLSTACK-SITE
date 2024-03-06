const express = require('express')
const router = express.Router()

const profileRouter = require('./profileRouter')
const registRouter = require('./registRouter')
const enterRouter = require('./enterRouter')
const productsRouter = require('./productsRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')

router.use('/profile', profileRouter)
router.use('/registration', registRouter)
router.use('/enter', enterRouter)
router.use('/products', productsRouter)
router.use('/user', userRouter)
router.use('/basket', basketRouter)

module.exports = router