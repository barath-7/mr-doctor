const express = require('express');
const router = express.Router();
const userRoutes = require('./user')


module.exports = (app) =>
    router
        .get("/healthcheck",(req,res)=>{
            res.send("Server is up and running");
        })
        .use('/user',userRoutes())