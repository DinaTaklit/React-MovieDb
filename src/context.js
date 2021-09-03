import React, {useContext, useState, useEffect} from 'react'
import {
    fetchMovies,
    fetchGenres,
    fetchMoviesByGenre,
    fetchTrendingPersons,
    fetchTopRatedMovies,
    fetchMovieDetail,
} from '../src/services'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // Loading
    const [loading, setLoading] = useState(true)
    // Global state for now playing movies
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    // Global state for genres
    const [genres, setGenres] = useState([]);
    // Global state for movies by genre
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    // Global state for trending persons
    const [trendingPersons, setTrendingPersons] = useState([]);
    // Global state for top rated movies
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    // Global state for movie detail
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setNowPlayingMovies(await fetchMovies())
            setGenres(await fetchGenres())
            setMoviesByGenre(await fetchMoviesByGenre())
            setTrendingPersons(await fetchTrendingPersons())
            setTopRatedMovies(await fetchTopRatedMovies())
            setMovieDetail(await fetchMovieDetail())
            setLoading(false)
        }
        fetchAPI()
    }, [])
    

    return (
        <AppContext.Provider value={{
            loading,
            nowPlayingMovies,
            genres,
            moviesByGenre,
            trendingPersons,
            topRatedMovies,
            movieDetail,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)