
"use client"
import Link from "next/link";
import { useParams } from 'next/navigation';

const StudentDetail =  () => {
    const params = useParams(); // Access params synchronously
    const studentId = params.student;
    return (
        <div>
            <h1>Student Detail</h1>    
            <h3>Studnet ID: {studentId}</h3>
            <Link href="/studentlist">Back to Student List page</Link>
        </div>
    )
}

export default StudentDetail;