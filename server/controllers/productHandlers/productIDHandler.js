const loadProduct = require('../../../database/loadProduct')

const getProductIDHandler = async (req, res) => {
    try {
        const findProduct = await loadProduct(req.params.productID)
        if (findProduct == "nothing") {
            res.status(404).send(`Помилка. Продукт не знайдено`) //@ Продукту з переданим ID не існує
            return
        } else {
            res.status(200).send(findProduct) //@ Віправити знайдений товар
            return
        }
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    getProductIDHandler
}