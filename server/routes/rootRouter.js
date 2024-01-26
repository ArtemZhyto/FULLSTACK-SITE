const express = require('express')
const router = express.Router()

const {
    getRootPage
} = require('../controllers/rootHandler')

router.get('/', getRootPage)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router