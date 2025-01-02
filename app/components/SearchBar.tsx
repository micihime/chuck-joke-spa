'use client';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChuckNorrisJoke } from "../utils/ChuckNorrisJoke";

interface SearchBarProps {
    onSearchResults: (jokes: ChuckNorrisJoke[]) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function SearchBar({ onSearchResults, searchQuery, setSearchQuery }: SearchBarProps) {
    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.length >= 3) {
            const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
            const data = await response.json();
            onSearchResults(data.result);
        } else {
            onSearchResults([]);
        }
    };

    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a joke"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                    '&:hover': {
                        '& > fieldset': {
                            borderColor: 'primary.main',
                        }
                    }
                }
            }}
        />
    );
}
