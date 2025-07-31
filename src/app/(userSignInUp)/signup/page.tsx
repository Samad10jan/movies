//@ts-nocheck
"use client";


import { SignUpUser } from "@/services/firebase-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignUp() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const errorObj = {};

        if (!username || username.length < 5) {
            errorObj.username = "Enter valid name";
        }

        if (!email || !email.includes("@")) {
            errorObj.email = "Enter valid email";
        }

        if (!pass) {
            errorObj.pass = "Enter valid Key";
        }

        if (Object.keys(errorObj).length > 0) {
            setError(errorObj);
            return;
        }

        try {
            const userData = await SignUpUser(email, pass);
            console.log(userData);

            if (userData?.user) {
                alert("Welcome!! Please Login with your email and password");
                router.push("/login");
            } else {
                alert("Something happened. Please try again.");
            }
        } catch (err: any) {
            const errMsg = err?.message || "";
            if (errMsg.includes("email-already-in-use")) {
                alert("The provided email is already in use. Please go to login");
            } else {
                alert("Signup failed. Please try again.");
            }
        }
    }

    return (
        <main>
            <div className="rounded-3xl w-100 backdrop-blur-sm">
                <p className="text-4xl text-white font-extrabold pt-3">SignUp</p>
                <form onSubmit={handleSubmit} className="flex flex-col text-white p-2 m-5 gap-4">
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your UserName..."
                        className="p-4 rounded-2xl bg-cyan-600"
                    />
                    {error.username && <p className="text-red-500">{error.username}</p>}

                    <input
                        type="email"
                        value={email}
                        name="useremail"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email..."
                        className="p-4 rounded-2xl bg-cyan-600"
                    />
                    {error.email && <p className="text-red-500">{error.email}</p>}

                    <input
                        type="password"
                        value={pass}
                        name="userpass"
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Enter Your Password..."
                        className="p-4 rounded-2xl bg-cyan-600"
                    />
                    {error.pass && <p className="text-red-500">{error.pass}</p>}

                    <button type="submit" className="bg-blue-700 p-3 rounded-xl hover:bg-blue-800 transition">
                        Submit
                    </button>
                </form>
                 Already have been signin? Go To<Link href={"/login"} className="text-blue-500"> Login Page</Link>
               
            </div>
        </main>
    );
}