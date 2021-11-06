import React, {useContext, useState} from 'react'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // Loading
    const [loading, setLoading] = useState(true)

    // State for movies by genre
    const [moviesByGenre, setMoviesByGenre] = useState([]);


    return (
        <AppContext.Provider value={{
            loading,
            setLoading,
            moviesByGenre,
            setMoviesByGenre,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)