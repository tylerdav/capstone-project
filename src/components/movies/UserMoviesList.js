
import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import { UserMovieContext } from "./UserMovieProvider"
import Movie from "./UserMovies"
import "./Movies.css"
// import User from "../user/User"
import { UserContext } from "../user/UserProvider"

export default (props) => {
    const { movies } = useContext(MovieContext)
    const { User } = useContext(UserContext)
    const { userMovies } = useContext(UserMovieContext)
    const currentUser = parseInt(localStorage.getItem("currentUserId"))
    // debugger
    // console.log(User)
    const currentUserMovies = userMovies.filter(movie => {
        return movie.userId === currentUser
    })
    const usersMovies = []

    {
        userMovies.forEach(rel => {
            const foundMovie = movies.filter(
                (singleUser) => {
                    return rel.movieId === singleUser.id
                }
            )[0]

            if (foundMovie !== undefined) {
                usersMovies.push(foundMovie)
            }
        })
    }

    // console.log(userMovies)
    return (
        <div className="userMoviesContainer">
            <h1 className="page--title">Favorite Movies</h1>
            <section className="movieList">
                <article className="movie__cards">
                    {
                        usersMovies.map(movie => {
                            return <Movie key={movie.id}
                                movie={movie}
                                {...props} />
                        })
                    }
                </article>
            </section>
        </div>
    )
}