const jwt = require('jsonwebtoken');
// const secret = process.env.SECRET
let secret = 'doctorapp'

const generateToken = async (phoneNumber) => {
    try {
        const token = jwt.sign({ phoneNumber }, secret, { expiresIn: '1d' });
        return token; 
    } catch (error) {
        console.log(`Error while creating auth token: ${error}`);
        return "";
    }   
}

const decodeAuthToken = (token) =>{
    try {
        let decodedToken = '';
         jwt.verify(token, secret, function (err, data) {
            if (err) {
                console.log('Token expired!', err || JSON.stringify(err));
                return;
            }
            decodedToken = data;
        });
        return decodedToken;
    } catch (error) {
        console.log(`Error while decoding auth token!. Error: ${error}`);
        return "";
    }
}

module.exports = {
    generateToken,
    decodeAuthToken
}