import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movies.css"

export default (props) => {

    const { movies } = useContext(MovieContext)


    const chosenMovieId = parseInt(props.match.params.movieId, 10)
    console.log("chosen movie id", chosenMovieId)

    const movie = movies.find(m => m.id === chosenMovieId) || {}
    console.log("movie", movie)

    return (
        <section className="movie__details">
        <img src={ movie.poster } alt="Movie Poster"></img>
            <h1 className="movie__name">{movie.name}</h1>
            <div className="movie__director">Director: {movie.director}</div>
        </section>
    )
}