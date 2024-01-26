function generateToken() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const length = 150
    let password = ''
    
    for (let i = 0; i < length; i++) {
        const randomSymbol = Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomSymbol)
    }

    return password
}

module.exports = generateToken