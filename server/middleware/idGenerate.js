function generateID() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const length = 15
    let id = ''
    
    for (let i = 0; i < length; i++) {
        const randomSymbol = Math.floor(Math.random() * charset.length)
        id += charset.charAt(randomSymbol)
    }

    return id
}

module.exports = generateID