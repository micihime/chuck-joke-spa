'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

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
      
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
