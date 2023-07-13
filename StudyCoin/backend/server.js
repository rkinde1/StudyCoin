// Required dependencies
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/dbConn');
const LoginRoute = require("./routes/LoginRoute");
const RegisterRoute = require("./routes/RegisterRoute");
const cors = require("cors");
var cookieParser = require('cookie-parser')

require("dotenv").config();
const { MONGO_URL, PORT } = process.env;
// Create Express app
const app = express();


//connect to mangodb
mongoose.set("strictQuery",false);
connectDB();

//connect user schema


// Middleware
app.use(express.json());
app.use(bodyParser.json());
//log request on console
app.use((req,res,next) => {
  console.log(req.path,req.method)
  next()
})


app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

//routes

// app.get('/', async (req, res) =>{
//   res.json({message:"get request  default"})
// });

//register route

app.use(LoginRoute);

//login route 

app.use(RegisterRoute);

// Start the server but only if mango db is connected
mongoose.connection.once('open',() =>{
  console.log('Connected to db');

  //connect to server after connect to mango db
  app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');})
});
;

