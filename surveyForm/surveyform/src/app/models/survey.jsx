import mongoose, {Schema, string} from 'mongoose'

// const {Schema, default: mongoose} = require('mongoose')
// const {string} = require('mongoose')

// creating a schema for the form data to be stored in the DB using the field names as headers. The data types are also 
// specified

const surveySchema = new Schema({
    fullname: {
        type: string,
        required: [true, 'Full names are Required'],
        trim: true
    },
    age: {
        type: string,
        required: [true, 'Age is Required'],
        trim: true
    },
    email: {
        type: string,
        required: [true, 'Email is Required'],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
        trim: true,
    },
    education: {
        type: string,
        required: [true, 'Education is Required'],
        trim: true,
    },
    department: {
        type: string,
        required: [true, 'Department is Required'],
        trim: true,
    },
    jobtitle: {
        type: string,
        required: [true, 'Job Title is Required'],
        trim: true,
    },
    jobtype: {
        type: string,
        required: [true, 'Job Type is Required'],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Survey = mongoose.model.survey || mongoose.model('Survey', surveySchema)

export default Survey;