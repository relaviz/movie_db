import React, { useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import '../../App.css';
import Search from '../Search/Search';
import PopularMovieList from './PopularMovieList';
import { NavLink } from 'react-router-dom';
import SingleMovie from './SingleMovie';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=3037bfadd9e1c933b394b866da84f2de&language=en-US&page=";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=3037bfadd9e1c933b394b866da84f2de&query=";
const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=3037bfadd9e1c933b394b866da84f2de";

const MovieContainer = (props) => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        getGerne(GENRE_API);
        getMovie(FEATURED_API);
    }, [])

    let getGerne = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setGenre(data)
            })
    }


    const getMovie = (API) => {
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setPages(data)
                setMovies(data.results)
                console.log(data)
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

    const onPageChange = (event, page) => {
        setPage(page);
        getMovie(FEATURED_API + page)
    }

    return (
        <>
            <Search
            className="header-hidden"
                searchTerm={searchTerm}
                handleOnSubmit={handleOnSubmit}
                handleOnChange={handleOnChange}

            />
            <NavLink to='/movie'>
                <PopularMovieList
                    movies={movies}
                    genres={genre.genres}
                />
            </NavLink>
            <Pagination
                className="pagination"
                count={pages.total_pages}
                color="primary"
                page={page}
                onChange={onPageChange}
            />
            {/* <NavLink to='/movie/399566'>
                <SingleMovie />
            </NavLink> */}
        </>
    )
}

export default MovieContainer;
