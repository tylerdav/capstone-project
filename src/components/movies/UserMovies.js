import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserMovieContext } from "./UserMovieProvider"
import "./Movies.css"
import { MovieContext } from "./MovieProvider"

export default ({ movie, history, userMovie }) => {

    const { deleteMovies } = useContext(MovieContext)

    function LoggedInUserButtons() {
        console.log(movie)
        if (movie.userId === parseInt(localStorage.getItem("currentUserId"))) {
            return (
                <>
                    <button onClick={() => {
                        history.push(`/movies/edit/${movie.id}`)
                    }}>Edit Movie</button>
                    <button onClick={
                        () => {
                            deleteMovies(movie)
                                .then(() => {
                                    history.push("/profile")
                                })
                        }
                    }>Delete from Favorites</button>
                </>
            )
        }
    }

    return (
        < section className="movie--card" >
            <img src={movie.poster} alt="Movie Poster"></img>
            <h2 className="movie--name">{movie.name}</h2>
            <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>
            <br />
            <div>{LoggedInUserButtons()}</div>
        </section >
    )
}