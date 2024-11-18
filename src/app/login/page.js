"use client";
import { useRouter } from "next/navigation";
const Login  = () =>{

    const router = useRouter();
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => router.push("/")}>Go To Home Page</button>
        </div>
    )
}

export default Login;