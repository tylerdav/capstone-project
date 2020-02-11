
import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import { UserMovieContext } from "./UserMovieProvider"
import Movie from "./UserMovies"
import "./Movies.css"


export default (props) => {
    const { movies } = useContext(MovieContext)
    const { userMovies } = useContext(UserMovieContext)
    const currentUserMovies = parseInt(localStorage.getItem("currentUserId"), 10)

    const currentUser = movies.filter(movie => {
        return movie.userId === parseInt(localStorage.getItem("currentUser"))
    })  

    console.log(movies)

    return (
        <div className="userMoviesContainer">
            <h1 className="page--title">Favorite Movies</h1>
            <section className="movieList">
                <article className="movie__cards">
                    {/* {
                        currentUserMovies.map(movie => {
                            return <Movie key={movie.id}
                                movie={movie}
                                {...props} />
                        })
                    } */}
                </article>
            </section>
        </div>
    )
}


// have a link to route user to event form
// filter over array of followers and invoke .js function before every event whos userId matches current userId
// 