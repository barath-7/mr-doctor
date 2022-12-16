const { isEmpty, pickBy, omit, identity } = require("lodash");
const User = require("../model/userSchema");
const { generateToken } = require("./helper/authTokenHelper");
const { hashPassword } = require("./helper/passwordHelper");

const createUserService = async (body) =>{
    let { name = '', email = '', password = '', phoneNumber = '', dateOfBirth = '',
            address = '', aadhaarNumber = '', gender = ''} = body || {};
    
    try {
    let bodyPayload = {name,email,password,phoneNumber,dateOfBirth,address,aadhaarNumber,gender};
    let isValidUser = await validateUserRegistrationData(bodyPayload);
    if(isValidUser.status == 'failure'){
        return {
            status:'failure',
            message:isValidUser?.message
        }
    }
    let hashedPassword = await hashPassword(password);
    bodyPayload.password = hashedPassword;

    let isDataMissing = pickBy(bodyPayload,isEmpty);
    let missingKeys = Object.keys(isDataMissing);
    let updateQuery = omit(bodyPayload,missingKeys);

    let authToken = await generateToken(phoneNumber) || '';
    if(!isEmpty(authToken)){
        updateQuery.token  = authToken;
    }

    let updatedData = await new User(updateQuery).save();

    return {
        status:"success",
        message:"User registered succesfully.",
        data:{
            token:authToken
        }
    }
    
    } catch (error) {
        console.log(`Error in create user service: ${error}`)
        return {
            status:"failure",
            message:"Error while creating user"
        };
    }
}

const validateUserRegistrationData = async(bodyPayload) =>{
    let { name = '', email = '', password = '', phoneNumber = '', dateOfBirth = '',
    address = '', aadhaarNumber = '', gender = ''} = bodyPayload || {};

    try {
        if(isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(phoneNumber) || 
            isEmpty(dateOfBirth) || isEmpty(address) || isEmpty(gender)){
                return {
                    status:"failure",
                    message:"Mandatory fields are missing"
                };  
        }
    
        let isExistingUser = await User.findOne({$or:[{phoneNumber}, {email}]});
        if(!isEmpty(isExistingUser)){
            return {
                status:'failure',
                message:'User already exists'
            }
        }

        return {
            status:'success',
            message:'User validated succesfully'
        }
    
    } catch (error) {
        console.log(`Error while validating user data: ${error}`)
        return {
            status:"failure",
            message:"Error while validating user data"
        };
    }

}

module.exports = {
    createUserService
}