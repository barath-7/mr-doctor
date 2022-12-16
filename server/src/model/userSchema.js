const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ 
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
    password:String, //TODO: Revistit password
    dateOfBirth:Date,
    address:String,
    aadhaarNumber:String,
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
    collection: 'user',
    timestamps: true,
}
 );

 const User = mongoose.model('User', userSchema);

 module.exports = User;