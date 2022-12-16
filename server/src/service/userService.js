const { isEmpty, pickBy, omit } = require("lodash");
const User = require("../model/userSchema");

const createUserService = async (body) =>{
    let { name = '', email = '', password = '', phoneNumber = '', dateOfBirth = '',
            address = '', aadhaarNumber = '', gender = ''} = body || {};
    
    try {
        if(isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(phoneNumber) || 
            isEmpty(dateOfBirth) || isEmpty(address) || isEmpty(gender)){
                return {
                    status:"failure",
                    message:"Mandatory fields are missing"
                };  
        }
    
    let bodyPayload = {name,email,password,phoneNumber,dateOfBirth,address,aadhaarNumber,gender};
    let isDataMissing = pickBy(bodyPayload,isEmpty);
    let missingKeys = Object.keys(isDataMissing);
    let updateQuery = omit(bodyPayload,missingKeys);
    let updatedData = await new User(updateQuery).save();
    return {
        status:"success",
        message:"User registered succesfully."
    }
    
    } catch (error) {
        console.log(`Error in create user service: ${error}`)
        return {
            status:"failure",
            message:"Error while creating user"
        };
    }
}

module.exports = {
    createUserService
}