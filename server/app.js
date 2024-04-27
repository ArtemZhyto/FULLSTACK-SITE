const fs = require("fs")
const express = require("express")
const https = require("https")
const router = require("./routes/router")
const { PORT, SETTINGS } = require("./config/config.js")

const package = fs.readFileSync("./package.json", "utf-8")
const packageObj = JSON.parse(package)

const app = express()
app.use(express.urlencoded({ extended: false, limit: "5gb" }))

let cors = require("cors")
app.use(cors())

app.use(router)

const server = https.createServer(SETTINGS, app)

server.listen(PORT, () => {
	console.log(`Сервер працює на порту ${PORT}`)
	console.log(`Версія - ${packageObj.version}`)
})
