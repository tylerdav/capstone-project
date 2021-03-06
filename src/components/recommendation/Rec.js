import React from "react"
import { Link } from "react-router-dom"
import "./Recs.css"

export default ({ movie }) => (
    <section className="movie--card">
        <img src={ movie.poster } alt="Movie Poster"></img>
        <h3 className="movie--name">{ movie.name }</h3>
        <button className="favorite__rec">Add to Favorites</button>
        <button className="delete__rec">Delete</button>
        <br />
        <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>
    </section>
)