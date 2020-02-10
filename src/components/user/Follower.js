import React from "react"
import "./Followers.css"

export default ({ user }) => (
    <section className="follower--card">
        <h3 className="follower--name">
        { user.name }
        </h3>
        {/* <Link to={`/movies/${movie.id}`}>Details</Link> */}

        <button className="follower--message">message</button>
        {/* <button onClick={() => props.history.push("/message/create")}>
            Message
          </button> */}
    </section>
)
