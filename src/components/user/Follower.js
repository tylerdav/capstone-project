import React from "react"
import "./Followers.css"
import { Link } from "react-router-dom"

export default ({ user }) => (
    <section className="follower--card">
        {/* <img className="follower--avatar" src="default-avatar.png" alt="User Avatar"></img> */}
        <h3 className="follower--name">
            <Link className="follower--link" to={`/profile/follower/${user.id}`} >
                {user.name}
            </Link>
        </h3>
    </section>
)
