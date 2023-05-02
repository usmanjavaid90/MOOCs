//import the modules that are required
const express = require('express');
const router = express.Router();
const authController = require('./authController')

//This method post will regiater the use
router.post('/register',(req,res)=>{
        //retrive name, email and password from request body
        try{
                const {name, email, password} = req.body;
                if (!(name, email, password)){
                        return res.status(400).send("Required inputs are missing");
                }
                const userDetails = {name, email, password}
                //calling authController registeruser method return the error msg or the result
                authController.registerUser(userDetails,(err,result)=>{
                        if(err){
                                return res.status(400).send("User already exists")
                        }
                        else{
                                return res.status(201).send(result)
                        }
                })

        }catch{
                res.status(400).send({error: "Unexpected error while registering the user"})
        }   
        
})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
        //retrive email and password from req.body
        try{
                const {email, password} = req.body;
                if (!(email && password)){
                        return res.status(400).send({error: "Required inputs are missing"})
                }
                //calling the authController login usermethod return the error or the result 
                authController.loginUser({email,password},(err,result)=>{
                        if (err) {
                                res.status(401).send({error: "Invalid credentials", err})
                        }
                        else {
                                res.status(200).send({STATUS: "OK", data: result})
                        }        
                })
        }catch(err){
                res.status(500).send({error: "Unexpected error while registering the user", err})
        }     
})

module.exports = router