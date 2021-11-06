import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import MovieCarouselHeader from '../components/MovieCarouselHeader/MovieCarouselHeader'
import GenreList from '../components/GenreList/GenreList'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import PersonsCarousel from '../components/PersonsCarousel/PersonsCarousel'
import Footer from '../components/Footer/Footer'

import {
    fetchMovies,
    fetchGenres,
    fetchMoviesByGenre,
    fetchTrendingPersons,
    fetchTopRatedMovies,
} from '../services'


function Home() {
    // Get the gloabal loading state
    const {loading, setLoading} = useGlobalContext()

    // State for now playing movies
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    // State for genres
    const [genres, setGenres] = useState([]);
    // State for movies by genre
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    // State for trending persons
    const [trendingPersons, setTrendingPersons] = useState([]);
    // State for top rated movies
    const [topRatedMovies, setTopRatedMovies] = useState([]);



    useEffect(() => {
        setLoading(true)
        const fetchAPI = async() =>{
            setNowPlayingMovies(await fetchMovies())
            setGenres(await fetchGenres())
            setMoviesByGenre(await fetchMoviesByGenre(28))
            setTrendingPersons(await fetchTrendingPersons())
            setTopRatedMovies(await fetchTopRatedMovies())
            setLoading(false)
        }
        fetchAPI()
    }, [])

        
    if(loading) {
        return (
            <div className="container">
                Loading...
            </div>
        )
    }
    return (
        <div className="container">
            {/* Header: Now playing movies */}
            <MovieCarouselHeader nowPlayingMovies={nowPlayingMovies}/>

            {/* Movies By genre */}
            <section className="mt-5"> 
                <GenreList genres={genres}/> 
                <MovieCarousel movies={moviesByGenre}/>
            </section>

            {/* Trending persons of the week */}
            <section  className="my-5">
                <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                    TRENDING PERSONS ON THIS WEEK
                </p>
                <PersonsCarousel persons={trendingPersons}/>
            </section>
            

            {/* Top Rated movies */}
            <section className="my-5"> 
                <p className="font-weight-bold" style={{ color: "#5a606b" }}>
                    TOP RATED MOVIES
                </p>
                <MovieCarousel movies={topRatedMovies}/>
            </section>

            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>

            {/* Footer */}
            <footer className="mt-5">
                <Footer/>
            </footer>
        </div>
    )
}

export default Home
