const express = require('express')
const router = express.Router()

const {
    getUserID,
} = require('../controllers/userHandler')

router.get('/:userID', getUserID)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router