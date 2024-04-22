const Product = require('../models/product')

class ProductService {
    createProduct(name, code, ID, price, seller, country, type, date, category, desript, images = []) {
        const productImages = images.concat([])
        const product = new Product(name, code, ID, price, seller, country, type, date, category, desript, productImages)
        return product
    }
}

module.exports = new ProductService()