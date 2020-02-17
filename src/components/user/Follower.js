import React from "react"
import "./Followers.css"
import { Link } from "react-router-dom"

export default ({ user }) => (
    <section className="follower--card">
        <h3 className="follower--name">
            <Link className="follower--link" to={`/profile/${user.id}`} >
                {user.name}
            </Link>
        </h3>
    </section>
)
