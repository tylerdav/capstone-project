import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/
export const FollowersContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const FollowersProvider = (props) => {
  const [followers, setFollowers] = useState([])
  
  const getFollowers = () => {
    return fetch("http://localhost:8088/followers")
    .then(res => res.json())
    .then(setFollowers)
  }
  
  const addFollowers = followers => {
    return fetch("http://localhost:8088/followers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(followers)
    })
    .then(getFollowers)
  }

  const deleteFollowers = followers => {
    return fetch(`http://localhost:8088/followers/${followers.id}`, {
        method: "DELETE"
    })
        .then(getFollowers)
}
  
  /*
  Load all animals when the component is mounted. Ensure that
  an empty array is the second argument to avoid infinite loop.
  */
 useEffect(() => {
   getFollowers()
  }, [])
  
  // useEffect(() => {
    //     console.log("****  FOLLOWERS  APPLICATION STATE CHANGED  ****")
    
    // }, [followers])
    
    return (
      <FollowersContext.Provider value={{
        followers, addFollowers, deleteFollowers
      }}>
            {props.children}
        </FollowersContext.Provider>
    )
  }