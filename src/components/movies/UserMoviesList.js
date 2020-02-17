
import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import { UserMovieContext } from "./UserMovieProvider"
import Movie from "./UserMovies"
import "./Movies.css"

export default (props) => {
    const { movies } = useContext(MovieContext)
    const { userMovies } = useContext(UserMovieContext)
    const currentUserId = parseInt(localStorage.getItem("currentUserId"))
    // debugger
    const userMoviesArray = []

    userMovies.map(um => {
        if (um.userId === currentUserId) {
            movies.filter(
                n => {
                    if (n.id === um.movieId) {
                        userMoviesArray.push(n)
                    }
                })
        }
    })

    // const currentUserMovies = userMovies.filter(movie => {
    //     return movie.userId === currentUserId
    // })

    // const combinedMoviesArray = currentUserMovies.concat(userMoviesArray)


    // {
    //     userMovies.forEach(rel => {
    //         const foundMovie = movies.filter(
    //             (singleUser) => {
    //                 return rel.movieId === singleUser.id
    //             }
    //         )[0]

    //         if (foundMovie !== undefined) {
    //             combinedMoviesArray.push(foundMovie)
    //         }
    //     })
    // }





    // console.log(userMovies)
    return (
        <div className="userMoviesContainer">
            <h1 className="page--title">Favorite Movies</h1>
            <section className="movieList">
                <article className="movie__cards">
                    {
                        userMoviesArray.map(movie => {
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