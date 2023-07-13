const express = require('express');
const router = express.Router();
const {User} = require("../model/Users")
const bcrypt = require('bcrypt');
const Joi = require('joi');
var validator = require('validator');
const jwt = require('jsonwebtoken');

//create token 
const createToken = (id) =>{
    const token = jwt.sign({id}, process.env.JWT_PRIVATE_KEY,{expiresIn: "1d"})


return token
}


router.post("/api/login",async(req,res )=> {
    console.log('login started')
    try{
        const email = req.body.email;
        const password = req.body.password;

        if(!email)
        {
            return res.status(400).send({message: "missing email"});

        }
        if(!password)
        {
            return res.status(400).send({message: "missing password"});
        }


        //use the findOne method to check if there are user with email provided
        const foundUser = await User.findOne({email:email})
        const fUser = await User.findOne({email:email}).select("+password ");

        if(!foundUser)
        {return res.status(400).send({message:"Invalid email or password"})}
        
        console.log("user exists");
         
        //encrypt the password entered by the user and compare it witht the encoded passsword within the databse
        //console.log(password)
        

        const oldpwd = await fUser.password
        //console.log(oldpwd)
        const auth = await bcrypt.compare(password,oldpwd)
        if (!auth) {
          return res.send({message:'Incorrect password or email' }) 
         }
        console.log("request has valid password");
        console.log(fUser.id);

        //generate a token which will allow the user to login as soon as they register
        const token = await createToken(fUser.id);
        console.log("generated token");

        res.cookie("token", token, { withCredentials: true,httpOnly: false,});
         
        //res.status(200).send({message:"Log in sucessfully"},token);

        //{message:"Log in sucessfully"},tokens

        console.log("logged in and token sent to cookie");

        res.status(200).send({message:"Log in sucessfully",token:token});
        
        

    }catch(error){
        console.log(error);
        res.status(500).send({message:"Internal server issues"});

    }
})

const validate = data =>{
    const schema = Joi.object(
        {
            email:Joi.string().email().required.label("email"),
            password:Joi.passwordComplexity().required.label("password"),
        }
    )

    return schema.validate(data);
}

module.exports = router;