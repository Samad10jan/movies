import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase"

const auth = getAuth(app);

export async function SignUpUser(email: string, password: string) {
    const userData = await createUserWithEmailAndPassword(auth, email, password)
    return userData;
}