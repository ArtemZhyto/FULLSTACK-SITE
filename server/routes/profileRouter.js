const express = require('express')
const router = express.Router()

const {
    getProfileID
} = require('../controllers/profileHandler')

const registRouter = require('./registRouter')

router.use('/registration', registRouter)
router.get('/:profileID', getProfileID)
router.use((req, res) => {
    res.status(404).send(`Error. Router doesn't found`)
})

module.exports = router