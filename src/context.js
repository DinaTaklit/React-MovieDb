import React, {useContext, useState} from 'react'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // Loading
    const [loading, setLoading] = useState(true)

    // Movies by genre state
    const [moviesByGenre, setMoviesByGenre] = useState([]);

    // Modal state
    const [modalIsOpen, setModalIsOpen] = useState(false);


    return (
        <AppContext.Provider value={{
            loading,
            setLoading,
            moviesByGenre,
            setMoviesByGenre,
            modalIsOpen,
            setModalIsOpen
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)