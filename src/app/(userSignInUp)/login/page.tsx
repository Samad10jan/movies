//@ts-nocheck
"use client";

import { useState } from "react";
import { signUpHandler } from "@/app/actions";
import Link from "next/link";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [error, setError] = useState({});

    async function handleEvent(e) {
        e.preventDefault();

        const errorObj = {};

        if (!name || name.length < 5) {
            errorObj.name = "Enter valid name";
        }

        if (!email || !email.includes("@")) {
            errorObj.email = "Enter valid email";
        }
        if (!apiKey) {
            errorObj.apiKey = "Enter valid Key";
        }

        if (Object.keys(errorObj).length > 0) {
            setError(errorObj);
            return;
        }

        const obj = { name, email, apiKey };
        console.log("Sending Request");

        const res = await signUpHandler(obj);
        if (res?.sucess) {
            alert(res.message);
        } else {
            alert(res?.message)
        }
    }

    return (
        
            
            <div >
                {/* <div className="text-2xl font-bold bg-blue- text-white ">Bhai LOG IN nahi Karoge 🙂</div> */}
            
                <div className=" rounded-3xl w-100 backdrop-blur-sm ">
                    <p className=" text-4xl text-white font-extrabold pt-3">Login</p>
                    <form className="flex flex-col text-white p-2 m-5 gap-4  " onSubmit={handleEvent}>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" p-4 rounded-2xl bg-cyan-600"
                        />
                        {error.name && <p className="text-red-500">{error.name}</p>}

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" p-4 rounded-2xl  bg-blue-950"
                        />
                        {error.email && <p className="text-red-500">{error.email}</p>}

                        <input
                            type="text"
                            placeholder="Enter API Key"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            className="p-4 rounded-2xl  bg-blue-950"
                        />
                        {error.api && <p className="text-red-500">{error.api}</p>}

                        <button type="submit" className="mt-4 bg-blue-950 text-white p-2 rounded-2xl hover:bg-blue-900">Submit</button>
                    </form>
                    New Here? Go To<Link href={"/signup"} className="text-blue-500"> SignUp Page</Link>
                </div>
            </div>
    );
}