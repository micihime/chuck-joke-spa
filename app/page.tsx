'use client';
import { Container, Box, Typography, Paper } from '@mui/material';
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
    setSearchedJokes([]);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header onCategorySelect={handleCategorySelect} />
      <Container component="main" sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        py: 4
      }}>
        <SearchBar
          onSearchResults={setSearchedJokes}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {searchQuery.length >= 3 && searchedJokes.length === 0 ? (
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No jokes found matching "{searchQuery}". Try a different search term!
            </Typography>
          </Paper>
        ) : searchedJokes.length > 0 ? (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            {searchedJokes.map((joke) => (
              <Joke
                key={joke.id}
                category={joke.categories[0] || 'uncategorized'}
                joke={joke}
              />
            ))}
          </Box>
        ) : (
          <Joke category={selectedCategory} />
        )}
      </Container>
      <Footer />
    </Box>
  );
}
