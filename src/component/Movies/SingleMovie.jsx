import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w500/";
const randomImg = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";


const SingleMovie = (props) => {


    const movieGenre = (item) => {
        return item.map(item => <li key={item.id}>{item.name}</li>)
    }

    const releaseDate = (data) => {
        let date = new Date(data);
        let releaseYear = date.getFullYear()
        return releaseYear;
    }
    const releaseDateToLocal = (data) => {
        let date = new Date(data);
        // const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        let releaseLocal = date.toLocaleDateString('UA')
        return releaseLocal;
    }

    return (
        <section className="movie_content">
            <div className="shortcut_bar">
                <span>
                    Overview
                </span>
            </div>
            <div className="header" style={{ backgroundImage: `url(${IMG_API}${props.movie.backdrop_path})` }} >
                <div className="header_container">
                    <div className="single_column">
                        <section className="column_info">
                            <div className="poster_wrapew">
                                <div className="poster">
                                    <img src={props.movie.poster_path ? (IMG_API + props.movie.poster_path) : randomImg} alt={props.movie.title} />
                                </div>
                            </div>
                            <div className="header_poster_wraper">
                                <section className="poster_wraper">
                                    <div>
                                        <h2>{props.movie.title}
                                            <span className="release_date">({releaseDate(props.movie.release_date)})</span>
                                        </h2>
                                    </div>
                                    <div className="facts">
                                        <span className="release">{releaseDateToLocal(props.movie.release_date)}</span>
                                        <span className="genre_container">
                                            <ul className="hr">
                                                {props.movie.genres === undefined ? "genre" : movieGenre(props.movie.genres)}
                                            </ul>
                                        </span>
                                        <span className="runtime">{props.movie.runtime}min</span>
                                    </div>
                                    <div className="poster_info">
                                        <h3 className="tagline">{props.movie.tagline}</h3>
                                        <h3>Overview</h3>
                                        <div className="overview">
                                            <p>
                                                {props.movie.overview}
                                            </p>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="media">
                <section className="recommendations_panel">
                    <div className="recommendations">
                        <div>
                            <h3>Recommendation</h3>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default SingleMovie;


// style={{backgroundImage: `url(${IMG_API})`}}
// id={props.movie.backdrop_path ? `header_img url(${IMG_API}${props.movie.backdrop_path})` : `header_img url(${randomImg}`}