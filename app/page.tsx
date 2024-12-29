'use client';
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('random');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.page}>
      <Header onCategorySelect={handleCategorySelect} />
      <div>{selectedCategory}</div>
      <main className={styles.main}>
        <Joke category={selectedCategory} />
      </main>
      <Footer />
    </div>
  );
}
