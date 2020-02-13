import React from "react"
import { Link } from "react-router-dom"
import "./Movies.css"

export default ({ movie }) => (
    <section className="movie--card">
        <img src={ movie.poster } alt="Movie Poster"></img>
        <h3 className="movie--name">{ movie.name }</h3>
        <button>Add to Favorites</button>
        <br />
        <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>
    </section>
)


// what the movie card will display
// links movie details to card