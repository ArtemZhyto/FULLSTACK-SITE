class User {
    constructor(name, mail, password, ID, regist_data, role, status, sold, rating, contactMail, phone, region, allowNotifications, instagram, telegram, products) {
        this.name = name
        this.mail = mail
        this.password = password
        this.ID = ID
        this.regist_data = regist_data
        this.role = role
        this.status = status
        this.sold = sold
        this.rating = rating
        this.contactMail = contactMail
        this.phone = phone
        this.region = region
        this.allowNotifications = allowNotifications
        this.instagram = instagram
        this.telegram = telegram
        this.products = products
    }
}
 
module.exports = User