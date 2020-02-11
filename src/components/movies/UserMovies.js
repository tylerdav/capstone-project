import React from "react"
import { Link } from "react-router-dom"
import "./Movies.css"

export default ({ movie }) => (
    <section className="movie--card">
        <img src={ movie.poster } alt="Movie Poster"></img>
        <h3 className="movie--name">{ movie.name }</h3>
        <Link to={`/movies/${movie.id}`}>Details</Link>
        <button>Delete from list</button>
    </section>
)
