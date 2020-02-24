
import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import Movie from "./Movie"
import "./Movies.css"
// import Search from "../search/Search"

export default (props) => {
    const { movies } = useContext(MovieContext)
    return (
        <div className="moviesContainer">
            <h1 className="movie--page--title">Movies</h1>
            <br />
            <button onClick={() => props.history.push("/movies/create")} className="add__movie">
                Add a Movie
            </button>
            <br />
            <section className="movieList">
                <article className="movie__cards">
                    {
                        movies.map(movie => {
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


// have a link to route user to event form
// filter over array of followers and invoke .js function before every event whos userId matches current userId
// 