const bcrypt = require('bcryptjs')
const salt = 10;
 
/**
 * Encrypt a given password using bcrypt
 * @param {string} PASSWORD - Password to be encrypted
 * @returns {Promise<string>} - Encrypted password
 * for register
 */
async function encryptPassword(PASSWORD : string){
    const result = await bcrypt.hash(PASSWORD, bcrypt.genSaltSync(salt))
    return result;
}

/**
 * Check if a given password matches a given encrypted password
 * @param {string} password - Password to be checked
 * @param {string} encryptedPassword - Encrypted password to be checked against
 * @returns {Promise<boolean>} - True if the password matches, false otherwise
 * for login
 */
async function checkPassword(PASSWORD : string, password: string){
    console.log(PASSWORD)
    const result = await bcrypt.compare(PASSWORD, password)
    return result
}

module.exports = {
    encryptPassword,
    checkPassword
}