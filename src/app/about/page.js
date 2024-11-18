"use client";
import Link from "next/link";
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
            <br /><br />
            <Link href="/about/aboutcollege"> Go to College Page</Link>
            <br /><br />
            <Link href="/about/aboutstudent"> Go to Student Page</Link>
        </div>
    )
}

export default About;