'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Footer from "./components/Footer";

interface ChuckNorrisJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export default function Home() {
  const [joke, setJoke] = useState<ChuckNorrisJoke | null>(null);

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data: ChuckNorrisJoke = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Chuck Norris Joke Generator</h1>

        <div className={styles.jokeContainer}>
          {joke && (
            <>
              <img src={joke.icon_url} alt="Chuck Norris" width={50} height={50} />
              <p>{joke.value}</p>
              <small>Created: {new Date(joke.created_at).toLocaleDateString()}</small>
            </>
          )}
        </div>

        <button
          onClick={fetchJoke}
        >
          Get New Joke
        </button>
      </main>

      <Footer />
    </div>
  );
}
