const findData = require('../../database/findProfile')

const getProfileID = async (req, res) => {
    try {
        const findUser = await findData(req.params.profileID)
        if (findUser == "nobody") {
            res.status(201).send(`Error. You are not registered yet`)
        } else {
            res.status(200).send(findUser)
        }
    } catch (err) {
        console.log(err)
        res.status(404).send(false)
    }
}

module.exports = {
    getProfileID
}