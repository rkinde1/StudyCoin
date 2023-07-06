require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async() => {
    try{

        await mongoose.connect("mongodb+srv://imani:Qazxsw@cluster0.u2amera.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

    }catch(err){

        console.log('Error connecting to MongoDB:', err);

    }
}

module.exports = connectDB