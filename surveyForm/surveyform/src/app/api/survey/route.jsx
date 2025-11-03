import {NextResponse} from "next/server";

export async function POST(req) {
    const {values} = await req.json();
    
    console.log(values);
    return NextResponse.json({msg: ['Hi from survey route.']})
    console.log(msg);
    
}