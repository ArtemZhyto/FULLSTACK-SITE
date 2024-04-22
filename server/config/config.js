const fs = require("fs")

const PORT = 34676
const SETTINGS = {
	key: fs.readFileSync("./config/private-key.key"),
	cert: fs.readFileSync("./config/certificate.crt"),
}

module.exports = {
	PORT,
	SETTINGS,
}
