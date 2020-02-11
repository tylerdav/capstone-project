import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { UserMovieContext } from "./UserMovieProvider"
import "./Movies.css"

export default ({ movie, history }) => {

    const { deleteMovies } = useContext(UserMovieContext)

    function LoggedInUserButtons() {
        if (movie.userId === parseInt(localStorage.getItem("currentUserId"))) {
            return (
                <>
                    <button onClick={
                        () => {
                            deleteMovies(movie)
                                .then(() => {
                                    history.push("/profile")
                                })
                        }
                    }>Delete from List</button>
                </>
            )
        }
    }

    return (
        < section className="movie--card" >
            <img src={movie.poster} alt="Movie Poster"></img>
            <h3 className="movie--name">{movie.name}</h3>
            <Link className="details__btn" to={`/movies/${movie.id}`}>Details</Link>

            <div>{LoggedInUserButtons()}</div>
        </section >
    )
}