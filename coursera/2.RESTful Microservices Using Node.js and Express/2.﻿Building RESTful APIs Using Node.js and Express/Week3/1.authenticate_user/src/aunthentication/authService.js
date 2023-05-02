//import jsonwebtoken and config file
const jwt = require('jsonwebtoken')
const config = require('../../config')

//This function will verify email and password and will return true and false

function verifyUser({email,password},userData){
   if(userData===undefined){
  return false
   }
   else {

     if(email === userData.email && password === userData)
     return true;
   }
}

//This function will create JWT token and return the token
// use the method jwt.sign having two parameters payload and Auth_Secret
function createJWT(userdata) {
  //create payload
  const payLoad = {
    role: "USER",
    email: userdata.email,
    name: userdata.name
  }
  const token = jwt.sign(payLoad, config.AUTH_SECRET, {expiresIn: 3600})
   
    return token;
  }


  module.exports={
    verifyUser,createJWT
  }