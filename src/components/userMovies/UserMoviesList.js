
import React, { useContext } from "react"
import { MoviesContext } from "./MovieProvider"
import Movie from "./Movie"
import "./Movies.css"

export default (props) => {
    const { movies } = useContext(MoviesContext)

    return (
        <div className="userMoviesContainer">
            <h1 className="page--title">Movies</h1>
            {/* 
                <button onClick={() => props.history.push("/movies/add")}>
                    Add Movie
                </button> */}

            <section className="userMovieList">
                <p>ok this wroks</p>
            </section>
{/* 
            <div className="movies">
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie.name} />)
                }
            </div> */}

            <article className="user__movie__cards">

                    {
                        movies.map(movie => {
                            return <Movie key={movie.id} movie={movie.name} {...props} />
                        })
                    }
                </article>
        </div>
    )
}