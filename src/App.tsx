import { useEffect, useState } from 'react';
import { Movie } from '@/types/Movies.ts';
import { tmdbService } from '@/service/tmdbService.ts';
import { GlobalStyles } from '@/components/styles/GlobalStyles.ts';
import { Header } from '@/components/Header';

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await tmdbService.gotNowPlayingMovies(1);
                setMovies(response.results);
            } catch (err) {
                console.error('Error fetching movies:', err);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <GlobalStyles />
            <Header />
        </>
    );
}

export default App;
