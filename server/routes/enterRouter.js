const express = require('express')
const router = express.Router()

const {
    searchUser
} = require('../controllers/searchUserEnter')

router.get('/:password/:mail', searchUser)
router.use((req, res) => {
    res.status(404).send(`Помилка. Маршрут не знайдено`) //@ Такого шляху не існує
})

module.exports = router