const express = require('express')
const router = express.Router()

const {
    getUserName,
} = require('../controllers/userHandler')

router.get('/:sellerName', getUserName)
router.use((req, res) => {
    res.status(404).send(`Помилка. Маршрут не знайдено`)
})

module.exports = router