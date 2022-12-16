const bcrypt = require('bcrypt');


const hashPassword = async(plaintextPassword) => {
    const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
    return hashedPassword;
}

const validatePassword = async (plaintextPassword, hashedPassword) =>{
    const result = await bcrypt.compare(plaintextPassword, hashedPassword);
    return result;
}

module.exports = {
    hashPassword,
    validatePassword
}
