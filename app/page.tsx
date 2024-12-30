'use client';
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('random');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length >= 3) {
      const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
      const data = await response.json();
      console.log('Fetched jokes:', data.result);
    }
  };

  return (
    <div className={styles.page}>
      <Header onCategorySelect={handleCategorySelect} />
      <main className={styles.main}>
        <input
          type="search"
          placeholder="Search for a joke"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchBar}
        />
        <Joke category={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
}
