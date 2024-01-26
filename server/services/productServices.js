const Product = require('../models/product')

class ProductService {
    createProduct(name, price, seller, country, type, date, sorting, category, photo, ID) {
        const product = new Product(name, price, seller, country, type, date, sorting, category, photo, ID)
    }
}

module.exports = new ProductService()