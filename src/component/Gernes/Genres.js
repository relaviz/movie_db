import {useState, useEffect}  from 'react';

const GENRE_API = "https://api.themoviedb.org/3/genre/movie/list?api_key=3037bfadd9e1c933b394b866da84f2de";


export const Genres = {
    GenreData() {
        const [genre, setGenre] = useState([]);

        useEffect(() => {
            getGerne(GENRE_API)
        }, [])
        const getGerne = (API) => {
            fetch(API)
                .then(res => res.json())
                .then(json => {
                    setGenre(json)
                    console.log(json)
                })
        }
    }
}
