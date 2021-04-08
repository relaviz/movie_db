import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './component/Movies/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=3037bfadd9e1c933b394b866da84f2de&language=en-US&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3037bfadd9e1c933b394b866da84f2de&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getMovie(FEATURED_API);
  }, [])

  const getMovie = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovie(SEARCH_API + searchTerm)
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit} >
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
  )
}

export default App;
