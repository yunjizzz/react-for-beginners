import { useEffect, useState } from "react";
import Movie from '../components/Movie';
import styles from './Home.module.css';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
   
    useEffect(() => {
        async function getMovies(){
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6735a4f592fdecc2695f92ab263f72f4&language=ko-KO&region=KR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        }
        getMovies();
    },[]);
    return (
        <div className={styles.container}>
           {loading ? <div>Loading...</div> 
           : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            posterPath={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            genreIds={movie.genre_ids}
                            id={movie.id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;