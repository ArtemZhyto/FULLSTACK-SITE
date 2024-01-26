const getBuyProductHandler = (req, res) => {
    //TODO: Покупка товара по ID. Если товаров несколько, то путь будет как /buy&:product1ID&product2ID...
    //TODO: Отправить сообщение, что всё прошло успешно, иначе - ошибка
    res.send(`Hello from BASKET BUY&PRODUCT_ID HANDLER! Your productID is ${req.params.productID}`)
}

module.exports = {
    getBuyProductHandler
}