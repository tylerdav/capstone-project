import React, { useState, useEffect } from "react"

/*
The context is imported and used by individual components
that need data
*/

export const RecsContext = React.createContext()

/*
This component establishes what data can be used.
*/
export const RecsProvider = (props) => {
  const [recs, setRecs] = useState([])
  
  const getRecs = () => {
    return fetch("http://localhost:8088/recommendations?_expand=user")
    .then(res => res.json())
    .then(setRecs)
  }
  
  const addRecs = recommendations => {
    return fetch("http://localhost:8088/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recommendations)
    })
    .then(getRecs)
  }
  
  const editRecs = recommendations => {
    return fetch(`http://localhost:8088/recommendations/${recommendations.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recommendations)
    })
        .then(getRecs)
}

const deleteRecs = recommendations => {
    return fetch(`http://localhost:8088/recommendations/${recommendations.id}`, {
        method: "DELETE"
    })
        .then(getRecs)
}

 useEffect(() => {
   getRecs()
  }, [])
  
  // useEffect(() => {
    //     console.log("****  Recs APPLICATION STATE CHANGED  ****")
    
    // }, [Recs])
    
    return (
      <RecsContext.Provider value={{
        recs, addRecs, editRecs, deleteRecs
      }}>
            {props.children}
        </RecsContext.Provider>
    )
  }



  // export event context
  // export get add delete edit
