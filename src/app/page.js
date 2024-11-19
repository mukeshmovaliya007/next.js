'use client'
import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {  
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>       
          <ul className="login-menu">
              <li><h4>Demo</h4></li>
              <li>
                  <Link href="/">Home</Link>
              </li>
              <li>
                  <Link href="/login">Login Main</Link>
              </li>
              
          </ul>   
      </main>     
    </div>
  );
}

