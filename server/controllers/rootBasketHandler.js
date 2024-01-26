const loadUser = require('../../database/findUserBasket')
const loadProducts = require('../../database/findProductsBasket')

const rootBasket = async (req, res) => {
    try {
        const findUserBasket = await loadUser()
        // const findUserBasket = await loadUser('CJUwUxcBgBjh0iaFiX4NXbaUP6IsKB8ufEBX2BtNk48qvRtCZr01yYr1Sox5UwtVIEkFPoae0I1xQ2TNWftxrfkDusyCNfyhESKQUodisI9sHK4kAsWrEB8O1J829flMLziExm8xQzLmCXixjYhVd4')
        if (findUserBasket == "nothing") {
            res.send('nothing')
        } else {
            const findProductsBasket = await loadProducts(findUserBasket)
            res.send(findProductsBasket)
        }
    } catch (err) {
        console.log(err)
        res.send(false)
    }
}

module.exports = {
    rootBasket
}