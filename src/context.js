import React, {useContext, useState} from 'react'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // Loading
    const [loading, setLoading] = useState(true)

    // State for movies by genre
    const [moviesByGenre, setMoviesByGenre] = useState([]);

    // // Global state for movie detail
    // const [movieDetail, setMovieDetail] = useState({});
    // // Global state for movie videos
    // const [movieVideos, setMovieVideos] = useState([]);
    // // Global state for movie casts
    // const [movieCasts, setMovieCasts] = useState([]);
    // // Global state for similar movies
    // const [similarMovies, setSimilarMovies] = useState([]);

    // // Global state to get params (id) from url for single movie
    // const [movieId, setMovieId] = useState(null);


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