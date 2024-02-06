const fs = require('fs')

const PORT = 34676
const SETTINGS = {
    key: fs.readFileSync('./server/config/private-key.key'),
    cert: fs.readFileSync('./server/config/certificate.crt')
}

module.exports = {
    PORT,
    SETTINGS
}