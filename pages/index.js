import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [userName, setUserName] = useState("imstupidpleasehelp");
  const [userData, setUserData] = useState({});
  const getData = async (userName, callback) => {
    let userNameData  = await get(`https://api.github.com/users`)
    //use string literals
    let userNameJson = await userNameData.json();
    return userNameJson;
   }
   
   const getActivity = async () => {
    let jsonData = await activitiesActions.getData(userName);
     console.log(jsonData)
   }
  const ClickIt = (e) => {
    getData();
    getActivity();
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
          <form onSubmit={() => getData()}>
            <input
             
              onChange={(e) => setUserName(e.target.value, e.preventDefault)}
              type="text"
              value={userName}
            ></input>
            <button type="submit"  >Lookup</button>
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
