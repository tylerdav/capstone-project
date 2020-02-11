import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/

export const UserMovieContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const UserMoviesProvider = (props) => {
  const [UserMovies, setUserMovies] = useState([])

  const getUserMovies = () => {
    return fetch("http://localhost:8088/userMovies")
      .then(res => res.json())
      .then(setUserMovies)
  }

  const addUserMovies = UserMovies => {
    return fetch("http://localhost:8088/UserMovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(UserMovies)
    })
      .then(getUserMovies)
  }

  const deleteUserMovies = UserMovies => {
    return fetch(`http://localhost:8088/userMovies/${UserMovies.id}`, {
      method: "DELETE"
    })
      .then(getUserMovies)
  }

  useEffect(() => {
    getUserMovies()
  }, [])

  // useEffect(() => {
  //     console.log("****  Movies APPLICATION STATE CHANGED  ****")

  // }, [Movies])

  return (
    <UserMovieContext.Provider value={{
        UserMovies, addUserMovies, deleteUserMovies
    }}>
      {props.children}
    </UserMovieContext.Provider>
  )
}



  // export movieContext
  // export get add delete
