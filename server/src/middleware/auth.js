const { isEmpty } = require("lodash");
const { decodeAuthToken } = require("../service/helper/authTokenHelper");
const { decodeClientId } = require("./helper");

const authMiddleware = async (req,res,next) =>{

try {
    let { headers = {}} = req;
    let { authorization = '', clientid = ''} = headers; //authorization should come in the form of "Bearer token" //clientid is phonenumber
if(isEmpty(authorization)){
    return res.status(401).json({
        status:'failure',
        message:'Authentication Failed !'
    })
}
let authToken = authorization.split(' ')[1];

let isValidUser = validateUser(authToken,clientid);
if(isValidUser){
    next()
} else {
    return res.status(401).json({
        status:'failure',
        message:'Authentication Failed !'
    })
}
} catch (error) {
    console.log(`Error while authenticating user, ${error}`)
    return res.status(400).json({
        status:'failure',
        message:'Error while authenticating user'
    })
}


}

const validateUser = (authToken = '', clientid = '') =>{
 try {
    let decodedToken = decodeAuthToken(authToken);
    let decodedClientId = decodeClientId(clientid);
    let { phoneNumber = ''} = decodedToken;
    if(decodedClientId == phoneNumber){
        return true;
    }
    else {
        return false;
    }

 } catch (error) {
    console.log(`Error while validating user, ${error}`)
    return false;
 }

}



module.exports = {
    authMiddleware
}