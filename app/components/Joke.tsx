import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { ChuckNorrisJoke } from "../utils/ChuckNorrisJoke";

interface JokeProps {
    category?: string;
    joke?: ChuckNorrisJoke;
}

export default function Joke({ category, joke: inputJoke }: JokeProps) {
    const [joke, setJoke] = useState<ChuckNorrisJoke | null>(inputJoke || null);

    const fetchJoke = async () => {
        const baseUrl = "https://api.chucknorris.io/jokes/random";
        const url = category && category !== "random" ? `${baseUrl}?category=${category}` : baseUrl;
        const response = await fetch(url);
        const data: ChuckNorrisJoke = await response.json();
        setJoke(data);
    };

    useEffect(() => {
        if (!inputJoke) {
            fetchJoke();
        }
    }, [category, inputJoke]);

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            {joke && (
                <Card elevation={3}>
                    <CardContent>
                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <CardMedia
                                component="img"
                                sx={{ width: 50, height: 50 }}
                                image={joke.icon_url}
                                alt="Chuck Norris"
                            />
                            <Typography variant="h6" component="div">
                                Chuck Norris Joke
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {joke.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Created: {new Date(joke.created_at).toLocaleDateString()}
                        </Typography>
                    </CardContent>
                </Card>
            )}
            {!inputJoke && (
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={fetchJoke}
                        sx={{ mt: 2 }}
                    >
                        Get New Joke
                    </Button>
                </Box>
            )}
        </Box>
    );
}
