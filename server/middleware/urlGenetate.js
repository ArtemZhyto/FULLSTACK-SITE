function generateURL() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const length = 20
    let url = ''
    
    for (let i = 0; i < length; i++) {
        const randomSymbol = Math.floor(Math.random() * charset.length)
        url += charset.charAt(randomSymbol)
    }

    return url
}

module.exports = generateURL