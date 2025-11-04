import mongoose from 'mongoose'

// Creating a funtion that connects the MoongDB Database to the form using Mongoose.
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('DB connected')
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
