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
        let productCreated = false

        for (let i = 0; i < attempts; i++) {
            const checkID = generateToken()
            const checkCode = generateProductCode()

            let currentDate = new Date()
            let finaleDate = currentDate.getFullYear()

            checkIDRes = await findProductID(checkID)
            checkCodeRes = await findProductCode(checkCode)

            try {
                if (checkIDRes && checkCodeRes) {
                    const product = await productServices.createProduct(req.params.name, checkCode, checkID, req.params.price, req.params.seller, req.params.country, req.params.type, finaleDate, req.params.category, req.params.image)
                    
                    const loadDataRes = await loadData(product, req.params.seller)
                    if (!loadDataRes) {
                        console.log('Помилка при створенні товару')
                        res.status(504).send(false) //@ Продукт не було створено
                        return
                    }

                    res.status(200).send(true) //@ Продукт було створено и кількість проданих товарів користувача було збільшено
                    productCreated = true
                    return
                } else {
                    attempts--
                }   
            } catch (err) {
                console.log('Помилка при створенні товару')
                res.status(504).send(false) //@ Продукт не було створено
                return
            }
        }   

        if (!productCreated) {
            console.log('Помилка при створенні товару')
            res.status(504).send(false) //@ Продукт не було створено
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Продукт не було створено
        return
    }
}

module.exports = {
    postProductCreateHandler
}