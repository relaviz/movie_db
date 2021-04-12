import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import SingleMovie from './SingleMovie';

const GET_MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "3037bfadd9e1c933b394b866da84f2de";

// 399566?api_key=3037bfadd9e1c933b394b866da84f2de

const SingleMovieContainer = () => {
    let match = useRouteMatch("/movie/:id")
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovie(GET_MOVIE_API + match.params.id + "?api_key=" + API_KEY);
    }, []);

    let getMovie = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
                console.log(data)
            })
    }

    return (
        <>
            <SingleMovie movie={movie} />
        </>
    )

}

export default SingleMovieContainer;