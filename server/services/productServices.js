const Product = require('../models/product')

class ProductService {
    createProduct(name, code, ID, price, seller, country, type, date, category, desript, images = []) {
        const product = new Product(name, code, ID, price, seller, country, type, date, category, desript, images)
        return product
    }
}

module.exports = new ProductService()