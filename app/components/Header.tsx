'use client';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    onCategorySelect: (category: string) => void;
}

export default function Header({ onCategorySelect }: HeaderProps) {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.categories}>
                <button
                    className={styles.categoryButton}
                    onClick={() => onCategorySelect('random')}
                >
                    Random
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={styles.categoryButton}
                        onClick={() => onCategorySelect(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </nav>
        </header>
    );
}
