
import React, { useContext } from "react"
import { MoviesContext } from "./MoviesProvider"
import "./Movies.css"


export default ({ movie, history }) => {

    const { deleteMovies } = useContext(MoviesContext)

    // Display conditional buttons
    function LoggedInUserButtons() {
        if (movie.userId === parseInt(localStorage.getItem("currentUserId"))) {
            return (
                <>
                    <button onClick={() => {
                        history.push(`/profile/add/${movie.id}`)
                    }}>Add</button>

                    <button onClick={
                        () => {
                            deleteMovies(movie)
                                .then(() => {
                                    history.push("/movies")
                                })
                        }
                    }>Delete</button>
                </>
            )
        }
    }


    return (
        <section className="user--movie--card">
            {/* <img className="poster">{movie.poster}</img> */}
            <h4 className="user--movie--name">{movie.name}</h4>
            <div className="user--movie--content">
                <div className="user--movie--director">Directed by {movie.director}</div>

            </div>

            <div>{LoggedInUserButtons()}</div>

        </section>
    )
}
