import React from "react"
import "./Genres.css"

export default ({ genre }) => (
    <section className="genre--card">
        <h3 className="genre--name">
        { genre.type }
        </h3>
    </section>
)
