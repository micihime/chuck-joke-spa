import { useState, useEffect } from "react";
import styles from "../page.module.css";

interface ChuckNorrisJoke {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

export default function Joke() {
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
        <div className={styles.jokeContainer}>
            {joke && (
                <>
                    <img src={joke.icon_url} alt="Chuck Norris" width={50} height={50} />
                    <p>{joke.value}</p>
                    <small>Created: {new Date(joke.created_at).toLocaleDateString()}</small>
                </>
            )}
            <button onClick={fetchJoke}>Get New Joke</button>
        </div>
    );
}
