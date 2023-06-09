const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {User} = require("../model/Users")
const jwt = require('jsonwebtoken');
const Joi = require('joi');

//create token 
const createrToken = (id) =>{
    const token = jwt.sign({id}, process.env.JWT_PRIVATE_KEY,{expiresIn: "1d"})


return token
}

router.post("/api/register", async(req,res) =>{
    try{
        console.log("register now");
       // const  validData = validate(req.body);


       console.log("request has valid data");
        const founduser = await User.findOne({email:req.body.email});

        if(founduser)
            {
            console.log("user exist");
            return res.status(409).send({message:"User with this email address already exists"})}
        

        console.log("user doesn't exist");
        //once you see the right data has been entered and it isnt a duplicate 
        //hass password and create user 
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPwd = await bcrypt.hash(req.body.password,salt);

        //create new user document
        const newUser =  new User({
            name: req.body.firstName,
            email: req.body.email,
            password:hashPwd})

            console.log("new user created ");
         
            await newUser.save()

            console.log("new user saved ");

        const fUser = await User.findOne({email:req.body.email}).select("+password ");
        const tokens = createrToken(fUser.id)


        res.status(201).send({message:"User create successfully"})
        


    }
    catch(error){
        res.status(501).send({message:"internal server error"})
    }
})





module.exports = router;