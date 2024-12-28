'use client';
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Joke from "./components/Joke";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Chuck Norris Joke Generator</h1>
        <Joke />
      </main>
      <Footer />
    </div>
  );
}
