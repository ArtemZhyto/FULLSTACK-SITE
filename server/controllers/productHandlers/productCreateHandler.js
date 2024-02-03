const generateProductID = require('../../middleware/tokenGenerate') //!
const generateProductCode = require('../../middleware/codeGenerate') //!
const findProductID = require('../../../database/findProduct') //!
const findProductCode = require('../../../database/findProductCode') //!
const productServices = require('../../services/productServices') //!
const loadData = require('../../../database/createProduct') //!

const doProduct = async (req, res) => {
    let checkIDRes
    let checkCodeRes

    try {
        let attempts = 15

        for (let i = 0; i < attempts; i++) {
            const checkID = generateProductID()
            const checkCode = generateProductCode()

            let currentDate = new Date()
            let finaleDate = currentDate.getFullYear()

            checkIDRes = await findProductID(checkID)
            checkCodeRes = await findProductCode(checkCode)

            if (checkIDRes && checkCodeRes) {
                const product = await productServices.createProduct(req.body.name, checkCode, checkID, req.body.price, req.body.seller, req.body.country, req.body.type, finaleDate, req.body.sorting, req.body.category)
                await loadData(product)
                res.status(200).send(true)
                return
            } else {
                attempts--
            }
        }   
    } catch (err) {
        res.status(504).send(false)
        return
    }
}

const postProductCreateHandler = (req, res) => {
    doProduct(req, res)
}

module.exports = {
    postProductCreateHandler
}