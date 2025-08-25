import {useEffect, useState} from "react";
import {Movie} from "@/types/Movies.ts";
import {tmdbService} from "@/service/tmdbService.ts";


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

      <h1>Now Playing Movies</h1>
      <div>
        {movies.map(movie => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              {movie.poster && (
                  <img
                      src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                      alt={movie.title}
                      style={{ width: '200px' }}
                  />
              )}
            </div>
        ))}
      </div>

    </>
  )
}

export default App
