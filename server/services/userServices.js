const User = require('../models/user')

class UserService {
    createUser(name, mail, password, ID, regist_data, role = `no`, status = 'no-premium', sold = '0', rating = '0', contactMail = `no`, phone = `no`, region = `no`, allowNotifications = false, instagram = `no`, telegram = `no`, products = []) {
        const user = new User(name, mail, password, ID, regist_data, role, status, sold, rating, contactMail, phone, region, allowNotifications, instagram, telegram, products)
        return user
    }
}

module.exports = new UserService()