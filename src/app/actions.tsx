//@ts-nocheck
"use server"


import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const user = [
    {
        name: "abbbb",
        email: "abdul@123"
    }
]

export async function signUpHandler(obj) {


    console.log("Got request", obj);
    const api = obj.apiKey
    const existing = user.find((user) => user.email === obj.email);

    if (existing) {
        return {
            sucess: false,
            message: "The email Already Exists"
        }
    }

   try{

       const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${api}`
       const response = await fetch(url);
       const data = await response.json()
       if (data.Response == "False") {
           return {
               success: false,
               message:"Invalid Api"
            }
        }
    }catch(e){
        return {
               success: false,
               message:`Error ${e}`
            }

    }
    const userCookies = await cookies();
    userCookies.set("apiKey",api)
    redirect("/")
    




}