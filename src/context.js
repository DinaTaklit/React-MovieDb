import React, {useContext, useState, useEffect} from 'react'
import {fetchMovies} from '../src/services'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // Global state for now playing movies
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])


    useEffect(() => {
        const fetchAPI = async() =>{
            setNowPlayingMovies(await fetchMovies())
        }
        fetchAPI()
    }, [])
    

    return (
        <AppContext.Provider value={{
            nowPlayingMovies
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)