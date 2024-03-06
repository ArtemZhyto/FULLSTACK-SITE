const loadAllProducts = require('../../../database/loadAllProducts')

const getProductsRootHandler = async (req, res) => {
    try {
        const products = await loadAllProducts()
        res.status(200).send(products) //@ Відправити информацію про всі продукти
        return
    } catch (err) {
        res.status(504).send(false) //@ Помилка на сервері
        return
    }
}

module.exports = {
    getProductsRootHandler
}