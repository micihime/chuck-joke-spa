'use client';
import { useState, useEffect } from 'react';

export default function Header() {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <header>
            <nav>
                <span>
                    random
                </span>
                {categories.map((category) => (
                    <span key={category}>{" " + category }</span>
                ))}
            </nav>
        </header>
    );
}
