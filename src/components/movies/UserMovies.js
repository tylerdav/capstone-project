import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserMovieContext } from "./UserMovieProvider"
import "./Movies.css"

export default ({ movie, history, userMovie }) => {

    const { deleteUserMovies } = useContext(UserMovieContext)

    function LoggedInUserButtons() {
        console.log(movie)
        if (movie.userId === parseInt(localStorage.getItem("currentUserId"))) {
            return (
                <>
                    <button className="favorite__btn" onClick={() => {
                        history.push(`/movies/edit/${movie.id}`)
                    }}>Edit Movie</button>

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
            <button className="favorite__btn" onClick={
                        () => {
                            deleteUserMovies(userMovie)
                                .then(() => {
                                    history.push("/profile")
                                })
                        }
                    }>Delete from Favorites</button>
        </section >
    )
}