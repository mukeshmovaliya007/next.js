"use client";
import { useRouter } from "next/navigation";
const AboutCollege = () =>{
    const router = useRouter();
    return (
        <div>
            <h1>About Page for College</h1>
            <button onClick={() => router.push("/about")}>Go To About Page</button>
        </div>
    )
}

export default AboutCollege;