const express = require('express');
const router = express.Router();
const {User} = require("../model/Users")
const bcrypt = require('bcrypt');
const Joi = require('joi');
var validator = require('validator');
const jwt = require('jsonwebtoken');

//create token 
const createToken = (_id) =>{
    const token = jwt.sign({id:this.id}, process.env.jwtprivatekey,{expiresIn: "1d"})


return token
}


router.post("/api/login",async(req,res )=> {
    console.log('login started')
    try{

        const {email,password} = req.body

        if(!email || !password)
        {
            return res.status(400).send({message: "missing email or password"});

        }

        const validEmail = await validator.isEmail(email); 
        

        if(!validEmail)
            return res.status(400).send({message: "email not valid"});
        
        console.log("request has valid email");

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

        //generate a token which will allow the user to login as soon as they register
        const token = await createToken(User._id);
        console.log("generated token");

        res.cookie("token", token, { withCredentials: true,httpOnly: false,});
         
        //res.status(200).send({message:"Log in sucessfully"},token);

        //{message:"Log in sucessfully"},tokens

        console.log("logged in and token sent to cookie");


        
        

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