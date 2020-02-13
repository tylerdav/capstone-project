
import React, { useContext } from "react"
import { MovieContext } from "../movies/MovieProvider"
import { RecsContext } from "./RecProvider"
import Rec from "./Rec"
import "./Recs.css"

export default (props) => {
    const { movies } = useContext(MovieContext)
    const { recs } = useContext(RecsContext)

    const usersRecs = []
    
    return (
        <div className="recsMoviesContainer">
            <h1 className="page--title">Recommended Movies</h1>
            <br />
            <section className="recsMovieList">
                <article className="movie__cards">
                    {
                        movies.map(movie => {
                            return <Rec key={movie.id}
                                movie={movie}
                                {...props} />
                        })
                    }
                </article>
            </section>
        </div>
    )
}