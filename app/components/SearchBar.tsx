'use client';
import { ChuckNorrisJoke } from "../utils/ChuckNorrisJoke";
import styles from "../page.module.css";

interface SearchBarProps {
    onSearchResults: (jokes: ChuckNorrisJoke[]) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function SearchBar({ onSearchResults, searchQuery, setSearchQuery }: SearchBarProps) {
    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.length >= 3) {
            const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
            const data = await response.json();
            onSearchResults(data.result);
        } else {
            onSearchResults([]);
        }
    };

    return (
        <input
            type="search"
            placeholder="Search for a joke"
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchBar}
        />
    );
}
