const express = require('express');
const router = express.Router();
const userRoutes = require('./user')


module.exports = (app) =>
    router
        .get("/healthcheck",(req,res)=>{
            res.status(200).send("Server is up and running");
        })
        .get('/',(req,res)=>{
            res.status(200).send("Mr.Doctor Application");
        })
        .use('/user',userRoutes())