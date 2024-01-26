const findData = require('../../database/findProfile')

const getProfileID = async (req, res) => {
    try {
        const findUser = await findData(req.params.profileID)
        if (findUser == "nobody") {
            res.status(404)
            res.send(`Error. You are not registered yet`)
        } else {
            res.send(findUser)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    getProfileID
}