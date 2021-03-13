import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
export default function Home() {
  const [userName, setUserName] = useState("imstupidpleasehelp");
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log(userData)
  }, [userData])
  const clickIt = (e) => {
    console.log(userName);
    getData();
    e.preventDefault
  }
  const getData = async () => {
    fetch(`https://api.github.com/users/${userName}`) // Call the fetch function passing the url of the API as a parameter
      .then((resp) => resp.json()) // Transform the data into json
      .then((resp) => {
      
        setUserData(resp);
        
      });
      //console.log(userData)
  }

  return (
    
    <div className={styles.container}>
      <Head>
        <title>Fetch Github Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Github users</h1>

        <div className={styles.grid}>
          
            <input
             
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              value={userName}
            ></input>
            <button type="submit" onClick={(e) => clickIt(e)}  >Lookup</button>
         
            
        </div>
        <div className="">
        <img src={userData.avatar_url}></img></div>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <img src="/download.png" alt="Vercel Logo" className={styles.logo} />
        Doge
      </footer>
    </div>
  );
}
