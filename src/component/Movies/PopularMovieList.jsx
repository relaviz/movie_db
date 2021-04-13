import React from 'react';
import Movie from './Movie';

const PopularMovieList = (props) => {
  
  return (
      <div className="movie-container">
        {props.movies.length > 0 && props.movies.map(movie => <Movie key={movie.id} {...movie} genre={props.genres} />)}
      </div>
  )
}

export default PopularMovieList;