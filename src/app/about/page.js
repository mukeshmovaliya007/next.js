"use client";
import { useRouter } from "next/navigation";

const About = () =>{
    const router = useRouter();

    const navigation = (name) => {
        router.push(name)
    }
    return (
        <div>
            <h1>About Us</h1>
            <button onClick={() => navigation("/")}>Go To Home Page</button>
            <button onClick={() => navigation("/login")}>Go To Login Page</button>
        </div>
    )
}

export default About;