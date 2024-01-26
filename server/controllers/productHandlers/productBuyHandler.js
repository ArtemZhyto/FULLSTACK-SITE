const getProductBuyHandler = (req, res) => {
    //TODO: Покупка товара
    //TODO: Отправить сообщение, что всё прошло успешно, иначе - ошибка
    res.send(`Hello from PRODUCT BUY HANDLER! Your productID is ${req.params.productID}`)
}

module.exports = {
    getProductBuyHandler
}