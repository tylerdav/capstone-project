import React from "react"
import "./Followers.css"

export default ({ user }) => (
    <section className="follower">
        <h3 className="follower--name">
        { user.name }
        </h3>
        <button className="follower--message">Add as a Follower</button>
    </section>
)
