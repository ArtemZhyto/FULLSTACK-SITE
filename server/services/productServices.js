const Product = require('../models/product')

class ProductService {
    createProduct(name, code, ID, price, seller, country, type, date, category, image) {
        const product = new Product(name, code, ID, price, seller, country, type, date, category, image)
        return product
    }
}

module.exports = new ProductService()