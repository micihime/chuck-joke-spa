'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    onCategorySelect: (category: string) => void;
}

export default function Header({ onCategorySelect }: HeaderProps) {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState('random');

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        onCategorySelect(category);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.categories}>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'random' ? styles.active : ''}`}
                    onClick={() => handleCategoryClick('random')}
                >
                    Random
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryButton} ${activeCategory === category ? styles.active : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </nav>
        </header>
    );
}
