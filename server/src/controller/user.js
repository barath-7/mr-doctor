const { createUserService } = require("../service/userService");

const createUser = async (req,res) =>{
     try {
        let { body = {}} = req;
        let response = await createUserService(body);
        if(response.status == 'success'){
            return res.status(200).json(response);
        }else {
            return res.status(400).json(response);
        }
     } catch (error) {
        console.log(`Error while creating user: ${error}`)
        return res.status(400).json({
            status:"failure",
            message:"Error while creating user"
        });
     }
}

module.exports = {
    createUser
}