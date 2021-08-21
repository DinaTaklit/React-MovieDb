import {API_KEY} from '../base'
const { default: axios } = require("axios");
const URL = "https://api.themoviedb.org/3" 
const NOW_PLAYING_URL = `${URL}/movie/now_playing`
const TOP_RATED_YRL = `${URL}/movie/top_rated`
const MOVIE_URL = `${URL}/movie`
const GENRE_URL = `${URL}/genre/movie/list`
const MOVIES_URL = `${URL}/discover/movie`
const PERSON_URL = `${URL}/trending/person/week`
const POSTER_URL = 'https://image.tmdb.org/t/p/original/' // to get poster images


// Function to fetch the movies that are playing now from the API 
export const fetchMovies = async () => {
    try {

        // Get movies using axios
        const {data} = await axios.get(NOW_PLAYING_URL, {
            params:  {
                api_key: API_KEY,
                language: 'en_US',
                page:1
            }
        })
        
        // Returned the modified data with approperiate key names
        return data.results.map(movie => {
            const {id, backdrop_path, popularith, title, poster_path, overview, vote_average} = movie
            return {
                id, 
                backPoster: `${POSTER_URL}${backdrop_path}`,
                popularity: popularith,
                title, 
                poster: `${POSTER_URL}${poster_path}`,
                overview,
                rating: vote_average
            }
        })

    } catch (error) {
        console.log(error)
    }
}
