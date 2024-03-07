const express = require('express')
const router = express.Router()

const {
    getProfileID
} = require('../controllers/profileHandler')

const registRouter = require('./registRouter')
const updateRouter = require('./updateRouter')

router.use('/update', updateRouter)
router.use('/registration', registRouter)
router.get('/:profileID', getProfileID)
router.use((req, res) => {
    res.status(404).send(`Помилка. Маршрут не знайдено`) //@ Такого шляху не існує
})

module.exports = router