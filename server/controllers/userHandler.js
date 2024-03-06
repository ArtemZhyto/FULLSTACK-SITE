const loadUser = require('../../database/findSellerName')

const getUserName = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.sellerName)
        if (findUser == "nobody") {
            res.status(404)
            res.send(`Помилка. Користувач не знайден`)
        } else {
            res.send(findUser)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    getUserName
}