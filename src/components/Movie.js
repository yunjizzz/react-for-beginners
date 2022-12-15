import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { genres } from '../object/Movie.obj'

function Movie({id, posterPath, title, overview, genreIds}){
    return  (
    <div key={id}>
        <img alt={title} src={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+posterPath}/>
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{overview}</p>
        <ul>
        {genreIds.map((genre) => 
            <li key={genre}>{genres.map((g) => g.id === genre ? g.name: '')}</li>
        )}
        </ul>
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