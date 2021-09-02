import React, {useContext, useState, useEffect} from 'react'
import {
    fetchMovies,
    fetchGenres,
    fetchMoviesByGenre
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

    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setNowPlayingMovies(await fetchMovies())
            setGenres(await fetchGenres())
            setMoviesByGenre(await fetchMoviesByGenre())
            setLoading(false)
        }
        fetchAPI()
    }, [])
    

    return (
        <AppContext.Provider value={{
            loading,
            nowPlayingMovies,
            genres,
            moviesByGenre
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)