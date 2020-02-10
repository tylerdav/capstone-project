import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/

export const MoviesContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    return fetch("http://localhost:8088/movies")
      .then(res => res.json())
      .then(setMovies)
  }

  const addMovies = movies => {
    return fetch("http://localhost:8088/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movies)
    })
      .then(getMovies)
  }

  const deleteMovies = movies => {
    return fetch(`http://localhost:8088/movies/${movies.id}`, {
      method: "DELETE"
    })
      .then(getMovies)
  }

  useEffect(() => {
    getMovies()
  }, [])

  // useEffect(() => {
  //     console.log("****  Movies APPLICATION STATE CHANGED  ****")

  // }, [Movies])

  return (
    <MoviesContext.Provider value={{
      movies, addMovies, deleteMovies
    }}>
      {props.children}
    </MoviesContext.Provider>
  )
}
