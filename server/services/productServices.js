const Product = require('../models/product')

class ProductService {
    createProduct(name, code, ID, price, seller, country, type, date, sorting, category) {
        const product = new Product(name, code, ID, price, seller, country, type, date, sorting, category)
        return product
    }
}

module.exports = new ProductService()