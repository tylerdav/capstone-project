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
  const [userMovies, setUserMovies] = useState([])

  const getUserMovies = () => {
    return fetch("http://localhost:8088/userMovies")
      .then(res => res.json())
      .then(setUserMovies)
  }

  const addUserMovies = userMovies => {
    return fetch("http://localhost:8088/userMovies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userMovies)
    })
      .then(getUserMovies)
  }

  const deleteUserMovies = userMovies => {
    return fetch(`http://localhost:8088/userMovies/${userMovies.id}`, {
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
        userMovies, addUserMovies, deleteUserMovies
    }}>
      {props.children}
    </UserMovieContext.Provider>
  )
}



  // export userMovieContext
  // export get add delete
