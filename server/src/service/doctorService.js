const { isEmpty, pickBy, omit, identity } = require("lodash");
const Doctor = require("../model/doctorSchema");
const { generateToken } = require("./helper/authTokenHelper");
const { hashPassword, validatePassword } = require("./helper/passwordHelper");

const createDoctorService = async (body) =>{
    let { name = '', email = '', password = '', phoneNumber = '', dateOfBirth = '',
            address = '', aadhaarNumber = '', gender = '', doctorId=''} = body || {};
    
    try {
    let bodyPayload = {name,email,password,phoneNumber,dateOfBirth,address,aadhaarNumber,gender,doctorId};
    let isValidDoctor = await validateDoctorRegistrationData(bodyPayload);
    if(isValidDoctor.status == 'failure'){
        return {
            status:'failure',
            message:isValidDoctor?.message
        }
    }
    let hashedPassword = await hashPassword(password);
    bodyPayload.password = hashedPassword;

    let isDataMissing = pickBy(bodyPayload,isEmpty);
    let missingKeys = Object.keys(isDataMissing);
    let updateQuery = omit(bodyPayload,missingKeys);

    let authToken = await generateToken(doctorId) || '';
    if(!isEmpty(authToken)){
        updateQuery.token  = authToken;
    }

    let updatedData = await new Doctor(updateQuery).save();

    return {
        status:"success",
        message:"User registered succesfully.",
        data:{
            token:authToken
        }
    }
    
    } catch (error) {
        console.log(`Error in create doctor service: ${error}`)
        return {
            status:"failure",
            message:"Error while creating doctor"
        };
    }
}

const validateDoctorRegistrationData = async(bodyPayload) =>{
    let { name = '', email = '', password = '', phoneNumber = '', dateOfBirth = '',
    address = '', aadhaarNumber = '', gender = '', doctorId=''} = bodyPayload || {};

    try {
        if(isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(phoneNumber) || 
            isEmpty(dateOfBirth) || isEmpty(address) || isEmpty(gender) || isEmpty(doctorId)){
                return {
                    status:"failure",
                    message:"Mandatory fields are missing"
                };  
        }
    
        let isExistingDoctor = await Doctor.findOne({$or:[{doctorId}, {email}]});
        if(!isEmpty(isExistingDoctor)){
            return {
                status:'failure',
                message:'Doctor already exists'
            }
        }

        return {
            status:'success',
            message:'User validated succesfully'
        }
    
    } catch (error) {
        console.log(`Error while validating Doctor data: ${error}`)
        return {
            status:"failure",
            message:"Error while validating Doctor data"
        };
    }

}


const doctorLoginService = async (body) =>{
    try {
        let { doctorId = '', password = ''} = body;
        if(isEmpty(doctorId) || isEmpty(password)){
            return {
                status:"failure",
                message:"Mandatory fields are missing"
            };
        }

        let doctorData = await Doctor.findOne({ doctorId },{ doctorId : 1, password: 1}) || {};
        if(isEmpty(doctorData)){
            return {
                status:"failure",
                message:"Doctor ID do not exists"
            };
        }

        let { password:hashedPassword = ''} = userData || {};
        let isPasswordValid = await validatePassword(password,hashedPassword);
        if(!isPasswordValid){
            return {
                status:"failure",
                message:"Invalid password"
            };
        }
    
        let authToken = await generateToken(phoneNumber) || '';

        return {
            status:"success",
            message:"Doctor Logged in succesfully.",
            data:{
                token:authToken
            }
        }

    } catch (error) {
        console.log(`Error while doctor login: ${error}`)
        return {
            status:"failure",
            message:"Error while doctor login"
        };
    }
}

module.exports = {
    createDoctorService,
    doctorLoginService
}