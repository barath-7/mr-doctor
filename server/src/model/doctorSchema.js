const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({ 
    name : {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email:{
        type:String,
        unique:true,
        required: true,
        trim: true
    },
    phoneNumber:{
        type:String,
        unique:true,
        required: true,
        trim: true
    },
    doctorId:{
        type:String,
        unique:true,
        required: true,
        trim: true
    },
    password:String, 
    dateOfBirth:Date,
    address:String,
    aadhaarNumber:String,
    token:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:[
            "male",
            "female",
            "other"
        ]
    }
 },
 {
    collection: 'doctor',
    timestamps: true,
}
 );

 const Doctor = mongoose.model('Doctor', doctorSchema);

 module.exports = Doctor;