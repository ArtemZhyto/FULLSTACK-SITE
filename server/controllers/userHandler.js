const loadUser = require('../../database/findUser')

const getUserID = async (req, res) => {
    try {
        const findUser = await loadUser(req.params.userID)
        if (findUser == "nobody") {
            res.status(404)
            res.send(`Error. User not found`)
        } else {
            res.send(findUser)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    getUserID
}