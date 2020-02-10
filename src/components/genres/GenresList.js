
import React, { useContext } from "react"
import { GenresContext } from "./Genres.css"
import Genres from "./Genres"
import "./Genres.css"

export default (props) => {
    const { genres } = useContext(GenresContext)

    return (
        <>
            <section className="genresContainer">
                <h1>Genres</h1>

                <div className="genres">

                    {
                        genres.map(genre => {
                            return <Genres key={genre.id} genre={genre.type} />
                        })
                    }
                </div>
            </section>
        </>
    )
}