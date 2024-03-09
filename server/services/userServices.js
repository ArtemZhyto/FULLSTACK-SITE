const User = require('../models/user')

class UserService {
    createUser(name, mail, password, ID, regist_data, sold = 0, contactMail = `no`, phone = `no`, region = `no`, allowNotifications = true, instagram = `no`, telegram = `no`, img = 'no', products = []) {
        const user = new User(name, mail, password, ID, regist_data, sold, contactMail, phone, region, allowNotifications, instagram, telegram, img, products)
        return user
    }
}

module.exports = new UserService()