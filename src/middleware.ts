//@ts-nocheck
// import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default function middleware(req){

    // getting apiKey , if set by user value from cookies
    const key =req.cookies.get('apiKey')?.value;
    console.log("in middleware");

    const protectedpaths =["/","/myfav","/trending","/toprated","/upcoming"]
    
    // current url is in protected array ?
    if(protectedpaths.includes(req.nextUrl.pathname)){
        // then check if not exist any apiKey by user
        if(!key){
            // then redirect user to login page , so user can't access protected paths until sucessful login
            return NextResponse.redirect("http://localhost:3000/login")
        }
    }
    return NextResponse.next(); // if apikey exist in cookies then do next task , which was to redirect to homepage done by server
}