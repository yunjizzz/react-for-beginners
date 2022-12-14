import PropTypes from 'prop-types';

function Movie({id, poster_path, title, overview, genre_ids}){
    return  (
    <div key={id}>
        <img alt={title} src={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+poster_path}/>
        <h2>{title}</h2>
        <p>{overview}</p>
        <ul>
        {genre_ids.map((genre) => 
            <li key={genre}>{genre}</li>
        )}
        </ul>
    </div>
    );
}

export default Movie;