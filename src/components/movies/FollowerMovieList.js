
import React, { useContext, useRef } from "react"
import { MovieContext } from "./MovieProvider"
import { UserMovieContext } from "./UserMovieProvider"
import { UserContext } from "../user/UserProvider"
import Movie from "./FollowerMovie"
import "./Movies.css"

export default (props) => {
    const { movies } = useContext(MovieContext)
    const { users } = useContext(UserContext)
    const { userMovies } = useContext(UserMovieContext)
    const currentUserId = parseInt(localStorage.getItem("currentUserId"))
    // const movieName = useRef("")
    // const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)



    const followerMoviesArray = []

    userMovies.map(um => {
        if (um.userId === users.id) {
            movies.filter(
                n => {
                    if (n.id === um.movieId) {
                        followerMoviesArray.push(n)
                    }
                }
            )
        }
    })

    console.log(users)

    // const usersMovies = userMovies.filter(f => f.userId === users.id)

    // let arrayOfUsersMoviesObjects = []

    // usersMovies.map(follower => {
    //     movies.find(
    //         u => {
    //             if (u.id === follower.followerId) {
    //                 arrayOfUsersMoviesObjects.push(u)

    //             }
    //         })

    // })



    return (
        <div className="moviesContainer">
            <h1 className="page--title">Favorite Movies</h1>
            <section className="movieList">
                <article className="movie__cards">
                    {
                        followerMoviesArray.map(movie => {
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