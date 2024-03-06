const express = require('express')
const router = express.Router()

const {
    getPassAndMail
} = require('../controllers/passAndMailHandler')

router.post('/:password&:mail', getPassAndMail)
router.use((req, res) => {
    res.status(404).send(`Помилка. Маршрут не знайдено`)
})

module.exports = router