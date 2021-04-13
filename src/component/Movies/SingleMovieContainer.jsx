import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import RecommendationList from './RecommendationsList';
import SingleMovie from './SingleMovie';

const GET_MOVIE_API = "https://api.themoviedb.org/3/movie/";
const API_KEY = "3037bfadd9e1c933b394b866da84f2de";

// 399566?api_key=3037bfadd9e1c933b394b866da84f2de

const SingleMovieContainer = () => {

    let match = useRouteMatch("/movie/:id") //get id in URL end push it in API 

    const [movie, setMovie] = useState([]);
    const [recommendation, setRecommendation] = useState([])

    useEffect(() => {
        getMovie(GET_MOVIE_API + match.params.id + "?api_key=" + API_KEY);
        getMovieRecommendations(GET_MOVIE_API + match.params.id + "/recommendations?api_key=" + API_KEY)
    }, []);

    let getMovie = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
                // console.log(data)
            })
    }

    let getMovieRecommendations = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setRecommendation(data.results)
                console.log(data)
            })
    }

    return (
        <>
            <SingleMovie movie={movie} />
            <RecommendationList recomm={recommendation} />

        </>
    )

}

export default SingleMovieContainer;