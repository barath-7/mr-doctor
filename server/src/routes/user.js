const express = require('express');
const { createUser } = require('../controller/user');
const router = express.Router();

const routes = () =>{
    router.route('/createUser').post(createUser)
    return router;
}

module.exports = routes