const multer  = require('multer');
const fs = require('fs')
const express = require('express')
const https = require('https')
const router = require('./routes/router')
const {
    PORT,
    SETTINGS
} = require('./config/config.js')

const package = fs.readFileSync('./package.json', 'utf-8')
const packageObj = JSON.parse(package)

const app = express()

let cors = require('cors');
app.use(cors());

app.use(router)

const server = https.createServer(SETTINGS, app)

server.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
    console.log(`Version - ${packageObj.version}`)
})