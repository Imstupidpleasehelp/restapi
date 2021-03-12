import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [userName, setUserName] = useState("imstupidpleasehelp");
  const [userData, setUserData] = useState({});
  const getData = async (userName) => {
    
    fetch(`https://api.github.com/users/imstupidpleasehelp`)
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((json) => setUserData(json), console.log(json)) //print data to console
      .catch((err) => console.log("Request Failed", err)); // Catch errors
    ;
    console.log(userData);
  };
  const ClickIt = (e) => {
    getData();
    e.preventDefault
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Github users</h1>

        <div className={styles.grid}>
          <form onSubmit={() => ClickIt()}>
            <input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              value={userName}
            ></input>
            <button type="button" >Lookup</button>
          </form>
          {userName}
        </div>
        
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <img src="/download.png" alt="Vercel Logo" className={styles.logo} />
        Doge
      </footer>
    </div>
  );
}
