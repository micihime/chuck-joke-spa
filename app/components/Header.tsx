'use client';
import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

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
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap', // This will wrap buttons to next line
                        justifyContent: 'center' // This centers the buttons
                    }}>
                        <Button
                            color="inherit"
                            variant={activeCategory === 'random' ? 'outlined' : 'text'}
                            onClick={() => handleCategoryClick('random')}
                        >
                            Random
                        </Button>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                color="inherit"
                                variant={activeCategory === category ? 'outlined' : 'text'}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
