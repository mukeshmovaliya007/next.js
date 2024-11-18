'use client'
import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Demo</h1>
       <Link href="/login"> Go TO Login Page</Link>
       <br />
       <br />
       <Link href="/about"> Go TO About Us Page</Link>       
      </main>     
    </div>
  );
}

