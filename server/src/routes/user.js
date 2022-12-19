const express = require('express');
const { createUser, userLogin } = require('../controller/user');
const router = express.Router();

const routes = () =>{
    router.route('/create-user').post(createUser)
    router.route('/user-login').post(userLogin)
    return router;
}

module.exports = routes