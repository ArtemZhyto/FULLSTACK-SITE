const generateToken = require('../../middleware/tokenGenerate')
const generateProductCode = require('../../middleware/codeGenerate')
const findProductID = require('../../../database/findProduct')
const findProductCode = require('../../../database/findProductCode')
const productServices = require('../../services/productServices')
const loadData = require('../../../database/createProduct')

const postProductCreateHandler = async (req, res) => {
    let checkIDRes
    let checkCodeRes

    try {
        let attempts = 15

        for (let i = 0; i < attempts; i++) {
            const checkID = generateToken()
            const checkCode = generateProductCode()

            let currentDate = new Date()
            let finaleDate = currentDate.getFullYear()

            checkIDRes = await findProductID(checkID)
            checkCodeRes = await findProductCode(checkCode)

            if (checkIDRes && checkCodeRes) {
                const product = await productServices.createProduct(req.params.name, checkCode, checkID, req.params.price, req.params.seller, req.params.country, req.params.type, finaleDate, req.params.category)
                await loadData(product)
                res.status(200).send(true)
                return
            } else {
                attempts--
            }
        }   
    } catch (err) {
        console.log(err)
        res.status(504).send(false)
        return
    }
}

module.exports = {
    postProductCreateHandler
}