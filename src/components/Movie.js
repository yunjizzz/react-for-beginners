import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { genres } from '../object/Movie.obj'
import styles from "./Movie.module.css";

function Movie({id, posterPath, title, overview, genreIds}){
    return  (
        <div key={id} className={styles.movie}>
            <img alt={title} className={styles.movie__img} src={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+posterPath}/>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <ul className={styles.movie__genres}>
            {genreIds.map((genre) => 
                <li key={genre}>{genres.map((g) => g.id === genre ? g.name: '')}</li>
            )}
            </ul>
            <p>{overview}</p>
        </div>
    );
}

Movie.propTypes ={
    posterPath : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
    genreIds : PropTypes.arrayOf(PropTypes.number).isRequired,
}




export default Movie;