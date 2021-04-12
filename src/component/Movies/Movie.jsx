import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const IMG_API = "https://image.tmdb.org/t/p/w500";
const randomImg = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

const Movie = ({ title, poster_path, overview, vote_average, genre_ids, genre, id }) => {

    const  match = useRouteMatch();
    
    // console.log(match.params.id)

    const genreFilter = (genre, genre_ids) => {
        return genre
            .filter((item) => genre_ids.includes(item.id))
            .map(item => <li key={item.id}>{item.name}</li>);
    }

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <>
        <Link to={`${id}`}>

            <div className="movie">
                <img src={poster_path ? (IMG_API + poster_path) : randomImg} alt={title} />
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
                </div>
                <div className="movie-genre">

                </div>
                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <ul>{genreFilter(genre, genre_ids)}</ul>
                </div>
            </div>
            </Link>
        </>
    )
}

export default Movie;