const User = require('../models/user')

class UserService {
    createUser(name, mail, password, ID, regist_data, role = `isn't`, status = 'no-premium', sold = '0', rating = '0', contactMail = `isn't`, phone = `isn't`, region = `isn't`, allowNotifications = false, instagram = `isn't`, telegram = `isn't`, products = {}) {
        const user = new User(name, mail, password, ID, regist_data, role, status, sold, rating, contactMail, phone, region, allowNotifications, instagram, telegram, products)
        return user
    }
}

module.exports = new UserService()