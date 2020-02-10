import tmdbKey from '../ApiKey'

const apiKey = tmdbKey



export const tmdbProvider = (props) => {
  const [ searchMovies, popularMovies, setMovies] = useState([])
    const searchTitle = () => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movie}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(searchMovies)
    },

    const getPopular = () => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => res.json())
            .then(popularMovies)

    },

    const getMovie = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}`)
            .then(res => res.json())
            .then(setMovies)
    }
}
