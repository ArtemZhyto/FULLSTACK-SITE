const express = require('express')
const http = require('http')
const https = require('https')
const router = require('./routes/router')
const {
    PORT,
    SETTINGS
} = require('./config/config')

const app = express()

app.use(router)

const server = https.createServer(SETTINGS, app)

server.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})