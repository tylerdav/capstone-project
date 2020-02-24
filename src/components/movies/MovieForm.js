import React, { useContext, useState, useEffect } from "react"
import { MovieContext } from "./MovieProvider";

export default props => {
  const { movies, addMovies, editMovies } = useContext(MovieContext)
  const [movie, setMovies] = useState({});

  const editMode = props.match.params.hasOwnProperty("moviesId");

  const handleControlledInputChange = evt => {
    /*
        When changing a state object or array, always create a new one
        and change state instead of modifying current one
    */
    const newmovies = Object.assign({}, movie);
    newmovies[evt.target.name] = evt.target.value;
    setMovies(newmovies);
  };

  const setDefaults = () => {
    if (editMode) {
      const moviesId = parseInt(props.match.params.moviesId);
      const selectedMovie = movies.find(e => e.id === moviesId) || {};
      setMovies(selectedMovie);
    }
  };

  useEffect(() => {
    setDefaults();
  }, [movies]);

  const constructNewMovie = () => {
    if (editMode) {
      editMovies({
        id: movie.id,
        name: movie.name,
        director: movie.director,
        genreId: movie.genreId,
        // budget: movie.budget,
        summary: movie.summary,
        poster: movie.poster,
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/"));
    } else {
      addMovies({
        name: movie.name,
        director: movie.director,
        genreId: movie.genreId,
        // budget: movie.budget,
        summary: movie.summary,
        poster: movie.poster,
        userId: parseInt(localStorage.getItem("currentUserId"))
      }).then(() => props.history.push("/"));
    }
  }

  return (
    <div className="moviesContainer">
      <form className="newMovie">
        <h2 className="newMovie__name">{editMode ? "Update Movie" : "Add Movie"}</h2>
        
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Movie Title: </label>
            <input type="text" name="name" required autoFocus className="form-control"
              proptype="varchar"
              placeholder="Movie Title"
              defaultValue={movie.name}
              onChange={handleControlledInputChange}
              />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="director">Director: </label>
            <input type="text" name="director" required className="form-control"
              proptype="varchar"
              placeholder="Director name"
              defaultValue={movie.director}
              onChange={handleControlledInputChange}
              />
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="summary">Summary: </label>
            <input type="text" name="summary" className="form-control"
              proptype="varchar"
              placeholder="Movie Summary"
              value={movie.summary}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="poster">poster: </label>
            <input type="src" name="poster" className="form-control"
              proptype="varchar"
              placeholder="Image Url"
              value={movie.poster}
              onChange={handleControlledInputChange}>
            </input>
          </div>
        </fieldset>

        <button type="submit"
          onClick={mov => {
            mov.preventDefault()
            constructNewMovie()
          }}
          className="btn btn-primary">
          {editMode ? "Save Updates" : "Save Movie"}
        </button>
      </form>
    </div>
  )
}


