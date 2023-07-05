require('dotenv').config();
const mongoose = require('mongoose');
const uri = "mongodb+srv://imani:Qazxsw@cluster0.u2amera.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async() => {
    try{

        await mongoose
        .connect(uri, { useNewUrlParser: true,useUnifiedTopology: true })

    }catch(err){

        console.log('Error connecting to MongoDB:', error);

    }
}

module.exports = connectDB