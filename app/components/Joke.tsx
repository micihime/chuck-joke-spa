import { useState, useEffect } from "react";
import styles from "./Joke.module.css";
import { ChuckNorrisJoke } from "../utils/ChuckNorrisJoke";

interface JokeProps {
    category?: string;
    joke?: ChuckNorrisJoke;
}

export default function Joke({ category, joke: inputJoke }: JokeProps) {
    const [joke, setJoke] = useState<ChuckNorrisJoke | null>(inputJoke || null);

    const fetchJoke = async () => {
        const baseUrl = "https://api.chucknorris.io/jokes/random";
        const url = category && category !== "random" ? `${baseUrl}?category=${category}` : baseUrl;
        // console.log(url);
        const response = await fetch(url);
        const data: ChuckNorrisJoke = await response.json();
        setJoke(data);
    };

    useEffect(() => {
        if (!inputJoke) {
            fetchJoke();
        }
    }, [category, inputJoke]);

    return (
        <>
            <div className={styles.jokeContainer}>
                {joke && (
                    <>
                        <img src={joke.icon_url} alt="Chuck Norris" width={50} height={50} />
                        <p>{joke.value}</p>
                        <small>Created: {new Date(joke.created_at).toLocaleDateString()}</small>
                    </>
                )}
            </div>
            {!inputJoke && <button onClick={fetchJoke}>Get New Joke</button>}
        </>
    );
}
