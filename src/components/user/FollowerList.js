import React, { useContext, useState, useRef } from "react"
import { FollowersContext } from "../user/FollowerProvider"
import { UserContext } from "./UserProvider";
import Follower from "./Follower";



export default (props) => {
    const { followers, addFollowers } = useContext(FollowersContext)
    const { users } = useContext(UserContext)
    // const [nonFollower, setNonFollower] = useState({});
    //   const [follower, setFollower] = useState({});
    const followerName = useRef("");
    const currentUser = parseInt(localStorage.getItem("currentUserId"), 10)


    const usersFollowers = followers.filter(f => f.userId === currentUser)

    let arrayOfUsersFollowersObjects = []

    usersFollowers.map(follower => {
        users.find(
            u => {
                if (u.id === follower.followerId) {
                    arrayOfUsersFollowersObjects.push(u)

                }
            })

    })

    let searchResultsArray = []
    const constructNewFollowerArray = () => {
        const searchTerm = followerName.current.value.toUpperCase()

        const foundUserArray = users.filter(user => {
            if (user.name.toUpperCase().includes(searchTerm) || user.email.includes(searchTerm)) {
                return user
            }
        })

        if (foundUserArray[0] === undefined) {
            alert("User not found");
        } else {
            const foundExistingFollower = followers.find(
                f =>
                    f.userId === foundUserArray[0].id &&
                    currentUser === f.followerId
            );
            if (currentUser !== foundUserArray[0].id) {
                if (foundExistingFollower === undefined) {
                    window.confirm(`Would you like to add ${foundUserArray[0].name} as a follower?`)
                    addFollowers({
                        followerId: foundUserArray[0].id,
                        userId: currentUser
                    })
                        .then(() => { followerName.current.value = "" })

                } else {
                    alert(`You already follow ${foundUserArray[0].name}`)
                    { followerName.current.value = "" }

                }
            } else {
                alert("You cannot follow yourself")
                { followerName.current.value = "" }

            }
        }
    };

    console.log(searchResultsArray);

    return (

        <div className="followers">
            <h1 className="foll--page--title">Followers</h1>
            <div className="followerForm">
                <input
                    type="text"
                    name="name"
                    id="followerName"
                    ref={followerName}
                    required
                    className="form-control"
                    className="followerSearch"
                    proptype="varchar"
                    placeholder="search for a user...   "
                    defaultValue={""}
                // onChange={handleControlledInputChange}
                />
                <button
                    type="submit"
                    onClick={evt => {
                        evt.preventDefault();
                        constructNewFollowerArray();
                    }}
                    className="btn btn-primary"
                    className="followbtn"
                >Add</button>
            </div>

            <article className="followersList">
                {
                    arrayOfUsersFollowersObjects.map(user => {
                        return <Follower key={user.id} user={user} props={props} />
                    })
                }
            </article>

            <article className="followersSearchList">

            </article>

        </div>
    )
}