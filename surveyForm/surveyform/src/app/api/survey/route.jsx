import connectDB from "@/app/lib/mongodb";
import Survey from "@/app/models/survey";
import mongoose from "mongoose";
import {NextResponse} from "next/server";

//Creating the route between the DB and the form models as well as the code for adding the data in to the DB
export async function POST(req) {
    const { fullname, age, email, education, department, jobtitle, jobtype } = await req.json();
    
    try {
        await connectDB();
        await Survey.create({fullname, age, email, education, department, jobtitle, jobtype})
        return NextResponse.json({
            msg: ['Successfully Sent!'], success: true
        })
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = []
            for (let e in error.errors) {
                errorList.push(e.message)
            }
            return NextResponse.json({ msg: errorList })
        } else {
            return NextResponse.json({ msg: 'Unable to send message.'})
        } // To verify is there's an error from the Mongoose validation
    }
}