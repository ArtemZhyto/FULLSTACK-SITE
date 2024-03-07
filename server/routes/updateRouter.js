const express = require('express')
const router = express.Router()

const {
    updateInfo
} = require('../controllers/updateHandler')

router.post('/:ID/:name/:mail/:password/:sold/:contactMail/:phone/:region/:allowNotifications/:instagram/:telegram', updateInfo)
router.use((req, res) => {
    res.status(404).send(`Помилка. Маршрут не знайдено`) //@ Такого шляху не існує
})

module.exports = router