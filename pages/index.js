import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [userName, setUserName] = useState("imstupidpleasehelp");
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Github users</h1>

        <div className={styles.grid}>
          {/*<form action="api/users"> */}
          <input
            placeholder="Username"
            onChange={e => setUserName(e.target.value)}
            type="text"
            value={userName}
          
          ></input>
          {userName}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/download.png" alt="Vercel Logo" className={styles.logo} />
          Doge
        </a>
      </footer>
    </div>
  );
}
