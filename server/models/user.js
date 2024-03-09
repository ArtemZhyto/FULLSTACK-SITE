class User {
    constructor(name, mail, password, ID, regist_data, sold, contactMail, phone, region, allowNotifications, instagram, telegram, img, products) {
        this.name = name
        this.mail = mail
        this.password = password
        this.ID = ID
        this.regist_data = regist_data
        this.sold = sold
        this.contactMail = contactMail
        this.phone = phone
        this.region = region
        this.allowNotifications = allowNotifications    
        this.instagram = instagram
        this.telegram = telegram
        this.img = img
        this.products = products
    }
}
 
module.exports = User