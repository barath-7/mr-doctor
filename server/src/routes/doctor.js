const express = require('express');
const { createDoctor, doctorLogin } = require('../controller/doctor');
const router = express.Router();

const routes = () =>{
    router.route('/create-doctor').post(createDoctor)
    router.route('/doctor-login').post(doctorLogin)
    return router;
}

module.exports = routes