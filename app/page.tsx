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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
