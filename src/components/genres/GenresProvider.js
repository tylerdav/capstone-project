import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/
export const GenresContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const GenresProvider = (props) => {
  const [genres, setGenres] = useState([])
  
  const getGenres = () => {
    return fetch("http://localhost:8088/genres")
    .then(res => res.json())
    .then(setGenres)
  }
 useEffect(() => {
   getGenres()
  }, [])
  
//   useEffect(() => {
    
//     }, [genres])
    
    return (
      <GenresContext.Provider value={{
        genres
      }}>
            {props.children}
        </GenresContext.Provider>
    )
  }