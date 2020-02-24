import React from "react"
import { Link } from "react-router-dom"
import "./Movies.css"

export default ({ movie }) => {

    return (
        < section className="movie--card" >
            <img src={movie.poster} alt="Movie Poster"></img>
            <h2 className="movie--name">{movie.name}</h2>
            <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>
        </section >
    )
}