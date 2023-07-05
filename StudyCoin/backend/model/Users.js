const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  walletID: {
    type: String,
    
  },
  
},
{timestamps: true,}


);

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({id:this.id}, process.env.jwtprivatekey,{expiresIn: "1d"})
  
  refreshToken = token; 
  return token
}

const User = mongoose.model('User', userSchema);

const validate = (data)=>{
  const schema = Joi.object(
    {
      fullname: Joi.string().required.label("name"),
      email:Joi.string().email().required.label("email"),
      password:passwordComplexity().required.label("password"),
      password_confirmation: Joi.any().equal(Joi.ref("password_confirmation")).required(),
      walletID:Joi.string().alphanum().label("walletID")

    }
  )
  return schema.validate(data)
}

//static sign up method 


module.exports = {User,validate}
