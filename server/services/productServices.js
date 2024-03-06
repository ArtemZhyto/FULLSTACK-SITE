const Product = require('../models/product')

class ProductService {
    createProduct(name, code, ID, price, seller, country, type, date, category) {
        const product = new Product(name, code, ID, price, seller, country, type, date, category)
        return product
    }
}

module.exports = new ProductService()