'use client';
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Joke />
      </main>
      <Footer />
    </div>
  );
}
