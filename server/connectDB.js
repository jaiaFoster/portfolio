const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;