import Link from "next/link";

const StudentList = () => {

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/1">Mukesh</Link> 
                </li>
                <li>
                    <Link href="/studentlist/2">Amit</Link> 
                </li>
                <li>
                    <Link href="/studentlist/3">Bhano</Link> 
                </li>
                <li>
                    <Link href="/studentlist/4">Keyur</Link> 
                </li>
            </ul>
        </div>
    )
}

export default StudentList;