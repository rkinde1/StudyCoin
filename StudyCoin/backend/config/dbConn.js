require('dotenv').config();

const { MONGO_URL } = process.env;
const mongoose = require('mongoose');

const connectDB = async() => {
    try{

        await mongoose
        .connect(MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true })

    }catch(err){

        console.log('Error connecting to MongoDB:', error);

    }
}

module.exports = connectDB