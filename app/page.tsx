'use client';
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import SearchBar from "./components/SearchBar";
import { useState } from 'react';
import { ChuckNorrisJoke } from "./utils/ChuckNorrisJoke";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('random');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedJokes, setSearchedJokes] = useState<ChuckNorrisJoke[]>([]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchedJokes([]); // Clear searched jokes when category changes
  };

  return (
    <div className={styles.page}>
      <Header onCategorySelect={handleCategorySelect} />
      <main className={styles.main}>
        <SearchBar
          onSearchResults={setSearchedJokes}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {searchQuery.length >= 3 && searchedJokes.length === 0 ? (
          <div className={styles.noResults}>
            No jokes found matching "{searchQuery}". Try a different search term!
          </div>
        ) : searchedJokes.length > 0 ? (
          <div className={styles.searchResults}>
            {searchedJokes.map((joke) => (
              <Joke key={joke.id} category={joke.categories[0] || 'uncategorized'} joke={joke} />
            ))}
          </div>
        ) : (
          <Joke category={selectedCategory} />
        )}
      </main>
      <Footer />
    </div>
  );
}
