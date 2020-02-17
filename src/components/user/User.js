import React from "react"
import "./Followers.css"

export default ({ user }) => (
    <section className="profile--card">
        <img className="profile--picture" src={ user.picture } alt="User profile"></img>
        <h3 className="profile--name">
        { user.name }
        </h3>

    </section>
)
