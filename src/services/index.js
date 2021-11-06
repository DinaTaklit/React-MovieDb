import {API_KEY} from '../base'
const { default: axios } = require("axios");
const URL = "https://api.themoviedb.org/3" 
const NOW_PLAYING_URL = `${URL}/movie/now_playing`
const TOP_RATED_YRL = `${URL}/movie/top_rated`
const MOVIE_URL = `${URL}/movie`
const GENRE_URL = `${URL}/genre/movie/list`
const MOVIES_URL = `${URL}/discover/movie`
const PERSON_URL = `${URL}/trending/person/week`
const POSTER_URL = 'https://image.tmdb.org/t/p/original' // to get poster images
const YOUTUBE_URL = "https://www.youtube.com/watch?v=" // to get the poster video


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

// Function that fetch genres from the API
export const fetchGenres = async () => {
    try {
        const { data } = await axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1
            }
        })
        return data.genres
    } catch (error) {
        console.log(error)
    }
}

// Function that fetch movies based on the genre
export const fetchMoviesByGenre = async (genreId) => {
    try {
        const { data } = await axios.get(MOVIES_URL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1,
                with_genres: genreId
            }
        })
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

// Function that fetch the trending persons of the week
export const fetchTrendingPersons = async () => {
    try {
        const { data } = await axios.get(PERSON_URL, {
            params: {
                api_key: API_KEY
            }
        })
        return data.results.map(person => {
            const {id, name, popularity, profile_path, known_for_department} = person
            return {
                id,
                name,
                popularity,
                profile: `${POSTER_URL}${profile_path}`,
                known: known_for_department,
            }
        })
    } catch (error) {
        console.log(error)
    }
}

// Function that fetch the top rated movies
export const fetchTopRatedMovies = async () => {
    try {
        const { data } = await axios.get(TOP_RATED_YRL, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
                page: 1
            }
        })
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

// Function that fetch movie detail for the given movie id
export const fetchMovieDetail = async (movideId) => {
    try {
        const { data } = await axios.get(`${MOVIE_URL}/${movideId}`, {
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        });
        const { id, backdrop_path, title} = data
        return {
            id,
            posterImage: `${POSTER_URL}${backdrop_path}`,
            title
        }
    } catch (error) {
        console.log(error)
    }
}

// Function that fetch movie Video
export const fetchMovieVideo = async (id) => {
    try {
        const { data } = await axios.get(`${MOVIE_URL}/${id}/videos`, {
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        });
        return `${YOUTUBE_URL}${data.results[0].key}`
    } catch (error) {
        console.log(error)
    }
}

// Function that fetch movie casts
export const fetchMovieCasts = async (id) => {
    try {
        const { data } = await axios.get(`${MOVIE_URL}/${id}/credits`, {
            params: {
                api_key: API_KEY,
                language: 'en_US'
            }
        });
        return data.cast.map(cast => {
            const {cast_id, name, character, profile_path} = cast
            return {
                id:cast_id,
                name,
                character,
                profile: `${POSTER_URL}${profile_path}`
            }
        })
    } catch (error) {
        console.log(error)
    }
}

// Function that fetch similar movies for the given movie id
export const fetchSimilarMovies = async (id) => {
    try {
        const { data } = await axios.get(`${MOVIE_URL}/${id}/similar`, {
            params: {
                api_key: API_KEY,
                language: 'en_US',
            }
        });
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