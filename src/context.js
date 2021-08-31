import React, {useContext, useState, useEffect} from 'react'
import {fetchMovies} from '../src/services'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // Loading
    const [loading, setLoading] = useState(true)
    // Global state for now playing movies
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])


    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setNowPlayingMovies(await fetchMovies())
            setLoading(false)
        }
        fetchAPI()
    }, [])
    

    return (
        <AppContext.Provider value={{
            loading,
            nowPlayingMovies
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)