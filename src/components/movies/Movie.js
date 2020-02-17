import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserMovieContext } from "./UserMovieProvider"
import UserMovies from "./UserMovies"
import "./Movies.css"

export default ({ movie, history }) => {

    const { addUserMovies } = useContext(UserMovieContext)

    return (
        <section className="movie--card">
            <img src={movie.poster} alt="Movie Poster"></img>
            <h2 className="movie--name">{movie.name}</h2>
            <button className="favorite__btn" onClick={
                () => {
                    addUserMovies(UserMovies)
                        .then(() => {
                            history.push("/")
                        })
                }
            }>Add to Favorites</button>
            <br />
            <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>
        </section>
    )
}


    // what the movie card will display
    // button adds card to profile
    // links movie details to card
