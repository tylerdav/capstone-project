
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
    const FollowerId = parseInt(props.match.params.followerId, 10)
    console.log(FollowerId)

    const user = users.find(a => a.id === FollowerId) || {}

    const followerMoviesArray = []

    userMovies.map(um => {
        if (um.userId === user.id) {
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

    return (
        <div className="followerMoviesContainer">
            <h1 className="fav--page--title">Favorite Movies</h1>
            <section className="movieList">
                <article className="movie__cards">
                    {
                        followerMoviesArray.map(movie => {
                            console.log(movie)
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