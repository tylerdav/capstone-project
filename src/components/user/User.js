import React from "react"
import "./Followers.css"

export default ({ user }) => (
    <section className="profile--card">
        <avatar></avatar>
        <h3 className="profile--name">
        { user.name }
        </h3>

    </section>
)
