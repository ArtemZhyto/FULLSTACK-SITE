function generateCode() {
    const length = 6
    let code = ''

    for (let i = 0; i < length; i++) {
        const num = Math.floor(Math.random() * 10)
        code += num
    }

    return code
}

module.exports = generateCode