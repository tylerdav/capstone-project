import React from "react"
import { Link } from "react-router-dom"
import "./Recs.css"

export default ({ movie }) => (
    <section className="movie--card">
        <img src={ movie.poster } alt="Movie Poster"></img>
        <h3 className="movie--name">{ movie.name }</h3>
        <button>Add to Favorites</button>
        <button>Delete</button>
        <br />
        <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>
    </section>
)