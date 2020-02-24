
import React, { useContext, useRef } from "react"
import { MovieContext } from "./MovieProvider"
import { UserMovieContext } from "./UserMovieProvider"
import { UserContext } from "../user/UserProvider"
import Movie from "./UserMovies"
import "./Movies.css"

export default (props) => {
    const { movies } = useContext(MovieContext)
    const { users } = useContext(UserContext)
    const { userMovies, addUserMovies } = useContext(UserMovieContext)
    const currentUserId = parseInt(localStorage.getItem("currentUserId"))
    const movieName = useRef("")
    const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)



    const userMoviesArray = []

    userMovies.map(um => {
        if (um.userId === currentUserId) {
            movies.filter(
                n => {
                    if (n.id === um.movieId) {
                        userMoviesArray.push(n)
                    }
                }
            )
        }
    })


    const usersMovies = userMovies.filter(f => f.userId === currentUser)

    let arrayOfUsersMoviesObjects = []

    usersMovies.map(follower => {
        movies.find(
            u => {
                if (u.id === follower.followerId) {
                    arrayOfUsersMoviesObjects.push(u)

                }
            })

    })

    // let searchResultsArray = []
    const constructNewFollowerArray = () => {
        const searchTerm = movieName.current.value.toUpperCase()

        const foundMovieArray = movies.filter(movie => {
            if (movie.name.toUpperCase().includes(searchTerm)) {
                return movie
            }
        })

        if (foundMovieArray[0] === undefined) {
            alert("Movie not found");
        } else {
            const foundExistingFollower = userMovies.find(
                um =>
                    um.movieId === foundMovieArray[0].id &&
                    currentUser === um.movieId
            );
            if (currentUser !== foundMovieArray[0].id) {
                if (foundExistingFollower === undefined) {
                    // window.confirm(`Would you like to add ${foundMovieArray[0].name} to your favorites?`)
                    addUserMovies({
                        movieId: foundMovieArray[0].id,
                        userId: currentUser
                    })
                        .then(() => { movieName.current.value = "" })

                } else {
                    alert(`You already added ${foundMovieArray[0].name}`)
                    { movieName.current.value = "" }

                }
            }
        }
    }


    return (
        <div className="userMoviesContainer">
            <h1 className="fav--page--title">Favorite Movies</h1>
            <div className="um--search">
                <input
                    type="text"
                    name="name"
                    id="userMovieName"
                    ref={movieName}
                    required
                    className="userMovieSearch"
                    proptype="varchar"
                    placeholder="Add Movie..."
                    defaultValue={""}
                />
                <button
                    type="submit"
                    onClick={evt => {
                        evt.preventDefault();
                        constructNewFollowerArray();
                    }}
                    className="userMoviebtn"
                >Add</button>
            </div>
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